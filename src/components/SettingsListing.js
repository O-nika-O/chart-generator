import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function SettingsListing({settings}) {


    let htmlMarkup = [];

    if(settings.length === 0) {
        return(
            <h3
                style={{textAlign: "center"}}>
                No items available
            </h3>
        )
    }
    settings.map((settingsObject, index) => (
        
        htmlMarkup.push(
            <Row 
                key={'index-' + index}
                style={{fontSize: "1.3em"}}
                >
                <Col>{settingsObject.label}</Col>
                <Col>{settingsObject.number}</Col>
                <Col>{settingsObject.color}</Col>
            </Row>
        )
    ));

    // console.log('test')

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Labels</h4>
                </Col>
                <Col>
                    <h4>Numbers</h4>
                </Col>
                <Col>
                    <h4>Colors</h4>
                </Col>
            </Row>
            {htmlMarkup}
        </Container>
    )
}

export default SettingsListing
