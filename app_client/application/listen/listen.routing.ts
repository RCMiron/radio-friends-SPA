import {Routes} from '@angular/router';
import {ListenFeedComponent} from './listen-feed.component';
import {ListenMyStationComponent} from './listen-my-station.component';
import {ListenUserStationComponent} from './listen-user-station.component';

export const LISTEN_ROUTES: Routes = [
  {path:'', redirectTo: 'listen', pathMatch: 'full'},
  {path: 'listen', component: ListenFeedComponent},
  {path: 'listen/my-station', component: ListenMyStationComponent},
  {path: 'listen/:user', component: ListenUserStationComponent},
];
