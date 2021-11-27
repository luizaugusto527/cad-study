
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentsListService {
  private url = `http://localhost:3000/students`
  constructor(private http: HttpClient) { }

  getstudentsList():Observable<Student[]>{
    return this.http.get<Student[]>(this.url)
  }
  setstudentList(obj:Student){
    this.students.push(obj)
  }

  students:Student[] = []


}
