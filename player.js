const p = new URLSearchParams(window.location.search);
fetch('anime.json')
  .then(r => r.json())
  .then(d => {
    let a = d.find(x => x.id === p.get('id'));
    if (!a) return;
    document.getElementById('animeTitle').textContent = a.title;
    document.getElementById('poster').src = a.poster;
    document.getElementById('videoPlayer').src = a.episodes[0].video;
  });