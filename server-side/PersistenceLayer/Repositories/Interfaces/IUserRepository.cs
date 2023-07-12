using PersistenceLayer.Entities;

namespace PersistenceLayer.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task AddAsync(User user);
        bool CheckIfUsernameExists(string username);
        void Delete(User user);
        Task<User?> GetUserById(int userId);
        Task<Tuple<List<User>, int>> GetUsers(
            int pageNumber,
            int pageSize,
            string searchText = null);
        Task<User?> GetUserByUsername(string username);
    }
}