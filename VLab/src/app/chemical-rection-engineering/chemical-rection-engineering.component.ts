import { Component } from '@angular/core';

@Component({
  selector: 'app-chemical-rection-engineering',
  templateUrl: './chemical-rection-engineering.component.html',
  styleUrls: ['./chemical-rection-engineering.component.css']
})
export class ChemicalRectionEngineeringComponent {
  selected!:string;
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Semi Batch Reactor","Tray Dryer","Li-Li Extraction"
  ]
  onClickLabs(isLab : boolean){
  return (isLab)? false:true;
  }
  
}
