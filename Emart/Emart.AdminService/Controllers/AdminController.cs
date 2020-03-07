using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class AdminController : ControllerBase
    {
        IAdminRepository ir;
        public AdminController(IAdminRepository ir)
        {
            this.ir = ir;
        }
        [HttpPost]
        [Route("addcategory")]
       public IActionResult addcategory(Category category)
        {
            try
            {
                ir.AddCategory(category);
                return Ok(); 
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("addsubcategory")]
        public IActionResult addsubcategory(SubCategory subCategory)
        {
            try
            {
                ir.AddSubCategory(subCategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getcategory")]
        public IActionResult getcategory()
        {
            try
            {
                return Ok(ir.GetCategory());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategory")]
        public IActionResult getsubcategory()
        {
            try
            {
                return Ok(ir.GetSubCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getsellers")]
        public IActionResult getseller()
        {
            try
            {
                return Ok(ir.GetSellers());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getbuyers")]
        public IActionResult getbuyers()
        {
            try
            {
                return Ok(ir.GetBuyers());
            }
            catch(Exception e)
            {
                return NotFound(e.Message); 
            }
        }
        [HttpPut]
        [Route("updatecategory")]
        public IActionResult updatecategory(Category category)
        {
            try
            {
                ir.UpdateCategory(category);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("updatesubcategory")]
        public IActionResult updatesubcategory(SubCategory subCategory)
        {
            try
            {
                ir.UpdateSubCategory(subCategory);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getcategoryid/{categoryid}")]
        public IActionResult getcategoryid(int categoryid)
        {
            try
            {
                return Ok(ir.getCategoryId(categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategoryid/{subcategoryid}")]
         public IActionResult getsubcategoryid(int subCategoryid)
        {
            try
            {
                return Ok(ir.GetSubCategoryId(subCategoryid));

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("deletecategory/{categoryid}")]
        public IActionResult deletecategory(int categoryid)
        {
            try
            {
                ir.DeleteCategory(categoryid);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("deletesubcategory/{subcategoryid}")]
        public IActionResult deletesubcategory(int subCategoryid)
        {
            try
            {
                ir.DeleteSubCategory(subCategoryid);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}