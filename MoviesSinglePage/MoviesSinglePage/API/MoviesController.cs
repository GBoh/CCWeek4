using MoviesSinglePage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesSinglePage.API
{
    public class MoviesController : ApiController
    {
        private static IList<Movie> _movies = new List<Movie> {
            new Movie {Title = "Pacific Rim", Director = "Guillermo del Toro" },
            new Movie {Title = "Up", Director = "Pete Docter" },
        };
    }
}
