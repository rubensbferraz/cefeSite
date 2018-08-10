using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic; 

namespace cefeAPI.Models
{
    public class UsuarioAdministrador
    {

        public int IdusuarioAdm { get; set; } 
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}