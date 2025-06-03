using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Manual_Do_Crescer.Models
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        [Display(Name = "Código")]
        [Column("Id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string nome { get; set; }

        [Display(Name = "Email")]
        [Column("Email")]
        public string email { get; set; }

        [Display(Name = "Senha")]
        [Column("Senha")]
        public string senha { get; set; }

        [Display(Name = "Telefone")]
        [Column("Telefone")]
        public string telefone { get; set; }

        [Display(Name = "Tipo de Usuário")]
        [Column("TipoUsuario")]
        public string tipoUsuario { get; set; }
    }
}
