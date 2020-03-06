using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository ir;
        public SellerController(ISellerRepository ir)
        {
            this.ir = ir;
        }
       
        [HttpGet]
        [Route("getseller/{id}")]

        public IActionResult GetSeller(int id)
        {
            try
            {
                return Ok(ir.GetSeller(id));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("editprofile")]
        public IActionResult Editprofile(Seller seller)
        {
            try
            {
                ir.EditProfile(seller);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}