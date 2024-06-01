const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("header");

const observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach((entry) => {
        if (!entry.isIntersecting) { // If header is not intersecting (scrolled out of view)
            backToTop.classList.add("shown"); // Make backToTop visible
        } else{
            backToTop.classList.remove("shown");
        }
    });
});

observer.observe(observerTarget);
