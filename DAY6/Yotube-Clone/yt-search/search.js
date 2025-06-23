const renderSuggestions = (data) => {
  const { results } = data;
  const rootElem = document.getElementById("search-suggestions");
  const inputElem = document.getElementById("search");

  rootElem.innerText = "";

  results.forEach((txt) => {
    const newPara = document.createElement("p");
    newPara.innerText = txt;

    newPara.addEventListener("click", () => {
      inputElem.value = txt;
      rootElem.innerText = "";
    });

    rootElem.appendChild(newPara);
  });
};

const searchsuggestions = (e) => {
  const search = e.target.value;

  const request = fetch(
    `https://youtube138.p.rapidapi.com/auto-complete/?q=${search}&hl=en&gl=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3ed7f7fb35msh1d6eb40e20aac68p1e31d3jsne169b50c3121",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    }
  );
  request.then((response) => {
    const pr2 = response.json();
    pr2
      .then((data) => {
        renderSuggestions(data);
      })
      .catch((err) => {
        console.error("Error parsing JSON:", err);
      });
  });
};
let timeoutId = null;
const timesearch = (e) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    searchsuggestions(e);
  }, 2000);
};
