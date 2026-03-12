// Universal API Configuration
window.API_BASE_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:6060"
     : "https://mechconnect-backend-render-1.onrender.com";
  
    // : "https://mechconnect-backend-render-1-fjvh.onrender.com";
