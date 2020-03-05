import React, { Component } from 'react';
import Constants from "../../config/constant";
import ApiService from '../../shared/services/api-service';


export default class ShowAll extends Component {

    state = {
        rows: [],
        totalAmt: 0,
        entryType: "Credit"
    }
    apiService;
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
    }

    componentWillMount = () => {
        this.getAllByType(this.state.entryType);
    }
    changeType = (e) => {
        console.log('e ::', e);
        this.setState({ entryType: this.constants.entryTypes[e.target.value] });
        this.getAllByType(this.constants.entryTypes[e.target.value].type);
    }
    getAllByType = (type) => {
        let query = { entryType: type }
        this.apiService.getDataByQuery(query).then((res) => {
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
                                        <select id="entry-type" className="form-control" value={this.state.entryType} onChange={e => { this.changeType(e) }}>
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
                                    <td colSpan="4" style={{ textAlign: "center" }}> No Record found</td>
                                </tr>
                            </tbody>)
                        }


                    </table>
                </div>
            </div>
        )
    }


}