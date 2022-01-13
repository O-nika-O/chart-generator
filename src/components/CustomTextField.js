import React from 'react';
import { Form } from 'react-bootstrap';

function CustomTextField({customId, label, name, placeholder, value, inputHandler, text}) {
    
    return (
        <Form.Group controlId={customId}>
            <Form.Label>
                <h4>{label}</h4>
            </Form.Label>
            <Form.Control 
                type='text'
                size='lg'
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={inputHandler}
            />
            <Form.Text>
                {text}
            </Form.Text>
        </Form.Group>
    )
}


export default CustomTextField
