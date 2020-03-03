using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        IItemRepository ir;
        public ItemController(IItemRepository ir)
        {
            this.ir = ir;
        }
        [HttpPost]
        [Route("additem")]
        public IActionResult additem(Items item)
        {
            try
            {
                ir.AddItem(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);

            }
        }
        [HttpDelete]
        [Route("deleteitem/{itemid}")]
        public IActionResult deleteitem(int itemid)
        {
            try
            {
                ir.DeleteItem(itemid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("viewitems/{sellerid}")]
        public IActionResult viewitems(int sellerid)
        {
            try
            {
                return Ok(ir.ViewItems(sellerid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("updateitem")]
        public IActionResult updateitem(Items item)
        {
            try
            {
                ir.UpdateItem(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getitem/{itemid}")]
        public IActionResult getitem(int itemid)
        {
            return Ok(ir.GetItem(itemid));
        }
        [HttpGet]
        [Route("getcategory")]
        public IActionResult getcategory()
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
        [Route("getsubcategory/{categoryid}")]
        public IActionResult getsubcategory(int categoryid)
        {
            try
            {
                return Ok(ir.GetSubCategory(categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategories")]
        public IActionResult getsubcategories()
        {
            try
            {
                return Ok(ir.GetSubCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}