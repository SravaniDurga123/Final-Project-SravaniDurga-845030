using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Repositories;
using Emart.AccountService.Models;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        IAccountRepository ir;
        public AccountController(IAccountRepository ir)
        {
            this.ir = ir;
        }
        [HttpGet]
        [Route("buyerlogin/{uname}/{pwd}")]
        public IActionResult buyerlogin(string uname,string pwd)
        {
            try
            {
                return Ok(ir.BuyerLogin(uname, pwd));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("sellerlogin/{uname}/{pwd}")]
          public IActionResult Sellerlogin(string uname,string pwd)
        {
            try
            {
                return Ok(ir.SellerLogin(uname, pwd));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("buyerregister")]
        public IActionResult buyerregister(Buyer buyer)
        {
            try
            {
                ir.BuyerRegister(buyer);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("sellerregister")]
        public IActionResult sellerregister(Seller seller)
        {
            try
            {
                ir.SellerRegister(seller);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getseller")]
        public IActionResult getseller()
        {
            return Ok(ir.GetSeller());
        }
        [HttpGet]
        [Route("getbuyer")]
        public IActionResult getbuyer()
        {
            return Ok(ir.GetBuyer());
        }
    }
}