import { useEffect } from 'react';

const useHamburgerMenu = () => {
    useEffect(() => {
        const handleClick = () => {
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");

            if (hamburger && navMenu) {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            }
        };

        const addEventListeners = () => {
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelectorAll('.nav-link');

            if (hamburger) {
                hamburger.addEventListener("click", handleClick);
            }

            if (navLinks.length > 0) {
                navLinks.forEach((link) => {
                    link.addEventListener("click", handleClick);
                });
            }
        };

        const removeEventListeners = () => {
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelectorAll('.nav-link');

            if (hamburger) {
                hamburger.removeEventListener("click", handleClick);
            }

            if (navLinks.length > 0) {
                navLinks.forEach((link) => {
                    link.removeEventListener("click", handleClick);
                });
            }
        };

        addEventListeners();

        return () => {
            removeEventListeners();
        };
    }, []);
};

export default useHamburgerMenu;
