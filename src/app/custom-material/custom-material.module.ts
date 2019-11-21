import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule, MatButtonToggleModule,MatDatepickerModule, MatExpansionModule, MatInputModule,  MatNativeDateModule, 
   MatSelectModule,
   MatTableModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [],

  exports: [
   BrowserAnimationsModule,
   CommonModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatDatepickerModule,
   MatDialogModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatInputModule,
   MatNativeDateModule,
   MatSelectModule,
   MatTableModule,
   ]
})
export class CustomMaterialModule { }
