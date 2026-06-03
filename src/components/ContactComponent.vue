<template>
  <div class="contact-page">
    <div class="overlay"></div>

    <div class="contact-card">
      <h1 class="title">Contact Us</h1>
      <p class="subtitle">We are always ready to assist you 24/7</p>

      <div class="contact-grid">
        <div class="contact-box">
          <span>📍</span>
          <h3>Location</h3>
          <p>Kigali, Rwanda</p>
        </div>

        <div class="contact-box">
          <span>📞</span>
          <h3>Phone</h3>
          <p>+250 700 000 000</p>
        </div>

        <div class="contact-box">
          <span>✉️</span>
          <h3>Email</h3>
          <p>info@ubumwehotel.com</p>
        </div>
      </div>

      <button class="btn">Send Message</button>
    </div>
  </div>
</template>

<style scoped>
/* full page background */
.contact-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  overflow: hidden;
}

/* glowing animation background */
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
  50% { transform: translateY(-40px); }
  100% { transform: translateY(0px); }
}

/* main card */
.contact-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  max-width: 850px;
  width: 100%;
  text-align: center;
  color: white;

  animation: fadeUp 0.8s ease-out;
}

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
  color: #38bdf8;
  margin-bottom: 10px;
}

.subtitle {
  color: #cbd5e1;
  margin-bottom: 30px;
}

/* grid layout */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.contact-box {
  background: rgba(255, 255, 255, 0.06);
  padding: 20px;
  border-radius: 15px;
  transition: 0.3s ease;
}

.contact-box:hover {
  transform: translateY(-8px);
  background: rgba(56, 189, 248, 0.15);
}

.contact-box span {
  font-size: 28px;
}

.contact-box h3 {
  margin: 10px 0;
  color: #7dd3fc;
}

.contact-box p {
  color: #e2e8f0;
}

/* button */
.btn {
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  background: #38bdf8;
  color: #0f172a;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #0ea5e9;
  transform: scale(1.05);
}
</style>