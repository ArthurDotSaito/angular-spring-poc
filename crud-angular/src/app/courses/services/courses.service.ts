import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../courses/model/course';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api/courses';
  constructor(private readonly httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }
}
