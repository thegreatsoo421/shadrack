import React from 'react'
import { Row, Col, Button, Container} from 'react-bootstrap'
import Contact from '../components/Contact';
import Staff from '../components/Staff';

const HomeScreen = () => {
    const primaryColor = '#FF1444' ;
  return (
    <div>
        <section style={{
            backgroundColor: `${primaryColor}`
        }}>
            <Row  className='mx-0'>
                <Col style={{
                   display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   width: '40vw',
                   textAlign: 'start'
                }}>
               <Container className='px-3'>
               <h5> We Are Investors</h5>
                <br/>
                <h3>Shedrack&amp;Co</h3>
    
                <p>We pride ourselves in great work ethic, integrity and provide end-results</p>
  
                <Button variant='light'>Get Started</Button>
               </Container>
            
                </Col>
                <Col style={{
                    width: '60vw'
                }}>
                <img src='/assets/image1.webp'style={{
                    width: '60vw',
                    height: '50vw',
                    objectFit: 'cover'
                }}/>
                </Col>
            </Row>
        </section>
        <section style={{
            backgroundImage: 'linear-gradient(90deg , #262626 50%, white 50%)'
        }}>
            <Row className='mx-0'>
                <Col style={{display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   textAlign: 'start'}}>
                      <Container>
                      <h5 style={{color: `${primaryColor}`}}>Who we are</h5>
                       <h3 style={{color: `${primaryColor}`}}>About Shedrack&amp;Co</h3>
                       <p style={{color: `white`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tellus venenatis, tristique nunc pellentesque, finibus elit. Suspendisse eleifend auctor libero, sed varius urna scelerisque eget. Ut blandit, quam sit amet tincidunt tristique, libero odio sodales orci, et rutrum leo nisi in enim. Nulla facilisi. Proin malesuada mauris non enim elementum auctor eu pretium dui. Morbi ut risus quis nunc vehicula ultrices. Mauris a mi massa. Ut id felis et mauris suscipit finibus. Donec venenatis malesuada diam, sit amet tempus libero dapibus ut.</p>
                      <p style={{color: `white`}}>Ut ultricies risus id tortor blandit mollis. Morbi porttitor metus sit amet fermentum convallis. Nam egestas suscipit laoreet. Donec auctor justo quis aliquam pellentesque. Fusce in egestas dui. Quisque auctor justo nisl, at pharetra augue aliquam consectetur. Curabitur sit amet urna id elit aliquet vulputate. Ut at odio quam.</p>
                      </Container>
                </Col>
                <Col style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '50vw',
                    textAlign: 'start'
                }}>
                <img src='/assets/image2.webp'  style={{objectFit: 'contain', height: '37.5vw', width: '50vw', marginRight: '10vw'}}/>
                </Col>
            </Row>
            <br/>
        </section>
        <section style={{
            backgroundImage: `linear-gradient(90deg , white 60%, ${primaryColor} 40%)`
        }}>
            <Row className='mx-0'>
                <Col style={{display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   width: '50vw',
                   textAlign: 'start'}}>
                        <Container>
                        <h5 style={{color: `${primaryColor}`}}>What we do</h5>
                       <h3 style={{color: `${primaryColor}`}}>Our Services</h3>
                       
                        </Container>

                </Col>
                <Col style={{display: 'flex',
                   alignItems: 'center',
                   height: '50vw',
                   width: '50vw',
                   textAlign: 'start'}}>
                <img src='/assets/image3.webp' style={{height: '37.5vw', width: '37.5vw', objectFit: 'cover'}}/>
                </Col>
            </Row>
        </section>
        <br/>
        <br/>
        <section className='mt-2'>
        <h5 style={{color: `${primaryColor}`}}>Meet the staff</h5>
        <h3 >Our Team</h3>
        <br/>
<Container className='px-1'>
<Row>
            <Staff src={'/assets/image4.jpg'} name='Lisa Parker' title={'owner'}/>
            <Staff src={'/assets/image5.jpg'} name='John Walker' title={'manager'}/>
            <Staff src={'/assets/image6.jpg'} name='Dan Cooper' title={'analyst'}/>
            <Staff src={'/assets/image7.jpg'} name='Steve Doe' title={'analyst'}/>
         
        </Row>
</Container>
        <br/>
        </section>
        <Contact/>
    </div>
  )
}

export default HomeScreen