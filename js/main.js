/* ============== SEARCH BAR ===========================*/
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const navSearch = document.getElementById('nav-search');

    searchBtn.addEventListener('click', () => {
        navSearch.classList.toggle('active'); 
        if (navSearch.classList.contains('active')) {
            searchInput.focus(); 
        }
    });
});

document.getElementById('search-btn').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('shrink');
});


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ================ FILTRATION =========================*/
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const serviceCards = document.querySelectorAll(".services__card");

    // Event listener for search input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        let firstMatch = null; 

        // Filter categories
        serviceCards.forEach((card) => {
            const title = card.querySelector(".services__title").textContent.toLowerCase();
            if (title.includes(query)) {
                card.classList.remove("hidden");

                // Store the first matching card
                if (!firstMatch) {
                    firstMatch = card;
                }
            } else {
                card.classList.add("hidden");
            }
        });

        // Scroll to the first match, if found
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});


/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

// ========================EMAIL JS=================================
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) => {
        e.preventDefault();

        // serviceID - templateID - #from - publicKey
        emailjs.sendForm('service_l8fg9u5','template_v2nl2xo','#contact-form','q6qXXVtfkq8prMXFR')
        .then(() => {
        // Show Message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove Message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        

        // Clear Input fields
        contactForm.reset()

    }, () => {
        // Show error Message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/  
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we activate the saved theme and icon
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Toggle the dark theme and icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    
    // Save the selected theme and icon in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


// Scroll Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.projects__card`, {interval: 100})
