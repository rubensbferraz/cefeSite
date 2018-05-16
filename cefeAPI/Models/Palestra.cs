using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic; 

namespace cefeAPI.Models
{
    public class Palestra
    {
        public int IdPalestra { get; set; }
        public string TemaPalestra { get; set; }
        public string Palestrante { get; set; }
        public string DiretorPalestra { get; set; }
        
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [Required(ErrorMessage = "Informe a data deste lançamento.")]
        public DateTime DataPalestra { get; set; }
        public string Semana { get; set; }
    }
}