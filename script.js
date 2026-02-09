document.getElementById("year").textContent = new Date().getFullYear();

const ig = "https://www.instagram.com/bouquets_and_baskets/";

document.querySelectorAll("[data-product]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-product");
    const msg =
`Hi! I want to order: ${name} 😊
Budget:
Delivery date:
Theme/colors:
Message card text:`;

    // Copy message for easy paste in IG DM
    navigator.clipboard.writeText(msg).then(() => {
      window.open(ig, "_blank");
      alert("Message copied ✅ Paste it in Instagram DM.");
    }).catch(() => {
      window.open(ig, "_blank");
      alert("Open Instagram DM and send: \n\n" + msg);
    });
  });
});
