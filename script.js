const btnCrea = document.getElementById("btn-crea");
const btnMod = document.getElementById("btn-mod");
const listaProdotti = document.getElementById("lista-prodotti");

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const URL = "https://striveschool-api.herokuapp.com/api/product/";
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTI5NTIxNDcsImV4cCI6MTY5NDE2MTc0N30.zKRqE4_O6G_PPz7Gd1jbKXSFY5UNl7Qy0zhDoPi0-mo",
      },
    });

    listaProdotti.innerText = "";

    const parseBody = await response.json();
    console.log(parseBody);

    for (let i = 0; i < parseBody.length; i++) {
      const { brand, description, imageUrl, name, price, _id } = parseBody[i];
      // console.log(imageUrl);
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";
      li.innerHTML = ` 
        <div class="ms-2 me-auto">
          <div class="fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">${name}</div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel${i}">${name}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img id="${_id}" src="${imageUrl}" style="width: 100%; transform: scale(0.7)">

                  <p><strong>Brand:</strong> ${brand}</p>
                  <p><strong>Descrizione:</strong> ${description}</p>
                  <p><strong>Prezzo:</strong> ${price}$</p>
                  <p><strong>Id prodotto:</strong> ${_id}</p>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          ${description}
        </div>
      <span class="badge bg-primary rounded-pill">${price}$</span>
     `;
      listaProdotti.appendChild(li);
    }

    // parseBody.forEach((elem) => {
    //   const { brand, description, imageUrl, name, price, _id } = elem;
    //   const li = document.createElement("li");
    //   li.className =
    //     "list-group-item d-flex justify-content-between align-items-start";
    //   li.innerHTML = `
    //     <div class="ms-2 me-auto">
    //       <div class="fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">${name}</div>
    //       <!-- Modal -->
    //       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div class="modal-dialog">
    //           <div class="modal-content">
    //             <div class="modal-header">
    //               <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    //               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div class="modal-body">
    //               ...
    //             </div>
    //             <div class="modal-footer">
    //               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //               <button type="button" class="btn btn-primary">Save changes</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       ${description}
    //     </div>
    //   <span class="badge bg-primary rounded-pill">${price}$</span>
    //  `;
    //   listaProdotti.appendChild(li);
    // });
  } catch (error) {
    console.log(error.message);
  }
});
