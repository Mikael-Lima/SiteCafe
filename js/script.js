document.addEventListener("DOMContentLoaded", function() {
    if ("IntersectionObserver" in window) {
        let lazyIframes = document.querySelectorAll("iframe.lazy");
        let iframeObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    iframe.classList.remove("lazy");
                    iframeObserver.unobserve(iframe);
                }
            });
        });

        lazyIframes.forEach(function(iframe) {
            iframeObserver.observe(iframe);
        });
    } else {
        // Fallback para navegadores antigos
        let lazyIframes = document.querySelectorAll("iframe.lazy");
        lazyIframes.forEach(function(iframe) {
            iframe.src = iframe.dataset.src;
        });
    }
});


