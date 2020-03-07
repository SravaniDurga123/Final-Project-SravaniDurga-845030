using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public int Price { get; set; }
        public string ItemDescription { get; set; }
        public int? Stock { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? SellerId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
