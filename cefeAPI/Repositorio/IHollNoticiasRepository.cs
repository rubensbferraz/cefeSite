using System.Collections.Generic;
using cefeAPI.Models;

namespace cefeAPI.Repositorio {
    public interface IHollNoticiasRepository {
        void Add (HollNoticias hollNoticias);
        IEnumerable<HollNoticias> GetAll ();

        HollNoticias Find (long id);

        void Remove (long id);

        void Update (HollNoticias hollNoticias);
    }
}