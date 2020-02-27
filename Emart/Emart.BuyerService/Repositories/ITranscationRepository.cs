using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
namespace Emart.BuyerService.Repositories
{
   public interface ITranscationRepository
    {
        List<PurchaseHistory> TranscationHistory(int buyerid);
    }
}
