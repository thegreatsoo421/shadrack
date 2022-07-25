import React from 'react'
import { primaryColor } from '../../../Contsants'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';


const Contact = () => {
  return (
    <section
    style={{backgroundColor: primaryColor,  textAlign: 'start'}}>
                   <Container className='px-4 '>
           <h5 style={{color: `${primaryColor}`}}>Keep In Touch</h5>
             <h3 >Contact Us</h3>
             <br/>
           <Form>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl id='nameForm' placeholder='Name'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl id='emailForm' placeholder='Email'/>
                    <FormText muted>We'll never share your email with anyone else</FormText>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Subject</FormLabel>
                    <FormControl id='subjectForm' placeholder='Subject'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Message</FormLabel>
                    <FormControl as={'textarea'} id='messageForm' placeholder='Message'/>
                </FormGroup>
                <FormGroup>
                    <br/>
                <Button>Send Message</Button>
                </FormGroup>
            </Form>
           </Container>
           <Container className='px-4 my-3' style={{
                objectFit: 'contain', color: '#262626'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.6498664422!2d36.56720029142611!3d-1.3031933719272915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1650911548910!5m2!1sen!2s"
                     title='maps' width={'350'} height='300'
                    style={{border: 'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Container>
            <Row className='px-4'>
            <Container sm='0'>
                <h6 style={{color: 'white'}}><AiOutlinePhone color='white'/> Phones</h6>
                <small>123456789 </small>
                <br/>
                <small>123456789 </small>
            </Container>
            <Container>
                <h6 style={{color: 'white'}}><AiOutlineMail color='white'/> Emails</h6>
                <small>info@yoursite.com</small>
                <br/>
                <small>sales@yoursite.com </small>
            </Container>
            <Container>
                <h6 style={{color: 'white'}}><GrLocation color='white'/> Address</h6>
                <small>123 Ipsum Avenue, Lorem City </small>
            </Container>
            </Row>
    </section>
  )
}

export default Contact