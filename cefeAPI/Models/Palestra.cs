using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic; 

namespace cefeAPI.Models
{
    public class Palestra
    {
        public Palestra(int idPalestra, string temaPalestra, string palestrante, string diretorPalestra, DateTime dataPalestra, string semana) 
        {
            this.IdPalestra = idPalestra;
            this.TemaPalestra = temaPalestra;
            this.Palestrante = palestrante;
            this.DiretorPalestra = diretorPalestra;
            this.DataPalestra = dataPalestra;
            this.Semana = semana;
               
        }
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