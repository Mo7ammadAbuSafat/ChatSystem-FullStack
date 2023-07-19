using BusinessLayer.Services.PrivateMessageServices.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PresentationLayer.Controllers
{
    [Route("api/private-messages")]
    [ApiController]
    public class PrivateMessagesController : ControllerBase
    {
        private readonly IPrivateMessageService privateMessageService;

        public PrivateMessagesController(IPrivateMessageService privateMessageService)
        {
            this.privateMessageService = privateMessageService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetPrivateMessages(
            DateTime? pageDate,
            int pageSize,
            int firstUserId,
            int secoundUserId)
        {
            var result = await privateMessageService.GetPrivateMessages(pageDate, pageSize, firstUserId, secoundUserId);
            return Ok(result);
        }
    }
}
