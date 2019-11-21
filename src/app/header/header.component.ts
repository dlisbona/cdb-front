import { Component} from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import {ComputerServiceComponent} from '../computer-service/computer-service.component';
import {Computer} from '../computer-service/computer.model';
import { DatePipe } from '@angular/common';


export interface DialogData {
    
    data: any;
    id: number;
    name: string;
    introduced: string;
    discontinued: string;
    company : string;
    computerSwagger: Computer;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent{
  id: number;
  name: string;
  introduced: string;
  discontinued: string;
  company : string; 
  computerSwagger : Computer = {
    company: {
      id: null,
      name: ''
    }, 
    discontinued:'', 
    id:null, 
    introduced:'', 
    name:'',
  }; 
  
  
  constructor(public dialog: MatDialog, private computerService: ComputerServiceComponent,private datePipe: DatePipe) {}
  
  openDialog(): void {

    console.log(this.computerSwagger);

    this.computerService.getComputer(76).subscribe(resultat=>this.computerSwagger=resultat);


    if (this.computerSwagger.introduced!="null"){
    this.computerSwagger.introduced = this.datePipe.transform(this.computerSwagger.introduced, 'yyyy-MM-dd');
    }

    if (this.computerSwagger.discontinued!="null"){
    this.computerSwagger.discontinued = this.datePipe.transform(this.computerSwagger.discontinued, 'yyyy-MM-dd');
    }

  
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      disableClose: true,
      data: {
        name: this.name,
        introduced: this.introduced,
        discontinued: this.discontinued,
        company: this.company,
        computerSwagger:this.computerSwagger,
      }

    });

      dialogRef.afterClosed().subscribe(result => {
       if(result!=null){
        this.id = result.id; 
        this.name = result.name;
        this.introduced = result.introduced;
        this.discontinued = result.discontinued;
        this.company = result.company;}
            });      
  }

}

