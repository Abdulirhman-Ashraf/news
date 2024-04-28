async function getData() {
  try {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1fbdad0585274d4092cd85e96440a1f0"
    );
    let data = await response.json();
    console.log(data);
    show(data);
  } catch (error) {
    console.log("Error : ", error.message);
  }
}
let time = new Date().getHours();
function show(data) {
  for (let i = 0; i < 9; i++) {
    document.querySelector("#topCard").innerHTML = `<div class="row g-0 " 
<div class="col-md-4 " >
  <img src="${data.articles[i].urlToImage}" class="card-img-left alt="...">
</div>
<div class="col-md-8" >
  <div class="card-body" >
  <p>${data.articles[i].source.name}</p>
    <h5 class="card-title"><a href=${
      data.articles[i].url
    } style="color:black">${data.articles[i].title}</a></h5>
    <p class="card-text">    ${data.articles[i].description}
    </p>
    <p class="card-text"><small class="text-body-secondary">Last updated ${data.articles[
      i
    ].publishedAt.split("T", 1)}</small></p>
    <p class="card-text"><small class="text-body-secondary">    ${
      time - new Date(data.articles[i].publishedAt).getHours()
    } hrs age
    </small></p>

  </div>
</div>

</div>`;
    document.querySelector("#cards").innerHTML += ` <div class="col">
<div class="card h-100">
<img src="${data.articles[i].urlToImage}" class="card-img-top" alt="..." />
<div class="card-body">
<p>${data.articles[i].source.name}</p>
    <h5 class="card-title"><a href=${
      data.articles[i].url
    } style="color:black">${data.articles[i].title}</a></h5>
    <p class="card-text">
    ${data.articles[i].description}
    </p>
  </div>
  <div class="card-footer">
  <p class="card-text"><small class="text-body-secondary">Last updated ${data.articles[
    i
  ].publishedAt.split("T", 1)}</small></p>
  <p class="card-text"><small class="text-body-secondary">${
    time - new Date(data.articles[i].publishedAt).getHours()
  } hrs ago</small></p>
  </div>
</div>
</div>
`;
    document.querySelector("#Most").innerHTML += ` <div class="col">
<div class="card h-100">
<div class="card-body">
<p >${data.articles[i].source.name}</p>
    <h5 class="card-title"><a href=${
      data.articles[i].url
    } style="color:black;font-size:25px">${i }  ${ data.articles[i].title}</a></h5>
   
  </div>
  
  </div>
</div>
</div>
`;
  }
}
getData();

// data.articles[0].urlToImage
