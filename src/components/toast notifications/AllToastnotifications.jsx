import React from 'react';

export const Toastsuccess = ({ success }) => {
    return (
        <>
            <p className='text-xs'> {success} </p>
        </>
    )
}

export const Toasterror = ({ error }) => {
    return (
        <>
            <p className='text-xs'> {error} </p>
        </>
    )
}

export const Toastwarning = ({ warning }) => {
    return (
        <>
            <p className='text-xs'> {warning} </p>
        </>
    )
}