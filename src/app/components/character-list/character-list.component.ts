import { Component, OnInit } from '@angular/core';
import { CharacterDTO } from 'src/app/models/characterDTO';

import { Router } from '@angular/router';


import { CharacteresService } from 'src/app/services/characteres.service';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characteres: CharacterDTO[] = [];

  constructor(private characteresService: CharacteresService,private router: Router){}

  show:boolean = true;
  tipo_vista:string = "lista";


  displayedColumns: string[] = ['imagen','id','name', 'actions'];      

  ngOnInit(): void {
    this.characteresService
      .getAllCharacteres()
      .subscribe((images) => {
        
        // console.log("Info");
        // console.log(images.info);

        // console.log("Resultados");
        // console.log(images.results);

        this.characteres = images.results;

        console.log("Array characteres obtenido")
        console.log(this.characteres);
        //console.log(this.characteres[0].id);
        //console.log(this.characteres[0].name);
        //console.log(this.characteres[0].image);
        

      });
      

  }


  mostrarDetalles(id: string): void {
    this.router.navigateByUrl('/character/' + id);
  }

  toggle() {
    this.show = !this.show;
  }

  cambiarVista(tipo:string){
    this.tipo_vista = tipo;
  }

  

}
