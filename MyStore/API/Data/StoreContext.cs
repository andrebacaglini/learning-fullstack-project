using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // seeding dummy data
            for (int i = 1; i <= 20; i++)
            {
                modelBuilder.Entity<Product>().HasData(new Product
                {
                    Id = i,
                    Name = "Product " + i,
                    Brand = "Some brand",
                    Description = "This is a full description for product " + i,
                    PictureUrl = "",
                    Price = i * 100,
                    QuantityInStock = i,
                    Type = "A type"
                });
            }
        }
    }
}