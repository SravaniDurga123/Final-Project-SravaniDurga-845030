﻿using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int? Price { get; set; }
        public string Image { get; set; }
        public int? ItemId { get; set; }
        public int? BuyerId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
    }
}
