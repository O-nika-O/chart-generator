import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


function ChartsTable({settings, handleClick}) {
    


    
    let htmlMarkup = [];

    settings.map((settingsObject, index) => (
        
        htmlMarkup.push(
            <Row 
                key={'index-' + index}
                style={{fontSize: "1.3em", marginTop: "1.2em"}}
                >
                <Col>{settingsObject._id}</Col>
                <Col>{settingsObject.description}</Col>
                <Col>
                    <Button
                    variant='danger'
                    size='lg'
                    type='button'
                    onClick={() => handleClick(settingsObject._id)}
                    >Preview Chart</Button>
                </Col>
            </Row>
        )
    ));
    
    
    return (
        <Card 
        bg='dark'
        text='white'
        >
            <Card.Body>
                <Container>
                    {htmlMarkup}
                </Container>
            </Card.Body>
        </Card>
        

)
}

export default ChartsTable
