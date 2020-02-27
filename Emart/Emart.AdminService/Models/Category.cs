using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDetails { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
