import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, share, switchMap } from 'rxjs';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  employee: Observable<Employee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.employee = route.paramMap.pipe(
      map(paramMap => paramMap.get('employeeId') as string),
      switchMap(id => loader.getDetails(id)),
      share()
    );
  }
}
