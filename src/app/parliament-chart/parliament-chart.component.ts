import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import ItemSeries from 'highcharts/modules/item-series';

@Component({
  selector: 'app-parliament-chart',
  templateUrl: './parliament-chart.component.html',
  styleUrls: ['./parliament-chart.component.scss']
})
export class ParliamentChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    ItemSeries(Highcharts);
    this.chartOptions = {
      series: [{
        keys: ['name', 'y', 'color', 'label'],
        dataLabels: { enabled: true, format: '{point.label}'},
        data: [
          ['Konfederacja', 43, '#0e213c', 'Konfederacja'],
          ['Prawo i Sprawiedliwość', 200, '#073a76', 'PiS'],
          ['Trzecia Droga', 33, '#a3b612', 'TD'],
          ['Koalicja Obywatelska', 154, '#e56701', 'KO'],
          ['Lewica', 29, '#cc0000', 'Lewica']
        ],
        type: 'item',
        center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100
      }]
    };
  }

  ngOnInit(): void {}
}
