import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../courses/model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '../../../assets/courses.json';
  constructor(private readonly httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
