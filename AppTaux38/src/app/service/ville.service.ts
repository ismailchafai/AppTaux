import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ville } from '../module/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService{
  private _ville:Ville = new Ville;
  private _villes: Array<Ville>=[];
  private url = "http://localhost:8090/api/ville/"
// Use $ to indicate it's an Observable




  constructor(private http: HttpClient) {
  }



  public deleteVille(code: string):any{
    return this.http.delete(`http://localhost:8090/api/ville/code/${code}`);

  }
  public save(): Observable<Ville> {
    // @ts-ignore
    console.log('dekheleti')
    return this.http.post<Ville>("http://localhost:8090/api/ville/" , this._ville)
  }

  public getAll(): Observable<Array<Ville>> {
    // @ts-ignore
    return this.http.get<Array<Ville>>("http://localhost:8090/api/ville/")
  }



  set ville(value: Ville) {
    if(this._ville == null){
      this._ville == new Ville();
    }
    this._ville = value;
  }

  get villes(): Array<Ville> {
    if(this._villes == null){
      this._villes == new Array<Ville>();
    }
    return this._villes;
  }

  set villes(value: Array<Ville>) {

    this._villes = value;
  }

}
