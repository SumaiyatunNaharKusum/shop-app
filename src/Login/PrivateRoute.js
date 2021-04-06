import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
// import jwt_decode from "jwt-decode";

export const PrivateRoute = ({children, ...rest}) => {
    const location =useLocation()
   const email =localStorage.getItem("email")
    return (
        <Route
      {...rest}
      render={ location  =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              location 
            }}
          />
        )
      }
    />
    );
};