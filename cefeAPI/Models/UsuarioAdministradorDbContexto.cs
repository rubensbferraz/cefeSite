using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Pomelo.EntityFrameworkCore.MySql;

namespace cefeAPI.Models
{
    public class UsuarioAdministradorDbContexto : DbContext
    {
        public DbSet<UsuarioAdministrador> usuarioadministrador { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.UseMySql(@"Server=localhost;port=3306; database=cefeemmanuel1;uid=root;pwd=''");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").HasKey(e => e.IdusuarioAdm);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Nome);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Login);
            modelBuilder.Entity<UsuarioAdministrador>().ToTable("usuarioadministrador").Property(e => e.Password);
            
        }
    }
}

