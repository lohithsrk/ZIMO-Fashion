import React from 'react';
import './sign-in-and-sign-up-page.styles.scss'
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up-page">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage