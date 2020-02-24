import React from 'react'

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles'


import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super()
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword ) {
            alert("Passwords don't match!")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,  {displayName})

            this.state = ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign Up with your email address</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value= {displayName}
                        handleChange={this.handleChange}
                        label='display name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value= {email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value= {password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value= {confirmPassword}
                        handleChange={this.handleChange}
                        label='confirm password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp


