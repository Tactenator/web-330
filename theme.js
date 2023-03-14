window.addEventListener("DOMContentLoaded", () => { 

    const icon = document.getElementById('icon-mode');

    const setDefaultTheme = () => {
        const theme = localStorage.getItem('mode') || "light-theme"; 
        const iconMode = localStorage.getItem('iconMode') || "fa-toggle-off"; 
        const iconText = localStorage.getItem('iconText') || "Light Mode"; 

        document.body.classList.value = theme; 
        document.getElementById('icon-mode').classList.add(iconMode); 
        document.getElementById('icon-text').innerHTML = iconText; 
    }

    const setSelectedTheme = () => {
        document.body.classList.value = localStorage.getItem('mode') || "light-theme";
    }

    const toggleMode = (e) => {
        let colorTheme = document.body.classList; 
        
        if(colorTheme.value === "light-theme"){
            document.body.classList.toggle('light-theme')
            document.body.classList.toggle('dark-theme')
            document.getElementById('icon-mode').classList.toggle('fa-toggle-off');
            document.getElementById('icon-mode').classList.toggle('fa-toggle-on');
            document.getElementById('icon-text').innerHTML = "Dark Mode"
        }
        else {
            document.body.classList.toggle('dark-theme')
            document.body.classList.toggle('light-theme')
            document.getElementById('icon-mode').classList.toggle('fa-toggle-off');
            document.getElementById('icon-mode').classList.toggle('fa-toggle-on');
            document.getElementById('icon-text').innerHTML = "Light Mode"
        }
    }

    icon.addEventListener('click', toggleMode)

    setDefaultTheme();
})