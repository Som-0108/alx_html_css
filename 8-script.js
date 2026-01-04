/* ============= Global Reset ============= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
}

/* ============= Header ============= */
header {
  width: 100%;
  background: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
}

/* ============= Navigation ============= */
nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: 0.3s;
}

nav ul li a:hover {
  color: #007bff;
}

/* ============= Hamburger Icon ============= */
.hamburger {
  width: 30px;
  height: 22px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.hamburger span {
  height: 4px;
  background: #333;
  border-radius: 4px;
  transition: 0.4s;
}

/* When active (X animation) */
.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* ============= Mobile Styles ============= */
@media (max-width: 480px) {
  nav {
    position: absolute;
    top: 70px;
    left: 0;
    background: white;
    width: 100%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
    border-bottom: 1px solid #ddd;
  }

  nav.open {
    max-height: 200px; /* adjusts how far menu drops */
  }

  nav ul {
    flex-direction: column;
    padding: 10px 20px;
    gap: 15px;
  }

  /* Show hamburger on mobile */
  .hamburger {
    display: flex;
  }
}