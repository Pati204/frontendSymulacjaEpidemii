import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Simulation } from '../simulation';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  form = new FormGroup({
    N: new FormControl(''),
    P: new FormControl(''),
    I: new FormControl(''),
    R: new FormControl(''),
    M: new FormControl(''),
    Ti: new FormControl(''),
    Tm: new FormControl(''),
    Ts: new FormControl(''),
  });

  constructor(
    private simulationService: SimulationService
  ) { }

  ngOnInit(): void {
  }

  
  onSubmit() {
    console.log(this.form.value);
    var simulation = new Simulation(this.form.value);
    this.simulationService.addSimulation(simulation);
    
  }
}
