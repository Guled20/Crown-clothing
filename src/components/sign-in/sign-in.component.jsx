import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle,auth } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }
       
    }
    
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in With Your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required 
                        handleChange={this.handleChange}
                        label='Email'
                    />
                   
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required 
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;