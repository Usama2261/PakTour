using API.Data.Context;
using API.Data.Entities;

namespace API.SeedData
{
    public class Seed
    {
        private readonly TourDbContext _context;
        public Seed(TourDbContext context)
        {
            _context = context;
        }

        public void SeedData()
        {
            if (_context.PlaceCategories.Any())
            {
                return;
            }

            var categories = new List<PlaceCategory>
            {
                new PlaceCategory { Name = "Waterfalls", ImagePath = ""},
                new PlaceCategory { Name = "Valleys", ImagePath = ""},
                new PlaceCategory { Name = "Lakes", ImagePath = ""},
                new PlaceCategory { Name = "Passes", ImagePath = ""},
                new PlaceCategory { Name = "Peaks", ImagePath = ""},
                new PlaceCategory { Name = "Forts", ImagePath = ""},
                new PlaceCategory { Name = "Treks", ImagePath = ""},
                new PlaceCategory { Name = "Dams", ImagePath = ""},
                new PlaceCategory { Name = "Historical", ImagePath = ""},
                new PlaceCategory { Name = "Ponds", ImagePath = ""},
                new PlaceCategory { Name = "Hill Stations", ImagePath = ""},
                new PlaceCategory { Name = "Glaciers", ImagePath = ""},
                new PlaceCategory { Name = "Bridges", ImagePath = ""},
                new PlaceCategory { Name = "Religious", ImagePath = ""},
                new PlaceCategory { Name = "Beaches", ImagePath = ""},
                new PlaceCategory { Name = "Deserts", ImagePath = ""}
            };

            _context.PlaceCategories.AddRange(categories);
            _context.SaveChanges();
        }
    }
}
