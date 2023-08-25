const prodId = new URLSearchParams(window.location.search).get("prodId");
console.log(prodId);

const URL = "https://striveschool-api.herokuapp.com/api/product/" + prodId;

window.addEventListener("DOMContentLoaded", async () => {
  const btnDelete = document.getElementById("btn-delete");
  btnDelete.onclick = handleDelete;
  try {
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
  } catch (error) {
    console.log(error.message);
  }
});

const modProduct = (event) => {
  event.preventDefault();

  const inputNome = document.getElementById("input-nome").value;
  const inputBrand = document.getElementById("input-brand").value;
  const inputDescriz = document.getElementById("input-descriz").value;
  const inputPrezzo = document.getElementById("input-prezzo").value;
  const inputUrl = document.getElementById("input-url").value;

  const myProduct = {
    name: inputNome,
    brand: inputBrand,
    description: inputDescriz,
    price: inputPrezzo,
    imageUrl: inputUrl,
  };

  seeproductMod(myProduct);
};

const seeproductMod = async (myProduct) => {
  const conferma = confirm("Sei siucro di voler modificare questo prodotto?");
  if (conferma) {
    try {
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(myProduct),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTI5NTIxNDcsImV4cCI6MTY5NDE2MTc0N30.zKRqE4_O6G_PPz7Gd1jbKXSFY5UNl7Qy0zhDoPi0-mo",
          "Content-Type": "application/json",
        },
      });

      const productMod = await response.json();
      console.log(productMod);
      alert(
        `Il tuo prodotto con id ${productMod._id} è stato modificato con successo`
      );
      window.location.assign("./index.html");
    } catch (error) {
      console.log(error.message);
    }
  }
};

const toBackOff = () => {
  window.location.assign("./index.html");
};

const handleDelete = async () => {
  const conferma = confirm("Sei sicuro di voler eliminare questo prodotto?");
  if (conferma) {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTI5NTIxNDcsImV4cCI6MTY5NDE2MTc0N30.zKRqE4_O6G_PPz7Gd1jbKXSFY5UNl7Qy0zhDoPi0-mo",
      },
    });

    const deletedProduct = await response.json();
    alert("Hai eliminato con successo il prodotto con id" + prodId);
    window.location.assign("./index.html");
  } else {
    alert("Operazione annullata");
  }
};
