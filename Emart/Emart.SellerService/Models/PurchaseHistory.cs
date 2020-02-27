using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class PurchaseHistory
    {
        public int PurchaseId { get; set; }
        public string TranscationType { get; set; }
        public DateTime? TranscationTime { get; set; }
        public int NoOfItems { get; set; }
        public string Remarks { get; set; }
        public string TranscationStatus { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public int? ItemId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
