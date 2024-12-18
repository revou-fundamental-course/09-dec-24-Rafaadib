//autoslide banner
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Show slide based on the index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Go to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(slideIndex);
}

// Go to the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(slideIndex);





//form validation
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let dataError = document.getElementById('data-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    let name = document.getElementById('fname').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is requared';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Insert fullname with space';
        return false;
    }

    nameError.innerHTML = 'Valid' ;
    return true;
    
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is requared';
        return false;
    }

    emailError.innerHTML = 'Valid';
    return true;
}

function validateService() {
    let data = document.getElementById('service').value;

    if (data.length == 0) {
        dataError.innerHTML = 'pick your choice';
        return false;
    }

    dataError.innerHTML = 'Valid';
    return true ;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateService()) {
        alert('Tolong Coba Lagi') ;
        return false ;
    }
}

//console.log("hello world");