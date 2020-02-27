using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;
namespace Emart.AccountService.Repositories
{
    public class AccountRepository :IAccountRepository
    {
       private readonly EMartDBContext db;
        public AccountRepository(EMartDBContext db)
        {
            this.db = db;
        }
        public bool BuyerLogin(string uname, string pwd)
        {
           Buyer b = db.Buyer.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
            if (b!=null)
            {
                
                return true;
            }
            return false;
        }

        public void BuyerRegister(Buyer buyer)
        {
            db.Buyer.Add(buyer);
            db.SaveChanges();
        }

        

        public bool SellerLogin(string uname, string pwd)
        {
            Seller s = db.Seller.SingleOrDefault(e => e.Sellername == uname && e.Pwd == pwd);
            if (s!=null)
            {
               
                return true;
            }
           return false;
        }

        public void SellerRegister(Seller seller)
        {
            db.Seller.Add(seller);
            db.SaveChanges();
        }

        
        public List<Buyer> GetBuyer()
        {
            return db.Buyer.ToList();
        }
        public List<Seller> GetSeller()
        {
            return db.Seller.ToList();
        }
    }
}
