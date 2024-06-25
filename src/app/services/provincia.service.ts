import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../models/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  url: string = `${environment.HOST}/provincias`

  constructor(private http: HttpClient) {

  }

  listarProvincias() {
    return this.http.get<Provincia[]>(this.url);
  }

  listarPorId(idProvincia: number) {
    return this.http.get<Provincia>(`${this.url}/${idProvincia}`);
  }

  registrar(provincia: Provincia) {
    return this.http.post(this.url, provincia);
  }

  modificar(provincia: Provincia) {
    return this.http.put(this.url, provincia);
  }

  eliminar(idProvincia: number) {
    return this.http.delete(`${this.url}/${idProvincia}`);
  }
}
