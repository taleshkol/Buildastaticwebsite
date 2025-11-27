// גלילה חלקה לקישורים
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// הדגשת הקישור הפעיל בתפריט
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// הוספת אפקט fade-in לאלמנטים בגלילה
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// צפייה באלמנטים
document.querySelectorAll('.cv-section, .gallery-item, .work-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// קרוסלה - Gallery Carousel
let slideIndex = 1;
showSlides(slideIndex);

// פונקציה לשינוי שקופית
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// פונקציה למעבר לשקופית ספציפית
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// פונקציה להצגת שקופיות
function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// החלפה אוטומטית כל 5 שניות
setInterval(() => {
    changeSlide(1);
}, 5000);

console.log('האתר של תל נטען בהצלחה! 🎉');