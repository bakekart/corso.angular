import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent
  implements OnInit
    , AfterContentInit
    , AfterContentChecked
    , AfterViewChecked
    , AfterViewInit
    , DoCheck
    , OnDestroy

{

  cani = [
    {
      nome: 'roger'
      , razza: 'golden'
      , descrizione: 'descrizione da cani'
    }
  ]

  constructor() {
      console.log("contructor")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
