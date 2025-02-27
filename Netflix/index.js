const sliders = document.querySelector(".carouselbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
var scrollPerClick;

const movieBanners = [
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABcUQPbFkgvagtvty9kKPrzCZRnohWm6UE4eZKcP9ch6inC2Hm0nvtr1NVPwPyeQ4NsO2ngHzm3Wxx-JpbKICYWVYJZMGCdsTDSk.webp",
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABcJkAYihjBQ5SjWbwydLdZE8Dm1cJ0whRc21AEIS4V0VO8w65lEDAW5gwzTFTUuNqVTgBcgucwr6rMeRHra3xlru9n1CCtfOm1s.webp",
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABUjFxI4SODlz5y8lez8xNhjufPWDFcty62BA-0pIX1TVe81Ktpy6ZZECLJ77dAK3luNrayBsUfJgj1WJ-5LcxGMuzjn8Ga0jVn4.webp",
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABbU55ixEcOS-k8MCc0VgjERuH46IGubjebrPtNc2MoF557g9RILoF5vwXuThrx1KR0Rt_I4fgYULSsjc30GsLqESOfWKOsDhZDq3F-YJai_WSNyOc32TSTGu-DH4Am_uD-Sf.webp",
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABYoB9Pc2OHv7xykHFZ7Qu0byWGZGu9xdhvPysF7RkTQBkqCKaBddgYNqfu96slvOVsdl8q4iN5giC2MNKow4W9XkTLJFHuwgztc.webp",
    "E:\Practice\Copy Projects\Netflix\Banners\AAAABTBqlHn2XtjR1ML6-FtO4v6svim8ry5pCqCMC4TbMTiKGou6QSNzGn03ccoFzTxNGwVBxti7PKkYPRoYfehW3A3dij96uN2EZwiFsK6JE6sS4WmN1jTTco2D7DPicznmOurr.webp"
];

function loadMovieBanners() {
    movieBanners.forEach((src) => {
        const img = document.createElement("img");
        img.classList.add("slider-tag");
        img.src = src;
        sliders.appendChild(img);
    });
}

// Scroll functionality to ru  from TRS
nextBtn.addEventListener("click", () => {
    sliders.scrollBy({ left: scrollPerClick, behavior: "smooth "});
});

prevBtn.addEventListener("click", () => {
    sliders.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});

loadMovieBanners();