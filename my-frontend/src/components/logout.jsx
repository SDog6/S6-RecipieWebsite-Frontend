import React, { Component } from 'react'
import axios from 'axios';


  function logout (){
    localStorage.clear();
    window.location.href = '/login';
}


  export default logout