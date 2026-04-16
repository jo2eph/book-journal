/* Script for contents sidebar functionality */

/* Section Buttons */
const button1 = document.getElementById("contents-link-1");
const button2 = document.getElementById("contents-link-2");
const button3 = document.getElementById("contents-link-3");

/* Function to scroll to section given a string sectionId */
const scrollToSection = (sectionId) => {
    const section = document.getElementById("section-" + sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
    else {
        console.error("Section with ID 'section-" + sectionId + "' not found.");
    }
}

/* Event listeners for section buttons */
button1.addEventListener("click", () => {
    scrollToSection(1);
});

button2.addEventListener("click", () => {
    scrollToSection(2);
});

button3.addEventListener("click", () => {
    scrollToSection(3);
});