window.onload = () =>{
    let container = document.querySelector(".containe");
    async function Data(){
        let local = await fetch('http://localhost:4000');
        let data = await local.json()
        data.forEach(element => {
            container.innerHTML += `
            <div class="card bg-dark m-2 p-2" style="width: 32%; height: 85vh">
            <h5 class="text-card text-light">${element.name}</h5>
            <img src=${element.img} class="mt-2" style="height: 230px" />
            <div class="mt-4">
            <p class="text-light" style="overflow: auto; height: 100%">${element.description}</p>
            </div>
            </div>`
        });
    }
    Data()
}
