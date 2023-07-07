namespace BusinessLayer.Services.FileServices.Interfaces
{
    public interface ICloudinaryService
    {
        Task DeleteImageFromCloudinary(string CloudinaryIdentifier);
        Task<Tuple<string, string>> UploadImageToCloudinary(string imagePath);
    }
}