import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./employee-list/employee-list.component')
  },
  {
    path: ':employeeId',
    loadComponent: () =>
      import('./employee-detail/employee-detail.component')
  }
];

export default routes;
