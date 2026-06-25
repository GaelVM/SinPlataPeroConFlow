/* ==========================================
   SIN PLATA PERO CON FLOW
   PREMIUM BIKER EXPERIENCE
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".section, .glass-card, .member-card, .timeline-item, .shop-card, .stat"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");
            el.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.85)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================
   COUNTERS
========================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats-section");

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const increment = target / 150;

            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.innerText =
                        Math.floor(count).toLocaleString();

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText =
                        target.toLocaleString();

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

/* ==========================
   LEAFLET MAP
========================== */

const map = L.map("map").setView([-12.0464, -77.0428], 5);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "SPCF"
    }
).addTo(map);

const bikerLocations = [

{
city:"Lima",
coords:[-12.0464,-77.0428],
date:"12 Marzo 2025",
participants:"18",
sticker:"Sticker Dorado"
},

{
city:"Huaraz",
coords:[-9.5278,-77.5278],
date:"25 Abril 2025",
participants:"15",
sticker:"Sticker Montaña"
},

{
city:"Paracas",
coords:[-13.8333,-76.2667],
date:"10 Mayo 2025",
participants:"20",
sticker:"Sticker Ruta"
},

{
city:"Ica",
coords:[-14.0678,-75.7286],
date:"18 Junio 2025",
participants:"17",
sticker:"Sticker Flow"
},

{
city:"Cusco",
coords:[-13.5319,-71.9675],
date:"20 Agosto 2025",
participants:"22",
sticker:"Sticker Imperial"
},

{
city:"Arequipa",
coords:[-16.4090,-71.5375],
date:"10 Octubre 2025",
participants:"19",
sticker:"Sticker Volcán"
}

];

bikerLocations.forEach(place => {

    L.marker(place.coords)
    .addTo(map)
    .bindPopup(`
        <div style="padding:10px;">
            <h3>${place.city}</h3>
            <p><strong>Fecha:</strong> ${place.date}</p>
            <p><strong>Participantes:</strong> ${place.participants}</p>
            <p><strong>Sticker:</strong> ${place.sticker}</p>
        </div>
    `);

});

/* ==========================
   LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

/* ==========================
   TESTIMONIAL SLIDER
========================== */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function rotateTestimonials() {

    testimonials.forEach(item =>
        item.classList.remove("active")
    );

    testimonialIndex++;

    if (
        testimonialIndex >= testimonials.length
    ) {
        testimonialIndex = 0;
    }

    testimonials[testimonialIndex]
        .classList.add("active");

}

setInterval(
    rotateTestimonials,
    5000
);

/* ==========================
   COUNTDOWN EVENT
========================== */

const countdown =
document.getElementById("countdown");

const eventDate =
new Date("August 20, 2026 08:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        eventDate - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );

    countdown.innerHTML = `
        ${days}d
        ${hours}h
        ${minutes}m
        ${seconds}s
    `;

}

setInterval(updateCountdown, 1000);

updateCountdown();

/* ==========================
   FRASES BIKER
========================== */

const bikerQuotes = [

"El camino no se mide en kilómetros, sino en historias.",

"Sin plata, pero con gasolina para seguir soñando.",

"Las rutas unen destinos, las motos unen personas.",

"La libertad tiene dos ruedas.",

"No buscamos llegar rápido, buscamos llegar juntos.",

"Una moto puede llevarte lejos, una hermandad más lejos aún.",

"Donde termina el mapa comienza la aventura.",

"La carretera siempre devuelve más de lo que recibe.",

"Las mejores amistades nacen entre motores y rutas.",

"Cada sticker cuenta una historia."
];

const quoteText =
document.getElementById("bikerQuote");

const quoteButton =
document.getElementById("newQuote");

quoteButton.addEventListener("click", () => {

    const random =
        Math.floor(
            Math.random() *
            bikerQuotes.length
        );

    quoteText.textContent =
        bikerQuotes[random];

});

/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener("scroll", () => {

    const scrolled =
        window.pageYOffset;

    const heroVideo =
        document.querySelector(".hero video");

    if (heroVideo) {

        heroVideo.style.transform =
            `translateY(${scrolled * 0.3}px)`;

    }

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.querySelector(".menu-mobile");

const navMenu =
document.querySelector("#navbar ul");

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            if (
                navMenu.style.display === "flex"
            ) {

                navMenu.style.display = "none";

            } else {

                navMenu.style.display = "flex";
                navMenu.style.flexDirection = "column";
                navMenu.style.position = "absolute";
                navMenu.style.top = "80px";
                navMenu.style.right = "20px";
                navMenu.style.padding = "25px";
                navMenu.style.borderRadius = "20px";
                navMenu.style.background =
                    "rgba(0,0,0,.95)";
                navMenu.style.gap = "20px";

            }

        }
    );

}

/* ==========================
   PARTICLES ENGINE
========================== */

const particles =
document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    const particle =
    document.createElement("span");

    particle.style.position = "absolute";

    particle.style.width =
        Math.random() * 4 + 2 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.background =
        Math.random() > 0.5
        ? "#D4AF37"
        : "#0A5FFF";

    particle.style.borderRadius = "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.opacity =
        Math.random();

    particle.style.boxShadow =
        "0 0 15px currentColor";

    particle.style.animation =
        `floatParticle ${
            Math.random() * 12 + 8
        }s linear infinite`;

    particles.appendChild(particle);

}

/* ==========================
   DYNAMIC PARTICLE STYLE
========================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

0%{
transform:
translateY(0)
translateX(0);
}

50%{
transform:
translateY(-120px)
translateX(50px);
}

100%{
transform:
translateY(-240px)
translateX(-50px);
}

}

`;

document.head.appendChild(style);

/* ==========================
   SECTION HOVER GLOW
========================== */

document
.querySelectorAll(
".glass-card, .shop-card, .member-card"
)
.forEach(card => {

card.addEventListener(
"mousemove",
e => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(212,175,55,.18),
rgba(255,255,255,.05)
)
`;

});

card.addEventListener(
"mouseleave",
() => {

card.style.background =
"rgba(255,255,255,.05)";

});

});

/* ==========================
   END
========================== */

console.log(
"🏍️ SIN PLATA PERO CON FLOW - PREMIUM EXPERIENCE LOADED"
);