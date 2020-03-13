import React, { useState, useEffect } from 'react'
import Row from './Row'
import { Api } from './Api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import qs from 'qs'


import './../styles/ContactToast.scss'




export let Input = (props) => {

    const [Width, setWidth] = useState('50%')

    useEffect(() => {
        setWidth(props.width)
    }, [props.width])

    return (
        <div className="input-container" style={
            {
                width: Width
            }
        }>

            <label for={props.id}>{props.label}</label>
            <input {...props} />
        </div>
    )

}




export let TextArea = (props) => {

    const [Width, setWidth] = useState('50%')

    useEffect(() => {
        setWidth(props.width)
    }, [props.width])

    return (
        <div className="input-container" style={
            {
                width: Width
            }
        }>
            <label for={props.id}>{props.label}</label>
            <textarea {...props}>{props.children}</textarea>
        </div>
    )

}


let basariliToast = (message) => {

    toast(message, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-basarili',
    });
}



function ContactForm() {

    let sendMail = (e) => {
        e.preventDefault()

        console.log(
            Name
        )


        Api.post(
            'index.php',
            qs.stringify(
                {
                    'name': Name,
                    'phone': Phone,
                    'email': Email,
                    'company': Company,
                    'message': Message
                }
            )
        ).then(
            (response) => {



                if (response.data.status === 'OK') {
                    basariliToast('Success 😀');
                } else {
                    basariliToast('Error');
                }
            }

        );


        document.location = "./#footer"


    }


    const [Name, setName] = useState(null)
    const [Phone, setPhone] = useState(null)
    const [Email, setEmail] = useState(null)
    const [Company, setCompany] = useState(null)
    const [Message, setMessage] = useState(null)


    return (



        <form onSubmit={sendMail}>
            <Row style={{
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <Input onChange={(e) => setName(e.target.value)} id='name' label="Name" width='40%' name="name" placeholder="" />
                <Input onChange={(e) => setPhone(e.target.value)} id='phone' label="Phone" width='40%' name="phone" placeholder="" />
                <Input onChange={(e) => setEmail(e.target.value)} id='email' label="Email" width='40%' name="email" placeholder="" />
                <Input onChange={(e) => setCompany(e.target.value)} id='company' label="Company" width='40%' name="company" placeholder="" />
                <TextArea onChange={(e) => setMessage(e.target.value)} label="Message" width='90%' />
                <ToastContainer />
            </Row>
            <Row>
                <button>Send</button>
            </Row>
        </form>

    )
}

export default ContactForm
