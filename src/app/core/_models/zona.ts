import { query } from '@angular/animations';
import gql from 'graphql-tag'

export const QueryZona = gql `
{
    zona_locations {
        id
        zona_name
        client_id
    }
  }`;

export const QueryZona_clientID = gql `
    query zona_locations($client_id: Int,) {
    zona_locations( where: {
        client_id: $client_id
    }) {
        id
        zona_name
        client_id
    }
  }`;