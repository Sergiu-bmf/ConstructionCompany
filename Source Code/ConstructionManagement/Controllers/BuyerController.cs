using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using StudentManagerAPI2.Context;
using StudentManagerAPI2.Entitys;

namespace StudentManagerAPI2.Controllers
{
    [Route("api/v1/[controller]")]
    public class BuyersController : Controller
    {
        private readonly ConstructionContext _context;

        public BuyersController(ConstructionContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Buyer> GetAll()
        {
            var ListBuyer = _context.Buyers.Include(b => b.Buildings).ToList();
            return ListBuyer;
        }

        [HttpGet("{id}")]

        public Buyer Get(int id)
        {
            var Buyer = _context.Buyers.Include(b => b.Buildings).FirstOrDefault(o => o.Id == id);
            return Buyer;
        }

        [HttpPost]
        public void Post(Buyer Buyer)
        {
            _context.Buyers.Add(Buyer);
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var Buyer = _context.Buyers.FirstOrDefault(o => o.Id == id);
            _context.Remove(Buyer);
            _context.SaveChanges();

        }
        [HttpPut]
        public void Update(Buyer Buyer)
        {
            _context.Buyers.Update(Buyer);
            _context.SaveChanges();

        }

    }

}