import React, { Component } from 'react';
import Constants from "../../config/constant";
import ApiService from '../../shared/services/api-service';


export default class ShowAll extends Component {

    state = {
        rows: []
    }
    apiService;
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
    }

    componentWillMount = () => {
        this.getAllEntry();
    }
    getAllEntry = () => {
        this.apiService.getAllEntry().then((res) => {
            console.log('response::', res);
            if (res.data && res.data.data) {
                console.log('res.data.data  ::', res.data.data)
                this.setState({ rows: res.data.data.data });
                console.log(this.state.rows)
            }
        })
    }
    constants = new Constants();
    render() {
        return (
            <div className="container">

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
        )
    }


}