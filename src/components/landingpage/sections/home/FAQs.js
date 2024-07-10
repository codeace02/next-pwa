import React, { useState } from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { GoDash, GoPlus } from "react-icons/go";

const data = [
    {
        id: 1,
        title: `How does Tooth Referral streamline the referral process?`,
        description: `Our unified referral solution eliminates the need for multiple referral pads. The up-to-date database and advanced filters help offices find the perfect specialists and message them directly with just a few clicks. Offices can also save preferred specialists to favorites to expedite the referral process.`
    },
    {
        id: 2,
        title: `Is Tooth Referral HIPAA compliant?`,
        description: `Our unified referral solution eliminates the need for multiple referral pads. The up-to-date database and advanced filters help offices find the perfect specialists and message them directly with just a few clicks. Offices can also save preferred specialists to favorites to expedite the referral process.`
    },
    {
        id: 3,
        title: `How can Tooth Referral help grow my practice?`,
        description: `Our unified referral solution eliminates the need for multiple referral pads. The up-to-date database and advanced filters help offices find the perfect specialists and message them directly with just a few clicks. Offices can also save preferred specialists to favorites to expedite the referral process.`
    },
    {
        id: 4,
        title: `How can Tooth Referral help me find specialists who accept my patients' insurance?`,
        description: `Our unified referral solution eliminates the need for multiple referral pads. The up-to-date database and advanced filters help offices find the perfect specialists and message them directly with just a few clicks. Offices can also save preferred specialists to favorites to expedite the referral process.`
    },

]

export default function FAQs() {

    const [open, setOpen] = useState(1);

    const handleClick = (id) => {
        setOpen(id);
    }

    return (
        <>
            <div
                className={`my-5 py-5`}
                style={{
                    background: '#F9F9FA'
                }}
            >
                <p className={`text-center ${styles.featureTitle} fontKarla`}>
                    Frequently Asked Questions
                </p>

                <div className='text-center'>
                    <button className={`${styles.contactUs} fontInter my-4`}>
                        Contact us
                    </button>
                </div>

                <Container className={`text-center ${styles.faqWidth}`}>
                    {
                        data?.map((item) => (
                            <div key={item?.id} className={`${styles.faqOuter} my-3`}>
                                <div
                                    className='cursor-pointer d-flex justify-content-between align-items-center'
                                    onClick={() => item?.id == open ? handleClick(null) : handleClick(item?.id)}
                                >
                                    <p className={`fontKarla text-start my-0 ${item?.id === open ? styles.openTitle : styles.closeTitle}`}>
                                        {item?.title}
                                    </p>

                                    {/* <Image
                                            src='/images/m8images/minus.png'
                                            height={30}
                                            width={30}
                                            alt='minimize'
                                        />
                                        :
                                        <Image
                                            src='/images/m8images/add.png'
                                            height={30}
                                            width={30}
                                            alt='minimize'
                                        /> */}

                                    {item?.id === open
                                        ?
                                        <GoDash
                                            size={25}
                                            color='#333843'
                                        />
                                        :
                                        <GoPlus
                                            size={25}
                                            color='#333843'
                                        />
                                    }
                                </div>

                                {item?.id === open &&
                                    <div>
                                        <p className={`fontInter text-start mt-3 mb-0 ${styles.faqsDescription}`}>
                                            {item?.description}
                                        </p>
                                    </div>}
                            </div>
                        ))
                    }
                </Container>
            </div>
        </>
    )
}
