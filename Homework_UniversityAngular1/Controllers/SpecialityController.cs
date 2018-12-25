using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using University.AppContext;

namespace University.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialityController : ControllerBase
    {
      
            ApplicationDbContext db;
            public SpecialityController(ApplicationDbContext context)
            {
                db = context;
            }

            [HttpGet]
            public IEnumerable<Speciality> Get()
            {
                var speciality = db.Specialities.ToArray();
                return speciality;
            }
        
    }
}