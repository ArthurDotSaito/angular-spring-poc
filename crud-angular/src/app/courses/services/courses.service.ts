import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../courses/model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Course[] {
    return [{ _id: '1', name: 'Programming', category: 'front-end' }];
  }
}
