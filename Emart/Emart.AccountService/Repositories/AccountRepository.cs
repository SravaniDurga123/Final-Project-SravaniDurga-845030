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
        public Buyer BuyerLogin(string uname, string pwd)
        {
           Buyer buyer = db.Buyer.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
            if (buyer!=null)
            {
                
                return buyer;
            }
            return null;
        }

        public void BuyerRegister(Buyer buyer)
        {
            db.Buyer.Add(buyer);
            db.SaveChanges();
        }

        

        public Seller SellerLogin(string uname, string pwd)
        {
            Seller seller = db.Seller.SingleOrDefault(e => e.Sellername == uname && e.Pwd == pwd);
            if (seller!=null)
            {
               
                return seller;
            }
           return null;
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
