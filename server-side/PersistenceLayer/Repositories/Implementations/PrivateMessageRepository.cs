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

    }
}
