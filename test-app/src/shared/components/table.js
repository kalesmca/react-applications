import React, { Component } from "react";

export default class CustomTable extends Component {
    state = {
        rows: []
    }
    constructor(props) {
        super(props);
        console.log('props ::', this.props)
    }
    componentWillMount = () => {
        let tmpRow = [];
        tmpRow[0] = JSON.parse(JSON.stringify(this.props.rows));
        this.setState({ rows: tmpRow });
    }
    addRow = (rowIndex, columnIndex) => {
        let tmpRow = this.state.rows;
        tmpRow[rowIndex][columnIndex].name = "added";
        tmpRow.push(JSON.parse(JSON.stringify(this.props.rows)));
        this.setState({ rows: tmpRow });
    }
    deleteRow = (rowIndex) => {
        let tmpRows = this.state.rows;
        tmpRows.splice(rowIndex, 1);
        this.setState({ rows: tmpRows })
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {this.props.columns.map((column) => {
                                return (<th key={column.id}>{column.name}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        {
                                            row.map((column, columnIndex) => {
                                                return (
                                                    <td key={columnIndex}>
                                                        {
                                                            column.name === "action" ? (
                                                                <span onClick={(e) => { this.addRow(rowIndex, columnIndex) }} className="glyphicon glyphicon-plus"></span>
                                                            ) : column.name === "added" ? (
                                                                <a >
                                                                    <span className="glyphicon glyphicon-minus" onClick={(e) => { this.deleteRow(rowIndex) }}></span>
                                                                    <span className="glyphicon glyphicon-pencil" ></span>
                                                                </a>
                                                            ) :
                                                                    column.name === "sno" ? (<span> {rowIndex + 1}</span>) : (<input type="text" className="form-control" />)
                                                        }

                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            </div>
        )
    }
}
