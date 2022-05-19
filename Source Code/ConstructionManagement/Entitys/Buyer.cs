using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentManagerAPI2.Entitys
{
    public class Buyer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Worth { get;set; }
        public string Sex { get; set; }
        
        public virtual ICollection<Building> Buildings { get; set; }    

    }
}
