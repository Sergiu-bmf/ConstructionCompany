import { NgModule } from '@angular/core';

// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

// INTERCEPTOR
import { TokenInterceptor } from './interceptor/auth.interceptor';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ExampleComponent } from './main/example/example.component';
import { ExampleEditorComponent } from './main/example/example-editor/example-editor.component';
import { UsersComponent } from './main/users/users.component';
import { UsersEditorComponent } from './main/users/users-editor/users-editor.component';
import { LoginComponent } from './login/login.component';
import { DeleteDialogComponent } from './_dialogs/delete-dialog/delete-dialog.component';
import { ProfileDialogComponent } from './_dialogs/profile-dialog/profile-dialog.component';
import { BuyerComponent } from './main/buyer/buyer.component';
import { BuildingComponent } from './main/building/building.component';
import { BuyerEditComponent } from './main/buyer/buyer-edit/buyer-edit.component';
import { BuildingEditComponent } from './main/building/building-edit/building-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ExampleComponent,
    ExampleEditorComponent,
    UsersComponent,
    UsersEditorComponent,
    LoginComponent,
    DeleteDialogComponent,
    ProfileDialogComponent,
    BuyerComponent,
    BuildingComponent,
    BuyerEditComponent,
    BuildingEditComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AngularEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
