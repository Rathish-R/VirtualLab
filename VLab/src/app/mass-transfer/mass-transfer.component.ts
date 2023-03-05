import { Component } from '@angular/core';

@Component({
  selector: 'app-mass-transfer',
  templateUrl: './mass-transfer.component.html',
  styleUrls: ['./mass-transfer.component.css']
})
export class MassTransferComponent {
selected!:string;
isClickLabOn:boolean=true;
equipments:string[]=[
  "Rotary Dryer","Tray Dryer","Li-Li Extraction"
]
onClickLabs(isLab : boolean){
return (isLab)? false:true;
}

}
