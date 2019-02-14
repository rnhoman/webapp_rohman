import gql from 'graphql-tag'

export const createClient = gql `
    mutation createClient(
        $company: String,
        $address: String,
        $phone: String,
        $contract_date: String
        ) {
    createClient( data: {
        company: $company,
        address: $address,
        phone: $phone,
        contract_date: $contract_date
        }) {
    id
    company
    address
    phone
    contract_date
    }
  }`;

export const queryClients = gql `
    {
        clients {
            id
            client_alias
            company
            address
            phone
            contract_date
            link_site
            active
        }
    }
    `;

export const UpdateClients = gql `
    mutation(
        $id: Int, 
        $company: String,
        $client_alias: String,
        $address: String,
        $phone: String,
        $contract_date: String,
        $link_site: String,
        $active: Boolean,
    ) {
        updateClient(
            data: {
                company: $company,
                client_alias: $client_alias,
                address: $address,
                phone: $phone,
                contract_date: $contract_date,
                link_site: $link_site,
                active: $active                
            },
            where: {
                id: $id
            }) {
                id
                company
                client_alias
                address
                phone
                contract_date
                link_site
                active
            }
    }
    `;

export const DeleteClients = gql `
    mutation($id: Int) {
        deleteClient(
            where: {id: $id}) {
                id
        }
    }
    `;

export const FilterClients = gql`
  query clients($searchClient: String!) {
    clients(where: {company: $searchClient}) {
        id
        company
        client_alias
        address
        phone
        contract_date
        link_site
        active
    }
  }
`;

export interface clients {
  loading: boolean;
  clients_array : Array<any>;
}

export const accountGroups = gql `
    {
        account_groups {
            group_desc
        }
    }
    `;