import { Component } from '@angular/core';
import {VilleService} from "../../service/ville.service";
import {Ville} from "../../module/ville";

@Component({
  selector: 'app-ajoute-v',
  templateUrl: './ajoute-v.component.html',
  styleUrl: './ajoute-v.component.css'
})
export class AjouteVComponent {
  constructor(private villeService: VilleService) {
  }
  public save():void{
    this.villeService.save().subscribe(
      res=>{
        alert('save success');
        
        console.log(res)
        this.villeService.getAll();
      },
      err=>{
        alert(err);
      }
    )
  };
  get Ville(): Ville {
    return this.villeService.ville;
  }

  set Ville(value: Ville) {

    this.villeService.ville=value;
  }

  get Villes(): Array<Ville> {
    return this.villeService.villes;
  }

  set Villes(value: Array<Ville>) {
    this.villeService.villes= value;
  }
}
