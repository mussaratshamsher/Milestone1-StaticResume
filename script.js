
var toggleButton1 = document.getElementById('experience-toggle');
var experience = document.getElementById('experience-section');
toggleButton1.addEventListener('click', function () {
    if (experience.style.display === "none" || experience.style.display === "") {
        experience.style.display = "block"; 
    }
    else {
        experience.style.display = "none"; 
    }
});
var toggleButton2 = document.getElementById('skills-toggle');
var skills = document.getElementById('skills-section');
toggleButton2.addEventListener('click', function () {
    if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block"; 
    }
    else {
        skills.style.display = "none"; 
    }
});
