import { Routes, RouterModule } from '@angular/router';
import {HelloSriComponent} from '../components/hello-sri/hello-sri.component';
import {NextPageComponent} from '../components/next-page/next-page.component';
import {NgModule} from '@angular/core';
const routes: Routes = [
  { path:'', component: HelloSriComponent },
  { path:'test', component: HelloSriComponent },
  { path:'next', component: NextPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: []
})
export class AppRouteRoutes {}
