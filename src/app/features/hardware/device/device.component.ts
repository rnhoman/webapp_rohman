import { QueryDevice, FilterDevice, devices } from './../../../core/_models/device';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sa-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  client_array : Array<any> = [];
  objectKeys = Object.keys;
  result : Array<any> = [];
  res_company : Array<any> = [];

  selectedClients : Object = {};

  loading: boolean = true;
  searchText: string = '';
  subscriptions: Subscription[] = [];

  public in_outLabel : string = "";

  constructor(
    private apollo: Apollo,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getAllClients();
  }

  onSubmit() {
    if (this.selectedClients === "-- All Data Client--") {
      this.getAllClients();
    }

    const querySubscription = this.apollo.watchQuery<devices>({
      query: FilterDevice,
      variables: {
        searchText: this.searchText,
        searchClient: this.selectedClients
      },
    })
    .valueChanges
    .pipe(map((result: any) => result.data.devices))
    .subscribe(data => {
      for(var i = 0; i < data.length; i++){
        if(data[i].in_out === 'out'){
          data[i].in_outLabel = 'Outgoing';
        }else{
          data[i].in_outLabel = 'Incoming';
        }
      }
      this.client_array = data;

      var groups = new Set(this.client_array.map(item => item.client.company)) 
      this.result = [];
      groups.forEach(g => 
        this.result.push({
          name: g, 
          values: this.client_array.filter(i => i.client.company === g)
        }
      ))
    })

    this.subscriptions = [...this.subscriptions, querySubscription];
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
  
  getAllClients() {
    this.apollo.watchQuery({
      query: QueryDevice,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .pipe(map((result: any) => result.data.devices))
    .subscribe(data => {
      for(var i = 0; i < data.length; i++){
        if(data[i].in_out === 'out'){
          data[i].in_outLabel = 'Outgoing';
        }else{
          data[i].in_outLabel = 'Incoming';
        }
      }
      this.client_array = data;

      var groups = new Set(this.client_array.map(item => item.client.company)) 
      this.result = [];
      groups.forEach(g => 
        this.result.push({
          name: g, 
          values: this.client_array.filter(i => i.client.company === g)
        }
      ))
      this.res_company = this.result;
    })
  }
}
