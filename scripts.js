document.addEventListener("DOMContentLoaded", function () {

    const fadeInElements = document.querySelectorAll(".fade-in");
    // const featureCards = document.querySelectorAll('.feature-card');
    const typewriterElement = document.querySelector(".fade-text");
    // const subtitleElement = document.querySelector(".subtext");

    document.body.offsetHeight;

    // skrl bhvr n url upd
    function handleScroll() {
        let scrollY = window.scrollY;
        
        fadeInElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });

        if (scrollY > document.getElementById("tips").offsetTop) {
            window.history.pushState({ page: "tips" }, "Tips", "#tips");
        } else if (scrollY > document.getElementById("home").offsetTop) {
            window.history.pushState({ page: "home" }, "Home", "#home");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    let texts = [
        "Help your wallet ♻️🌍",
        "Save your money 🪜🔋",
        "Be smarter 🌍🪫"
    ];
    let currentTextIndex = 0;

    function typewriter(element, text, speed, callback) {
        let i = 0;
        element.textContent = "";
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                setTimeout(() => {
                    deleteText(element, speed, callback);
                }, 2000);
            }
        }
        typing();
    }

    function deleteText(element, speed, callback) {
        let text = element.textContent;
        let i = text.length;
        function deleting() {
            if (i > 0) {
                element.textContent = text.substring(0, i - 1);
                i--;
                setTimeout(deleting, speed);
            } else {
                callback();
            }
        }
        deleting();
    }

    function startTitleTypewriter() {
        typewriter(typewriterElement, texts[currentTextIndex], 100, () => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(startTitleTypewriter, 2000);
        });
    }

    startTitleTypewriter();

    document.querySelector('.cta-button').addEventListener('click', function() {
        document.body.offsetHeight;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement("div");
    cursorTrail.classList.add("custom-cursor-trail");
    document.body.appendChild(cursorTrail);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorTrail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform += " scale(0.8)";
        cursorTrail.style.transform += " scale(1.2)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = cursor.style.transform.replace(" scale(0.8)", "");
        cursorTrail.style.transform = cursorTrail.style.transform.replace(" scale(1.2)", "");
    });
});
