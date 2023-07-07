using Microsoft.AspNetCore.Http;

namespace BusinessLayer.Services.UserService.Interfaces
{
    public interface IUserProfileImageService
    {
        Task AddProfilePictureAsync(int userId, IFormFile image);
        Task ChangeProfilePictureAsync(int userId, IFormFile image);
        Task DeleteProfilePictureAsync(int userId);
    }
}