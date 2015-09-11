using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISecurity.Models;

namespace WebAPISecurity.API {
    public class ProductsController : ApiController {
        // GET: api/Products
        [Authorize]
        public IEnumerable<Product> Get() {
            return new List<Product> {
                new Product {Name = "Milk", Price = 2.33m },
                new Product {Name = "Water", Price = 0.99m },
                new Product {Name = "Hats", Price = 17.35m },
            };
        }

        // GET: api/Products/5
        public Product Get(int id) {
            return null;
        }

        // POST: api/Products
        public void Post([FromBody]string value) {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE: api/Products/5
        public void Delete(int id) {
        }
    }
}
