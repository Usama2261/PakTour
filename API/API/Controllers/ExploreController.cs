using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ExploreController: ControllerBase
    {
        private readonly ExploreRepository _exploreRepository;
        public ExploreController(ExploreRepository exploreRepository)
        {
            _exploreRepository = exploreRepository;
        }

        [HttpGet("GetExploreCategories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var response = await _exploreRepository.GetAllCategories();

            return Ok(response);
        }
    }
}
