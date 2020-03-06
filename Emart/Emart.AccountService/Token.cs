using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService
{
    public class Token
    {
        public int sellerid { get; set; }
        public int buyerid { get; set; }
        public string token { get; set; }
        public string msg { get; set; }
    }
}
