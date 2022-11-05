import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SimpsonsService } from 'src/app/services/simpsons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
personajes:any=[]
name=new FormControl('')
  constructor(private simpsonsService:SimpsonsService) { }

  ngOnInit(): void {
this.getAll('')
this.name.valueChanges.pipe(debounceTime(300),distinctUntilChanged()).subscribe(data=>{
  console.log(data)
this.getAll(data)
})



  }
getAll(texto:string | null){
  this.simpsonsService.getAll(texto).subscribe(data=>{
  this.personajes=data
})
}

}
