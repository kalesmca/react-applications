import React, { Component } from 'react';
import Constants from "../../config/constant";
import ApiService from '../../shared/services/api-service';


export default class ShowAll extends Component {

    state = {
        rows: [],
        totalAmt: 0
    }
    apiService;
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
    }

    componentWillMount = () => {
        this.getAllEntry();
    }
    changeType = (e) => {
        console.log('e ::', e);
    }
    getAllEntry = () => {
        this.apiService.getAllEntry().then((res) => {
            console.log('response::', res);
            if (res.data && res.data.data) {
                console.log('res.data.data  ::', res.data.data)
                let rowList = res.data.data.data;
                let tmpTotal = 0
                rowList.map((row) => {
                    tmpTotal += parseInt(row.purchaseAmt);
                });
                this.setState({ rows: rowList, totalAmt: tmpTotal });


                console.log(this.state.rows)
            }
        })
    }
    constants = new Constants();
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-sm-6">
                        <table className="table" style={{ textAlign: "center" }}>
                            <tr>
                                <td>
                                    <span>Month : </span><span> March</span>
                                </td>
                                <td>
                                    <span>
                                        <select id="entry-type" className="form-control" onChange={e => { this.changeType(e) }}>
                                            {
                                                this.constants.entryTypes.map((entry, index) => {
                                                    if (index < 2) {
                                                        return (
                                                            <option key={entry.id} value={index}>{entry.type}</option>
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </span>
                                </td>
                                <td>
                                    <span>Total :</span> <span>{this.state.totalAmt}</span>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

                <br></br>

                <div className="row">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {
                                    this.constants.entryListColumns.map((column) => {
                                        return (<th key={column.id}>{column.name}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        {
                            this.state.rows.length ? (<tbody>
                                {this.state.rows.map((row, rowIndex) => {
                                    return (
                                        <tr key={rowIndex}>
                                            <td>{rowIndex + 1}</td>
                                            <td>{row.entryDate}</td>
                                            <td>{row.entryType}</td>
                                            <td>{row.purchaseAmt}</td>
                                            <td>{row.reason}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>) : (<tbody>
                                <tr>
                                    <td colSpan="4"> No Record found</td>
                                </tr>
                            </tbody>)
                        }


                    </table>
                </div>
            </div>
        )
    }


}