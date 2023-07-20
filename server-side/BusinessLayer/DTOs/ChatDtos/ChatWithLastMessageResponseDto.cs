using BusinessLayer.DTOs.MessageDtos;
using BusinessLayer.DTOs.UserDtos;

namespace BusinessLayer.DTOs.ChatDtos
{
    public class ChatWithLastMessageResponseDto
    {
        public UserResponseDto User { get; set; }
        public PrivateMessageResponseDto LastMessage { get; set; }
    }
}
