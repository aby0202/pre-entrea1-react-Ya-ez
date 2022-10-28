import Swal from 'sweetalert2';
import React from 'react';
import "./SweetAlert.css"

export const alertInfo = (msg='') => {
    const Toast =Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    })
    Toast.fire({
        text:msg
    })
}

export const alertConfirm = (msg='')=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer:3500,
    })  
    Toast.fire({
        icon: 'success',
        title: 'Exitó',
        text:msg
    })

}

