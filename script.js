const cardsRow = document.querySelector(".cards-row");
const input = document.querySelector("input");

fetch("users.json")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      cardsRow.innerHTML += `
        <div class="card">
        <div class="profile">
            <div class="img-container">
                <img class="user-img" src="${user.src}" alt="profile">
            </div>
            <h2 class="user-name">${user.name}</h2>
        </div>
        <div class="user-bio">
            ${user.bio}
        </div>
    </div>
        `;
    });
  });

input.addEventListener("input", (e) => {
  let query = e.target.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let isPresent =
      card.children[0].children[1].textContent.toLowerCase().includes(query) ||
      card.children[1].textContent.toLowerCase().includes(query);
      
      if(isPresent){
        card.classList.add('show')
        card.classList.remove('hide')
      }
      else{
          card.classList.add('hide')   
          card.classList.remove('show')
      }
  });
});
