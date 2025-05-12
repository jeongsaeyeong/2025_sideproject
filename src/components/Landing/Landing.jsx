import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Step01 from '../../assets/img/landing/step01.svg'
import Step02 from '../../assets/img/landing/step02.svg'
import Step03 from '../../assets/img/landing/step03.svg'
import Logo_small from '../../assets/img/landing/logo_small.svg'
import Fifth from './Fifth';

const Landing = () => {
    const [step, setStep] = useState(1);
    const [showFifth, setShowFifth] = useState(false);

    const onSkip = () => {
        setStep(5);
    };

    const variants = {
        initial: { x: 300, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 },
    };

    const renderContent = () => {
        switch (step) {
            case 1:
                return <First setStep={setStep} />;
            case 2:
                return <Second />;
            case 3:
                return <Third />;
            case 4:
                return <Forth />;
            case 5:
                return <Fifth />;
            default:
                return null;
        }
    };

    const stepImages = {
        2: Step01,
        3: Step02,
        4: Step03,
    };

    useEffect(() => {
        if (step === 5) {
            const timer = setTimeout(() => {
                setShowFifth(true);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setShowFifth(false);
        }
    }, [step]);

     return (
        <div className='Landing_wrap container'>
            {step === 1 && <First setStep={setStep} />}
            {step === 5 && showFifth && <Fifth />}

            {step >= 2 && step <= 4 && <img className='logo' src={Logo_small} alt="" />}

            <AnimatePresence mode="wait">
                {step >= 2 && step <= 4 && (
                    <motion.div
                        key={step}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                    >
                        {renderContent()}
                    </motion.div>
                )}
            </AnimatePresence>

            {step >= 2 && step <= 4 && (
                <>
                    <img className='step' src={stepImages[step]} alt="" />
                    <div className="button_box">
                        <button className="skip" onClick={onSkip}>건너뛰기</button>
                        <button
                            className="next"
                            onClick={() => setStep(prev => Math.min(prev + 1, 5))}
                        >
                            다음
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Landing;
