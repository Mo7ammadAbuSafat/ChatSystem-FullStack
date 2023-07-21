using AutoMapper;
using BusinessLayer.DTOs.ChatDtos;
using PersistenceLayer.RetrievalModels;

namespace BusinessLayer.Profiles
{
    public class ChatProfile : Profile
    {
        public ChatProfile()
        {
            CreateMap<ChatWithLastMessage, ChatWithLastMessageResponseDto>();
        }
    }
}
