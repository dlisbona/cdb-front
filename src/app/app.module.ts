import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { ComputerServiceComponent } from './computer-service/computer-service.component';
import { DatePipe } from '@angular/common';
import { ComputerTableComponent } from './computer-table/computer-table.component';


@NgModule({
  providers: [ComputerServiceComponent,DatePipe],
  declarations: [
    AppComponent,
    HeaderComponent,
    EditComponent,
    ComputerServiceComponent,
    ComputerTableComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],

  bootstrap: [AppComponent,ComputerTableComponent],
  entryComponents: [    
    AppComponent,
    HeaderComponent,
    EditComponent,
    ComputerTableComponent
    ]
})
export class AppModule { }
