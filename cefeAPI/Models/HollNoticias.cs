using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace cefeAPI.Models {
    public class HollNoticias {

        public int IdhollNoticias { get; set; }
        public string DataInicioPrimeira { get; set; }
        public string DataFinalPrimeira { get; set; }
        public string NoticiaPrimeira { get; set; }
        public string DataInicioSegunda { get; set; }
        public string DataFinalSegunda { get; set; }
        public string NoticiaSegunda { get; set; }
    }
}