import React from 'react';
import Swal from 'sweetalert2';

const SuccesfullAleart = ({ title }) => {
    return (
        Swal.fire({
            title: { title },
            icon: "success",
            draggable: true
        })
    )
};

export default SuccesfullAleart;