<template>
  <footer class="footer">

    <!-- BRAND -->
    <div class="brand">
      <img src="@/assets/logo.svg" alt="Hotel Logo" class="logo" />
      <h2>UBUMWE HOTEL</h2>
      <p>Luxury • Comfort • Hospitality</p>
    </div>

    <!-- SOCIAL LINKS -->
    <div class="social">
      <h3>Follow Us</h3>

      <div class="icons">
        <a href="#" class="icon">Facebook</a>
        <a href="#" class="icon">Instagram</a>
        <a href="#" class="icon">Twitter</a>
        <a href="mailto:info@ubumwehotel.com" class="icon">Email</a>
        <a href="tel:+250700000000" class="icon">Call</a>
      </div>
    </div>

    <!-- BOTTOM -->
    <div class="bottom">
      <p>© {{ year }} Ubumwe Hotel. All rights reserved.</p>
    </div>

  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  padding: 50px 20px 20px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* BRAND */
.brand .logo {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4));
}

.brand h2 {
  color: #38bdf8;
  letter-spacing: 2px;
}

.brand p {
  color: #94a3b8;
  font-size: 14px;
  margin-top: 5px;
}

/* SOCIAL */
.social h3 {
  margin-bottom: 15px;
  color: #cbd5e1;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

/* SOCIAL LINKS STYLE */
.icon {
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 20px;

  background: rgba(255,255,255,0.05);
  color: #cbd5e1;

  transition: 0.3s;
  border: 1px solid rgba(255,255,255,0.08);
}

.icon:hover {
  background: #38bdf8;
  color: #0f172a;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
}

/* BOTTOM */
.bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 15px;
  font-size: 13px;
  color: #64748b;
}

/* MOBILE */
@media (max-width: 600px) {
  .icons {
    flex-direction: column;
  }
}
</style>