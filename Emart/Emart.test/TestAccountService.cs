using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
namespace Emart.Test
{
    [TestFixture]
  public  class TestAccountService
    {
        AccountRepository rep;
        [SetUp]
        public void SetUp()
        {
            rep = new AccountRepository(new EMartDBContext());
        }
        [Test]
        [Description("TestBuyerLogin")]
        public void TestBuyerLogin()
        {
            var res = rep.BuyerLogin("jyothi", "jyothi");
            Assert.IsNotNull(res);
        }
        [Test]
        [Description("TestSellerLogin")]
        public void TestSellerLogin()
        {
            var res = rep.SellerLogin("jai", "jai123");
            Assert.IsNotNull(res);
        }
        [Test]
        [Description("TestBuyerRegister")]
        public void TestBuyerRegister()
        {
            rep.BuyerRegister(new Buyer()
                {
                BuyerId=7,
                Username="Charan",
                Pwd="Charan",
                Emailid="Charan@gmail.com",
                Mobile="6302821181",
                CreateDateTime=DateTime.Now
            });
            var res = rep.BuyerLogin("Charan", "Charan");
            Assert.IsNotNull(res);
        }
        [Test]
        [Description("TestSellerRegister")]
        public void TestSellerRegister()
        {
            rep.SellerRegister(new Seller()
            {
                SellerId=2,
                Sellername="Akhil",
                Pwd="Akhil",
                EmailId="akjil@gmail.com",
                Mobile="6302821182",
                Companyname="akhiloakhil",
                Gstin="sjdf876dsf7",
                Aboutcompany="akhil",
                PostalAddress="sudfhsd",
                Website="akhilakhi.co.in"
            });
            var res = rep.SellerLogin("Akhil", "Akhil");
            Assert.IsNotNull(res);
        }
        [Test]
        [Description("TestGetSellers")]
        public void TestGetSellers()
        {
            List<Seller> s = rep.GetSeller();
            Assert.NotNull(s);
        }
        [Test]
        [Description("TestGetBuyers")]
        public void TestGetBuyers()
        {
            List<Buyer> b = rep.GetBuyer();
            Assert.NotNull(b);
        }
    }
}
