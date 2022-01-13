import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button, Modal, ButtonGroup } from 'react-bootstrap';
import CustomTextField from './CustomTextField.js';
import ColorPicker from './ColorPicker.js';
import SettingsListing from './SettingsListing.js';
import ChartDisplay from './chartDisplay.js';
import '../jumbotron.css';

function ChartGenerator() {


    const [chartTitle, setChartTitle] = useState('');
    const [chartDescription, setChartDescription] = useState('');
    const [currentLabel, setCurrentLabel] = useState('');
    const [currentNumber, setCurrentNumber] = useState('');
    const [currentColor, setCurrentColor] = useState('');
    const [settingsList, setSettingsList] = useState([]);
    const [colors, setColors] = useState([]);
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [displayedChart, setDisplayedChart] = useState(false);
    const [windowContent, setWindowContent] = useState('');
    const [windowTitle, setWindowTitle] = useState('');
    const [showWindow, setShowWindow] = useState(false);

    // useEffect(() => {
    //     console.log('test')
    // })
    
    const inputHandler = () => e => {
        e.preventDefault();
        if(e.target.name === 'chartTitle') {
            setChartTitle(e.target.value)
        }
        if(e.target.name === 'chartDescription') {
            setChartDescription(e.target.value)
        }
        if(e.target.name === 'currentLabel') {
            setCurrentLabel(e.target.value)
        }
        if(e.target.name === 'currentNumber') {
            setCurrentNumber(e.target.value)
        }
        if(e.target.name === 'colorPicker') {
            setCurrentColor(e.target.value)
        }   
    };

    const handleClick = () => {
        
        setSettingsList((settingsList) => [...settingsList,
            {
                label: currentLabel,
                number: currentNumber,
                color: currentColor
            }
        ])
       
        setColors((colors) => [...colors, currentColor]);
        setLabels((labels) => [...labels, currentLabel]);
        setNumbers((numbers) => [...numbers, currentNumber]);


        // console.log(settingsList)
        
    }

    const displayChart = () => {
    
        setDisplayedChart(true)
    }

    const saveChart = () => {
        fetch('/api/savechart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: chartTitle,
                description: chartDescription,
                settings: settingsList,
                colors: colors,
                labels: labels,
                numbers: numbers
            })
        }).then((res) => { 
            
            return res.json();
        }).then((responseAsJson) => {
            
            if(responseAsJson.success) {
                setWindowTitle('Success');
                setWindowContent(responseAsJson.message);
                setShowWindow(true);
            } else {
                setWindowTitle('Error');
                setWindowContent(responseAsJson.message);
                setShowWindow(true);
            }
        })
    }
    
    const closeWindow = () => {
        setShowWindow(false);

    }
    

    return (
        <div className="jumbotron" >
            <Card bg='info' text='white' >
                <Card.Header 
                    as='h1'
                    style={{textAlign: 'center'}}
                    >
                    Chart Generator
                </Card.Header>
                <Card.Body>
                    <Card 
                        bg='light'
                        style={{color: 'black', marginTop: '1.5em'}}
                        >
                        <Card.Header 
                        as='h3'
                        >
                            Title and description
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <CustomTextField 
                                            customId='chartTitle'
                                            label='Title'
                                            name='chartTitle'
                                            placeholder='Type in a brief title...'
                                            value={chartTitle}
                                            inputHandler={inputHandler()}
                                            text='Chart title'
                                        />
                                    </Col>
                                    <Col>
                                        <CustomTextField 
                                            customId='chartDescription'
                                            label='Description'
                                            name='chartDescription'
                                            placeholder='Type in a description'
                                            value={chartDescription}
                                            inputHandler={inputHandler()}
                                            text='Chart description'
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card 
                        bg='light'
                        style={{color: 'black', marginTop: '1.5em'}}
                        >
                        <Card.Header 
                        as='h3'
                        >
                            Numeric values and labels
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <CustomTextField 
                                                customId='currentLabel'
                                                label='Label'
                                                name='currentLabel'
                                                placeholder='Label...'
                                                value={currentLabel}
                                                inputHandler={inputHandler()}
                                                text='Label'
                                            />
                                    </Col>
                                    <Col>
                                        <CustomTextField 
                                                customId='currentNumber'
                                                label='Numeric Value'
                                                name='currentNumber'
                                                placeholder='Number...'
                                                value={currentNumber}
                                                inputHandler={inputHandler()}
                                                text='Numeric Value'
                                            />
                                    </Col>
                                    <Col>
                                        <ColorPicker
                                            value={currentColor}
                                            inputHandler={inputHandler()}                                            
                                        />
                                    </Col>
                                    <Col>
                                        <Button
                                            type='button'
                                            size='lg'
                                            variant='success'
                                            style={{marginTop: "2em"}}
                                            onClick={handleClick}
                                        >
                                            Add Settings
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card 
                        bg='light'
                        style={{color: 'black', marginTop: '1.5em'}}
                        >
                        <Card.Header 
                        as='h3'
                        >
                            Settings Listing
                        </Card.Header>
                        <Card.Body>
                            <SettingsListing 
                                settings={settingsList}
                            />
                        </Card.Body>
                    </Card>
                    <Card 
                        bg='light'
                        style={{color: 'black', marginTop: '1.5em'}}
                        >
                        <Card.Header 
                        as='h3'
                        >
                            Chart
                        </Card.Header>
                        <Card.Body>
                            {(displayedChart === false)?
                            (
                                <div
                                style={{textAlign:"center"}}
                                >
                                <Button 
                                type="button"
                                variant="danger"
                                size="lg"
                                onClick={displayChart}
                                >
                                    Create Chart
                                </Button>
                                </div>
                            ):(
                                <ChartDisplay
                                    title={chartTitle}
                                    description={chartDescription}
                                    numbers={numbers}
                                    labels={labels}
                                    colors={colors}
                                />
                            )}
                        </Card.Body>
                    </Card>
                    <Card 
                    bg="light"
                    style={{color:"black", marginTop:'1.5em'}}
                    >
                        <Card.Body>
                            <ButtonGroup>
                                {
                                    (displayedChart === true)?
                                    (
                                        <Button
                                        variant='success'
                                        size='lg'
                                        type='button'
                                        onClick={saveChart}
                                        >
                                            Save Chart
                                        </Button>):
                                    (null)
                                }
                                <Button 
                                href="/chartlisting"
                                variant='warning'
                                size='lg'
                                >Charts Listing
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>

            <Modal show={showWindow}>
                <Modal.Header>
                    <Modal.Title>{windowTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{windowContent}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size="lg" onClick={closeWindow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

)
}

export default ChartGenerator
