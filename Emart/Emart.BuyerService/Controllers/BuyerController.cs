using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        IBuyerRepository ir;
        public BuyerController(IBuyerRepository ir)
        {
            this.ir = ir;
        }
        [HttpPut]
        [Route("editprofile")]
        public IActionResult editprofile(Buyer buyer)
        {
            ir.EditProfile(buyer);
            return Ok();
        }
        [HttpGet]
        [Route("getbuyer/{buyerid}")]
        public IActionResult getbuyer(int buyerid)
        {
            return Ok(ir.GetProfile(buyerid));
        }


        [HttpGet]
        [Route("searchitem/{itemname}")]
        public IActionResult searchitem(string itemname)
        {
            try
            {
                return Ok(ir.SearchItems(itemname));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("buyitem")]
        public IActionResult buyitem(PurchaseHistory item)
        {
            try
            {
                ir.BuyItem(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getcategories")]
        public IActionResult getcategories()
        {
            try
            {
                return Ok(ir.GetCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategories/{categoryid}")]
        public IActionResult getsubcategories(int categoryid)
        {
            try
            {
                return Ok(ir.GetSubCategories(categoryid));
            }
            catch (Exception E)
            {
                return NotFound(E.Message);
            }
        }
    }
}