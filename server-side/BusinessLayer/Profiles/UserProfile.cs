using AutoMapper;
using BusinessLayer.DTOs.UserDtos;
using PersistenceLayer.Entities;

namespace BusinessLayer.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserResponseDto>();
        }
    }
}
