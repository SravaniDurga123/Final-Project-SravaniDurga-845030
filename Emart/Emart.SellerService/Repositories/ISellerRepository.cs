﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
   public interface ISellerRepository
    {
       
        void EditProfile(Seller s);
        Seller GetSeller(int id);
       
    }
}
