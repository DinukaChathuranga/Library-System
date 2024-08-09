using System;
using System.ComponentModel.DataAnnotations;

namespace Library_System.Models
{
    public class LibraryBook
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime AddedDate { get; set; }

        public int Edition { get; set; }

        [StringLength(255)]
        public string Publisher { get; set; }

        public decimal Price { get; set; }

        [Required]
        public BookType Type { get; set; }    // Navigation Property

        public int? UserId { get; set; }
    }
}

