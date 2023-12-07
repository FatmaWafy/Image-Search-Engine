let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");
const accesskey = "AgeVt3DHH8eCdS8lcKXPa4CPsm1vpNM3qHfziS498Qg";
let keyword = "";
let page = 1;

async function SearchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  console.log(data);
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  SearchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  SearchImage();
});
