import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/simulation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private simulationService: SimulationService
  ) { }

  ngOnInit(): void {
    var simulations = this.simulationService.getSimulations();
    console.log(simulations);
  }

}
