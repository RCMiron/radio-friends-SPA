import{Routes, RouterModule} from '@angular/router';

import {AuthenticateComponent} from './auth/authenticate.component';
import {ApplicationComponent} from './application/application.component'
import {LISTEN_ROUTES} from './application/listen/listen.routing';

const APP_ROUTES: Routes = [
  {path:'', redirectTo: '/who-are-you', pathMatch: 'full'},
  {path:'who-are-you', component: AuthenticateComponent},
  {path: ':username', component: ApplicationComponent, children: LISTEN_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
