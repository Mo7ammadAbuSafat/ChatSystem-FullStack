using BusinessLayer.Services.PrivateMessageServices.Interfaces;
using BusinessLayer.Services.UserService.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace BusinessLayer.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        private readonly IAuthenticatedUserService authenticatedUserService;
        private readonly IPrivateMessageService privateMessageService;
        private static readonly Dictionary<int, string> activeUsers = new();

        public ChatHub(
            IAuthenticatedUserService authenticatedUserService,
            IPrivateMessageService privateMessageService)
        {
            this.authenticatedUserService = authenticatedUserService;
            this.privateMessageService = privateMessageService;
        }

        public async Task SendMessageToAll(int userId, string message)
        {
            await Clients.Others.SendAsync("ReceiveMessage", userId, message);
        }

        public async Task SendMessageToUser(int userId, string message)
        {
            var Storedmessage = await privateMessageService.StorePrivateMessage(userId, message);
            if (activeUsers.ContainsKey(userId))
            {
                await Clients.Client(activeUsers[userId]).SendAsync("ReceiveMessage", Storedmessage);
            }
        }

        public async Task AddUser(int userId, string connectionId)
        {
            activeUsers.Add(userId, connectionId);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }

        public override async Task OnConnectedAsync()
        {
            var connectionId = GetConnectionId();
            var userId = authenticatedUserService.GetAuthenticatedUserId();
            if (!activeUsers.ContainsKey(userId))
            {
                activeUsers.Add(userId, connectionId);
            }

            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            var connectionId = GetConnectionId();

            foreach (var user in activeUsers)
            {
                if (user.Value == connectionId)
                {
                    activeUsers.Remove(user.Key);
                    break;
                }
            }
            await base.OnDisconnectedAsync(exception);
        }
    }
}
