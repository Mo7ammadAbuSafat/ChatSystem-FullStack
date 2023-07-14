namespace BusinessLayer.Services.PrivateMessageServices.Interfaces
{
    public interface IPrivateMessageService
    {
        Task StorePrivateMessage(int destinationUserId, string textMessage);
    }
}