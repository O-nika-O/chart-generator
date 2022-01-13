import React, {useEffect, useState, useRef} from 'react';
import ChartsTable from './ChartsTable.js';
import {Card, Container, Row, Col, Modal, Button} from "react-bootstrap";
import '../jumbotron.css';

//necessary imports
import { Chart as ChartJS, Title, ArcElement, Legend, DoughnutController, plugins } from 'chart.js';
ChartJS.register(Title, ArcElement, Legend, DoughnutController, plugins);


function ChartListing() {
    
    //state for initial render
    const [chartListing, setChartListing] = useState([]);


    //states for modal
    const [data, setData] = useState({});
    const [showWindow, setShowWindow] = useState(false);
    
    //functinal refs
    const canvasRef = useRef(null)
    const idRef = useRef(null)    
    const exit = useRef(0)
    const exit2 = useRef(0)

    
    //watch out for clean-up
    //fetches initial render
    useEffect(() => {
        fetch('/api/readchart/all', {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((responseAsJson) => {
            return setChartListing(responseAsJson.documents);
        })
        console.log('i fire once')
    }, [])




    //on click fetches data and sets it to state
    useEffect(() => {

        if(exit.current === 0){
            exit.current =+ 1
            return
        }

        fetch('/api/readchart/' + idRef.current , {
            method: 'GET',
        }).then(res => {
            return res.json();
        }).then(responseAsJson => {
            setData(responseAsJson.documents);        
        })

    }, [idRef.current])


    //use the change of state in data to render the chart
    useEffect(() => {
      if (exit2.current === 0) {
        exit2.current = +1;
        return;
      }

      const chartConfigDoug = {
        type: "doughnut",
        data: {
          labels: data.labels,
          datasets: [
            {
              backgroundColor: data.colors,
              data: data.numbers,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            title: {
              display: true,
              fontSize: 23,
              text: [data.title, data.description],
            },
            legend: {
              display: true,
              position: "left",
            },
          },
        },
      };

      if (canvasRef && canvasRef.current) {
        new ChartJS(canvasRef.current, chartConfigDoug);
    }

    } , [data])


    //sets chart id for modal and calls an effect to fetch data 
    const handleClick = (chartId) => {
        console.log('click uwu')
        setShowWindow(true);
        idRef.current = chartId;
    }

    const closeWindow = () => {
        setShowWindow(false);
    }

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
                        <Card 
                            bg='light'
                            text='black'
                            style={{color: 'black', marginTop: '1.3rem'}}
                        >
                            <Card.Body>
                                <Button
                                    type='button'
                                    size='lg'
                                    href='/'
                                    variant='warning'
                                >
                                    Back to Generator
                                </Button>
                            </Card.Body>
                        </Card>
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

export default ChartListing
