import React from 'react';
import Hippaa from './Hippaa';
import Streamline from './Streamline';
import GetStarted from './GetStarted';
import Testimonials from './Testimonials';
import Referrals from './Referrals';
import FAQs from './FAQs';
import Last from './Last';

export default function Sections() {
    return (
        <>
            <Hippaa />
            <Testimonials />
            <Streamline />
            <GetStarted />
            <Referrals />
            <FAQs />
            <Last />
        </>
    )
}
