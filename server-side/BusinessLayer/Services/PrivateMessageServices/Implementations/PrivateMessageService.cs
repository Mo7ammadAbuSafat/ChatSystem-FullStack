using AutoMapper;
using BusinessLayer.DTOs.MessageDtos;
using BusinessLayer.ExceptionMessages;
using BusinessLayer.Exceptions;
using BusinessLayer.Services.PrivateMessageServices.Interfaces;
using BusinessLayer.Services.UserService.Interfaces;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;

namespace BusinessLayer.Services.PrivateMessageServices.Implementations
{
    public class PrivateMessageService : IPrivateMessageService
    {
        private readonly IPrivateMessageRepository privateMessageRepository;
        private readonly IUserRepository userRepository;
        private readonly IAuthenticatedUserService authenticatedUserService;
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public PrivateMessageService(
            IPrivateMessageRepository privateMessageRepository,
            IUnitOfWork unitOfWork,
            IAuthenticatedUserService authenticatedUserService,
            IMapper mapper,
            IUserRepository userRepository)
        {
            this.privateMessageRepository = privateMessageRepository;
            this.unitOfWork = unitOfWork;
            this.authenticatedUserService = authenticatedUserService;
            this.mapper = mapper;
            this.userRepository = userRepository;
        }

        public async Task<PrivateMessageResponseDto> StorePrivateMessage(int destinationUserId, string textMessage)
        {
            var sourceUserId = authenticatedUserService.GetAuthenticatedUserId();
            var destinationUser = await userRepository.GetUserById(destinationUserId);
            if (destinationUser == null)
            {
                throw new NotFoundException(UserExceptionMessages.NotFoundUserById);
            }
            var message = new PrivateMessage()
            {
                ReceiverId = destinationUserId,
                SenderId = sourceUserId,
                CreationDate = DateTime.Now,
                TextBody = textMessage
            };
            await privateMessageRepository.AddAsync(message);
            await unitOfWork.SaveChangesAsync();
            return mapper.Map<PrivateMessageResponseDto>(message);
        }
    }
}
