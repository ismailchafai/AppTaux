import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Ville } from "../../module/ville";
import { VilleService } from "../../service/ville.service";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
})
export class VilleComponent implements OnInit {

  constructor(private villeService: VilleService) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  public  findAll(){
    this.villeService.getAll().subscribe(
      data=>this.Villes = data

    )
  }


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

  handleDeleteVille(ville:Ville , index:number) {
    this.villeService.deleteVille(ville.code).subscribe(

      (data:any)=>{

        console.log('ismail');
          if (data>0) {
            console.log('zaimme');
            console.log("index:::"+index);
            console.log("data:::"+data)
            console.log(this.Villes);
            this.Villes.splice(index, 1);
            console.log(this.Villes);

          }else {
            alert('delete error')
            console.log('data:::'+data)
            console.log("index:::"+index);
          }
          //this.ngOnInit();
          //this.findAll();
        }

    )
  }
}
