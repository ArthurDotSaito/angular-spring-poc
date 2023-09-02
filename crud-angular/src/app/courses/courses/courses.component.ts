import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { CoursesService } from './../services/courses.service';
import { Course } from './model/course';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private readonly coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.findAll().pipe(
      catchError((error) => {
        this.onError('Error while loading courses');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}
}
