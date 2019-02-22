import { map } from 'rxjs/operators/map';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { queryClients, UpdateClients, DeleteClients, clients, FilterClients, createClient } from '@app/core/_models/clients';
import Swal from 'sweetalert2';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sa-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public openform_client;

  clients_array : Array<any> = [];
  active_label: string = ''
  clients_data: any = {};
  res_client: Array<any> = [];
  selectedClients: Object = {};
  result: Array<any> = [];

  modalRef: BsModalRef;

  clientId: number;
  company: any;
  company_alias: any;
  address: any;
  phone: any;
  website: any;
  contract: any;
  active: boolean;
  logo: any;

  subscriptions: Subscription[] = [];

  constructor(
    private apollo : Apollo,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getAllCompany();
  }

  getAllCompany() {
    this.apollo.watchQuery({
      query: queryClients,
      fetchPolicy: "network-only"
    })
    .valueChanges
    .pipe(map((result: any) => result.data.clients))
    .subscribe(data => {
      for(let i=0; i < data.length; i++) {
        if(data[i].link_site == 'null') {
          data[i].link_null = '-'
        } else {
          data[i].link_null = data[i].link_site;
        }
      }
      this.clients_array = data;
      this.res_client = this.result;
      console.log(this.res_client)
    })
  }

  testCreate(value){
    console.log(value)
    console.log(this.company)
    console.log(this.company_alias)
    console.log(this.address)
    console.log(this.phone)
    console.log(this.contract)
    console.log(this.website)
    console.log(this.active)
    console.log(this.logo)
  }

  createClient() {
    this.apollo
      .mutate({
        mutation: createClient,
        variables: {
          company: this.company,
          client_alias: this.company_alias,
          address: this.address,
          phone: this.phone,
          contract_date: this.contract,
          link_site: this.website,
          active: this.active
        },
        update: (proxy, { data: { createClient } }) => {
          const data: any = proxy.readQuery({ query: createClient.client_array });
          data.users.push(createClient);
          proxy.writeQuery({ query: createClient.client_array, data });
        }
      })
      .subscribe(({ data }) => {
        console.log(data)
        this.closeFirstModal();
        this.getAllCompany();
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

  removeClients(id) {
    this.apollo
      .mutate({
        mutation: DeleteClients,
        variables: {
          id: id
        },
        update: (proxy, { data: { deleteClients } }) => {
          const data: any = proxy.readQuery({ query: queryClients });
          var index = data.users.map(function (x) { return x.id; }).indexOf(id);
          data.clients.splice(index, 1);
          proxy.writeQuery({ query: queryClients, data });
        }
      })
      .subscribe(({ data }) => {
        Swal(
          'Success!',
          'Client Berhasil Di Hapus!',
          'success'
        );
        this.getAllCompany();
      }, (error) => {
        Swal(
          'Error!',
          'Gagal Hapus Client!',
          'error'
        );
      });
  }

  updateClients(value) {
    this.apollo
      .mutate({
        mutation: UpdateClients,
        variables: {
          company: value,
          client_alias: value,
          address: value,
          phone: value,
          contract_date: value,
          link_site: value,
          active: value
        },
        update: (proxy, { data: { updateClient } }) => {
          const data: any = proxy.readQuery({ query: updateClient.client_array });
          data.users.push(updateClient);
          proxy.writeQuery({ query: updateClient.client_array, data });
        }
      })
      .subscribe(({ data }) => {
        console.log(data);
        Swal(
          'Success!',
          'Client Berhasil Di Perbarui!',
          'success'
        );
        this.closeFirstModal();
        this.getAllCompany();
      }, (error) => {
        Swal(
          'Error!',
          'Gagal Memperbarui Data Client!',
          'error'
        );
        console.log('there was an error sending the query', error);
      });
  }

  onSubmit() {
    if (this.selectedClients === "-- All Data Client--") {
      this.getAllCompany();
    }

    const querySubscription = this.apollo.watchQuery<clients>({
      query: FilterClients,
      variables: {
        searchClient: this.selectedClients
      },
    })
    .valueChanges
    .pipe(map((result: any) => result.data.clients))
    .subscribe(data => {
      for(let i=0; i < data.length; i++) {
        if(data[i].link_site == 'null') {
          data[i].link_null = '-'
        } else {
          data[i].link_null = data[i].link_site;
        }
      }
      this.clients_array = data;
      console.log(this.selectedClients);
    })

    this.subscriptions = [...this.subscriptions, querySubscription];
  }

  showEditClientForm(clients_data, template) {
    console.log(clients_data.id)
    this.clientId = clients_data.id
    this.company = clients_data.company;
    this.company_alias = clients_data.client_alias;
    this.address= clients_data.address;
    this.phone= clients_data.phone; 
    this.website= clients_data.link_null;
    this.contract= clients_data.contract_date;
    this.active= clients_data.active_label;

    this.clients_data = this.clients_array;
    this.modalRef = this.modalService.show(template);
  }

  openModal(templatenew: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templatenew);
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
