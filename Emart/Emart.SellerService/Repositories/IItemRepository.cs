using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.SellerService.Repositories
{
  public  interface IItemRepository
    {
        void AddItem(Items item);
        void DeleteItem(int itemid);
        List<Items> ViewItems(int sellerid);

        void UpdateItem(Items item);
        Items GetItem(int itemid);

        List<Category> GetCategory();
        List<SubCategory> GetSubCategory(int categoryid);
        List<SubCategory> GetSubCategories();
    }
}
