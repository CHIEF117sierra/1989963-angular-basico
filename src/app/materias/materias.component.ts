import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo:string="Materias";
  materia:string="sss"
  materias: any = [
    {
      nombre:"Laboratorio de Sistemas Electrónicos",
    },
    {
      nombre: "Análisis Numérico",
    },
    {
      nombre:"Base de Datos",
    },
    {
      nombre:"Teoría de Autómatas",
    },
    {
      nombre: "Sistemas Electrónicos",
    },
    {
      nombre: "Laboratorio de Aplicaciones Móviles",
    },
    {
      nombre:"Laboratorio de Basde de Datos",
    },
    {
      nombre:"Liderazgo, Emprendimiento e Innovación",
    },
    {
      nombre:"Desarrollo Web: BackEnd",
    },
    {
      nombre:"Aplicaciones Móviles",
    }
  ]
}
