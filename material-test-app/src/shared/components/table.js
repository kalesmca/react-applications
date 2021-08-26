import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export function DataTableComponent(props) {
  console.log("pros:", props);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.cols}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
}

const useStyles = makeStyles({
  table: {
    maxHeight: 500,
  },
});


export function DefaultTable(props) {
  console.log("default table:", props);
  const classes = useStyles();

  return (
    <div>
    {props.data && props.data.length>0 ? <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(props.data[0]).map((key, index) => {
              return <TableCell key={index} align="right">{key.toUpperCase()}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((ppt, index) => {
                return <TableCell key={index} align="right">{row[ppt]}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : ""}
    
    
    </div>
  );
}
