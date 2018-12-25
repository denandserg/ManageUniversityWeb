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
    public class StudentSheduleController : Controller
    {ApplicationDbContext db;
        public StudentSheduleController(ApplicationDbContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable Get()
        {

            var studentsheduleList = (from l in db.AudLects
                join g in db.Groups
                    on l.Group.Id equals g.Id
                join ts in db.Lections
                    on l.LectId equals ts.Id
                join a in db.Audiences
                    on l.AudId equals a.Id
                join teas in db.TeachSubjs
                    on l.TeachSubj.Id equals teas.Id
                join teachers in db.Teachers
                    on teas.TeacherId equals teachers.Id
                join ss in db.Subjects
                    on teas.SubjId equals ss.Id
                select new
                {
                    l.GroupId,
                    Group = g.Name,
                    ts.Day,
                    ts.Start,
                    ts.Finish,
                    Audience = a.Name,
                    Teacher = teachers.LastName + " " + teachers.FirstName,
                    Subject = ss.Name

                }).ToList();
            return studentsheduleList;
        }
        
    }
}