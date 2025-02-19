document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('darkmode-toogle');
    const light = document.querySelector('#light_mode img');
    const dark = document.querySelector('#dark_mode img');
    const text = document.getElementById('h1');
    const samllText = document.getElementById('p');
    const html = document.getElementById('quiz_html');
    const css = document.getElementById('quiz_css');
    const js = document.getElementById('quiz_js');
    const accessibility = document.getElementById('quiz_accessibility');
    button.addEventListener('click', function () {
        const body = document.body;
        if (button.checked) {
            html.style.backgroundColor = 'hsl(216, 26%, 32%)';
            css.style.backgroundColor = 'hsl(216, 26%, 32%)';
            js.style.backgroundColor = 'hsl(216, 26%, 32%)';
            accessibility.style.backgroundColor = 'hsl(216, 26%, 32%)';
            html.style.color = 'white';
            css.style.color = 'white';
            js.style.color = 'white';
            accessibility.style.color = 'white';
            body.style.backgroundColor = 'hsl(215.63, 24.62%, 25.49%)';
            samllText.style.color = 'white';
            text.style.color = 'white';
            body.style.backgroundImage = 'url("/starter-code/assets/images/pattern-background-desktop-dark.svg")';
            light.src = '/starter-code/assets/images/icon-sun-dark.svg';
            dark.src = '/starter-code/assets/images/icon-moon-light.svg';
        } else {
            html.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
            css.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
            js.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
            accessibility.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
            html.style.color = 'rgb(45, 57, 73)';
            css.style.color = 'rgb(45, 57, 73)';
            js.style.color = 'rgb(45, 57, 73)';
            accessibility.style.color = 'rgb(45, 57, 73)';
            body.style.backgroundColor = 'hsl(217, 19%, 73%)';
            samllText.style.color = 'rgb(45, 57, 73)';
            text.style.color = 'rgb(45, 57, 73)';
            body.style.backgroundImage = 'url("/starter-code/assets/images/pattern-background-desktop-light.svg")';
            light.src = '/starter-code/assets/images/icon-sun-light.svg';
            dark.src = '/starter-code/assets/images/icon-moon-dark.svg';
        }
    });
});
