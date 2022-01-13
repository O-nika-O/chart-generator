import React from 'react'
import { Form } from 'react-bootstrap'

function ColorPicker({ value, inputHandler }) {
    return (
        <Form.Group controlId='colorPicker'>
            <Form.Label>
                <h4>Color Picker</h4>
            </Form.Label>
            <Form.Select
                as='select'
                name='colorPicker'
                value={value}
                onChange={inputHandler}
            >
                <option value=''>Select a color</option>
                <option value='orange'>Orange</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='purple'>Purple</option>
                <option value='yellow'>Yellow</option>
                <option value='pink'>Pink</option>
            </Form.Select>
            <Form.Text>
                Select a color
            </Form.Text>
        </Form.Group>
    )
}

export default ColorPicker
