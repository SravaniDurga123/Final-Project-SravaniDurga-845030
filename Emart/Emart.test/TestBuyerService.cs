using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository rep;
        TranscationRepository trep;
        [SetUp]
        public void SetUp()
        {
            rep = new BuyerRepository(new EMartDBContext());
            trep = new TranscationRepository(new EMartDBContext());
        }
        [Test]
        [Description("TestGetProfile")]
        public void TestGetProfile()
        {
            var res = rep.GetProfile(2);
            Assert.NotNull(res);
        }
        [Test]
        [Description("TestEditProfile")]
        public void TestEditProfile()
        {
            Buyer b = rep.GetProfile(2);
            b.Emailid = "jyothi1@gmail.com";
            rep.EditProfile(b);
            Buyer b1 = rep.GetProfile(2);
            Assert.AreSame(b, b1);
        }
        [Test]
        [Description("TestSearchItem")]
        public void TestSearchItem()
        {
            List<Items> i = rep.SearchItems("telehgdfa");
            Assert.NotNull(i);
        }
        [Test]
        [Description("TestBuyItem")]
        public void TestBuyItem()
        {
            rep.BuyItem(new PurchaseHistory()
            {
                PurchaseId = 2,
                TranscationType = "cash",
                TranscationTime = DateTime.Now,
                NoOfItems = 2,
                Remarks = "good",
                Transcationstatus = "success",
                BuyerId = 6,
                SellerId = 3,
                ItemId = 217
            });

        }
        [Test]
        [Description("TestGetCategory")]
        public void TestGetCategory()
        {
            List<Category> c = rep.GetCategory();
            Assert.NotNull(c);
        }
        [Test]
        [Description("TestGetSubCategory")]
        public void TestGetSubCategory()
        {
            List<SubCategory> s = rep.GetSubCategories(1);
            Assert.NotNull(s);
        }
        [Test]
        [Description("TestViewCart")]
        public void TestViewCart()
        {
            List<Cart> c = rep.ViewCart(4);
            Assert.NotNull(c);
        }
        [Test]
        [Description("TestAddCart")]
        public void TestAddCart()
        {
            rep.Addcart(new Cart()
            {
                CartId = 1,
                ItemName = "tele",
                ItemDescription = "good",
                Price = 56464564,
                Image = "butterfly.jpg",
                ItemId = 217,
                BuyerId = 6
            });
        }
        [Test]
        [Description("TestItemExist")]
        public void TestItemExist()
        {
            var res = rep.ItemExist(37,4);
            Assert.GreaterOrEqual(res, 1);
        }
        [Test]
        [Description("TestDeleteItem")]
        public void TestDeleteItem()
        {
            rep.DeleteItem(1);

        }
        [Test]
        [Description("TestGetItem")]
        public void TestGetItem()
        {
            List<Items> i = rep.GetItem(37);
            Assert.NotNull(i);
        }
        [Test]
        [Description("TestTransactionHistory")]
        public void TestTransactionHistory()
        {
            List<PurchaseHistory> p = trep.TranscationHistory(2);
            Assert.NotNull(p);
        }
    }
}
