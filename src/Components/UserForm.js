import React, { Component } from 'react';
import FormProfileDetails from "./FormProfileDetails";
import FormUserDetails from "./FormUserDetails";
import ConfirmationPage from "./ConfirmationPage";
import SuccessPage from "./SuccessPage";

class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // proceed to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {

        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }


    render() {
        const { step, firstName, lastName, email, occupation, bio, city } = this.state;
        const values = { firstName, lastName, email, occupation, bio, city }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormProfileDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            case 3:
                return (
                    <ConfirmationPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <SuccessPage
                        prevStep={this.prevStep}
                    />
                )

            default:
                return (
                    <FormProfileDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        prevState={this.prevStep}
                        values={values}
                    />
                )
        }
    }
}

export default UserForm;
