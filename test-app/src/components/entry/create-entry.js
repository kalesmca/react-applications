import React, { Component } from "react";
import "./create-entry.scss";

export default class CreateEntry extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="main-page">
                <div class="container">
                    <form>
                        <h2>Entry</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="first">Entry Type</label>
                                    <input type="text" class="form-control" placeholder="" id="first" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="last">Last Name</label>
                                    <input type="text" class="form-control" placeholder="" id="last" />
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="company">Company</label>
                                    <input type="text" class="form-control" placeholder="" id="company" />
                                </div>


                            </div>

                            <div class="col-md-6">

                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="phone" />
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" placeholder="email" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="url">Your Website <small>Please include http://</small></label>
                                    <input type="url" class="form-control" id="url" placeholder="url" />
                                </div>

                            </div>
                        </div>


                        <label for="contact-preference">When is the best time of day to reach you?</label>
                        <div class="radio">
                            <label>
                                <input type="radio" name="contact-preference" id="contact-preference" value="am" checked />Morning
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="contact-preference" id="contact-preference" value="pm" checked />Evening
      </label>
                        </div>

                        <label for="newsletter">Would you like to recieve our email newsletter?</label>
                        <div class="checkbox">

                            <label>
                                <input type="checkbox" value="Sure!" id="newsletter" /> Sure!
      </label>
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}