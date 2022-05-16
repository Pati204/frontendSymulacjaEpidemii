import { Injectable } from '@angular/core';
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  simulations: Simulation[] = [];

  constructor() { }

  addSimulation(simulation: Simulation)
  {
    this.simulations.push(simulation);
  }

  getSimulations()
  {
    return this.simulations;
  }
}
