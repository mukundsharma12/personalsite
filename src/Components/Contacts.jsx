import React, {useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import contactImg from "../Assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

 export default function Contacts(){
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
const  [formDetails, setFormDetails]=useState(formInitialDetails);
const [buttonText,setButtonText]=useState('Send');
const [status,setStatus]=useState({});
function onFormUpdate(catagory,value){
    setFormDetails({
        ...formDetails,
        [catagory] :value
    })
}
 async function handleSubmit(e){
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_1bzqnvi', 'template_f3hbrod', e.target, 'FEzKM2Bh12foLcbxE')
    .then((result) => {
        console.log(result.status);
        if(result.status === 200){
            setStatus({success:true,message:'Message sent successfully'});
            setButtonText('Send');
        }else{
            setStatus({success:false,message:'Something went wrong , please try again later'});
            setButtonText("OOPS!")
        }
    }, (error) => {
        console.log(error.text);
    });

setFormDetails(formInitialDetails);
}
return(<section className="contact" id="connect">
<Container>
    <Row className="align-items-center">
    <Col md={6}>
    <TrackVisibility>
    {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
      <img src={contactImg} alt="Contact Us"/></div>}

      </TrackVisibility>
    </Col>
    <Col md={6}>
    <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
            <Col sm={6} className="px-1">
            <input type="text" name="firstname" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate("firstName",e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
            <input type="text" name="lasttname" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate("lastName",e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
            <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate("email",e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
            <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate("phone",e.target.value)}/>
            </Col>
            <Col>
              <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate("message",e.target.value)}></textarea>  
            <button type="submit"><span>{buttonText}</span></button>
            </Col>
            {
                status.message&&
                <Col>
                    <p className={status.success === false?"danger":"success"}>{status.message}</p>
                </Col>
            }
        </form>
        </div>}
        </TrackVisibility>
    </Col>
    </Row>
</Container>

</section>);
 }