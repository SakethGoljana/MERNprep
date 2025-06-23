const getTrendingVideos = () => {
  fetch("https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3ed7f7fb35msh1d6eb40e20aac68p1e31d3jsne169b50c3121",
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  });
};
