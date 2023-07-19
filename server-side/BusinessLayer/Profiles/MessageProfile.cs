using AutoMapper;
using BusinessLayer.DTOs.MessageDtos;
using PersistenceLayer.Entities;

namespace BusinessLayer.Profiles
{
    public class MessageProfile : Profile
    {
        public MessageProfile() { CreateMap<PrivateMessage, PrivateMessageResponseDto>(); }
    }
}
