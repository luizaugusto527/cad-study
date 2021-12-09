
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})

export class StudentsListService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url = `http://localhost:8080/students`
  constructor(private http: HttpClient) { }

  getstudentsList():Observable<Student[]>{
    return this.http.get<Student[]>(this.url)
  }
  setstudentList(obj:Student):Observable<Student>{
    
    return this.http.post<Student>(this.url,obj,this.httpOptions)
     
  }

 updateStudentList(student:Student):Observable<Student>{
  const updateUrl = `http://localhost:8080/students/${student.id}`
  return this.http.put<Student>(updateUrl,student,this.httpOptions)
 }
 deleteStudent(id:number):Observable<Student>{
  const deleteUrl = `http://localhost:8080/students/${id}`
  return this.http.delete<Student>(deleteUrl,this.httpOptions)
 }


}

