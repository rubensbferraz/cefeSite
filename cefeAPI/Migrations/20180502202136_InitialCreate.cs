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
                name: "palestra",
                columns: table => new
                {
                    IdPalestra = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DataPalestra = table.Column<DateTime>(nullable: false),
                    DiretorPalestra = table.Column<string>(nullable: true),
                    Palestrante = table.Column<string>(nullable: true),
                    Semana = table.Column<string>(nullable: true),
                    TemaPalestra = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_palestra", x => x.IdPalestra);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "palestra");
        }
    }
}
