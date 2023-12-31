import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CharacterDTO } from 'src/app/models/characterDTO';

import { CharacteresService } from 'src/app/services/characteres.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent {
  character!: CharacterDTO;

  constructor(
    private characteresService: CharacteresService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id');
    console.log('Identificador de character -->', identifier);

    // this.characteresService.getCharacterById(identifier)
    //   .subscribe(
    //     (character_) => {

    //       this.character = character_;
    //       console.log('Character obtenido -->', this.character);

    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log("error de identificador");
    //       console.log(err);
    //       this.router.navigateByUrl('/');
    //     }

    //   );

    this.characteresService.getCharacterById(identifier).subscribe({
      next: (character_) => {
        this.character = character_;
        console.log('Character obtenido -->', this.character);
      },
      error: (e:HttpErrorResponse) => {
        console.log('error de identificador');
        console.log(e);
        this.router.navigateByUrl('/');
      },
    });
  }
}
