import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { DeleteModuleComponent } from './delete-module/delete-module.component';
import { AlldataModuleComponent } from './alldata-module/alldata-module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminModuleComponent,
    UpdateModuleComponent,
    DeleteModuleComponent,
    AlldataModuleComponent,
    AddModuleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
