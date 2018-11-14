import {UrlComponent} from './main/url.component';
import {ErrorComponent} from './error/error.component';


export const Routes = [
  {
    path: '',
    component: UrlComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
