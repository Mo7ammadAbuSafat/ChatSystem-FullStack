using BusinessLayer.ExceptionMessages;
using BusinessLayer.Exceptions;
using BusinessLayer.Services.FileServices.Interfaces;
using BusinessLayer.Services.UserService.Interfaces;
using Microsoft.AspNetCore.Http;
using PersistenceLayer.Entities;
using PersistenceLayer.Repositories.Interfaces;

namespace BusinessLayer.Services.UserService.Implementations
{
    public class UserProfileImageService : IUserProfileImageService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IFileService fileService;
        private readonly ICloudinaryService cloudinaryService;
        private readonly IAuthenticatedUserService authenticatedUserService;
        private readonly IUserRepository userRepository;

        public UserProfileImageService(
            IUnitOfWork unitOfWork,
            IFileService fileService,
            ICloudinaryService cloudinaryService,
            IAuthenticatedUserService authenticatedUserService,
            IUserRepository userRepository)
        {
            this.unitOfWork = unitOfWork;
            this.cloudinaryService = cloudinaryService;
            this.fileService = fileService;
            this.authenticatedUserService = authenticatedUserService;
            this.userRepository = userRepository;
        }

        public async Task ChangeProfilePictureAsync(int userId, IFormFile image)
        {
            var authenticatedUserId = authenticatedUserService.GetAuthenticatedUserIdAsync();
            if (authenticatedUserId != userId)
            {
                throw new UnauthorizedException();
            }
            var user = await userRepository.GetUserById(userId);
            if (user == null)
            {
                throw new NotFoundException(UserExceptionMessages.NotFoundUserById);
            }
            var imageLocalPath = await fileService.StoreImageToLocalFolder(image);
            if (user.Image == null)
            {
                throw new BadRequestException(UserExceptionMessages.DoNotHaveProfilePicture);
            }
            await cloudinaryService.DeleteImageFromCloudinary(user.Image.CloudinaryIdentifier);
            var upludeResults = await cloudinaryService.UploadImageToCloudinary(imageLocalPath);
            fileService.DeleteFile(imageLocalPath);

            user.Image = new Image()
            {
                ImagePath = upludeResults.Item1,
                CloudinaryIdentifier = upludeResults.Item2,
            };
            await unitOfWork.SaveChangesAsync();
        }

        public async Task AddProfilePictureAsync(int userId, IFormFile image)
        {
            var authenticatedUserId = authenticatedUserService.GetAuthenticatedUserIdAsync();
            if (authenticatedUserId != userId)
            {
                throw new UnauthorizedException();
            }
            var user = await userRepository.GetUserById(userId);
            if (user == null)
            {
                throw new NotFoundException(UserExceptionMessages.NotFoundUserById);
            }
            if (user.Image != null)
            {
                throw new BadRequestException(UserExceptionMessages.AlreadyHaveProfilePicture);
            }
            var imageLocalPath = await fileService.StoreImageToLocalFolder(image);
            var upludeResults = await cloudinaryService.UploadImageToCloudinary(imageLocalPath);
            fileService.DeleteFile(imageLocalPath);
            user.Image = new Image()
            {
                ImagePath = upludeResults.Item1,
                CloudinaryIdentifier = upludeResults.Item2,
            };
            await unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteProfilePictureAsync(int userId)
        {
            var authenticatedUserId = authenticatedUserService.GetAuthenticatedUserIdAsync();
            if (authenticatedUserId != userId)
            {
                throw new UnauthorizedException();
            }
            var user = await userRepository.GetUserById(userId);
            if (user == null)
            {
                throw new NotFoundException(UserExceptionMessages.NotFoundUserById);
            }
            if (user.Image == null)
            {
                throw new BadRequestException(UserExceptionMessages.DoNotHaveProfilePicture);
            }
            await cloudinaryService.DeleteImageFromCloudinary(user.Image.CloudinaryIdentifier);
            user.Image = null;
            await unitOfWork.SaveChangesAsync();
        }
    }
}
