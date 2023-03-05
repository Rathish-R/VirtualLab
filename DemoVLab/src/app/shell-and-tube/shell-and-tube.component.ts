import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shell-and-tube',
  templateUrl: './shell-and-tube.component.html',
  styleUrls: ['./shell-and-tube.component.css']
})
export class ShellAndTubeComponent {
  isTheoryOn: boolean = true;
  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  Q!: number;

  //
  Di: number = 0.16;//m
  Do: number = 0.2;//m
  Passes: number = 1;
  Baffless: number = 2;
  noOfTubes: number = 37
  LengthTube: number = 0.6
  isResultOn: boolean = false;
  isValid : boolean = false; 
  inputValues = new FormGroup({
    Hflowrate: new FormControl('', Validators.required),
    Cflowrate: new FormControl('', Validators.required),
    Thi: new FormControl('', Validators.required),
    Tho: new FormControl('', Validators.required),
    Tci: new FormControl('', Validators.required),
    Tco: new FormControl('', Validators.required),
  });
  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn = false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
    this.isSimulationOn = false;
    this.isResultOn = false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
    this.isResultOn = false;
  }
  //result
  onClickResult() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn = true;
  }

  onSubmitInputs() {
    debugger;
    this.onClickResult();
    this.isValid=true;
    this.Q = Number(this.inputValues.value.Hflowrate) * 4180 * (Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tho));
  }
}
