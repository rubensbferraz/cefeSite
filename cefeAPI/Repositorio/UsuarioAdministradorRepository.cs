using System.Collections.Generic;
using System.Linq;
using cefeAPI.Models;

namespace cefeAPI.Repositorio
{
    public class UsuarioAdministradorRepository : IUsuarioAdministradorRepository
    {
        private readonly PalestraDbContexto _context;
        public UsuarioAdministradorRepository(PalestraDbContexto context)
        {
            _context = context;
        }

        public void Add(UsuarioAdministrador usuarioadministrador)
        {
            _context.usuarioadministrador.Add(usuarioadministrador);
            _context.SaveChanges();
        }

        public UsuarioAdministrador Find(long id)
        {
            return _context.usuarioadministrador.FirstOrDefault(u => u.IdusuarioAdm == id);
        }

        public IEnumerable<UsuarioAdministrador> GetAll()
        {
            return _context.usuarioadministrador.ToList();
        }

        public void Remove(long id)
        {
            var entity = _context.usuarioadministrador.First(u => u.IdusuarioAdm == id);
            _context.usuarioadministrador.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(UsuarioAdministrador usuarioadministrador)
        {
            _context.usuarioadministrador.Update(usuarioadministrador);
            _context.SaveChanges();
        }
    }
}