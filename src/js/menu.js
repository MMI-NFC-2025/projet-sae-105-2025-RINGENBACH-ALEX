
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".header__menu-btn")
    const menu = document.querySelector(".menu")
    const menuClose = document.querySelector(".menu__close")
    const headerLang = document.querySelector(".header__lang")
    const menuLang = document.querySelector(".menu__lang")

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            menu.classList.add("menu--open")
            document.body.style.overflow = "hidden"
        })
    }

    if (menuClose) {
        menuClose.addEventListener("click", () => {
            menu.classList.remove("menu--open")
            document.body.style.overflow = ""
        })
    }

    if (headerLang) {
        headerLang.addEventListener("change", function () {
            const lang = this.value
            const currentPath = window.location.pathname

            if (lang === "fr") {
                if (currentPath.includes("/en/")) {
                    window.location.href = currentPath.replace("/en/", "/fr/").replace("-en.html", ".html")
                } else if (currentPath === "/en/home.html") {
                    window.location.href = "/index.html"
                }
            } else {
                if (currentPath.includes("/fr/")) {
                    window.location.href = currentPath.replace("/fr/", "/en/").replace(".html", "-en.html")
                } else if (currentPath === "/index.html" || currentPath === "/") {
                    window.location.href = "/en/home.html"
                }
            }
        })
    }

    if (menuLang) {
        menuLang.addEventListener("change", function () {
            const lang = this.value
            const currentPath = window.location.pathname

            if (lang === "fr") {
                if (currentPath.includes("/en/")) {
                    window.location.href = currentPath.replace("/en/", "/fr/").replace("-en.html", ".html")
                } else if (currentPath === "/en/home.html") {
                    window.location.href = "/index.html"
                }
            } else {
                if (currentPath.includes("/fr/")) {
                    window.location.href = currentPath.replace("/fr/", "/en/").replace(".html", "-en.html")
                } else if (currentPath === "/index.html" || currentPath === "/") {
                    window.location.href = "/en/home.html"
                }
            }
        })
    }
})
