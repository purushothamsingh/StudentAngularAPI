import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent implements OnInit {


  id:string;
  constructor(private std:StudentService,private readonly route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((options)=>{
    this.id=options.get('id');
    if(this.id){
        this.std.getStudentById(this.id).subscribe((data)=>{
          console.log(data)
        })
      }
      })
  }


  }


