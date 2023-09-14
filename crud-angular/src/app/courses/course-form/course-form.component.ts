import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (res) => console.log(res),
      (error) => {
        this.onSubmitError();
      }
    );
  }
  onCancel() {}

  private onSubmitError() {
    this._snackBar.open('Error while trying to save', '', {
      duration: 5000,
    });
  }
}
