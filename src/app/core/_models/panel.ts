import gql from 'graphql-tag'

export const QueryPanel = gql `
    {
        panel_locations {
            id
            panel_name
            zona {
                id
            }
        }
    }`;

export const QueryDeviceCat = gql `
    {
        device_categories {
            category
        }
    }`;

export const QueryPanel_zonaID = gql `
    query panel_locations($id: Int,) {
    panel_locations( where: {
        zona: {id: $id}
    }) {
        id
        panel_name
        zona { id }
    }
  }`;