import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)


    function chengeStep(i, e) {
        if (e) e.preventDefault()

        if(i < 0 || i >= steps.length) {
            return
        } else {
            setCurrentStep(i)
        }
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        chengeStep,
        isLestStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    }
}