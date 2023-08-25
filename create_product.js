const createProduct = (event) => {
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
  console.log(myProduct);

  seeNewProduct(myProduct);
};

const seeNewProduct = async (myProduct) => {
  try {
    const URL = "https://striveschool-api.herokuapp.com/api/product/";
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(myProduct),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTI5NTIxNDcsImV4cCI6MTY5NDE2MTc0N30.zKRqE4_O6G_PPz7Gd1jbKXSFY5UNl7Qy0zhDoPi0-mo",
        "Content-Type": "application/json",
      },
    });

    const newProduct = await response.json();
    console.log(newProduct);
    alert(
      `Il tuo prodotto con id ${newProduct._id} è stato creato con successo`
    );
    window.location.assign("./index.html");
  } catch (error) {
    console.log(error.message);
  }
};

const toBackOff = () => {
  window.location.assign("./index.html");
};
