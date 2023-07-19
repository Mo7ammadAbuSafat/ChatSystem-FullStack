using BusinessLayer.DTOs.MessageDtos;

namespace BusinessLayer.Services.PrivateMessageServices.Interfaces
{
    public interface IPrivateMessageService
    {
        Task<PrivateMessageResponseDto> StorePrivateMessage(int destinationUserId, string textMessage);
    }
}