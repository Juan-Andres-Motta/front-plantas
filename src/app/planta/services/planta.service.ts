import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../interfaces/planta';
import { map, catchError, throwError } from 'rxjs';
import { PlantaModel } from '../models/planta';
@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private url =
    'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';
  constructor(private http: HttpClient) {}

  getPlants() {
    return this.http.get<Planta[]>(`${this.url}`).pipe(
      map((response) => {
        let new_response = response.map((plant) => {
          return new PlantaModel(
            plant.id,
            plant.nombre_comun,
            plant.nombre_cientifico,
            plant.tipo,
            plant.altura_maxima,
            plant.clima,
            plant.sustrato_siembra
          );
        });
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
