(function() {
    const MY_DOMAIN = "your-app-name.vercel.app"; 
    
    // 1. Domain Lock
    if (window.location.hostname !== MY_DOMAIN && window.location.hostname !== "localhost") {
        document.body.innerHTML = "<h1>Unauthorized Access.</h1>";
        window.location.href = "https://google.com";
        return;
    }

    // 2. Login Check
    const isLogged = sessionStorage.getItem("cctv_auth");
    const isLoginPage = window.location.pathname.includes("login.html");
    
    if (!isLogged && !isLoginPage) {
        window.location.href = "login.html";
    }
})();
