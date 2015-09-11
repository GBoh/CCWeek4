using JSonFinalMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JSonFinalMVC.API {
    public  class ProductsController : ApiController {
        private static IList<Product> _products = new List<Product> {
                new Product {Name = "Milk", Price=2.33m},
                new Product {Name = "Cheese", Price = 55.33m },
                new Product {Name = "Teslas" , Price = 8989.33m},
        };


        public IEnumerable<Product> Get() {
            return _products;
        }


        public HttpResponseMessage Post(Product product) {
            if (ModelState.IsValid) {
                _products.Add(product);
                return Request.CreateResponse(HttpStatusCode.Created, product);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
        }
    }
}
