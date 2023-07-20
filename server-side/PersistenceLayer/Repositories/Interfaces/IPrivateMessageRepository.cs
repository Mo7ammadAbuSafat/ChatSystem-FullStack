using PersistenceLayer.Entities;
using PersistenceLayer.RetrievalModels;

namespace PersistenceLayer.Repositories.Interfaces
{
    public interface IPrivateMessageRepository
    {
        Task AddAsync(PrivateMessage message);
        void Delete(PrivateMessage message);
        Task<Tuple<List<PrivateMessage>, bool>> GetPrivateMessagesForPrivateChat(
            DateTime pageDate,
            int pageSize,
            int firstUserId,
            int secoundUserId);

        Task<IEnumerable<ChatWithLastMessage>> GetRecentChatsForUser(int userId);
    }
}