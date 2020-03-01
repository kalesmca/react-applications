import React, { Component } from "react";
import "./create-entry.scss";
import BankComponent from '../../shared/components/bank-info';
import CustomTable from '../../shared/components/table';
import Constants from '../../config/constant';
import ApiService from '../../shared/services/api-service';

export default class CreateEntry extends Component {
    state = {
        entryType: "Credit",
        purchaseAmt: 0
    }
    apiService;
    constructor(props) {
        super(props);
        this.apiService = new ApiService();

    }
    constants = new Constants();
    changeType = (e) => {
        console.log('type ::', e.target.value);
        this.setState({ entryType: this.constants.entryTypes[e.target.value].type })
    }
    getChildData = (data) => {
        console.log('parent data::', data);
    }
    getTransfredBankInfo = (data) => {
        console.log('transffered Data', data);
    }
    showPurchasepop = () => {
        console.log('popup calling');
    }
    setTotalValue = (data) => {
        console.log('data ::', data);
        let tmpTotal = 0
        data.map((row) => {
            tmpTotal = tmpTotal + row[4].value;
        });
        this.setState({ purchaseAmt: tmpTotal });
    }
    saveEntry = (e) => {
        let reqParam = {
            entryType: this.state.entryType,
            purchaseAmt: this.state.purchaseAmt,
        }
        this.apiService.saveEntry(reqParam).then((res) => {
            console.log('Api response ::', res);
        });
    }
    render() {
        return (
            <div className="main-page">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="entry-date">Date :</label>
                                        <input id="entry-date" type="date" className="form-control" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="entry-type">Entry Type :</label>
                                        <select id="entry-type" className="form-control" onChange={e => { this.changeType(e) }}>
                                            {
                                                this.constants.entryTypes.map((entry, index) => {
                                                    return (
                                                        <option key={entry.id} value={index}>{entry.type}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="entry-reason">Reason :</label>
                                        <textarea id="entry-reason" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <input type="button" className="btn btn-primary" value="save" onClick={(e) => { this.saveEntry(e) }} />
                                    </div>
                                    {this.state.entryType === "Debit" ?
                                        <div className="form-group col-sm-4">
                                            <input type="button" className="btn btn-primary" value="Add Purchase bills" data-toggle="modal" data-target="#myModal" />
                                        </div> : ""}
                                    {/* <div class="custom-control custom-switch col-sm-6">
                                        <input type="checkbox" class="custom-control-input" id="customSwitches" />
                                        <label class="custom-control-label" for="customSwitches">Toggle this switch element</label>
                                    </div> */}
                                </div>

                            </div>

                            {
                                this.state.entryType != "" ?
                                    this.state.entryType === "Credit" || this.state.entryType === "Debit" ? (<div className="col-sm-3">
                                        <BankComponent getChildData={this.getChildData} type={this.state.entryType} title="Bank Info" />
                                    </div>) : (<div><div className="col-sm-3">
                                        <BankComponent getChildData={this.getChildData} type={this.state.entryType} title="Debited From" />
                                    </div> <div className="col-sm-1"></div> <div className="col-sm-3">
                                            <BankComponent type={this.state.entryType} getChildData={this.getTransfredBankInfo} title="Credited To" />
                                        </div> </div>) : ""
                            }




                        </div>

                    </form>
                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Purchase Info</h4>
                            </div>
                            <div className="modal-body" style={{ maxHeight: "400px", overflow: "scroll" }}>
                                <CustomTable calculateTotal={this.setTotalValue} columns={this.constants.purchaseTableColumns} rows={this.constants.blankRow} />
                            </div>
                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <span>Total : </span> <span>{this.state.purchaseAmt}</span>
                                    </div>
                                    <div className="col-sm-6"></div>
                                    <div className="col-sm-3">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}