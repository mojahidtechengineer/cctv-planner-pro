// Security check: Only load if on your domain
if (window.location.hostname !== "cctvplanner.vercel.app" && window.location.hostname !== "localhost") {
    document.body.innerHTML = "<h1>Unauthorized</h1>";
    throw new Error("Invalid Domain");
}

// REST OF YOUR JS LOGIC (The huge chunk starting from 'const canvasArea...')
// PASTE EVERYTHING HERE
