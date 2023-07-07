using PersistenceLayer.Entities;

namespace PersistenceLayer.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task AddAsync(User user);
        bool CheckIfUsernameExists(string username);
        void Delete(User user);
        Task<User?> GetUserById(int userId);
        Task<IEnumerable<User>> GetUsers();
        Task<User?> GetUserByUsername(string username);
    }
}