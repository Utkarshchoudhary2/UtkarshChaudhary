
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 200, "line_linked": { "opacity": 0.7 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
