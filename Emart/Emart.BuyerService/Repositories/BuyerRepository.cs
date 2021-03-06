﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        EMartDBContext db;
        public BuyerRepository(EMartDBContext db)
        {
            this.db = db;
        }
        public void EditProfile(Buyer buyer)
        {
            db.Buyer.Update(buyer);
            db.SaveChanges();
        }

        public Buyer GetProfile(int buyerid)
        {
            return db.Buyer.Find(buyerid);
        }

        public void BuyItem(PurchaseHistory item)
        {
            /*item.TranscationStatus=""*/
            db.PurchaseHistory.Add(item);
            db.SaveChanges();
        }

        public List<Category> GetCategory()
        {
            return db.Category.ToList();
        }

        public List<SubCategory> GetSubCategories(int categoryid)
        {
            return db.SubCategory.Where(e => e.CategoryId == categoryid).ToList();
        }

        public List<Items> SearchItems(string itemname)
        {

            Category cat = GetCategoryByName(itemname);
           SubCategory subcat = GetSubCategoryByName(itemname);
            if (cat != null)
            {
                List<Items> items = db.Items.Where(e => e.CategoryId == cat.CategoryId).ToList();
                return items;

            }
            else if (subcat != null)
                return db.Items.Where(e => e.SubCategoryId == subcat.SubCategoryId).ToList();
            else
                return db.Items.Where(e => e.ItemName == itemname).ToList();

        }

       

        public List<Cart> ViewCart(int buyerid)
        {
            return db.Cart.Where(e=>e.BuyerId==buyerid).ToList();
        }

        public void Addcart(Cart cart)
        {

            db.Cart.Add(cart);
            db.SaveChanges();
        }

        public int ItemExist(int itemid,int buyerid)
        {
              int a= db.Cart.Where(e=>e.ItemId==itemid && e.BuyerId==buyerid).ToList().Count;
            return a;
           
        }

        public void DeleteItem(int cartid)
        {
            Cart c = db.Cart.Find(cartid);
            db.Remove(c);
            db.SaveChanges();
        }

        public Items GetItem(int itemid)
        {
            return db.Items.Find(itemid);
        }

        public Category GetCategoryByName(string name)
        {
            return db.Category.SingleOrDefault(e => e.CategoryName == name);
        }

        public SubCategory GetSubCategoryByName(string name)
        {
            return db.SubCategory.SingleOrDefault(e => e.SubCategoryName == name);
        }
    }
}
