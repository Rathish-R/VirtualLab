import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
  selected : string="Shell and Tube Heat Exchanger";
  isClickLabOn!: boolean;
  equipments!: string[] ;
  selectedOperation!: string ;
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
    this.equipments= [
    "Shell and Tube Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
  ];
  this.isClickLabOn= true;
  this.selectedOperation= "Theory";
  this.ResultObt= false;
  this.isTheoryOn=true;
  }
  
  

  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  Di: number = 0.16;//m
  Do: number = 0.2;//m
  Passes: number = 1;
  Baffless: number = 2;
  noOfTubes: number = 37
  LengthTube: number = 0.6
  isResultOn: boolean = false;
  isValid: boolean = false;
  lmtd !: number;

  inputValues = new FormGroup({
    Hflowrate: new FormControl('', Validators.required),
    Cflowrate: new FormControl('', Validators.required),
    Thi: new FormControl('', Validators.required),
    Tho: new FormControl('', Validators.required),
    Tci: new FormControl('', Validators.required),
    Tco: new FormControl('', Validators.required),
    Passes: new FormControl('2', Validators.required),
    TubeLength: new FormControl('', Validators.required),
    TubeDiaO: new FormControl('', Validators.required),
    ShellFluid: new FormControl('Hot', Validators.required),
  });

  
  getLmtd(): number {
    debugger;
    const delT2 =Number(this.inputValues.value.Tho)- Number(this.inputValues.value.Tci);
    
    const delT1 =Number(this.inputValues.value.Thi)-  Number(this.inputValues.value.Tco);

    this.lmtd =(delT1 - delT2 )/ (Math.log(delT1 / delT2));
    return this.lmtd;
  }
  onClickLabs(isLab: boolean) {
    return (isLab) ? false : true;
  }
  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn=false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
    this.isSimulationOn = false;
    this.isResultOn=false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
    this.isResultOn=false;
  }
  onClickResult() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn=true;
  }
  onSubmit() {
    if (this.inputValues.invalid) {
      this.inputValues.markAllAsTouched();
      return;
    }
    alert(this.getLmtd());
  }
}


