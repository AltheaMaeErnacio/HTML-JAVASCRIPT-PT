document.addEventListener("DOMContentLoaded", function () {

  var verses = [
    { text: "Do not judge by appearances, but judge with the right judgment.", ref: "John 7:24" },
    { text: "Fear not, for I am with you.", ref: "Isaiah 41:10" },
    { text: "Let everything that has breath praise the Lord.", ref: "Psalm 150:6" },
    { text: "Do not be conformed to this world, but be transformed by the renewal of your mind.", ref: "Romans 12:2" },
    { text: "For God so loved the world that he gave his only Son.", ref: "John 3:16" },
    { text: "Children obey your parents in the Lord.", ref: "Ephesians 6:1" },
    { text: "Forget the former things; do not dwell on the past.", ref: "Isaiah 43:18" },
    { text: "We love because he first loved us.", ref: "1 John 4:19" },
    { text: "Love the Lord your God with all your heart.", ref: "Deuteronomy 6:5" },
    { text: "Making the most of every opportunity.", ref: "Ephesians 5:16" },
    { text: "God is with her, she will not fall.", ref: "Psalm 46:5" }
  ];

  var currentVerse = {};

  function showDate() {
    var d = new Date();
    document.getElementById("date").innerText = d.toDateString();
  }

  function displayVerse(v) {
    document.getElementById("verse").innerText = '"' + v.text + '"';
    document.getElementById("reference").innerText = v.ref;
  }

  function dailyVerse() {
    var d = new Date();
    var index = d.getDate() % verses.length;
    currentVerse = verses[index];
    displayVerse(currentVerse);
  }

  function newVerse() {
    currentVerse = verses[Math.floor(Math.random() * verses.length)];
    displayVerse(currentVerse);
  }

  function saveFavorite() {
    var fav = JSON.parse(localStorage.getItem("favorites")) || [];
    fav.push(currentVerse);
    localStorage.setItem("favorites", JSON.stringify(fav));
    showFavorites();
  }

  function undoFavorite() {
    var fav = JSON.parse(localStorage.getItem("favorites")) || [];
    fav.pop();
    localStorage.setItem("favorites", JSON.stringify(fav));
    showFavorites();
  }

  function toggleFavorites() {
    var box = document.getElementById("favorites");
    box.style.display = box.style.display === "none" ? "block" : "none";
    showFavorites();
  }

  function showFavorites() {
    var fav = JSON.parse(localStorage.getItem("favorites")) || [];
    var list = document.getElementById("favoritesList");
    list.innerHTML = "";
    for (var i = 0; i < fav.length; i++) {
      var li = document.createElement("li");
      li.innerText = fav[i].text + " - " + fav[i].ref;
      list.appendChild(li);
    }
  }

  document.getElementById("newBtn").onclick = newVerse;
  document.getElementById("favBtn").onclick = saveFavorite;
  document.getElementById("undoBtn").onclick = undoFavorite;
  document.getElementById("viewBtn").onclick = toggleFavorites;

  showDate();
  dailyVerse();
});