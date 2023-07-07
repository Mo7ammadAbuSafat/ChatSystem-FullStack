using Microsoft.AspNetCore.Http;

namespace BusinessLayer.Services.FileServices.Interfaces
{
    public interface IFileService
    {
        Task<string> StoreImageToLocalFolder(IFormFile file);
        void DeleteFile(string filePath);
    }
}