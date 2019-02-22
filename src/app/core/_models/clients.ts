import gql from 'graphql-tag'

export const createClient = gql `
    mutation createClient(
        $company: String,
        $client_alias: String,
        $address: String,
        $phone: String,
        $link_site: String,
        $contract_date: String,
        $active: Boolean,
        $logo: String
        ) {
    createClient( data: {
        company: $company,
        client_alias: $client_alias,
        address: $address,
        phone: $phone,
        link_site: $link_site,
        contract_date: $contract_date,
        active: $active,
        logo: $logo
        }) {
    id
    company
    client_alias
    address
    phone
    link_site
    contract_date
    active
    logo
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