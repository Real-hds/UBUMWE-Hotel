<template>
  <div class="about-page">
    <div class="overlay"></div>

    <div class="about-card">
      <h1 class="title">About Us</h1>

      <p class="text">
        Ubumwe Hotel is a luxury hotel offering comfort, modern rooms,
        and excellent hospitality services in Rwanda.
      </p>

      <div class="highlights">
        <div class="box">
          <h3>🏨 Luxury Rooms</h3>
          <p>Modern and fully equipped rooms for maximum comfort.</p>
        </div>

        <div class="box">
          <h3>🍽 Restaurant</h3>
          <p>Delicious local and international cuisine.</p>
        </div>

        <div class="box">
          <h3>📶 Free Wi-Fi</h3>
          <p>High-speed internet across the entire hotel.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full page background */
.about-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  overflow: hidden;
}

/* soft animated glow */
.overlay {
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(0, 180, 255, 0.15);
  filter: blur(120px);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
}

/* main card */
.about-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  max-width: 850px;
  text-align: center;
  color: white;

  animation: fadeUp 0.8s ease-out;
}

/* animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-size: 36px;
  margin-bottom: 15px;
  color: #38bdf8;
}

.text {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #e2e8f0;
}

/* feature boxes */
.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.box {
  background: rgba(255, 255, 255, 0.06);
  padding: 20px;
  border-radius: 15px;
  transition: 0.3s ease;
}

.box:hover {
  transform: translateY(-8px);
  background: rgba(56, 189, 248, 0.15);
}

.box h3 {
  margin-bottom: 10px;
  color: #7dd3fc;
}

.box p {
  font-size: 14px;
  color: #cbd5e1;
}
</style>