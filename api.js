const loadSearchData = () => {
  const searchField = document.getElementById("search-id");
  const searchText = searchField.value;
  searchField.value = "";
  // api
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(searchUrl)
    .then(res => res.json())
    .then(data => displaySearchIn(data.meals));
};

const displaySearchIn = meals => {

  const searchMeals = document.getElementById('search-result');
  meals.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
      </div>
    </div>`
    searchMeals.appendChild(div)
    console.log(meal);
  });

};
