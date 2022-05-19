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
    public class BuildingsController : Controller
    {
        private readonly ConstructionContext _context;

        public BuildingsController(ConstructionContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Building> GetAll()
        {
            var ListBuilding = _context.Buildings.Include(b => b.Material).Include(b => b.Buyers).ToList();
            return ListBuilding;
        }

        [HttpGet("{id}")]

        public Building Get(int id)
        {
            var Building = _context.Buildings.Include(b => b.Material).Include(b => b.Buyers).FirstOrDefault(o => o.Id == id);
            return Building;
        }

        [HttpPost]
        public void Post(Building Building)
        {
            _context.Buildings.Add(Building);
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var Building = _context.Buildings.FirstOrDefault(o=>o.Id==id);
            _context.Remove(Building);
            _context.SaveChanges();

        }
        [HttpPut]
        public void Update(Building Building)
        {
            _context.Buildings.Update(Building);
            _context.SaveChanges();

        }

    }

}