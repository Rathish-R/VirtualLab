import { Component } from '@angular/core';

@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
  selected:string="Shell and Tube Heat Exchanger";
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Shell and Tube Heat Exchanger","Double Pipe Heat Exchanger","Jacketed Vessel"
  ];
  selectedOperation :string="Theory";
ResultObt:boolean=false;
  isTheoryOn: boolean = false;
  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  
  onClickLabs(isLab : boolean){
  return (isLab)? false:true;
  }
  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
  }
}

