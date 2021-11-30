const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const steps = document.querySelectorAll('.step');

let currentStep = 1;

const stepUpDown = () => {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })

    const activeSteps = document.querySelectorAll('.active');
    progressBar.style.width = (activeSteps.length - 1) / (steps.length - 1) * 100 + '%';

    if (currentStep === 1) {
        prevBtn.disabled = true;
    } else if (currentStep === steps.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

nextBtn.addEventListener('click', () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    stepUpDown();
    console.log(currentStep)
});


prevBtn.addEventListener('click', () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    stepUpDown();
    console.log(currentStep)
});