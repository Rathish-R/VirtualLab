import { Component } from '@angular/core';

@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
  selected!:string;
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Shell & Tube H.Ex","Vertical Condeser","Single Effect Evaporator"
  ]
  onClickLabs(isLab : boolean){
  return (isLab)? false:true;
  }
}
