using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
namespace Emart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        EMartDBContext db;
         public AdminRepository(EMartDBContext db)
        {
            this.db = db;
        }
        public void AddCategory(Category category)
        {
            db.Category.Add(category);
            db.SaveChanges();
        }

        public void AddSubCategory(SubCategory subCategory)
        {
            db.SubCategory.Add(subCategory);
            db.SaveChanges();
        }
        public List<Category> GetCategory()
        {
            return db.Category.ToList();
        }
        public List<SubCategory> GetSubCategory()
        {
            return db.SubCategory.ToList();
        }
        public List<Seller> GetSellers()
        {
            return db.Seller.ToList();
        }
        public List<Buyer> GetBuyers()
        {
            return db.Buyer.ToList();
        }
        public void UpdateCategory(Category category)
        {
            db.Category.Update(category);
            db.SaveChanges();
        }

        public void UpdateSubCategory(SubCategory subcategory)
        {
            db.SubCategory.Update(subcategory);
            db.SaveChanges();
        }

        public Category getCategoryId(int categoryid)
        {
            return db.Category.Find(categoryid);
        }

        public SubCategory GetSubCategoryId(int subCategoryid)
        {
            return db.SubCategory.Find(subCategoryid);
        }
         
public void DeleteCategory(int categoryid)
        {
            Category c = db.Category.Find(categoryid);
            db.Category.Remove(c);
            db.SaveChanges();
        }

        public void DeleteSubCategory(int subCategoryid)
        {
            SubCategory s = db.SubCategory.Find(subCategoryid);
            db.SubCategory.Remove(s);
            db.SaveChanges();
        }
    }
}
;