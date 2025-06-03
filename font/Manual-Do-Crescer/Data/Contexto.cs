using Manual_Do_Crescer.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Manual_Do_Crescer.Data
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }

        public DbSet<Usuario> Usuario { get; set; }
    }
}
