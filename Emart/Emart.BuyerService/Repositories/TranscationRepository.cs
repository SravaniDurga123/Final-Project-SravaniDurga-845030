using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Repositories
{
    public class TranscationRepository : ITranscationRepository
    {
        EMartDBContext db;
        public TranscationRepository(EMartDBContext db)
        {
            this.db = db;
        }
        public List<PurchaseHistory> TranscationHistory(int buyerid)
        {
          List<PurchaseHistory> l= db.PurchaseHistory.Where(e => e.BuyerId == buyerid).ToList();
            return l.OrderByDescending(e => e.TranscationTime).ToList();
        }
    }
}
