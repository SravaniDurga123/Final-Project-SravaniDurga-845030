using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {

      private readonly  EMartDBContext db;
        public SellerRepository(EMartDBContext db)
        {
            this.db = db;
        }
       

        public void EditProfile(Seller s)
        {
          
            db.Seller.Update(s);
            db.SaveChanges();
        }

        public Seller GetSeller(int id)
        {
            Seller seller= db.Seller.Find(id);
            return seller;
        }
        
    }
}
