import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/API_Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseurl = "https://localhost:7113/api/"
  httpClient: any;


  constructor(private http:HttpClient) {}


  getStudents():Observable<Student[]>{
  return  this.http.get<Student[]>(this.baseurl+"Student");
  }

  getStudentById(id:string):Observable<Student>{
    console.log(this.baseurl+'/id')
    return this.http.get<Student>(this.baseurl+ 'Student/'+ id );

  }

}
