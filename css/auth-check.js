(function() {
    const isLogged = sessionStorage.getItem("cctv_auth");
    if (!isLogged && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
})();
