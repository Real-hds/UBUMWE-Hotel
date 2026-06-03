<template>
  <div class="register-page">

    <h1 class="title">Room Registration</h1>
    <p class="subtitle">Book your luxury stay in seconds</p>

    <!-- ROOMS SECTION -->
    <div class="rooms">

      <div class="card">
        <img :src="room1" />
        <p>Deluxe Room</p>
      </div>

      <div class="card">
        <img :src="room2" />
        <p>Executive Room</p>
      </div>

      <div class="card">
        <img :src="room3" />
        <p>Suite Room</p>
      </div>

      <div class="card">
        <img :src="room4" />
        <p>VIP Room</p>
      </div>

    </div>

    <!-- FORM SECTION -->
    <form class="form">

      <div class="row">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
      </div>

      <div class="row">
        <input type="tel" placeholder="Phone Number" />
        <input type="date" />
      </div>

      <div class="row">
        <input type="date" />
        <select>
          <option>Select Room</option>
          <option>Deluxe Room</option>
          <option>Executive Room</option>
          <option>Suite Room</option>
          <option>VIP Room</option>
        </select>
      </div>

      <button type="submit">Confirm Booking</button>

    </form>

  </div>
</template>

<script setup>
import room1 from "../assets/room1.png"
import room2 from "../assets/room2.png"
import room3 from "../assets/room3.png"
import room4 from "../assets/room4.png"
</script>

<style scoped>
/* PAGE */
.register-page {
  padding: 100px 20px;
  max-width: 1100px;
  margin: auto;
  animation: fadeUp 0.8s ease-out;
}

/* ANIMATION */
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

/* TITLE */
.title {
  text-align: center;
  font-size: 36px;
  color: #0f172a;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 40px;
}

/* ROOMS */
.rooms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card p {
  padding: 10px;
  font-weight: bold;
  text-align: center;
  color: #0f172a;
}

/* FORM */
.form {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  padding: 30px;
  border-radius: 20px;
  color: white;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

/* ROWS */
.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

/* INPUTS */
input, select {
  padding: 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.1);
  color: white;
  transition: 0.3s;
}

input::placeholder {
  color: #cbd5e1;
}

input:focus, select:focus {
  background: rgba(255,255,255,0.2);
  transform: scale(1.02);
}

/* BUTTON */
button {
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #facc15, #d97706);
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(250, 204, 21, 0.3);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .title {
    font-size: 26px;
  }
}
</style>