using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubCategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public string SubCategoryDetails { get; set; }
        public int? Gst { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
