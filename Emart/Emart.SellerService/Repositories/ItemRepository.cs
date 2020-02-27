using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.SellerService.Repositories
{
    public class ItemRepository : IItemRepository
    {
        EMartDBContext db;
        public ItemRepository(EMartDBContext db)
        {
            this.db = db;
        }
        public void AddItem(Items item)
        {
            db.Items.Add(item);
            db.SaveChanges();
        }

        public void DeleteItem(int itemid)
        {
            Items i = db.Items.Find(itemid);
            db.Remove(i);
            db.SaveChanges();
        }

        public Items GetItem(int itemid)
        {
            return db.Items.Find(itemid);
        }

        public void UpdateItem(Items item)
        {
            db.Items.Update(item);
            db.SaveChanges();
        }

        public List<Items> ViewItems(int sellerid)
        {
            return db.Items.Where(e => e.SellerId == sellerid).ToList();
        }
    }
}
