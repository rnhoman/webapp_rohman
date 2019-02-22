import { QueryZona, QueryZona_clientID } from './../../../../core/_models/zona';
import { QueryPanel, QueryDeviceCat, QueryPanel_zonaID } from './../../../../core/_models/panel';
import { createClient, queryClients } from './../../../../core/_models/clients';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2';

@Component({
  selector: 'sa-createDevice',
  templateUrl: './createDevice.component.html',
  styleUrls: ['./createDevice.component.css']
})
export class CreateDeviceComponent implements OnInit {

  modalRef: BsModalRef;
  public openform_client;
  public openform_zona;
  public openform_panel;
  //mengambil value date pada ngx-bootstrap
  // myDateValue: Date;

  client_array: Array<any> = [];
  panel_array: Array<any> = [];
  zona_array: Array<any> = [];
  devicecat_array: Array<any> = [];

  // Client
  client: any = {};
  company: any;
  address: any;
  phone: any;
  contract_date: any;

  constructor(private apollo: Apollo, private modalService: BsModalService) { }

  ngOnInit() {
    this.getClients();
    this.getPanels();
    this.getZona();
    this.getDeviceCat();
    //menampilkan date pada contract_date
    // this.myDateValue = new Date;
  }

  createClient(value) {
    return this.apollo
      .mutate({
        mutation: createClient,
        variables: {
          company: value,
          address: value,
          phone: value,
          contract_date: value
        },
        update: (proxy, { data: { createClient } }) => {
          const data: any = proxy.readQuery({ query: createClient.client_array });
          data.users.push(createClient);
          proxy.writeQuery({ query: createClient.client_array, data });
        }
      })
      .subscribe(({ data }) => {
        console.log(data);
        console.log(this.company)
        console.log(this.address)
        this.closeFirstModal();
        this.getClients();
        Swal(
          'Success!',
          'Client succesfully added!',
          'success'
        );
      }, (error) => {
        Swal(
          'Failed!',
          'Client failed added!',
          'error'
        );
      });
  }

  // onDateChange(newDate: Date){
  //   console.log(newDate);
  // }
  getClients() {
    this.apollo.watchQuery({
      query: queryClients,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .map((result: any) => result.data.clients)
    .subscribe(data => {
      this.client_array = data;
    })
  }

  getPanels() {
    this.apollo.watchQuery({
      query: QueryPanel,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .map((result: any) => result.data.panel_locations)
    .subscribe(data => {
      this.panel_array = data;
    })
  }

  getZona_clientId(client_id) {
    // console.log(client_id);
    this.zona_array = [];
    this.apollo.watchQuery({
      query: QueryZona_clientID,
      fetchPolicy: "network-only",
      variables: {
        client_id: client_id,
      }
    })
    .valueChanges
    .map((result: any) => result.data.zona_locations)
    .subscribe(data => {
      console.log(data);
      this.zona_array = data;
    })
  }

  getPanel_zonaId(id) {
    // console.log(id);
    this.panel_array = [];
    this.apollo.watchQuery({
      query: QueryPanel_zonaID,
      fetchPolicy: "network-only",
      variables: {
          id: id 
      }
    })
    .valueChanges
    .map((result: any) => result.data.panel_locations)
    .subscribe(data => {
      // console.log(data);
      this.panel_array = data;
    })
  }


  getZona() {
    this.apollo.watchQuery({
      query: QueryZona,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .map((result: any) => result.data.zona_locations)
    .subscribe(data => {
      this.zona_array = data;
    })
  }

  getDeviceCat() {
    this.apollo.watchQuery({
      query: QueryDeviceCat,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .map((result: any) => result.data.device_categories)
    .subscribe(data => {
      this.devicecat_array = data;
    })
  }

  openModal_zona(template_zona: TemplateRef<any>) {
    if (this.openform_zona == "open") {
      this.modalRef = this.modalService.show(template_zona);
    }
    this.getPanel_zonaId(this.openform_zona);
  }

  openModal_panel(template_panel: TemplateRef<any>) {
    if (this.openform_panel == "open") {
      this.modalRef = this.modalService.show(template_panel);
    }
  }

  openModal(template: TemplateRef<any>) {
    if (this.openform_client == "open") {
      this.modalRef = this.modalService.show(template);
    }
    this.getZona_clientId(this.openform_client);
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

}
