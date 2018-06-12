using System.Collections.Generic;
using cefeAPI.Models;
using cefeAPI.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace cefeAPI.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioAdministradorController : Controller
    {
        private readonly IUsuarioAdministradorRepository _usuarioAdministradorRepository;

        public UsuarioAdministradorController(IUsuarioAdministradorRepository usuarioAdministradorRepo)
        {
            _usuarioAdministradorRepository = usuarioAdministradorRepo;
        }

        [HttpGet]
        public IEnumerable<UsuarioAdministrador> GetAll()
        {
            return _usuarioAdministradorRepository.GetAll();
        }
 
        [HttpGet("{id}", Name = "GetUsuarioAdministrador")]
        public IActionResult GetBuId(long id)
        {
            var usuarioadministrador = _usuarioAdministradorRepository.Find(id);
            if(usuarioadministrador == null)
                return NotFound();
            return new ObjectResult(usuarioadministrador);
        }

        [HttpPost]
        public IActionResult Create([FromBody] UsuarioAdministrador usuarioadministrador)
        {
            if (usuarioadministrador == null)
                return BadRequest();
            
            _usuarioAdministradorRepository.Add(usuarioadministrador);

            return CreatedAtRoute("GetUsuarioAdministrador", new {id = usuarioadministrador.IdusuarioAdm}, usuarioadministrador);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var usuarioadministrador = _usuarioAdministradorRepository.Find(id);

            if(usuarioadministrador == null)
                return NotFound();
            
            _usuarioAdministradorRepository.Remove(id); 
            return new NoContentResult();
        }

    }
}