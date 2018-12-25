import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from './student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  providers: [DataService]
})
export class StudentComponent implements OnInit {

  public student: Student;
  public students: Student[];
  tableMode: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadStudents();
  }
  loadStudents() {
    this.dataService.getStudents()
      .subscribe((data: Student[]) => this.students = data);
  }
}

interface Student {
  id: any,
  firstname: string,
  lastname: string,
  phone: Int32Array;
}

