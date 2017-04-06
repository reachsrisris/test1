import { Routes, RouterModule,NgModule } from '@angular/router';
import {HelloSriComponent} from '../components/hello-sri/hello-sri.component';

const routes: Routes = [
  { path:'test', component: HelloSriComponent },
];
import { AppComponent }  from './app.component';

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  export: [RouterModule]
})
export class AppRouteRoutes {}
