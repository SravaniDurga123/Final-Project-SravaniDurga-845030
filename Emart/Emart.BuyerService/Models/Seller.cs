using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int SellerId { get; set; }
        public string Sellername { get; set; }
        public string Pwd { get; set; }
        public string EmailId { get; set; }
        public string Mobile { get; set; }
        public string Companyname { get; set; }
        public string Gstin { get; set; }
        public string Aboutcompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
