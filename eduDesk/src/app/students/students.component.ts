import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-students',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(private router: Router) {}
  students: any[] = [];
  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem('StudentData') || '[]');
  }
  submit(studentData: any) {
    if (
      !studentData.name ||
      !studentData.email ||
      !studentData.age ||
      !studentData.gender
    ) {
      alert('please enter all values before submiting ');
      return;
    }
    let existing = JSON.parse(localStorage.getItem('StudentData') || '[]');
    existing.push(studentData);
    localStorage.setItem('StudentData', JSON.stringify(existing));
    this.students = JSON.parse(localStorage.getItem('StudentData') || '[]');

    alert('record saved');
    this.modal = false;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    localStorage.setItem('StudentData', JSON.stringify(this.students));
  }
  modal = false;
  showModal() {
    this.modal = true;
  }
  updateModal=false;
  selectedStudent:any={};
  selectedIndex:number=-1
  UpDate(student:any,index:number){
    console.log(student);
    

    this.selectedStudent={...student}
    this.selectedIndex=index
    this.updateModal=true
  }
  upDated(){
    let students=JSON.parse(localStorage.getItem('studentData')||'[]')
    this.
    alert("updated successfully")
    

  }

  
}
