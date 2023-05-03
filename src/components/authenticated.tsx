import React from 'react';

 export const withAuth = (Component: any) => {
    return (
         false ? <Component /> : <></>
    )
};