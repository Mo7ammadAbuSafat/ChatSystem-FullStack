using PersistenceLayer.Entities;

namespace PersistenceLayer.Repositories.Interfaces
{
    public interface IPrivateMessageRepository
    {
        Task AddAsync(PrivateMessage message);
        void Delete(PrivateMessage message);
        Task<Tuple<List<PrivateMessage>, int>> GetPrivateMessagesForPrivateChat(
            int pageNumber,
            int pageSize,
            int firstUserId,
            int secoundUserId);
    }
}