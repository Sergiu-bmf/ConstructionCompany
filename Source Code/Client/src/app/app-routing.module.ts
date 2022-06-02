import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ExampleComponent } from './main/example/example.component';
import { ExampleEditorComponent } from './main/example/example-editor/example-editor.component';
import { UsersComponent } from './main/users/users.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './main/buyer/buyer.component';
import { BuildingComponent } from './main/building/building.component';
import { BuyerEditComponent } from './main/buyer/buyer-edit/buyer-edit.component';
import { BuildingEditComponent } from './main/building/building-edit/building-edit.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'material',
        component: ExampleComponent
      },
      {
        path: 'material/edit/:id',
        component: ExampleEditorComponent
      },
      {
        path: 'material/add',
        component: ExampleEditorComponent
      },
      {
        path: 'buyer',
        component: BuyerComponent
      }, 
      {
        path: 'buyer/edit/:id',
        component: BuyerEditComponent
      },
      {
        path: 'buyer/add',
        component: BuyerEditComponent
      },
      {
        path: 'building',
        component: BuildingComponent
      },
      {
        path: 'building/edit/:id',
        component: BuildingEditComponent
      },
      {
        path: 'building/add',
        component: BuildingEditComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
