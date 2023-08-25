const prodId = new URLSearchParams(window.location.search).get("prodId");
console.log(prodId);

const URL = "https://striveschool-api.herokuapp.com/api/product/" + prodId;

window.addEventListener("DOMContentLoaded", async () => {
  const btnMod = document.getElementById("btn-mod");
  const btnDelete = document.getElementById("btn-delete");

  if (prodId) {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTI5NTIxNDcsImV4cCI6MTY5NDE2MTc0N30.zKRqE4_O6G_PPz7Gd1jbKXSFY5UNl7Qy0zhDoPi0-mo",
      },
    });
    if (response.ok) {
      const { brand, description, imageUrl, name, price } =
        await response.json();
      document.getElementById("input-nome").value = name;
      document.getElementById("input-brand").value = brand;
      document.getElementById("input-descriz").value = description;
      document.getElementById("input-prezzo").value = price;
      document.getElementById("input-url").value = imageUrl;
    }
  }
});

const toBackOff = () => {
  window.location.assign("./index.html");
};
