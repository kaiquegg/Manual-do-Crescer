using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Manual_Do_Crescer.Data;
using Manual_Do_Crescer.Models;
using Manual_Do_Crescer.ViewModel;

namespace Manual_Do_Crescer.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly Contexto _context;

        public UsuariosController(Contexto context)
        {
            _context = context;
        }

        // GET: Usuarios
        public async Task<IActionResult> Index()
        {
            return View(await _context.Usuario.ToListAsync());
        }

        // GET: Usuarios/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuario
                .FirstOrDefaultAsync(m => m.id == id);
            if (usuario == null)
            {
                return NotFound();
            }

            return View(usuario);
        }

        // GET: Usuarios/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        // POST: Usuarios/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        /* Método para Registrar */
        public async Task<IActionResult> Create([Bind("id,nome,email,senha,telefone,tipoUsuario")] Usuario usuario)
        {
            Console.WriteLine("tipoUsuario: ", usuario.tipoUsuario);

            if (ModelState.IsValid)
            {
                switch (usuario.tipoUsuario)
                {
                    case "pais":
                        _context.Add(new Pais { nome = usuario.nome, email = usuario.email, senha = usuario.senha, telefone = usuario.telefone, tipoUsuario = usuario.tipoUsuario });
                        break;
                    case "profissional":
                        _context.Add(new Profissional { nome = usuario.nome, email = usuario.email, senha = usuario.senha, telefone = usuario.telefone, tipoUsuario = usuario.tipoUsuario });
                        break;
                    default:
                        return BadRequest("Tipo de usuário inválido.");
                }

                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(usuario);
        }
        /*Método para Login */
        public async Task<IActionResult> Login(LoginViewModel login)
        {
            if (ModelState.IsValid)
            {
                var usuario = await _context.Usuario.FirstOrDefaultAsync(u => u.email == login.email && u.senha == login.senha);

                if (usuario != null)
                {
                    // Autenticar usuário (por exemplo, definindo cookies de autenticação)
                    // Redirecionar para a página principal ou para a página de perfil do usuário
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Credenciais inválidas. Por favor, tente novamente.");
                    return View(login);
                }
            }

            return View(login);
        }


        // GET: Usuarios/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return View(usuario);
        }

        // POST: Usuarios/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,nome,email,senha,telefone")] Usuario usuario)
        {
            if (id != usuario.id)
            {
                return NotFound();
            }



            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(usuario);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UsuarioExists(usuario.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(usuario);
        }

        // GET: Usuarios/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuario
                .FirstOrDefaultAsync(m => m.id == id);
            if (usuario == null)
            {
                return NotFound();
            }

            return View(usuario);
        }

        // POST: Usuarios/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario != null)
            {
                _context.Usuario.Remove(usuario);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuario.Any(e => e.id == id);
        }
    }
}
