using API.Data.Context;
using API.Data.Entities;

namespace API.Repository
{
    public class ExploreRepository
    {
        private readonly TourDbContext _context;
        public ExploreRepository(TourDbContext context)
        {
            _context = context;
        }

        public async Task<PlaceCategory> GetAllCategories()
        {
            var categories = _context.PlaceCategories.ToList();
            return categories;
        }
    }
}
