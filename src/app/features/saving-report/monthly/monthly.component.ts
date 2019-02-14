import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  single: any[] = [
    {
      "name": "Supermal Karawaci",
      "series": [
        {
          "name": "2018-01",
          "value": 17.29
        },
        {
          "name": "2018-02",
          "value": 17.39
        },
        {
          "name": "2018-03",
          "value": 16.29
        },
        {
          "name": "2018-04",
          "value": 20.96
        },
        {
          "name": "2018-05",
          "value": 22.17
        },
        {
          "name": "2018-06",
          "value": 22.01
        },
        {
          "name": "2018-07",
          "value": 21.75
        },
        {
          "name": "2018-08",
          "value": 22.07
        },
        {
          "name": "2018-09",
          "value": 21.99
        },
        {
          "name": "2018-10",
          "value": 21.92
        }
      ]
    }
  ];

  multi: any[];

  view: any[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Saving (kWh)';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  autoScale = true;

  monthly_array : Array<any> = [];
  objectKeys = Object.keys;
  result_monthly : Array<any> = [];

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.getMonthly();
    console.log(this.single);
  }

  getMonthly() {
    const getMonthly = gql `
      {
        report_savings(where : {
          periode_contains: "2018"
          periode_type: "monthly"
          client : {
            company: "Supermal Karawaci"
          }
        }) {
          periode
          saving
          client {
            company
            panel_locations{
              zona {
                zona_name
              }
              panel_name
            }
            billing_customers {
              billing_name
            }
            devices {
              in_out
              device_identity_id
            }
          }
          report_saving_details {
            min_time_in
            max_time_in
            delta_in
            min_time_out
            max_time_out
            delta_out
          }
        }
      }
    `;
    this.apollo.watchQuery({
      query: getMonthly,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .pipe(map((result: any) => result.data.report_savings))
    .subscribe(data => {
      this.monthly_array = data
      var groups = new Set(this.monthly_array.map(item => item.periode))
      this.result_monthly = [];
      groups.forEach(g => 
        this.result_monthly.push({
          name: g,
          value: this.monthly_array.filter(i => i.periode === g)
        }),
      )
      console.log(this.result_monthly)
    })
  }
}
