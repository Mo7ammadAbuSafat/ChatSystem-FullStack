using AutoMapper;
using BusinessLayer.DTOs.UserDtos;
using BusinessLayer.ExceptionMessages;
using BusinessLayer.Exceptions;
using BusinessLayer.Services.UserService.Interfaces;
using BusinessLayer.Utils;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;

namespace BusinessLayer.Services.UserService.Implementations
{
    public class UserAccountService : IUserAccountService
    {
        private readonly IUserRepository userRepository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        private readonly IAuthenticatedUserService authenticatedUserService;

        public UserAccountService(
            IUserRepository userRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IAuthenticatedUserService authenticatedUserService)
        {
            this.mapper = mapper;
            this.userRepository = userRepository;
            this.unitOfWork = unitOfWork;
            this.authenticatedUserService = authenticatedUserService;
        }


        public async Task<UserResponseDto> RegisterUserAsync(UserRequestDto userRequestDto)
        {
            if (userRepository.CheckIfUsernameExists(userRequestDto.Username))
            {
                throw new NotFoundException(UserExceptionMessages.UsernameAlreadyExsist);
            }
            PasswordHashing.HashPassword(userRequestDto.Password, out byte[] passwordHash, out byte[] passwordSalt);
            var user = new User()
            {
                Username = userRequestDto.Username,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
            };
            await userRepository.AddAsync(user);
            await unitOfWork.SaveChangesAsync();
            return mapper.Map<UserResponseDto>(user);
        }

        public async Task<string> LoginUserAsync(UserRequestDto userRequestDto)
        {
            var user = await userRepository.GetUserByUsername(userRequestDto.Username);
            if (user == null)
            {
                throw new NotFoundException(UserExceptionMessages.NotFoundUserByUsername);
            }
            if (!PasswordHashing.VerifyPassword(userRequestDto.Password, user.PasswordHash, user.PasswordSalt))
            {
                throw new BadRequestException(UserExceptionMessages.IncorrectPassword);
            }
            var token = TokenGenerator.Generate(user);
            return token;
        }

        public async Task<UserResponseDto> GetUserByJwtTokenAsync()
        {
            var userId = authenticatedUserService.GetAuthenticatedUserId();
            var user = await userRepository.GetUserById(userId);
            return mapper.Map<UserResponseDto>(user);
        }
    }
}
