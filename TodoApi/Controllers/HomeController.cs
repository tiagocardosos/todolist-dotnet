using Microsoft.AspNetCore.Mvc;

namespace TodoApi.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("")]      
        public IActionResult Index()
        {
            return Ok(new { ping = "pong" });
        }
    }
}
