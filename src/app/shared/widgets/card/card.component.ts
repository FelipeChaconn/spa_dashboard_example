import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts=Highcharts;
  chartOptions= {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    series: [
      {data:[15,30,15,100]}]

}
  }}
