import { Component, OnInit } from '@angular/core';
import { SimpsonsService } from 'src/app/services/simpsons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
personajes:any=[]
  constructor(private simpsonsService:SimpsonsService) { }

  ngOnInit(): void {
this.simpsonsService.getAll().subscribe(data=>{
  this.personajes=data
})
  }

}
