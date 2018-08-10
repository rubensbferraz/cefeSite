using System.Collections.Generic;
using cefeAPI.Models;

namespace cefeAPI.Repositorio
{
    public interface IUsuarioAdministradorRepository
    {
        void Add(UsuarioAdministrador usuarioAdministrador);
        IEnumerable<UsuarioAdministrador> GetAll();

        UsuarioAdministrador Find(long id);

        void Remove(long id);

        void Update(UsuarioAdministrador usuarioAdministrador);
    }
}