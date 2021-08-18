import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export function DataTableComponent(props) {
  console.log('pros:', props)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.cols}
        pageSize={5}
        
        disableSelectionOnClick
      />
    </div>
  );
}

export const DefaultTable = (props) =>{
  return(
    <div>Default Table comps</div>
  )
}
