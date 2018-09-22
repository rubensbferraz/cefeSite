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
        public DbSet<UsuarioAdministrador> usuarioadministrador { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.UseMySql(@"Server=localhost;port=3306; database=cefeemmanuel1;uid=root;pwd=''");
            //optionsBuilder.UseMySql(@"Server=179.188.16.98;port=3306; database=cefeemmanuel1;uid=cefeemmanuel;pwd='cefe123'");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Palestra>().ToTable("palestra").HasKey(e => e.IdPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.DataPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.Palestrante);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.TemaPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.DiretorPalestra);
            modelBuilder.Entity<Palestra>().ToTable("palestra").Property(e => e.Semana);

            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").HasKey(e => e.IdusuarioAdm);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Nome);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Login);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Password);
        }
    }
}