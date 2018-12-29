using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using University.AppContext;
using University.WebApp.Helpers;

namespace UniverAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherMarkController : Controller
    {ApplicationDbContext db;
        public TeacherMarkController(ApplicationDbContext context)
        {
            db = context;
        }

<<<<<<< HEAD
        [HttpPost]
        public IEnumerable Get([FromBody]GetToken token)
=======
        [HttpGet]
        public IEnumerable Get([FromBody]string token)
        //public IEnumerable Get([FromBody]string token)
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
        {
            var teacherMarkList = (from m in db.Marks
                join s in db.Students
                    on m.Student.Id equals s.Id
                join ts in db.TeachSubjs
                    on m.TeachSubj.Id equals ts.Id
                join teachers in db.Teachers
                    on ts.TeacherId equals teachers.Id
                join ss in db.Subjects
                    on ts.SubjId equals ss.Id
                select new
                {
                    teachers.Id,
                    m.StudentsMark,
                    Group = s.Group.Name,
                    GroupId = s.Group.Id,
                    Students = s.FirstName + " " + s.LastName,
                    ss.Name
                }).ToList();

<<<<<<< HEAD
            //return teacherMarkList;
            TokenValidator validator = new TokenValidator();
            var role = validator.getRole(token.token);
            if (role.Equals("admin") || role.Equals("teacher"))
            {
                return teacherMarkList;
            }
            else
                return null;

=======

            //if (!String.IsNullOrEmpty(token))
                //return teacherMarkList;
                //return new List<string> { token };
            //else
               // return new List<string> { "Error!" };
            return teacherMarkList;
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
        }
        
    }
}