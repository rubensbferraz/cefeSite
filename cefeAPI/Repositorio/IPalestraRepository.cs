using System.Collections.Generic;
using cefeAPI.Models;

namespace cefeAPI.Repositorio
{
    public interface IPalestraRepository
    {
        void Add(Palestra palestra);
        IEnumerable<Palestra> GetAll();

        Palestra Find(long id);

        void Remove(long id);

        void Update(Palestra palestra);
    }
}