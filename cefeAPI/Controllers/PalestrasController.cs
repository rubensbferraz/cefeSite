using System.Collections.Generic;
using cefeAPI.Models;
using cefeAPI.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace cefeAPI.Controllers
{
    [Route("api/[Controller]")]
    public class PalestrasController : Controller
    {
        private readonly IPalestraRepository _palestraRepositorio;

        public PalestrasController(IPalestraRepository palestraRepo)
        {
            _palestraRepositorio = palestraRepo;
        }
 
        [HttpGet]
        public IEnumerable<Palestra> GetAll()
        {
            return _palestraRepositorio.GetAll();
        }

        [HttpGet("{id}", Name = "GetPalestra")]
        public IActionResult GetBuId(long id)
        {
            var palestra = _palestraRepositorio.Find(id);
            if (palestra == null)
                return NotFound();
            return new ObjectResult(palestra);
        }
        [HttpPost]
        public IActionResult Create([FromBody] Palestra palestra)
        {
            if (palestra == null)
                return BadRequest();

            _palestraRepositorio.Add(palestra);

            return CreatedAtRoute("GetPalestra", new { id = palestra.IdPalestra }, palestra);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Palestra palestra)
        {
            if (palestra == null || palestra.IdPalestra != id)
                return BadRequest();

            var _palestra = _palestraRepositorio.Find(id);

            if (palestra == null)
                return NotFound();

            _palestra.DataPalestra = palestra.DataPalestra;
            _palestra.DiretorPalestra = palestra.DiretorPalestra;
            _palestra.Palestrante = palestra.Palestrante;
            _palestra.TemaPalestra = palestra.TemaPalestra;
            _palestra.Semana = palestra.Semana;

            _palestraRepositorio.Update(_palestra);
            return new NoContentResult();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var palestra = _palestraRepositorio.Find(id);

            if (palestra == null)
                return NotFound();

            _palestraRepositorio.Remove(id);
            return new NoContentResult();
        }
    }
}