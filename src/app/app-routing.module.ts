import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "/hello-world", pathMatch: "full" },
  { path: "hello-world", component: HelloWorldComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
