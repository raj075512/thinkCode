import React from 'react'

import {atom } from "recoil";

type AuthModelState={
    isOpen:boolean;
    type:'SignIn'|'SignUp'|'ForgetPassword';

};
const initialAuthState:AuthModelState={
    isOpen:false,
    type: "SignIn",
}


export const AuthModelState=atom<AuthModelState>(
    {
        key:"authModelState",
        default:initialAuthState,
    }
);