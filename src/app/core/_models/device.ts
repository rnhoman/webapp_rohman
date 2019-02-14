import gql from 'graphql-tag'

export const QueryDevice = gql `
    {
        devices {
            id
            device_identity_id
            status
            in_out
            cat {
                category
            }
            client {
            company
                billing_customers {
                    billing_name
                }
            }
            panel {
                panel_name
                zona {
                    zona_name
                }
            }
        }
    }
    `;

export const FilterDevice = gql`
  query devices($searchText: String!, $searchClient: String!) {
    devices(where: {
        AND: [{
            client: {
                company: $searchClient
            }
        }, {
            device_identity_id_contains: $searchText
        }]
    }) {
        id
        device_identity_id
        status
        in_out
        cat {
            category
        }
        client {
        company
            billing_customers {
                billing_name
            }
        }
        panel {
            panel_name
            zona {
                zona_name
            }
        }
    }
  }
`;

export interface devices {
  loading: boolean;
  client_array : Array<any>;
}