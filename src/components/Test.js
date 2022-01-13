import React, {useEffect, useState, useRef} from 'react';
import ChartsTable from './ChartsTable.js';
import {Card, Container, Row, Col, Modal, Button} from "react-bootstrap";
import '../jumbotron.css';

//necessary imports
import { Chart as ChartJS, Title, ArcElement, Legend, DoughnutController, plugins } from 'chart.js';
ChartJS.register(Title, ArcElement, Legend, DoughnutController, plugins);

//Options for chart





function Test() {


    //creates chart
    // useEffect(() => {
        // if(exit.current === 0){
            //     exit.current = exit.current + 1;
            //     return;
        // }
        
        // setShowWindow(true);

        // console.log('i fire on chart')
        // if (canvasRef) {
        //     canvasRef.destroy();
        // }
        // const chartConfigDoug = {
        //     type: 'doughnut',
        //     data: {
        //         labels: currentLabel,
        //         datasets: [{
        //             backgroundColor: currentColor,
        //             data: currentNumber
        //         }]
        //     },
        //     options: {
        //         responsive: true,
        //         maintainAspectRatio: true,
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 fontSize: 23,
        //                 text: [
        //                     currentTitle,
        //                     currentDescription
        //                 ]
        //             },
        //             legend: {
        //                 display: true,
        //                 position: 'left'
        //             }
        //         }
        //     }
        // }


        // if (canvasRef && canvasRef.current) {
        //   const newChartInstance = new ChartJS(canvasRef.current, chartConfigDoug);
        //   setChartInstance(newChartInstance);

        // updateDataset(currentNumber, currentColor, currentLabel, currentTitle, currentDescription);
        // }
    //   }, []);
      
    //   console.log(chartInstance)
    
    // const updateDataset = ( newData, newColor, newLabel, newTitle, newDescription ) => {
    //     //u could use an index here
    //     //chartInstance.data.datasets[datasetIndex].data = newData;
    //     chartInstance.data.datasets[0].data = newData;
    //     chartInstance.data.datasets[0].backgroundColor = newColor;
    //     chartInstance.data.labels = newLabel;
    //     chartInstance.options.plugins.title.text = [newTitle, newDescription];
    //     chartInstance.update();
    //   };
    
    

    

    // console.log('I fire wtf times ???');
    

    return (
        <div>
            <div className='jumbotron'>
                <Card bg='info' text='white'>
                    <Card.Header
                    as='h1'
                    style={{textAlign: 'center'}}
                    >Chart Listing
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>ID</h3>
                                </Col>
                                <Col>
                                    <h3>Description</h3>
                                </Col>
                                <Col>
                                    <h3>Actions</h3>
                                </Col>
                            </Row>
                        </Container>
                        <ChartsTable 
                            settings={chartListing}
                            handleClick={handleClick}    
                        />
                    </Card.Body>
                </Card>
                <Modal 
                    show={showWindow}
                    size='lg'
                    >
                <Modal.Header>
                    <Modal.Title>Chart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <canvas 
                        id="myChart"
                        ref={canvasRef}
                    ></canvas>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size="lg" onClick={closeWindow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}
export default Test
