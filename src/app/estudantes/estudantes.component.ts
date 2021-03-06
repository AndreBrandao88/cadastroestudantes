import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css'],
})
export class EstudantesComponent implements OnInit {
  
  selectedEstudante?: Estudante;

  estudantes: Estudante[] = [];
  

  constructor(private estudanteService: EstudanteService, private messageService:
     MessageService) { }

  ngOnInit(): void {

    this.getEstudantes();
  }

  onselect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
    .subscribe(estudantes => this.estudantes = estudantes);
  }

  
    
  
}