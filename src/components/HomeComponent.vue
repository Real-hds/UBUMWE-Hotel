<template>
  <section class="hero">
    <!-- Dark + gradient overlay -->
    <div class="overlay"></div>
    <div class="glow"></div>

    <div class="content">
      <h1 class="title">Welcome to Ubumwe Hotel</h1>

      <p class="subtitle">
        Luxury • Comfort • Hospitality
      </p>

      <router-link to="/registration" class="btn">
        Book Now
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* HERO SECTION */
.hero {
  height: 100vh;
  background: url("../assets/hotel.png") center/cover no-repeat;
  opacity: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

/* DARK OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.65),
    rgba(15, 23, 42, 0.85)
  );
}

/* FLOATING GLOW EFFECT */
.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(0, 180, 255, 0.18);
  filter: blur(120px);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-40px) scale(1.1); }
  100% { transform: translateY(0px) scale(1); }
}

/* CONTENT */
.content {
  position: relative;
  animation: fadeUp 1s ease-out;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TITLE */
.title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
  animation: fadeIn 1.2s ease-out;
}

.subtitle {
  font-size: 1.3rem;
  color: #cbd5e1;
  margin-bottom: 25px;
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* BUTTON */
.btn {
  display: inline-block;
  padding: 14px 30px;
  background: linear-gradient(135deg, #facc15, #d97706);
  color: #0f172a;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: 0.3s ease;
  box-shadow: 0 10px 30px rgba(250, 204, 21, 0.2);
}

.btn:hover {
  transform: scale(1.08);
  box-shadow: 0 15px 40px rgba(250, 204, 21, 0.4);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>