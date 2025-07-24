import { Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
    {
        path:'',component:StudentsComponent
    },
    {
        path:'add-students',component:AddStudentComponent
    },
    {
        path:'list',component:StudentsComponent
    }
];
