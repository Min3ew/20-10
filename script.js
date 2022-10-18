fetch('http://example.com/movies.json', {method: "POST", credentials:})
  .then((response) => response.json())
  .then((data) => console.log(data));
