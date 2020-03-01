import React, { Component } from "react";
import Constants from "../../config/constant";

export default class BankComponent extends Component {
    constants = new Constants();
    state = {
        bank: "TMB",
        amt: ""
    }
    constructor(props) {
        super(props);
        console.log('bank info:', props);
    }
    componentWillMount = () => {
        console.log('mount calling');
        console.log('bank ::', this.constants);
    }
    changeBank = (e) => {
        console.log('e ::', this.constants.bankList[e.target.value]);
        this.setState({ bank: this.constants.bankList[e.target.value].name })
        this.props.getChildData({ bank: this.constants.bankList[e.target.value].name, amt: this.state.amt });
    }
    changeAmt = (e) => {
        this.setState({ amt: e.target.value })
    }

    render() {
        return (
            <div className="">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label htmlFor="amt">Amount :</label>
                            <input disabled={this.props.type === "Debit"} id="amt" placeholder="Enter Amount" type="number" onChange={(e => { this.changeAmt(e) })} value={this.state.amt} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bankName">Bank Name :</label>
                            <select id="bankName" className="form-control" onChange={e => { this.changeBank((e)) }} disabled={this.state.amt <= 0}>
                                {
                                    this.constants.bankList.map((bank, index) => {
                                        return (
                                            <option key={bank.id} value={index}>{bank.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}