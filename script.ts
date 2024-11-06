



// const toggleButton1 = document.getElementById('experience-toggle') as HTMLButtonElement;  
// const experience =  document.getElementById('experience-section') as HTMLElement; 

// toggleButton1.addEventListener('click', ()=> {
// if(experience.style.display ==="none") {}
// })


// const toggleButton2 = document.getElementById('skills-toggle') as HTMLButtonElement;  
// const skills =  document.getElementById('skills-section') as HTMLElement; 

// toggleButton2.addEventListener('click', ()=> {
// if(skills.style.display === "none") {}
// })



const toggleButton1 = document.getElementById('experience-toggle') as HTMLButtonElement; 
const experience = document.getElementById('experience-section') as HTMLElement; 

toggleButton1.addEventListener('click', () => {
    if (experience.style.display === "none" || experience.style.display === "") {
        experience.style.display = "block"; // Show the section
    } else {
        experience.style.display = "none"; // Hide the section
    }
});

const toggleButton2 = document.getElementById('skills-toggle') as HTMLButtonElement; 
const skills = document.getElementById('skills-section') as HTMLElement; 

toggleButton2.addEventListener('click', () => {
    if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block"; // Show the section
    } else {
        skills.style.display = "none"; // Hide the section
    }
});
