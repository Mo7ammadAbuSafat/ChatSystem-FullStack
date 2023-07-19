using BusinessLayer.DTOs.UserDtos;

namespace BusinessLayer.Services.UserService.Interfaces
{
    public interface IUserRetrievalService
    {
        Task<UsersWithPaginationResponseDto> GetUsers(int pageNumber, int pageSize, string searchText = null);
    }
}