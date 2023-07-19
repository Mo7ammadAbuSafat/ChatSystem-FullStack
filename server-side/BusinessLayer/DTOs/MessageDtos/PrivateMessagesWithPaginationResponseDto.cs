namespace BusinessLayer.DTOs.MessageDtos
{
    public class PrivateMessagesWithPaginationResponseDto
    {
        public IEnumerable<PrivateMessageResponseDto> Messages { get; set; }
        public bool IsThereMore { get; set; }
    }
}
