using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int BuyerId { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string Emailid { get; set; }
        public string Mobile { get; set; }
        public DateTime? CreateDateTime { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
