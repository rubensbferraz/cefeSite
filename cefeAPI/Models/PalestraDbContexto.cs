using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Pomelo.EntityFrameworkCore.MySql;

namespace cefeAPI.Models
{
    public class PalestraDbContexto : DbContext
    {
        public DbSet<Palestra> palestra { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.UseMySql(@"Server=localhost;port=3306; database=cefeemmanuel1;uid=root;pwd=''");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Palestra>().ToTable("palestra").HasKey(e => e.IdPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.DataPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.Palestrante);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.TemaPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.DiretorPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.Semana);
        }
    }
}