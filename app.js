/* ==========================================================
   PECO LENS — APP NAVIGATION ENGINE
   Handles card switching for Layers 1–5
   ========================================================== */

// Track which layer is active
let currentLayer = 1;

// Get all cards
const cards = document.querySelectorAll(".card");

// Switch to a specific layer
function goToLayer(layerNumber) {
    currentLayer = layerNumber;

    cards.forEach((card, index) => {
        const cardLayer = index + 1;

        if (cardLayer === currentLayer) {
            card.classList.add("active");
            card.classList.remove("left");
        } else if (cardLayer < currentLayer) {
            card.classList.add("left");
            card.classList.remove("active");
        } else {
            card.classList.remove("active", "left");
        }
    });
}

// Example buttons (you will replace these later)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Peco Lens App Loaded");

    // Default to Layer 1
    goToLayer(1);
});

/* ==========================================================
   FUTURE HOOKS (You will fill these in later)
   ========================================================== */

// Open Lens
function openLens() {
    alert("Lens system will go here");
}

// Open Messaging
function openMessages() {
    alert("Messaging system will go here");
}

// Open Tools
function openTools() {
    goToLayer(2);
}

// Open Maintenance
function openMaintenance() {
    goToLayer(3);
}

// Open Messaging Layer
function openMessagingLayer() {
    goToLayer(4);
}

// Open Settings
function openSettings() {
    goToLayer(5);
}
