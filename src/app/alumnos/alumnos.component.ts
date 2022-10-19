import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//aqui se escribe 
  asistencia: boolean =true;
  titulo:string="Lab Moviles 31";
  alumno:string=""
  alumnos: any = [
    {
      nombre:"Alan Jovany",
      presente:false
    },
    {
      nombre: "David Rey",
      presente:true
    },
    {
      nombre:"Bryan Eduardo",
      presente:true
    },
    {
      nombre:"Daniel Opeza",
      presente:false
    },
    {
      nombre: "Cesar Alejandro",
      presente:true
    },
    {
      nombre: "Jesus Emiliano",
      presente: true
    },
    {
      nombre:"Josue Carrizales",
      presente:true,
    },
    {
      nombre:"Jonathan Azael",
      presente:false
    },
    {
      nombre:"Roman Isaac",
      presente:false
    },
    {
      nombre:"Eva Dayane",
      presente:false
    },
    {
      nombre: "Leonardo David",
      presente:false
    },
    {
      nombre:"Milton Castañeda",
      presente:false
    },
    {
      nombre:"Alejandro Adrian",
      presente: false
    }
  ]

}
