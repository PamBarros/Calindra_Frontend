const btn = document.getElementById("botao")
const produto = document.getElementById("pesquisa")
const main = document.getElementById("listaProdutos")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const nomeProduto = produto.value.toLowerCase();
  const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${nomeProduto}&source=nanook`
  
  fetch(url)
  .then(request => request.json())
  .then(date => apiRequest(date))
})

const apiRequest = req => {
  const listaProdutos = req.products.map(index => 
    
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title">${index.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: ${index.id}</h6>
        <p class="card-text">Tipo: ${index.type}</p>
      </div>
    </div>`   
        
  ).join(" ");
  main.classList.add("lista");
  main.innerHTML = listaProdutos;
}
