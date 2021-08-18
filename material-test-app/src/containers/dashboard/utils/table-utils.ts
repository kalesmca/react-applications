
const getColumn = () => {
    const columns = [
      {
        field: 'cifNumber',
        headerName: 'CIF Number',
        width: 150,
      },
        {
          field: 'name',
          headerName: 'Customer name',
          width: 150,
        },
        
        {
          field: 'country',
          headerName: 'Country',
          width: 150,
        },
        {
          field: 'customerSince',
          headerName: 'Customer Since',
          width: 150,
        },
        {
          field: 'type',
          headerName: 'Type',
          width: 150,
        },
        {
          field: 'favorite',
          headerName: 'Favorite',
          width: 150,
        }
        
      ];
    return columns;
}

export default getColumn;