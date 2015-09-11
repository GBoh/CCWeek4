using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JSonFinalMVC.Models {
    public class Product {
        public int id { get; set; }
        [Required(ErrorMessage = "Products must have a name")]
        public string Name { get; set; }

        [Range(0d, double.MaxValue, ErrorMessage = "Price must be larger than $0.00")]
        public decimal Price { get; set; }

    }
}