using AutoMapper;
using BusinessLayer.DTOs.UserDtos;
using BusinessLayer.ExceptionMessages;
using BusinessLayer.Exceptions;
using BusinessLayer.Services.UserService.Interfaces;
using PersistenceLayer.Repositories.Interfaces;

namespace BusinessLayer.Services.UserService.Implementations
{
    public class UserRetrievalService : IUserRetrievalService
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public UserRetrievalService(IUserRepository userRepository, IMapper mapper)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        public async Task<UsersWithPaginationResponseDto> GetUsers(
            int pageNumber,
            int pageSize,
            string searchText = null)
        {
            var result = await userRepository.GetUsers(pageNumber, pageSize, searchText);
            if (result == null)
            {
                throw new BadRequestException(PaginationExceptionMessages.EnteredPageNumberExceedPagesCount);
            }
            var response = new UsersWithPaginationResponseDto
            {
                users = mapper.Map<IEnumerable<UserResponseDto>>(result.Item1),
                numOfPages = result.Item2,
                currentPage = pageNumber
            };
            return response;
        }
    }
}
