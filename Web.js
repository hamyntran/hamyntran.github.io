const skillSection = document.getElementById('skillSection');

const progressBars = document.querySelectorAll('.progressBar');

function ShowProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity =1;
        progressBar.style.width =`${value}%`;

    } )
}

function HideProgress(){
    progressBars.forEach(p=> {
        p.style.opacity =0;
        p.style.width =0;
    })
}

window.addEventListener('scroll',()=> {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos =window.innerHeight/2;

    if(sectionPos<screenPos){
        ShowProgress(); 
    } else {
        HideProgress();
    }
})


const languageSection = document.getElementById('language');

const progressCircles = document.querySelectorAll('.circleThumb');

function ShowBarProgress(){
    progressCircles.forEach(progressCircle=> {
        const value = progressCircle.dataset.progress;
        progressCircle.style.strokeDashoffset = 503-(503*value)/100;
        progressCircle.style.opacity=1;
    })
    
}

window.addEventListener('scroll',() => {
    const languagePos = languageSection.getBoundingClientRect().top;
    const screenPos =window.innerHeight/1.5;

    if(languagePos<screenPos){
       ShowBarProgress();
    } 
})



