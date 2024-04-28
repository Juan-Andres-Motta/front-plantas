import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/planta.service';
import { PlantaModel } from '../../models/planta';
@Component({
  selector: 'plant-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [PlantaService],
})
export class TableComponent implements OnInit {
  public plants: PlantaModel[] = [];
  public inside_plants: PlantaModel[] = [];
  public outside_plants: PlantaModel[] = [];

  constructor(private plantaService: PlantaService) {}

  getPlants() {
    this.plantaService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.inside_plants = this.plants.filter(
        (plant) => plant.tipo === 'Interior'
      );
      this.outside_plants = this.plants.filter(
        (plant) => plant.tipo === 'Exterior'
      );
    });
  }

  ngOnInit(): void {
    this.getPlants();
  }
}
