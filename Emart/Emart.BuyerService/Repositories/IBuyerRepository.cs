using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Repositories
{
   public interface IBuyerRepository
    {
        
        void EditProfile(Buyer buyer);
        Buyer GetProfile(int buyerid);

        List<Items> SearchItems(string itemname);
        void BuyItem(PurchaseHistory item);
        List<Category> GetCategory();
        List<SubCategory> GetSubCategories(int categoryid);
       
        List<Cart> ViewCart(int buyerid);
        void Addcart(Cart cart);
        int ItemExist(int itemid);
        void DeleteItem(int cartid);
        List<Items> GetItem(int itemid);
    }
}
