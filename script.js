fetch('anime.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('animeList');
    if (!data.length) {
      list.innerHTML = "<p>No anime found.</p>";
      return;
    }
    data.forEach(anime => {
      const link = document.createElement('a');
      link.href = `watch.html?id=${anime.id}`;
      link.textContent = `▶️ ${anime.title}`;
      list.appendChild(link);
    });
  });