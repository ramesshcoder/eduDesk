import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterLink,NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:any[]=[];
  ngOnInit(){
    this.students=JSON.parse(localStorage.getItem('StudentData') || '[]')
    
    
  }
  deleteStudent(index :number){
    this.students.splice(index,1);
   localStorage.setItem('StudentData',JSON.stringify(this.students));

  }


}
