using BusinessLayer.DTOs.MessageDtos;

namespace BusinessLayer.Services.PrivateMessageServices.Interfaces
{
    public interface IPrivateMessageService
    {
        Task<PrivateMessageResponseDto> StorePrivateMessage(int destinationUserId, string textMessage);
        Task<PrivateMessagesWithPaginationResponseDto> GetPrivateMessages(
            DateTime? pageDate,
            int pageSize,
            int firstUserId,
            int secoundUserId);
    }
}