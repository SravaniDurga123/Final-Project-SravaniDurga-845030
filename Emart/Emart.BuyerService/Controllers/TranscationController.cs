using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TranscationController : ControllerBase
    {
        ITranscationRepository ir;
        public TranscationController(ITranscationRepository ir)
        {
            this.ir = ir;
        }
        [HttpGet]
        [Route("transcationhistory/{buyerid}")]
        public IActionResult transcationhistory(int buyerid)
        {
            try
            {
                return Ok(ir.TranscationHistory(buyerid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}