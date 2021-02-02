import { Component, OnInit } from '@angular/core';
//import Chart from 'chart.js';


@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

    ngOnInit(){
      
    }
}
