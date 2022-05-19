using Microsoft.EntityFrameworkCore;
using StudentManagerAPI2.Entitys;

namespace StudentManagerAPI2.Context
{
    public class ConstructionContext : DbContext
    {
        public DbSet<Building> Buildings { get; set; }
        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<Material> Materials { get; set; }

        public ConstructionContext(DbContextOptions<ConstructionContext> options) : base(options)
        {
        }
    }
}
