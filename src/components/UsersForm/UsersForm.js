import React, { useState } from 'react'

export default function UsersForm({onAddUsers}) {
    const[formState, setFormState] = useState({
        name: '',
        surname: '',
        email: '',
        error: false,
    })

    return (
        <form className='input_block form' onSubmit={formSubmit}>
            <p className={'error' + (formState.error ? ' show' : '')}
                name='error'
                value={formState.error}
            >Wrong! Fill in all fields!</p>
            <input className='input_elements'
                name='name'
                value={formState.name}
                onChange={getInput}
                placeholder="Enter your name!"
            />
            <input className='input_elements'
                name='surname'
                value={formState.surname}
                onChange={getInput}
                placeholder="Enter your surname!"
            />
            <input className='input_elements'
                name='email'
                value={formState.email}
                onChange={getInput}
                placeholder="Enter your e-mail!"
            />
            <button className='input_btn'>Add Contact</button>
        </form>
    )

    
    function getInput(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    function formSubmit(e) {
        e.preventDefault();
              
        if (!validateFilds(formState.name) ||
            !validateFilds(formState.surname) ||
            !validateFilds(formState.email)
        ) {
            return setFormState({
                name: '',
                surname: '',
                email: '',
                error: true,
            })
        }

        onAddUsers(formState);

        setFormState({
            name: '',
            surname: '',
            email:'',
        })
    }

    function validateFilds(input) {
        return input !=='';
    }
}
    