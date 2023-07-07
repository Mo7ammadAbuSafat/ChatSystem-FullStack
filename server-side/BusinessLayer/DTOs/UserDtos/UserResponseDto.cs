using BusinessLayer.DTOs.ImageDtos;

namespace BusinessLayer.DTOs.UserDtos
{
    public class UserResponseDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public ImageResponseDto Image { get; set; }
    }
}
