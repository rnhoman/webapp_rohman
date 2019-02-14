import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators/map';
import { Subscription } from 'rxjs';
import { accountGroups } from '../../../core/_models/clients'

@Component({
  selector: 'sa-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  groups_array : Array<any> = []
  result_groups: Array<any> = []

  constructor(private apollo : Apollo) { }

  ngOnInit() {
    this.getAllGroups();
  }

  getAllGroups() {
    this.apollo.watchQuery({
      query: accountGroups,
      fetchPolicy: 'network-only'
    })
    .valueChanges
    .pipe(map((result_groups: any) => result_groups.data.account_groups))
    .subscribe(data => {
      this.groups_array = data;
    })
  }

}
