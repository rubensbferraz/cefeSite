using System.Collections.Generic;
using System.Linq;
using cefeAPI.Models;

namespace cefeAPI.Repositorio {
    public class HollNoticiasRepository : IHollNoticiasRepository {
        private readonly PalestraDbContexto _context;
        public HollNoticiasRepository (PalestraDbContexto context) {
            _context = context;
        }
        public void Add (HollNoticias hollNoticias) {
            _context.hollNoticias.Add (hollNoticias);
            _context.SaveChanges ();
        }

        public HollNoticias Find (long id) {
            return _context.hollNoticias.FirstOrDefault (u => u.IdhollNoticias == id);
        }

        public IEnumerable<HollNoticias> GetAll () {
            return _context.hollNoticias.ToList ();
        }
        public void Remove (long id) {
            var entity = _context.hollNoticias.First (u => u.IdhollNoticias == id);
            _context.hollNoticias.Remove (entity);
            _context.SaveChanges ();
        }
        public void Update (HollNoticias hollNoticias) {
            _context.hollNoticias.Update (hollNoticias);
            _context.SaveChanges ();
        }
    }
}