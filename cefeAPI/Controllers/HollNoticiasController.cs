using System.Collections.Generic;
using cefeAPI.Models;
using cefeAPI.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace cefeAPI.Controllers {
    [Route ("api/[Controller]")]
    public class HollNoticiasController : Controller {
        private readonly IHollNoticiasRepository _hollNoticiasRepositorio;

        public HollNoticiasController (IHollNoticiasRepository hollNoticiasRepo) {
            _hollNoticiasRepositorio = hollNoticiasRepo;
        }

        [HttpGet]
        public IEnumerable<HollNoticias> GetAll () {
            return _hollNoticiasRepositorio.GetAll ();
        }

        [HttpGet ("{id}", Name = "GetHollNoticias")]
        public IActionResult GetBuId (long id) {
            var hollNoticias = _hollNoticiasRepositorio.Find (id);
            if (hollNoticias == null)
                return NotFound ();
            return new ObjectResult (hollNoticias);
        }

        [HttpPost]
        public IActionResult Create ([FromBody] HollNoticias hollNoticias) {
            if (hollNoticias == null)
                return BadRequest ();

            _hollNoticiasRepositorio.Add (hollNoticias);

            return CreatedAtRoute ("GetHollNoticiais", new { id = hollNoticias.IdhollNoticias }, hollNoticias);
        }

        [HttpPut ("{id}")]
        public IActionResult Update (long id, [FromBody] HollNoticias hollNoticias) {
            if (hollNoticias == null || hollNoticias.IdhollNoticias != id)
                return BadRequest ();

            var _hollNoticias = _hollNoticiasRepositorio.Find (id);

            if (hollNoticias == null)
                return NotFound ();

            _hollNoticias.DataInicioPrimeira = hollNoticias.DataInicioPrimeira;
            _hollNoticias.DataFinalPrimeira = hollNoticias.DataFinalPrimeira;
            _hollNoticias.NoticiaPrimeira = hollNoticias.NoticiaPrimeira;
            _hollNoticias.DataInicioSegunda = hollNoticias.DataInicioSegunda;
            _hollNoticias.DataFinalSegunda = hollNoticias.DataFinalSegunda;
            _hollNoticias.NoticiaSegunda = hollNoticias.NoticiaSegunda;

            _hollNoticiasRepositorio.Update (_hollNoticias);
            return new NoContentResult ();
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (long id) {
            var palestra = _hollNoticiasRepositorio.Find (id);

            if (palestra == null)
                return NotFound ();

            _hollNoticiasRepositorio.Remove (id);
            return new NoContentResult ();
        }
    }
}