using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.VisualBasic;

namespace StudentManagerAPI2.Entitys
{
    public class Building
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get;set; }
        public string Description { get; set; }
        public string Year { get; set; }
        public Material Material { get; set; }
        public virtual ICollection<Buyer> Buyers { get; set; }


    }
}
