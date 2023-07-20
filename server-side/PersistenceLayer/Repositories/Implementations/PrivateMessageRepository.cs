using Microsoft.EntityFrameworkCore;
using PersistenceLayer.DbContexts;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;
using PersistenceLayer.RetrievalModels;

namespace PersistenceLayer.Repositories.Implementations
{
    public class PrivateMessageRepository : IPrivateMessageRepository
    {
        private readonly ChatContext context;
        public PrivateMessageRepository(ChatContext context)
        {
            this.context = context;
        }

        public async Task AddAsync(PrivateMessage message)
        {
            await context.PrivateMessages.AddAsync(message);
        }

        public void Delete(PrivateMessage message)
        {
            context.PrivateMessages.Remove(message);
        }

        public async Task<Tuple<List<PrivateMessage>, bool>> GetPrivateMessagesForPrivateChat(
            DateTime pageDate,
            int pageSize,
            int firstUserId,
            int secoundUserId)
        {
            var messages = context.PrivateMessages
                .Where(m => (m.SenderId == firstUserId && m.ReceiverId == secoundUserId) ||
                           (m.SenderId == secoundUserId && m.ReceiverId == firstUserId))
                .Where(m => m.CreationDate < pageDate)
                .AsQueryable();
            var messagesCount = await messages.CountAsync();
            var isThereMore = messagesCount > pageSize;
            var messagesList = await messages
                .OrderByDescending(c => c.CreationDate)
                .Take(pageSize)
                .OrderBy(c => c.CreationDate)
                .ToListAsync();
            var result = Tuple.Create(messagesList, isThereMore);
            return result;
        }

        public async Task<IEnumerable<ChatWithLastMessage>> GetRecentChatsForUser(int userId)
        {
            var recentChatsWithLastMessages = await context.PrivateMessages
                .Where(m => m.SenderId == userId || m.ReceiverId == userId)
                .GroupBy(m => m.SenderId == userId ? m.ReceiverId : m.SenderId)
                .OrderByDescending(g => g.Max(m => m.CreationDate))
                .Take(10)
                .Select(g => new ChatWithLastMessage
                {
                    User = context.Users.Where(u => u.Id == g.Key).Include(u => u.Image).First(),
                    LastMessage = g.OrderByDescending(msg => msg.CreationDate).First()
                })
                .ToListAsync();
            return recentChatsWithLastMessages;
        }

    }
}
