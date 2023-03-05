import { Component } from '@angular/core';
import { Labs } from '../Labs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
labs :string[]=Labs;
fm:string[]=["lab-1","lab-2","lab-3"];
ht:string[]=["lab-1","lab-2","lab-3"];
mt:string[]=["lab-1","lab-2","lab-3"];
mo:string[]=["lab-1","lab-2","lab-3"];
cre:string[]=["lab-1","lab-2","lab-3"];
isFmOn !:boolean;
  isHtOn!:boolean;
  isMtOn!:boolean;
  isMoOn!:boolean;
  isCREOn!:boolean;
  constructor(){
    this.initialize();
  }
  initialize(){
    this.isFmOn=false;
    this.isHtOn=false;
    this.isMtOn=false;
    this.isMoOn=false;
    this.isCREOn=false;
  
  }
  OnClickHome(){
this.initialize();
  }

}
