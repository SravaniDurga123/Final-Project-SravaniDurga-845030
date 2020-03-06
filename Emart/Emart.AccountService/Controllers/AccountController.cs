using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Repositories;
using Emart.AccountService.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        IAccountRepository ir;
        private readonly IConfiguration configuration;
       
        public AccountController(IAccountRepository ir,IConfiguration config)
        {
            this.ir = ir;
            configuration = config;
        }
        [HttpGet]
        [Route("buyerlogin/{uname}/{pwd}")]
        public IActionResult buyerlogin(string uname,string pwd)
        {
            try
            {

                Buyer b = ir.BuyerLogin(uname, pwd);
                if (b != null)
                {
                    Token token = new Token() { buyerid = b.BuyerId, token = GenerateJwtToken(uname), msg = "success" };
                    return Ok(token);
                }
                else
                {
                    Token token = new Token() { msg = "unsuccess" };
                    return Ok(token);
                }
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

                Seller s = ir.SellerLogin(uname, pwd);
                if(s!=null)
                {
                    Token token = new Token() { sellerid = s.SellerId, token = GenerateJwtToken(uname), msg = "success" };
                    return Ok(token);
                }
                else
                {
                    Token token = new Token() { msg = "unsuccess" };
                    return Ok( token);
                }
               
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



        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["Jwt:JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["Jwt:JwtIssuer"],
                configuration["Jwt:JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}