using BusinessLayer.DTOs.UserDtos;

namespace BusinessLayer.Services.UserService.Interfaces
{
    public interface IUserAccountService
    {
        Task<string> LoginUserAsync(UserRequestDto userRequestDto);
        Task<UserResponseDto> RegisterUserAsync(UserRequestDto userRequestDto);
        Task<UserResponseDto> GetUserByJwtTokenAsync();
        Task ChangePasswordAsync(int userId, ChangePasswordRequestDto changePasswordDto);
    }
}