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

        public UsersController(IUserRetrievalService userRetrievalService)
        {
            this.userRetrievalService = userRetrievalService;
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
    }
}
