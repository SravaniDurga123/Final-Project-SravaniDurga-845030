﻿using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Cart
    {
        public int Cartid { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Price { get; set; }
        public string Image { get; set; }
        public int? BuyerId { get; set; }
        public int? ItemId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
    }
}