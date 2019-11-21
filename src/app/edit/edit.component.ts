import { Component, Inject, OnInit, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData} from '../header/header.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Computer } from '../computer-service/computer.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {


  myGroup: FormGroup = new FormGroup({
      name: new FormControl(),
      companyName: new FormControl(),
      introduced: new FormControl(),
      discontinued: new FormControl(),
   });

  constructor(  
    public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
        this.dialogRef.close();
        
  }
  
}