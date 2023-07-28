using BusinessLayer.DTOs.UserDtos;
using BusinessLayer.Services.UserService.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PresentationLayer.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRetrievalService userRetrievalService;
        private readonly IUserAccountService userAccountService;


        public UsersController(IUserRetrievalService userRetrievalService, IUserAccountService userAccountService)
        {
            this.userRetrievalService = userRetrievalService;
            this.userAccountService = userAccountService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUsers(
            int pageNumber = 1,
            int pageSize = 10,
            string searchText = null)
        {
            var users = await userRetrievalService.GetUsers(pageNumber, pageSize, searchText);
            return Ok(users);
        }

        [Authorize]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var user = await userRetrievalService.GetUserById(userId);
            return Ok(user);
        }

        [Authorize]
        [HttpPut("{userId}/change-password")]
        public async Task<IActionResult> ChangePassword([FromRoute] int userId, [FromBody] ChangePasswordRequestDto changePasswordDto)
        {
            await userAccountService.ChangePasswordAsync(userId, changePasswordDto);
            return Ok("success");
        }
    }
}
