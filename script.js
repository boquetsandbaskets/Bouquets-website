document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("orderForm");
const result = document.getElementById("result");
const dmLink = document.getElementById("dmLink");

// Put your real Instagram DM link here if you want.
// Instagram doesn't always support direct DM deep-links reliably on desktop.
// So we’ll copy a message to clipboard as the safest beginner approach.
dmLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Tip: Fill the form to generate a ready-to-send DM message.");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  const message =
`Hi! I want to place a custom order 😊
Name: ${data.name}
Budget: ${data.budget}
Date: ${data.date}
Details: ${data.details}
Instagram: @bouquets_and_baskets`;

  try {
    await navigator.clipboard.writeText(message);
    result.textContent = "✅ DM message copied! Paste it in Instagram DM.";
  } catch {
    result.textContent = "✅ Message generated. Copy manually:\n" + message;
  }
});