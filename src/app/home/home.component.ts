import { Component, OnInit } from '@angular/core';
//chart.js
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  PieChart = [];
  constructor() { }

  ngOnInit() {


// pie chart:
this.PieChart = new Chart('pieChart', {
  type: 'doughnut',
  data: {
    labels: ["Completados", "Faltantes"],
    datasets: [{
      label: 'Completados',
      data: [9, 7],
      backgroundColor: [
        'rgba(123, 31, 162, 1)',
        'rgba(255, 255, 255)'
      ],
      borderColor: [
        'rgba(123, 31, 162, 1)',
        'rgba(123, 31, 162, 1)'
      ],
      borderWidth: 5
    }]
  },
  options: {
    title: {
      text: "Relación del total del llamamientos en la Estaca",
      display: true,
      fontColor: 'rgb(255, 255, 255)'
    },legend: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 255, 255)'
      }
    }
  }
});

}
}
