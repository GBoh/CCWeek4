namespace WebAPISecurity.Migrations
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;
    using Microsoft.AspNet.Identity;

    internal sealed class Configuration : DbMigrationsConfiguration<WebAPISecurity.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebAPISecurity.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            var user = userManager.FindByName("Greg");
            if (user == null) {
                user = new ApplicationUser {
                    UserName = "Greg",
                    Email = "Greg@bohanon3d.com"
                };
                userManager.Create(user, "password");
            }
        }
    }
}
