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
    public class MaterialController : Controller
    {
        private readonly ConstructionContext _context;

        public MaterialController(ConstructionContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Material> GetAll()
        {
            var ListMaterial = _context.Materials.ToList();
            return ListMaterial;
        }

        [HttpGet("{id}")]

        public Material Get(int id)
        {
            var Material = _context.Materials.Find(id);
            return Material;
        }

        [HttpPost]
        public void Post(Material Material)
        {
            _context.Materials.Add(Material);
            _context.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var Material = _context.Materials.Find(id);
            _context.Remove(Material);
            _context.SaveChanges();
            
        }
        [HttpPut]
        public void Update(Material Material)
        {
            _context.Materials.Update(Material);
            _context.SaveChanges();

        }

    }

}
