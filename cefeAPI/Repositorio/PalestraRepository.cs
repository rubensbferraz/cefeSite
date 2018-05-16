using System.Collections.Generic;
using System.Linq;
using cefeAPI.Models;

namespace cefeAPI.Repositorio
{
    public class PalestraRepository : IPalestraRepository
    {
        private readonly PalestraDbContexto _context;
        public PalestraRepository(PalestraDbContexto context)
        {
            _context = context;
        }
        public void Add(Palestra palestra)
        {
            _context.palestra.Add(palestra);
            _context.SaveChanges();
        }

        public Palestra Find(long id)
        {
            return _context.palestra.FirstOrDefault(u => u.IdPalestra == id);
        }

        public IEnumerable<Palestra> GetAll()
        {
            return _context.palestra.ToList();
        }

        public void Remove(long id)
        {
            var entity = _context.palestra.First(u => u.IdPalestra == id);
            _context.palestra.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Palestra palestra)
        {
            _context.palestra.Update(palestra);
            _context.SaveChanges();
        }
    }
}