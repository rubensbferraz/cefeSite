using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace cefeAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "hollNoticias",
                columns: table => new
                {
                    IdhollNoticias = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DataFinalPrimeira = table.Column<string>(nullable: true),
                    DataFinalSegunda = table.Column<string>(nullable: true),
                    DataInicioPrimeira = table.Column<string>(nullable: true),
                    DataInicioSegunda = table.Column<string>(nullable: true),
                    NoticiaPrimeira = table.Column<string>(nullable: true),
                    NoticiaSegunda = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_hollNoticias", x => x.IdhollNoticias);
                });

            migrationBuilder.CreateTable(
                name: "palestra",
                columns: table => new
                {
                    IdPalestra = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DataPalestra = table.Column<string>(nullable: false),
                    DiretorPalestra = table.Column<string>(nullable: true),
                    Palestrante = table.Column<string>(nullable: true),
                    Semana = table.Column<string>(nullable: true),
                    TemaPalestra = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_palestra", x => x.IdPalestra);
                });

            migrationBuilder.CreateTable(
                name: "usuarioadministrador",
                columns: table => new
                {
                    IdusuarioAdm = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Login = table.Column<string>(nullable: true),
                    Nome = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuarioadministrador", x => x.IdusuarioAdm);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "hollNoticias");

            migrationBuilder.DropTable(
                name: "palestra");

            migrationBuilder.DropTable(
                name: "usuarioadministrador");
        }
    }
}
