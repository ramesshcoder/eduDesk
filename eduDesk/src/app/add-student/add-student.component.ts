import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel, NgModelGroup, ɵNgNoValidate } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-student',
    standalone: true,
  imports: [FormsModule,RouterLink
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private router:Router){}
submit(studentData:any){
  if(!studentData.name || !studentData.email|| !studentData.age || !studentData.gender){
    alert("please enter all values before submiting ");
    return

  }
  let existing=JSON.parse(localStorage.getItem('StudentData')|| '[]');
  existing.push(studentData)
  localStorage.setItem('StudentData',JSON.stringify(existing));
  
  
  console.log(studentData);
  alert("record saved");
 
  
  

}
}
