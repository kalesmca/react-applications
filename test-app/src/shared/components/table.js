import React, { Component } from "react";
import Constants from "../../config/constant";
export default class CustomTable extends Component {
    state = {
        rows: []
    }
    constants = new Constants();
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
    calculateAmt = (rowIndex, columnIndex, e) => {
        let tmpRows = this.state.rows;
        tmpRows[rowIndex][columnIndex].value = e.target.value;
        if (columnIndex === 3 || columnIndex === 4) {
            tmpRows[rowIndex][5].value = tmpRows[rowIndex][2].value * tmpRows[rowIndex][3].value + parseInt(tmpRows[rowIndex][4].value);
            this.props.calculateTotal(tmpRows);
        }
        this.setState({ rows: tmpRows });
    }

    render() {
        return (
            <div>

                <div className="row">
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
                                                                ) : column.name === "amt" ? (<span>{column.value}</span>) :
                                                                            column.name === "sno" ? (<span> {rowIndex + 1}</span>) : (<input type={column.type} className="form-control" value={column.value} onChange={(e) => { this.calculateAmt(rowIndex, columnIndex, e) }} />)
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
            </div>
        )
    }
}
