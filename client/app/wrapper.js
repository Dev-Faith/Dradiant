"use client"
import React from 'react';
import UseAuth from './UseAuth';


const Wrapper = ({children}) => {
    UseAuth();
  return (
    <div>{children}</div>
  )
}

export default Wrapper;