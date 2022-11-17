import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Models/UI_Models/StudentUI.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth','mobile', 'email','gender','edit'];
  student:Student []=[] ;
  st: Student;
  @ViewChild(MatPaginator) mypaginator!:MatPaginator
  @ViewChild(MatSort) mysort!:MatSort

  dataSource:MatTableDataSource<Student> = new MatTableDataSource<Student>();

  constructor(private s:StudentService) {
   }

  ngOnInit(): void {
    this.s.getStudents().subscribe((success)=>{
      console.log(success)
      this.student=success
      this.dataSource= new MatTableDataSource<Student>(this.student);
      if(this.mypaginator){
        this.dataSource.paginator=this.mypaginator
      }
      if(this.mysort){
        this.dataSource.sort = this.mysort
      }
    })


  }

}
