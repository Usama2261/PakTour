using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ExploreController: ControllerBase
    {
        [HttpGet("GetExploreCategories")]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok();
        }
    }
}
