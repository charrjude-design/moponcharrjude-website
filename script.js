
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

   window.onload = function () {
        alert("Website loaded!");
      };

