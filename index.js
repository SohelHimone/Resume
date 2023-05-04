const navtag = document.querySelectorAll('.navbar-nav a');

for (let i = 0; i < navtag.length; i++) {
    navtag[i].addEventListener('click', function(event) {
        event.preventDefault();

        const ts = this.textContent.trim().toLowerCase();
        const ti = document.getElementById(ts);

        
            const interval = setInterval(function() {
                const cor = ti.getBoundingClientRect();

                if (cor.top <= 5) {
                    clearInterval(interval);
                    return;
                }

                window.scrollBy(0, 400);
            }, 200);
       
    });
}
