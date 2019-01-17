import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
require('./newform.css');
const newform = {
    name: "",
    email: "",
    devicetype: {
        mobile: false,
        tablet: false,
        desktop: false
    },
    country: "",
    address: {
        address1: ""
    }
}
const country = ["India", "Indonesia", "Italy", "Japan"];
class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = newform
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }

        let keyarray = name.split('-');

        if (keyarray.length > 1) {
            let obj = { ...this.state[keyarray[0]] };
            obj[keyarray[1]] = value;
            this.setState({
                ...this.state,
                [keyarray[0]]: obj
            })
        } else {
            this.setState({
                ...this.state,
                [name]: value
            })
        }

    }
    addMoreAddress = () => {
        const address = { ...this.state.address };
        address["address" + (Object.keys(address).length + 1)] = "";
        this.setState({
            address
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {

        return (
            <div className="container">
                <h2>New Form</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="name" sm={3} >Name</Label>
                        <Col sm={9}>
                            <Input type="text" name="name" id="name" onChange={this.handleChange} placeholder="Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={3}>Email</Label>
                        <Col sm={9}>
                            <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mobile" sm={3}>Device Type Preffered</Label>
                        <Col sm={9}>
                            <FormGroup check inline>
                                <Label check><Input type="checkbox" name="devicetype-mobile" id="devicetype-mobile" onChange={this.handleChange} />{' '}Mobile</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check><Input type="checkbox" name="devicetype-tablet" id="devicetype-tablet" onChange={this.handleChange} />{' '}Tablet</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check><Input type="checkbox" name="devicetype-desktop" id="devicetype-desktop" onChange={this.handleChange} />{' '}Desktop</Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="country" sm={3}>Country</Label>
                        <Col sm={9}>
                            <Input type="select" name="country" onChange={this.handleChange} id="country">
                                {
                                    country.map((value, index) => {
                                        return <option key={index} value={value} >{value}</option>
                                    })
                                }
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="address" sm={3}>Address</Label>
                        <Col sm={9}>
                            {
                                Object.keys(this.state.address).map((val, ind) => {
                                    return <FormGroup row key={ind} >
                                        <Label for={"address-" + val} sm={2}>{"Address " + (ind + 1)}</Label>
                                        <Col sm={10}><Input type="text" name={"address-" + val} id={"address-" + val} onChange={(e) => this.handleChange(e)} placeholder={"Address " + (ind + 1)} />
                                        </Col>
                                    </FormGroup>
                                })
                            }
                            <FormGroup check row>
                                <Col >
                                    <Button type="button" onClick={this.addMoreAddress} color="info">Add More Address</Button>
                                </Col>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button type="submit" onClick={this.handleSubmit} color="primary">Submit</Button>
                            <Button type="reset" color="secondary">Reset</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default NewForm;