import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentsListService {
  getstudentsList():Student[]{
    return this.students
  }
  setstudentList(obj:Student){
    this.students.push(obj)
  }
  constructor() { }

  students:Student[] = []


}
