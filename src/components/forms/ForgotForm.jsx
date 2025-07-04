import { useState } from "react";
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ForgotPassword/ResetPassword';

const ForgotForm = () => {   
    const [step, setStep] = useState(1);

    const steps = {
        1: ForgotPassword,
        2: ResetPassword
    };

    const onNext = () => {
        setStep(prev => prev + 1);
    };

    const Component = steps[step];

    return (
        <>
            {Component ? <Component onNext={onNext} /> : <div>Step not found</div>}
        </>
    );
}

export default ForgotForm;