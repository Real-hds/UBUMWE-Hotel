<template>
    <div class="app">
  
      <!-- ===== NAVBAR ===== -->
      <header class="navbar">
  
        <!-- LOGO SECTION -->
        <div class="logo-box">
          <img src="@/assets/logo.svg" class="logo-img" alt="Ubumwe Hotel Logo" />
          <div class="logo-text">
            <h2>UBUMWE</h2>
            <span>HOTEL</span>
          </div>
        </div>
  
        <!-- NAV LINKS -->
        <nav class="nav">
          <router-link to="/" class="link" active-class="active">Home</router-link>
          <router-link to="/about" class="link" active-class="active">About</router-link>
          <router-link to="/registration" class="link" active-class="active">Booking</router-link>
          <router-link to="/contact" class="link" active-class="active">Contact</router-link>
        </nav>
  
      </header>
  
      <!-- PAGE CONTENT -->
      <main class="page">
        <router-view />
      </main>
  
      <!-- FOOTER -->
      <Footer />
  
    </div>
  </template>
  
  <script setup>
  import Footer from "@/components/FooterComponent.vue"
  </script>
  
  <style>
  /* ================= GLOBAL RESET ================= */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", sans-serif;
    background: radial-gradient(circle at top, #0f172a, #020617);
    color: white;
  }
  
  /* ================= APP WRAPPER ================= */
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* ================= NAVBAR ================= */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    padding: 16px 50px;
  
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  }
  
  /* ================= LOGO ================= */
  .logo-box {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .logo-img {
    width: 45px;
    height: 45px;
    object-fit: contain;
  
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6));
    animation: floatLogo 4s ease-in-out infinite;
  }
  
  @keyframes floatLogo {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  
  .logo-text h2 {
    font-size: 18px;
    color: #38bdf8;
    letter-spacing: 2px;
  }
  
  .logo-text span {
    font-size: 11px;
    color: #94a3b8;
    letter-spacing: 3px;
  }
  
  /* ================= NAV LINKS ================= */
  .nav {
    display: flex;
    gap: 28px;
  }
  
  .link {
    position: relative;
    text-decoration: none;
    color: #cbd5e1;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  /* hover effect */
  .link:hover {
    color: #38bdf8;
    transform: translateY(-2px);
  }
  
  /* active route (modern underline glow) */
  .active {
    color: #38bdf8;
  }
  
  .active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
  
    width: 100%;
    height: 2px;
  
    background: #38bdf8;
    box-shadow: 0 0 10px #38bdf8;
    border-radius: 10px;
  
    animation: glowLine 0.4s ease;
  }
  
  @keyframes glowLine {
    from { width: 0; opacity: 0; }
    to { width: 100%; opacity: 1; }
  }
  
  /* ================= PAGE AREA ================= */
  .page {
    flex: 1;
    animation: pageFade 0.5s ease;
  }
  
  @keyframes pageFade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* ================= RESPONSIVE ================= */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      gap: 12px;
      padding: 15px;
    }
  
    .nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 18px;
    }
  }
  </style>