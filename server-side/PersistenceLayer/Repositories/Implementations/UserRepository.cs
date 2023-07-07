using Microsoft.EntityFrameworkCore;
using PersistenceLayer.DbContexts;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;

namespace PersistenceLayer.Repositories.Implementations
{
    public class UserRepository : IUserRepository
    {
        private readonly ChatContext context;
        public UserRepository(ChatContext context)
        {
            this.context = context;
        }

        public async Task AddAsync(User user)
        {
            await context.Users.AddAsync(user);
        }

        public void Delete(User user)
        {
            context.Users.Remove(user);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await context.Users
               .Include(c => c.Image)
               .OrderBy(c => c.Username)
               .ToListAsync();
        }

        public async Task<User?> GetUserById(int userId)
        {
            return await context.Users
                .Where(c => c.Id == userId)
                .Include(c => c.Image)
                .FirstOrDefaultAsync();
        }

        public async Task<User?> GetUserByUsername(string username)
        {
            return await context.Users
                .Where(c => c.Username == username)
                .Include(c => c.Image)
                .FirstOrDefaultAsync();
        }

        public bool CheckIfUsernameExists(string username)
        {
            return context.Users.Any(u => u.Username == username);
        }

    }
}
