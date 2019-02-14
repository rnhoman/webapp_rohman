import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'sa-panel_locations',
  templateUrl: './panel_locations.component.html',
  styleUrls: ['./panel_locations.component.css']
})
export class Panel_locationsComponent implements OnInit {

  panel_array : Array<any> = [];
  objectKeys = Object.keys;
  result : Array<any> = [];
  result_zona : Array<any> = [];
  result_panel : Array<any> = [];

  public in_outLabel : string = "";

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    this.getAllPanels();
  }

  getAllPanels() {
    const getPanel = gql `
      {
        panel_locations {
          client{
            company
          }
          zona {
            zona_name
          }
          panel_name
          serial_number
          panel_desc
          devices {
            device_identity_id
            in_out
          }
          capacity
          installed_date
        }
      }
    `;
    this.apollo.watchQuery({
      query: getPanel,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .pipe(map((result: any) => result.data.panel_locations))
    .subscribe(data => {
      this.panel_array = data

      var groups = new Set(this.panel_array.map(item => item.client.company))
      this.result = [];
      groups.forEach(g => 
        this.result.push({
          name: g,
          values: this.panel_array.filter(i => i.client.company === g)
        }),
      )
      console.log(this.result)
      

      var groups_zona = new Set(this.panel_array.map(item_zona => item_zona.zona.zona_name))
      this.result_zona = [];
      groups_zona.forEach(zonas => 
        this.result_zona.push({
          name: zonas,
          values: this.panel_array.filter(i => i.zona.zona_name === zonas)
        })
      )
      console.log(this.result_zona)
    })
  }
}
