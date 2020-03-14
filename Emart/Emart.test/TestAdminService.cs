using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;

namespace Emart.Test
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository rep;
        [SetUp]
        public void SetUp()
        {
            rep = new AdminRepository(new EMartDBContext());
        }
        [Test]
        [Description("TestAddCategory")]
        public void TestAddCategory()
        {
            rep.AddCategory(new Category()
            {
                CategoryId=3,
                CategoryName="sport",
                CategoryDetails="sport"
            });
            var res = rep.getCategoryId(2);
            Assert.NotNull(res);
        }
        [Test]
        [Description("TestAddSubCategory")]
        public void TestSubCategory()
        {
            rep.AddSubCategory(new SubCategory()
            {
                SubCategoryId = 2,
                CategoryId = 2,
                SubCategoryName = "footbal",
                SubCategoryDetails = "footbal",
                Gst = 5
            });
            var res = rep.GetSubCategoryId(2);
            Assert.NotNull(res);
        }
        [Test]
        [Description("TestGetCategory")]
        public void TestGetCategory()
        {
            var res = rep.GetCategory();
            Assert.NotNull(res);
            Assert.GreaterOrEqual(res.Count, 1);
        }
        [Test]
        [Description("TestGetSubCategory")]
        public void TestGetSubCategory()
        {
            var res = rep.GetSubCategory();
            Assert.NotNull(res);
            Assert.GreaterOrEqual(res.Count, 1);
        }
        [Test]
        [Description("TestGetSellers")]
        public void TestGetSellers()
        {
            var res = rep.GetSellers();
            Assert.NotNull(res);
            Assert.GreaterOrEqual(res.Count, 1);
        }
        [Test]
        [Description("TestGetBuyers")]
        public void TestGetBuyers()
        {
            var res = rep.GetBuyers();
            Assert.NotNull(res);
            Assert.GreaterOrEqual(res.Count, 1);
        }
        [Test]
        [Description("TestUpdateCategory")]
        public void TestUpdateCategory()
        {
            Category c = rep.getCategoryId(2);
            c.CategoryDetails = "good";
            rep.UpdateCategory(c);
            Category c1 = rep.getCategoryId(2);
            Assert.AreSame(c, c1);
        }
        [Test]
        [Description("TestUpdateSubCategory")]
        public void TestUpdateSubCategory()
        {
            SubCategory c = rep.GetSubCategoryId(2);
            c.SubCategoryDetails = "good";
            rep.UpdateSubCategory(c);
            SubCategory c1 = rep.GetSubCategoryId(2);
            Assert.AreSame(c, c1);
        }
        [Test]
        [Description("TestDeleteCategory")]
        public void TestDeleteCategory()
        {
            rep.DeleteCategory(3);
            var res = rep.getCategoryId(3);
            Assert.Null(res);
        }
        [Test]
        [Description("TestDeleteSubCategory")]
        public void TestDeleteSubCategory()
        {
            rep.DeleteSubCategory(2);
            var res = rep.GetSubCategoryId(2);
            Assert.Null(res);
        }
    }
}
