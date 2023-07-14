using Microsoft.EntityFrameworkCore;
using PersistenceLayer.DbContexts;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;

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

        public async Task<Tuple<List<PrivateMessage>, int>> GetPrivateMessagesForPrivateChat(
            int pageNumber,
            int pageSize,
            int firstUserId,
            int secoundUserId)
        {
            var messages = context.PrivateMessages
                .Where(m => (m.SenderId == firstUserId && m.ReceiverId == secoundUserId) ||
                           (m.SenderId == secoundUserId && m.ReceiverId == firstUserId))
                .AsQueryable();
            var usersCount = await messages.CountAsync();
            var numOfPages = Math.Ceiling(usersCount / (pageSize * 1f));
            if (pageNumber > numOfPages && numOfPages != 0)
            {
                return null;
            }
            var messagesList = await messages
                .OrderByDescending(c => c.CreationDate)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .OrderBy(c => c.CreationDate)
                .ToListAsync();
            var result = Tuple.Create(messagesList, (int)numOfPages);
            return result;
        }

    }
}
