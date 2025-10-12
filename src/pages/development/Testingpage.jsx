import React from 'react';

import Navbar from '../../components/Navbar';
import TestimonialCard from '../../components/TestimonialCard';
import ServiceCard from '../../components/ServiceCard';
import Footer from '../../components/Footer';

function Testingpage() {
    return (
        <>
            <Navbar />
            <TestimonialCard image="src\components\placeholder.jpg" quotes="SuperMan must be stopped!" clientName="Lex Luthor" clientDetails="CEO, LexCorp"/>
            <ServiceCard serviceName="Search Engine Optimization (SEO)" description = "Boost your online visiblity and attract more customers with our proven SEO strategies that are designed to rank you higher upon goggle searches" image="src/assets/placeholder.png"/>
            <Footer/>
        </>

    )
}
export default Testingpage;

