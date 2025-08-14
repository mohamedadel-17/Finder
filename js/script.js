document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu_icon");
    const navLinks = document.querySelector(".nav_links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
//color 
    // upload the saved colors from local storage when the page loads
    window.addEventListener('DOMContentLoaded', () => {
        let savedColors = JSON.parse(localStorage.getItem('themeColors')) || {};
        for (let [varName, color] of Object.entries(savedColors)) {
            document.documentElement.style.setProperty(varName, color);
            let circle = document.querySelector(`.color-circle[data-var="${varName}"]`);
            if (circle) {
                circle.style.background = color;
                circle.previousElementSibling.textContent = color;
                circle.nextElementSibling.value = color;
            }
        }
    });

    // when the color circle is clicked, trigger the color input
    document.querySelectorAll('.color-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            circle.nextElementSibling.click();
        });
    });

    // update the color when the color input changes
    document.querySelectorAll('input[type="color"]').forEach(input => {
        input.addEventListener('input', e => {
            let circle = e.target.previousElementSibling;
            let codeSpan = circle.previousElementSibling;
            let varName = circle.dataset.var;
            let color = e.target.value;

            // update the CSS variable
            document.documentElement.style.setProperty(varName, color);

            circle.style.background = color;
            codeSpan.textContent = color;

            // save in local storage
            let savedColors = JSON.parse(localStorage.getItem('themeColors')) || {};
            savedColors[varName] = color;
            localStorage.setItem('themeColors', JSON.stringify(savedColors));
        });
    });
// sidebar & floating
    const openBtn = document.getElementById('open_btn');
    const closeBtn = document.getElementById('close_btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
// dark mode toggle
    const themeBtn = document.querySelector('.theme_toggle');
    const body = document.body;
    const themeIcon = themeBtn.querySelector('i');

    if(localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark_mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark_mode');

        if(body.classList.contains('dark_mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
    
