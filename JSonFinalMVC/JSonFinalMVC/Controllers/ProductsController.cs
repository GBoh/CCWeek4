using JSonFinalMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JSonFinalMVC.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetProducts() {
            var products = new List<Product> {
                new Product {Name = "Milk", Price=2.33m},
                new Product {Name = "Cheese", Price = 55.33m },
                new Product {Name = "Teslas" , Price = 8989.33m},
            };
            return Json(products, JsonRequestBehavior.AllowGet);
        }
    }
}