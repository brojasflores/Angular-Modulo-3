import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;

    frase: any = {
        mensaje: 'Este es un mensaje de Jorge',
        autor: 'Autor: Jorge Gómez'
    };

    personajes: string[] = ['Annita', 'Gustavo', 'Pame']
}
