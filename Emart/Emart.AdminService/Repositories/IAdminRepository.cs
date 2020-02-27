using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;


namespace Emart.AdminService.Repositories
{
   public interface IAdminRepository
    {
        void AddCategory(Category category);
        void AddSubCategory(SubCategory subCategory);
        List<Category> GetCategory();
        List<SubCategory> GetSubCategory();
        List<Seller> GetSellers();
        List<Buyer> GetBuyers();
        void UpdateCategory(Category category);
        void UpdateSubCategory(SubCategory subcategory);


       Category getCategoryId(int categoryid);
        SubCategory GetSubCategoryId(int subCategoryid);

       void DeleteCategory(int categoryid);
        void DeleteSubCategory(int subCategoryid);
       
    }
}
