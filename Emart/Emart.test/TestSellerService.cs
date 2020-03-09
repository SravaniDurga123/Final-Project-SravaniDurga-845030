using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    class TestSellerService
    {
        ItemRepository rep;
        SellerRepository srep;
        [SetUp]
        public void SetUp()
        {
            rep = new ItemRepository(new EMartDBContext());
            srep = new SellerRepository(new EMartDBContext());
        }
        [Test]
        [Description("TestAddItem")]
        public void TestAddItem()
        {
            rep.AddItem(new Items()
            {
                ItemId = 1,
                ItemName = "mi",
                Price = 11000,
                ItemDescription = "mi note 5",
                Stock = 7,
                Remarks = "no remarks",
                Image = "keyboard.jpeg",
                CategoryId = 1,
                SubCategoryId = 1,
                SellerId = 3
            });
           Items i= rep.GetItem(1);
            Assert.NotNull(i);
        }
        [Test]
        [Description("TestDeleteItem")]
        public void TestDeleteItem()
        {
            rep.DeleteItem(1);
            Items i = rep.GetItem(1);
            Assert.Null(i);
        }
        [Test]
        [Description("TestViewItems")]
        public void TestViewItems()
        {
            List<Items> i = rep.ViewItems(1);
            Assert.NotNull(i);
        }
        [Test]
        [Description("TestUpdateItem")]
        public void TestUpdateItem()
        {
            Items i = rep.GetItem(37);
                i.Remarks = "no remarks";
            rep.UpdateItem(i);
            Items i1= rep.GetItem(37);
            Assert.AreSame(i, i1);
        }
        [Test]
        [Description("TestGetCategories")]
        public void TestGetCategories()
        {
            List<Category> c = rep.GetCategory();
            Assert.NotNull(c);
        }
        [Test]
        [Description("TestGetSubCategories")]
        public void TestGetSubCategories()
        {
            List<SubCategory> s = rep.GetSubCategories();
            Assert.NotNull(s);
        }
        [Test]
        [Description("TestGetSubCategory")]
        public void TestGetSubCategory()
        {
            List<SubCategory> s = rep.GetSubCategory(1);
            Assert.NotNull(s);
        }
        [Test]
        [Description("TestGetSeller")]
        public void TestGetSeller()
        {
            Seller s = srep.GetSeller(3);
            Assert.NotNull(s);
        }
        [Test]
        [Description("TestEditProfile")]
        public void TestEditProfile()
        {
            Seller s = srep.GetSeller(3);
            s.Companyname = "kisankrish@infa";
            srep.EditProfile(s);
            Seller s1 = srep.GetSeller(3);
            Assert.AreSame(s, s1);
        }
    }
}
