﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using University.AppContext;

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

        [HttpGet]
        public IEnumerable Get([FromBody]string token)
        //public IEnumerable Get([FromBody]string token)
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


            //if (!String.IsNullOrEmpty(token))
                //return teacherMarkList;
                //return new List<string> { token };
            //else
               // return new List<string> { "Error!" };
            return teacherMarkList;
        }
        
    }
}