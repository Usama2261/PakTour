﻿using API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Context
{
    public class TourDbContext : DbContext
    {
        public TourDbContext(DbContextOptions<TourDbContext> options)
        : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
