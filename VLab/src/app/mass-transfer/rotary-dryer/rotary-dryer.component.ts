import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { rotary } from 'src/app/RotarySpecification';
@Component({
  selector: 'app-rotary-dryer',
  templateUrl: './rotary-dryer.component.html',
  styleUrls: ['./rotary-dryer.component.css']
})

export class RotaryDryerComponent {
isTheoryOn:boolean=false;
isFormulaOn:boolean=false;
isSimulationOn : boolean=false;
r !: rotary;

// Rotary-Dryer-Specifications
readonly Do: number = 0.026;//meter  orifice Dia  
readonly Dp: number = 0.052;//meter  pipe Dia
readonly Cd: number = 0.64; //no units Coeff of discharge
readonly g: number = 9.81; //ms-2 Acc due to gravity
readonly pW: number = 1000;//kgm-3  density of water
readonly pA: number = 1.21; // kgm-3  density of Air
readonly kpa:number = 101.32; //kgm-3  density of Air

//form values
inputValues = new FormGroup({
  dBulbInlet : new FormControl('',Validators.required),
  wBulbInlet :new FormControl('',Validators.required),
  dBulbOutlet :new FormControl('',Validators.required),
  wBulbOutlet:new FormControl('',Validators.required),
  height1:new FormControl('',Validators.required),
  height2:new FormControl('',Validators.required),
  timeTaken:new FormControl('',Validators.required),
  weight:new FormControl('',Validators.required)

}

);
onClickTheory(){
this.isTheoryOn=true;
this.isFormulaOn=false;
this.isSimulationOn=false;
}
onClickFormula()
{
  this.isFormulaOn=true;
  this.isTheoryOn=false;
}
onClickSimulation(){
  this.isTheoryOn=false;
  this.isFormulaOn=false;
  this.isSimulationOn=true;
  }
  //calculations
  Area1 =(Math.PI * this.Dp**2)/4
  Area2=(Math.PI * this.Do**2)/4

  AbsoluteHumidity():number{
    var humid;
    var pow :number=((17.67 *number(this.inputValues.values.wBulbInlet)))
    var es : bigint=6.112 * 
    return humid;
  }
}
