window.addEventListener("DOMContentLoaded", () => { 

    const setDefaultTheme = () => {
        const theme = localStorage.getItem('mode') || "light-theme"; 
        const iconMode = localStorage.getItem('iconMode') || "fa-toggle-off"; 
        const iconText = localStorage.getItme('iconText') || "Light Mode"; 

        document.body.classList.value = theme; 
        document.getElementById('icon-mode').classList.add(iconMode); 
        document.getElementById('icon-text').innerHTML = iconText; 
    }

    const setSelectedTheme = () => {
        document.body.classList.value = localStorage.getItem('mode') || "light-theme";
    }

    setTheme();
})