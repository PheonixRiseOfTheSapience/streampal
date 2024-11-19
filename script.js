let Autohide = false;
var server = 3;
const TodaysDate = new Date();
const timer = ms => new Promise(res => setTimeout(res, ms));
var imdbId;
var namee;
var Id;
var objlist = [];
var adServersList = [];
var AdServersInfo = {
  'id': null,
  'ep': null,
  'season': null,
}
var Bookmarks = [];
var BookmarksJson;

window.open = function(text) { console.log('tried to Open: ' + text); return true; };

//Override Existing Window.alert function to combat popups and alerts!
window.alert = function(text) { console.log('tried to alert: ' + text); return true; };

//Window built in ads blocked!!
/*onbeforeunload = (event) => { event.preventDefault; console.log("prevented redirect!") };
window.onbeforeunload = function(event) {
  console.log("prevented Redirect!");
  event.preventDefault;
}*/

//Register events in the onload to ensure elements are loaded!
window.onload = async function() {


  document.getElementById('logobutton').addEventListener('click', test);
  document.getElementById('searchbox').addEventListener('change', updateSearchContainerbySearch);
  document.getElementById('bookmarkButton').addEventListener('mouseover', bookmarkHovered);
  document.getElementById('bookmarkButton').addEventListener('mouseout', bookmarkHovered);
  try {
    if (typeof navigator.serviceWorker !== 'undefined') {
      navigator.serviceWorker.register('pwabuilder-sw.js')
    }
  } catch (e) { console.log(e); }

  if (localStorage.getItem('bookmarks')) {
    upgradeBookmarkVersion();
    BookmarksJson = JSON.parse(localStorage.getItem('bookmarks'));
  }
  //document.getElementById('').addEventListener()
  //document.getElementById('framez').addEventListener('change', sndbx);
  /*setInterval(function (){
      console.log('howdy');
      document.getElementById('framez').innerHTML = "<blank><blank>";
      document.getElementById('framez').textContent = '';
      var elem = document.getElementById('framez');
      elem.children = null;
      elem.textContent = null;
      elem.nodeValue = "";
  }, 1);*/
  /*
  window.addEventListener("message", receiveMessage, false);
  window.addEventListener("pageshow", receiveMessage, false);
  function receiveMessage(event) {
    // Use event.origin here like
    if(event.origin == "https://127.0.0.1:3000"){
    // code here to block/unblock access ... a method like the one in user1646111's post can be good.
    }
    else{
      event.preventDefault();
    // code here to block/unblock access ... a method like the one in user1646111's post can be good.
    }
  }*/
  movieinitexample();
  await timer(1000);
  movieinitstonerexample();
  await timer(1000);
  tvshowinitstonerexample();
  await timer(1000);
  tvshowinitexample();
  await timer(1000);
  bookmarkInit();
  bookmarkUpdate();

  if (document.cookie.split('; ').find((row) => row.startsWith('name='))?.split('=')[1]) {
    namee = document.cookie.split('; ').find((row) => row.startsWith('name='))?.split('=')[1];
  }
  if (document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]) {
    server = parseInt(document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]);
    console.log('server value found loaded:', server);
    if (document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1]) {
      if (document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1]) {
        if (document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1] === "movie") {
          updateMovieContainer();
          updateRecommendedAndSimilar();
        }
        if (document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1] === "tv") {
          if (document.cookie.split('; ').find((row) => row.startsWith('season='))?.split('=')[1] && document.cookie.split('; ').find((row) => row.startsWith('episode='))?.split('=')[1]) {
            updateTvContainer();
            updateRecommendedAndSimilar();
          }
        }
      }
    }
  }
  /*var iframes = document.querySelectorAll('iframe');
  [].forEach.call(iframes, function(iframe) {
    // do whatever
    iframe.contentWindow.onload = function() {
      console.log('iframe is completely loaded');
      iframe.contentWindow.alert = function(text) { console.log('tried to alert: ' + text); return true; };
      iframe.contentWindow.open = function(text) { console.log('tried to Open: ' + text); return true; };
    }
    //div.style.color = "red";
  });*/
  /* const iframe = document.querySelector('watchMoviePlayer');
   console.log(iframe);
   iframe.onload = function() {
     console.log('iframe is completely loaded');
     iframe.contentWindow.alert = function(text) { console.log('tried to alert: ' + text); return true; };
     iframe.contentWindow.open = function(text) { console.log('tried to Open: ' + text); return true; };
     iframe.contentWindow.onload = function() {
       var script = document.createElement('script');
       script.src = 'https://jebg1234.github.io/streampal/adblocker.js';
       script.onload = function() {
         console.log('your script have been loaded');
       }
       document.body.appendChild(script);
     }
   }
   const iframe2 = document.querySelector('watchTvPlayer');
   console.log(iframe2);
   iframe2.onload = function() {
     console.log('iframe is completely loaded');
     iframe2.contentWindow.alert = function(text) { console.log('tried to alert: ' + text); return true; };
     iframe2.contentWindow.open = function(text) { console.log('tried to Open: ' + text); return true; };
     iframe2.contentWindow.onload = function() {
       var script = document.createElement('script');
       script.src = 'https://jebg1234.github.io/streampal/adblocker.js';
       script.onload = function() {
         console.log('your script have been loaded');
       }
       iframe2.contentDocument.body.appendChild(script);
     }
   }*/
}
//updateTvContainer();

function updatewatchIdAndEtc(id, type, name) {
  const d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  var kia = "expires=" + d.toUTCString();
  document.cookie = "watchId=" + id + "; SameSite=strict; Secure; " + kia;
  Id = id;
  document.cookie = "watchType=" + type + "; SameSite=strict; Secure; " + kia;
  document.cookie = "name=" + name + "; SameSite=strict; Secure; " + kia;
  namee = name;
  /*
  * Memory Note Please don't forget to add a updateExternalId
  */

}

async function updateWatchHistoryContainers() {
  try {
    if (localStorage.getItem('watch-history')) {
      document.getElementById('watchHistory').removeAttribute('style');
      var historyJson = JSON.parse(localStorage.getItem('watch-history'));
      document.getElementById("tvHistorylist").innerHTML = "";
      document.getElementById("movieHistorylist").innerHTML = "";
      for (var tvobj of historyJson.tv.reverse()) {
        //console.log(tvobj);
        fetch(`https://api.themoviedb.org/3/tv/${tvobj.id}?language=en-US`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((json) => {
            //console.log(data);
            //console.log(json.media_type);
            var overview;
            if (json.overview) {
              overview = json.overview.substring(0, 200);
            } else {
              overview = "";
            }
            if (json.first_air_date) {
              const newelement = document.createElement("li");
              newelement.innerHTML = `<figure class="card__thumbnail"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("tvHistorylist").appendChild(newelement);
            }
          }).catch(e => {
            //console.log(e);
          });
      }
      for (var movieobj of historyJson.movies.reverse()) {
        //console.log(movieobj);
        fetch(`https://api.themoviedb.org/3/movie/${movieobj.id}?language=en-US`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((json) => {
            var overview;
            if (json.overview) {
              overview = json.overview.substring(0, 200);
            } else {
              overview = "";
            }
            const newelement = document.createElement("li");
            newelement.innerHTML = `<figure class="card__thumbnail"></figure> \
                    <h3 class="card-title">${json.title}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.release_date.split("-")[0]}</p> \
                    </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
            document.getElementById("movieHistorylist").appendChild(newelement);
          }).catch(e => {
            //console.log(e);
          });
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function bookmarkInit() {
  if (localStorage.getItem('bookmarks')) {
    document.getElementById('bookmarkContainerAll').removeAttribute('style');
    var id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
    var type = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
    if (id && type) {
      var jsons = JSON.parse(localStorage.getItem('bookmarks'));
      switch (type) {
        case "tv":
          if (jsons.tv.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('found it!');
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
            return;
          } else {
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
            return;
          }
        case "movie":
          if (jsons.movies.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('found it!');
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
            return;
          } else {
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
            return;
          }
        default:
          break;
      }
      /* Deprecated!
      if (jsons.find(tree => tree.id === id)) {
        //console.log('found it!');
        document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
      } else {
        document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
      }*/
    }
  }
}

async function bookmarkUpdate() {
  if (localStorage.getItem('bookmarks')) {
    try { document.getElementById('bookmarkContainerAll').removeAttribute('style'); } catch (e) { console.log('already shown!') };
    var bookmarksJson = JSON.parse(localStorage.getItem('bookmarks'));
    document.getElementById("bookmarklist").innerHTML = "";
    document.getElementById("moviebookmarklist").innerHTML = "";
    if (bookmarksJson.tv !== null && bookmarksJson.tv !== undefined) {
      for (var tvid of bookmarksJson.tv) {
        fetch(`https://api.themoviedb.org/3/tv/${tvid}?language=en-US`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((json) => {
            //console.log(data);
            //console.log(json.media_type);
            var overview;
            if (json.overview) {
              overview = json.overview.substring(0, 200);
            } else {
              overview = "";
            }
            if (json.first_air_date) {
              const newelement = document.createElement("li");
              newelement.innerHTML = `<figure class="card__thumbnail"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("bookmarklist").appendChild(newelement);
            }
          }).catch(e => {
            //console.log(e);
          });
      }
    }
    if (bookmarksJson.movies !== null && bookmarksJson.movies !== undefined) {
      for (var movieid of bookmarksJson.movies) {
        fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((json) => {
            var overview;
            if (json.overview) {
              overview = json.overview.substring(0, 200);
            } else {
              overview = "";
            }
            const newelement = document.createElement("li");
            newelement.innerHTML = `<figure class="card__thumbnail"></figure> \
                    <h3 class="card-title">${json.title}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.release_date.split("-")[0]}</p> \
                    </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
            document.getElementById("moviebookmarklist").appendChild(newelement);
          }).catch(e => {
            //console.log(e);
          });
      }
    }

  }
}

function upgradeBookmarkVersion() {
  if (localStorage.getItem('bookmarks')) {
    var bookmarksJson2 = JSON.parse(localStorage.getItem('bookmarks'));
    var newJsonStyle = {
      "movies": [],
      "tv": []
    }
    //console.log('been logged', bookmarksJson2.movies);
    if (bookmarksJson2.movies === undefined && bookmarksJson2.tv === undefined) {
      for (obj of bookmarksJson2) {
        if (obj.type !== null) {
          if (obj.type === "tv") {
            newJsonStyle.tv.push(obj.id.toString());
            //console.log('type tv', obj.id, obj.type);
          } else {
            newJsonStyle.movies.push(obj.id.toString());
            //console.log('type movie', obj.id, obj.type);
          }
        }
      }
      localStorage.setItem('bookmarks', JSON.stringify(newJsonStyle));
    }

  }
}

function bookmarkCard(OGObj) {
  if (localStorage.getItem('bookmarks')) {
    //console.log("bookmarks Found!");
    try { document.getElementById('bookmarkContainerAll').removeAttribute('style'); } catch (e) { console.log('already shown!') };
    //var id = document.getElementById(OGObj.id).getAttribute('data-id');
    //var type = document.getElementById(OGObj.id).getAttribute('data-type');
    var id = OGObj.getAttribute('data-id');
    var type = OGObj.getAttribute('data-type');
    //console.log(id);
    //console.log(type);
    if (id) {
      var bookmarksJson2 = JSON.parse(localStorage.getItem('bookmarks'));
      //console.log(bookmarks);
      switch (type) {
        case "tv":
          if (bookmarksJson2.tv.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('Found it!');
            bookmarksJson2.tv = bookmarksJson2.tv.filter(x => parseInt(x) !== parseInt(id));
            OGObj.setAttribute('src', 'assets/bookmarkfilled.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
          } else {
            //console.log("Boookmarking IT!");
            OGObj.setAttribute('src', 'assets/bookmark.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmark.png');
            bookmarksJson2.tv.push(id);
          }
          localStorage.setItem('bookmarks', JSON.stringify(bookmarksJson2));
          bookmarkUpdate();
          return;
        case "movie":
          if (bookmarksJson2.movies.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('Found it!');
            bookmarksJson2.movies = bookmarksJson2.movies.filter(x => parseInt(x) !== parseInt(id));
            OGObj.setAttribute('src', 'assets/bookmarkfilled.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
          } else {
            //console.log("Boookmarking IT!");
            OGObj.setAttribute('src', 'assets/bookmark.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmark.png');
            bookmarksJson2.movies.push(id);
          }
          localStorage.setItem('bookmarks', JSON.stringify(bookmarksJson2));
          bookmarkUpdate();
          return;
        default:
          break;
      }
    }
  } else {
    //console.log("Not Found No Bookmarks Executed!");
    var newJsonStyle = {
      "movies": [],
      "tv": []
    }
    //var id = document.getElementById(OGObj.id).getAttribute('data-id');
    var id = OGObj.getAttribute('data-id');
    var type = OGObj.getAttribute('data-type');
    //var type = document.getElementById(OGObj.id).getAttribute('data-type');
    if (id && type) {
      switch (type) {
        case "tv":
          newJsonStyle.tv.push(id);
        case "movie":
          newJsonStyle.movies.push(id);
        default:
          break;
      }
      //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
      OGObj.setAttribute('src', 'assets/bookmarkfilled.png');
      localStorage.setItem('bookmarks', JSON.stringify(newJsonStyle));
      bookmarkUpdate();
      return;
    }
  }
}

function updateHistory(id, type, season, episode) {
  if (localStorage.getItem('watch-history')) {
    switch (type) {
      case "movie":
        var obj = {
          "id": id
        }
        var historyJson = JSON.parse(localStorage.getItem('watch-history'));
        if (historyJson.movies.find(moviesobj => moviesobj.id === id)) {
          historyJson.movies = historyJson.movies.filter(x => x.id !== id);
          historyJson.movies.push(obj);
        } else {
          if (historyJson.movies.length === 100) {//Here we will remove the first element by doing reverse and pop then reverse again to remove the first element!
            historyJson.movies = historyJson.movies.splice(1, historyJson.movies.length);
            //historyJson.movies = historyJson.movies.reverse().pop().reverse();
            //Successfully removed the very last watched item on the list
            historyJson.movies.push(obj);
          } else {//Here we just update the element as normal adding it to the array!
            historyJson.movies.push(obj);
          }
        }
        localStorage.setItem('watch-history', JSON.stringify(historyJson));
        updateWatchHistoryContainers();
        break;

      case "tv":
        var obj = {
          "id": id,
          "season": season,
          "episode": episode,
        }
        var historyJson = JSON.parse(localStorage.getItem('watch-history'));
        if (historyJson.tv.find(tvobj => tvobj.id === id)) {
          historyJson.tv = historyJson.tv.filter(x => x.id !== id);
          historyJson.tv.push(obj);
        } else {
          if (historyJson.tv.length === 100) {//Here we will remove the first element by doing reverse and pop then reverse again to remove the first element!
            historyJson.tv = historyJson.tv.splice(1, historyJson.tv.length);
            //historyJson.tv = historyJson.tv.reverse().pop().reverse();
            //Successfully removed the very last watched item on the list
            historyJson.tv.push(obj);
          } else {//Here we just update the element as normal adding it to the array!
            historyJson.tv.push(obj);
          }
        }
        localStorage.setItem('watch-history', JSON.stringify(historyJson));
        updateWatchHistoryContainers();
        break;

    }
  } else { ///Here we switch through and create the Watch-history object!
    switch (type) {
      case "movie":
        var movieArray = [];
        var obj = {
          "id": id
        }
        movieArray.push(obj);
        var historyJsonobj = {
          "movies": movieArray,
          "tv": []
        }
        localStorage.setItem('watch-history', JSON.stringify(historyJsonobj));
        updateWatchHistoryContainers();
        break;

      case "tv":
        var tvArray = [];
        var obj = {
          "id": id,
          "season": season,
          "episode": episode
        }
        tvArray.push(obj);
        var historyJsonobj = {
          "movies": [],
          "tv": tvArray
        }
        localStorage.setItem('watch-history', JSON.stringify(historyJsonobj));
        updateWatchHistoryContainers();
        break;

    }
  }
}


function bookmark() {
  //console.log('Bookmark Clicked!');
  if (localStorage.getItem('bookmarks')) {
    //console.log("bookmarks Found!");
    var id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
    var type = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
    if (id) {
      var bookmarksJson = JSON.parse(localStorage.getItem('bookmarks'));
      switch (type) {
        case "tv":
          if (bookmarksJson.tv.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('Found it!');
            bookmarksJson.tv = bookmarksJson.tv.filter(x => parseInt(x) !== parseInt(id));
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
          } else {
            //console.log("Boookmarking IT!");
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmark.png');
            bookmarksJson.tv.push(id);
          }
          localStorage.setItem('bookmarks', JSON.stringify(bookmarksJson));
          bookmarkUpdate();
          return;
        case "movie":
          if (bookmarksJson.movies.find(tree => parseInt(tree) === parseInt(id))) {
            //console.log('Found it!');
            bookmarksJson.movies = bookmarksJson.movies.filter(x => parseInt(x) !== parseInt(id));
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
          } else {
            //console.log("Boookmarking IT!");
            document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
            //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmark.png');
            bookmarksJson.movies.push(id);
          }
          localStorage.setItem('bookmarks', JSON.stringify(bookmarksJson));
          bookmarkUpdate();
          return;
        default:
          break;
      }
    }
  } else {
    //console.log("Not Found No Bookmarks Executed!");
    var newJsonStyle = {
      "movies": [],
      "tv": []
    }
    //var id = document.getElementById(OGObj.id).getAttribute('data-id');
    var id = OGObj.getAttribute('data-id');
    var type = OGObj.getAttribute('data-type');
    //var type = document.getElementById(OGObj.id).getAttribute('data-type');
    if (id && type) {
      switch (type) {
        case "tv":
          newJsonStyle.tv.push(id);
        case "movie":
          newJsonStyle.movies.push(id);
        default:
          break;
      }
      //document.getElementById(OGObj.id).setAttribute('src', 'assets/bookmarkfilled.png');
      document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
      localStorage.setItem('bookmarks', JSON.stringify(newJsonStyle));
      bookmarkUpdate();
      return;
    }
  }
}

function bookmarkHovered() {
  var src = document.getElementById("bookmarkButton").getAttribute('src');
  if (src === "assets/bookmarkfilled.png") {
    document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmark.png');
  } else {
    document.getElementById("bookmarkButton").setAttribute('src', 'assets/bookmarkfilled.png');
  }
}

function bookmarkCardHovered(obj) {
  //var src = document.getElementById("bookmarkButton").getAttribute('src');
  if (obj.src.split('assets/')[1] === "bookmarkfilled.png") {
    //console.log(obj.src.split('assets/')[1]);
    document.getElementById(obj.id).setAttribute('src', 'assets/bookmark.png');
  } else {
    document.getElementById(obj.id).setAttribute('src', 'assets/bookmarkfilled.png');
  }
}

function updatewatchType(type) {
  const d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  var kia = "expires=" + d.toUTCString();
  document.cookie = "watchType=" + type + "; SameSite=strict; Secure; " + kia;
}

function updateSearchContainerbyPage(n) {
  var result = document.getElementById('searchbox').value;
  //console.log(result2);
  //console.log(result);
  if (result) {
    var query = encodeURIComponent(encodeURI(result.replaceAll(' ', '-')).toString()).toString();
    //console.log(query);
    try {
      fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=${parseInt(n)}&append_to_response=external_ids`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          document.getElementById("searchlist").innerHTML = "";
          for (var json of data.results) {
            if (json.media_type !== "person") {
              //console.log(json.media_type);
              var overview;
              if (json.overview) {
                overview = json.overview.substring(0, 200);
              } else {
                overview = "";
              }

              if (json.media_type === "movie") {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.title}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.release_date.split("-")[0]}</p> \
                    </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "${json.media_type}");`);
                document.getElementById("searchlist").appendChild(newelement);
              }

              if (json.media_type === "tv") {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    //console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-5-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "${json.media_type}");`);
                document.getElementById("searchlist").appendChild(newelement);
              }
            }
          }
        }).catch(e => {
          //console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

function updateSearchContainerbySearch() {
  //console.log('search bar was updated! event fired Successfully');
  //var result = document.getElementById("searchbox").getAttribute('value');
  var result = document.getElementById('searchbox').value;
  //console.log(result2);
  //console.log(result);
  if (result) {
    var query = encodeURIComponent(encodeURI(result.replaceAll(' ', '-')).toString()).toString();
    //console.log(query);
    try {
      fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&append_to_response=external_ids`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          document.getElementById("pagelist").innerHTML = "";
          document.getElementById("searchlist").innerHTML = "";
          for (var json of data.results) {
            if (json.media_type !== "person") {
              //console.log(json.media_type);
              var overview;
              if (json.overview) {
                overview = json.overview.substring(0, 200);
              } else {
                overview = "";
              }

              if (json.media_type === "movie") {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.title}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.release_date.split("-")[0]}</p> \
                    </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "${json.media_type}");`);
                document.getElementById("searchlist").appendChild(newelement);
              }

              if (json.media_type === "tv") {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    //console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-5-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${overview}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "${json.media_type}");`);
                document.getElementById("searchlist").appendChild(newelement);
              }
            }
          }
          if (data.total_pages >= 2) {
            for (var i = 0; data.total_pages > i; i++) {
              const pageelement = document.createElement("div");
              pageelement.innerHTML = `${(i + 1)}`;
              pageelement.setAttribute("class", "card2");
              pageelement.setAttribute("onclick", `updateSearchContainerbyPage(${(i + 1)})`);
              //newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("pagelist").appendChild(pageelement);
            }
          } else {
            const pageelement = document.createElement("div");
            pageelement.innerHTML = `${(1)}`;
            pageelement.setAttribute("class", "card6");
            pageelement.setAttribute("onclick", `updateSearchContainerbyPage(${(1)})`);
            //newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("pagelist").appendChild(pageelement);
          }
        }).catch(e => {
          //console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

function updateMovieContainer() {
  var id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
  bookmarkInit();
  //var server = parseInt(document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]);
  //var id; //Here we will load it from the document cookies
  var server = parseInt(document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]);
  var watchType = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
  console.log(watchType);
  console.log(server);
  if (watchType === 'movie') {
    try {
      document.getElementById("watchTvPlayer").removeAttribute('src');
      document.getElementById("watchMoviePlayer").removeAttribute('style');
    } catch (e) { }
    document.getElementById("seasoncontainer").setAttribute('style', 'display: none;');
    document.getElementById("episodecontainer").setAttribute('style', 'display: none;');
    document.getElementById("watchTvPlayer").setAttribute('style', 'display: none;');
    const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
    id = cookieValue;
    //updateMovieAdServers(id);
    updateHistory(id, "movie", null, null);
    if (server === 1) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          //document.getElementById("watchTvPlayer").removeAttribute('sandbox');
          document.getElementById("watchMoviePlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
          document.getElementById("watchMoviePlayer").setAttribute('src', `https://dbgo.fun/imdb.php?id=${data.imdb_id}`);
          //console.log(data);
        }).catch(e => {
          //console.log(e);
        });
    }
    if (server === 2) {
      document.getElementById("watchMoviePlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
      document.getElementById("watchMoviePlayer").setAttribute('src', 'https://databasegdriveplayer.xyz/player.php?tmdb=' +id+'/');//13612
    }
    if (server === 3) {
      document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
      //document.getElementById("watchMoviePlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
      document.getElementById("watchMoviePlayer").setAttribute('src', 'https://v2.vidsrc.me/embed/'+id+'/');//13612
    }

    if (server === 4) {
      //document.getElementById("watchMoviePlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
      document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
      document.getElementById("watchMoviePlayer").setAttribute('src', `https://www.2embed.org/embed/tmdb/movie?id=${id}/`);//13612
    }

    if (server === 5) {
      try {
        document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
        fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
            //document.getElementById("watchMoviePlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
            document.getElementById("watchMoviePlayer").setAttribute('src', `https://gomo.to/movie/${data.imdb_id}/`);
            //console.log(data);
          }).catch(e => {
            ////console.log(e);
          });
      } catch (e) { //console.log(e); }
      }
    }

      if (server === 6) {
        try {
          console.log('updating to server 6',server);
          document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
          document.getElementById("watchMoviePlayer").setAttribute('src', 'https://superembed.streampal.repl.co/?video_id='+id+'&tmdb=1');
          //document.getElementById("watchTvPlayer").removeAttribute('sandbox');
          /*var Loc = (server - 6);
          if (adServersList[Loc].server === "doodstream" || adServersList[Loc].server === "streamsb" || adServersList[Loc].server === "highload" || adServersList[Loc].server === "fembed" || adServersList[Loc].server === "vidcloud" || adServersList[Loc].server === "mixdrop") {
            //console.log("Its sandbox detection so removing sandbox please have ad blocker or brave browser recommended!");
            document.getElementById("watchMoviePlayer").removeAttribute('sandbox');
          } else { document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"); }*/
          //document.getElementById("watchMoviePlayer").setAttribute('src', adServersList[Loc].url);
        } catch (e) { return; }
      }
  }
}

function updateTvContainer() {
  bookmarkInit();
  var id; //Here we will load it from the document cookies
  var season = document.cookie.split('; ').find((row) => row.startsWith('season='))?.split('=')[1];
  //var episode = document.cookie.split('; ').find((row) => row.startsWith('episode='))?.split('=')[1];
  if (document.cookie.split('; ').find((rowc) => rowc.startsWith('watchType=tv'))) {


    const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
    id = cookieValue;
    try {
      document.getElementById("watchTvPlayer").removeAttribute('style');
      document.getElementById("seasoncontainer").removeAttribute('style');
      //document.getElementById("watchMoviePlayer").removeAttribute('src');
      document.getElementById("episodecontainer").removeAttribute('style');
      document.getElementById("watchMoviePlayer").setAttribute('style', 'display: none;');
    } catch (e) { }
    //Put inside if statement to make sure its watching a tv show! check the cookies!
    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&append_to_response=external_ids`, {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        document.getElementById("listofseasons").innerHTML = "";
        objlist = [];
        for (var json of data.seasons) {
          if (json.name !== null && !json.name.startsWith("Special")) {
            var obj = {
              "season": json.season_number,
              "episode_count": json.episode_count
            };
            obj.season = json.season_number;
            obj.episode_count = json.episode_count;
            objlist.push(obj);
            const seasonelement = document.createElement("li");
            seasonelement.innerHTML = `Season ${json.season_number}`;
            seasonelement.setAttribute("class", "card2");
            seasonelement.setAttribute('name', 'season');
            seasonelement.setAttribute("onclick", `getepisodes(${json.season_number})`);
            //newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("listofseasons").appendChild(seasonelement);
            //Then we for loop for each episode count and append the episode amount to the object!
            /*for(var i=0; json.episode_count> i; i++){
            const newelement =  document.createElement("div");
            newelement.innerHTML=`Episode ${json.episode_number}`;
            newelement.setAttribute("class", "seasonobj");
            //newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("stonertvlist").appendChild(newelement);
            }*/
          }
        }
        //console.log(objlist);
        getepisodes(season);
      }).catch(e => {
        ////console.log(e);
      });

  }
}

function updateServer(n) {
  const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1];

  const cookieValue2 = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
  if (cookieValue === n) {
    return;
  } else {
    server = n;
    /*var i = 1;
    for (var v of document.getElementsByName("server")) {
    if (v.getAttribute('data-tag') === 'checked') {
      //console.log('Found!');
      v.removeAttribute('data-tag');
    }
    if (parseInt(i) === parseInt(server)) {
      //console.log('YESS!')
      v.setAttribute('data-tag', 'checked');
    }
    //console.log(server);
    //console.log(i);
    //console.log(v);
    i = i + 1;
  }*/
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var kia = "expires=" + d.toUTCString();
    document.cookie = "server=" + n + "; SameSite=strict; Secure; " + kia;
    //var server = parseInt(document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]);
    server = n;
    var i = 1;
    for (var v of document.getElementsByName("server")) {
      if (v.getAttribute('data-tag') === 'checked' && (parseInt(i) !== server)) {
        //console.log('Found!');
        v.removeAttribute('data-tag');
      }
      if (parseInt(i) === server) {
        //console.log('YESS!')
        v.setAttribute('data-tag', 'checked');
      }
      //console.log(server);
      //console.log(i);
      //console.log(v);
      i = i + 1;
    }
    if (cookieValue2 === "movie") { // is movie!
      updateMovieContainer();
    } else { // Else Tv show 
      var season = document.cookie.split('; ').find((row) => row.startsWith('season='))?.split('=')[1];
      var episode = document.cookie.split('; ').find((row) => row.startsWith('episode='))?.split('=')[1];
      updateTvPlayer(season, episode);
    }
  }// End of not the same server clicked!
}

function getepisodes(n) {
  var result = objlist.find(tree => (tree.season === parseInt(n)));
  var episodecookie = document.cookie.split('; ').find((row) => row.startsWith('episode='))?.split('=')[1];
  //var seasoncookie = document.cookie.split('; ').find((row) => row.startsWith('season='))?.split('=')[1];

  //if (parseInt(seasoncookie) === n) {
  //console.log(n);
  //console.log(result);
  document.getElementById("listofepisodes").innerHTML = "";
  for (var i = 0; result.episode_count > i; i++) {
    const newelement = document.createElement("div");
    newelement.innerHTML = `Episode ${(i + 1)}`;
    newelement.setAttribute("class", "card2");
    newelement.setAttribute('name', 'episode');
    if (parseInt(episodecookie) === (i + 1)) { newelement.setAttribute('data-tag', 'checked'); }
    newelement.setAttribute("onclick", `updateTvPlayer(${n}, "${(i + 1)}");`);
    document.getElementById("listofepisodes").appendChild(newelement);
  }
  if (document.cookie.split('; ').find((row) => row.startsWith('episode'))) {
    var episodecookie = document.cookie.split('; ').find((row) => row.startsWith('episode='))?.split('=')[1];
    updateTvPlayer(n, parseInt(episodecookie));
    //updateTvAdServers(document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1], n, episodecookie);
    //console.log('Howdy dudoidoo');
  } else {
    updateTvPlayer(n, 1);
  }
  /*} else {
 
  }*/
}

function getTvExternalIds(id) {

  fetch(`https://api.themoviedb.org/3/tv/${id}/external_ids`, {
    method: 'GET',
    headers: {
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
      'content-type': 'application/json;charset=utf-8'
    }
  }).then((response) => response.json())
    .then((data) => {
      return data.imdb_id;
      //console.log(data);
    }).catch(e => {
      //console.log(e);
    });
}

function updateTvPlayer(season, episode) {
  const d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  var kia = "expires=" + d.toUTCString();
  //const server = document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1];
  document.cookie = "season=" + season + "; SameSite=strict; Secure; " + kia;
  document.cookie = "episode=" + episode + "; SameSite=strict; Secure; " + kia;
  const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
  var id = cookieValue;
  var i = 1
  for (var v of document.getElementsByName("episode")) {
    if (v.getAttribute('data-tag') === 'checked') {
      console.log('Found!');
      v.removeAttribute('data-tag');
    }
    if (i === parseInt(episode)) {
      console.log('YESS!')
      v.setAttribute('data-tag', 'checked');
      console.log(i);
      console.log(v);
    }
    console.log(i);
    console.log(v);
    i = i + 1;
  }
  i = 1;
  for (var v of document.getElementsByName("season")) {
    if (v.getAttribute('data-tag') === 'checked') {
      //console.log('Found!');
      v.removeAttribute('data-tag');
    }
    if (parseInt(i) === parseInt(season)) {
      //console.log('YESS!')
      v.setAttribute('data-tag', 'checked');
    }
    //console.log(season);
    //console.log(i);
    //console.log(v);
    i = i + 1;
  }
  var server = parseInt(document.cookie.split('; ').find((row) => row.startsWith('server='))?.split('=')[1]);
  i = 1;
  for (var v of document.getElementsByName("server")) {
    if (v.getAttribute('data-tag') === 'checked') {
      //console.log('Found!');
      v.removeAttribute('data-tag');
    }
    if (parseInt(i) === server) {
      //console.log('YESS!')
      v.setAttribute('data-tag', 'checked');
    }
    //console.log(server);
    //console.log(i);
    //console.log(v);
    i = i + 1;
  }

  bookmarkInit();
  updateHistory(id, "tv", season, episode);
  //updateTvAdServers(id, season, episode);
  //updateHistory(id, season, episode);
  if (server === 1) {
    fetch(`https://api.themoviedb.org/3/tv/${id}/external_ids`, {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //document.getElementById("watchTvPlayer").removeAttribute('sandbox');
        document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
        document.getElementById("watchTvPlayer").setAttribute('src', `https://dbgo.fun/tv-imdb.php?id=${data.imdb_id}&s=${season}`);
        //console.log(data);
      }).catch(e => {
        //console.log(e);
      });
  }
  if (server === 2) {
    document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
    document.getElementById("watchTvPlayer").setAttribute('src', `https://databasegdriveplayer.xyz/player.php?type=series&tmdb=${id}&season=${season}&episode=${episode}`);
  }
  if (server === 3) {
    //document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
    document.getElementById("watchTvPlayer").removeAttribute('sandbox');
    document.getElementById("watchTvPlayer").setAttribute('src', `https://v2.vidsrc.me/embed/${id}/${season}-${episode}/`);
  }

  if (server === 4) {
    document.getElementById("watchTvPlayer").removeAttribute('sandbox');
    //document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-same-origin allow-scripts allow-top-navigation");
    document.getElementById("watchTvPlayer").setAttribute('src', `https://www.2embed.org/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`);
  }//https://www.2embed.to/embed/tmdb/tv?id=76479&s=1&e=1

  if (server === 5) {
    try {
      document.getElementById("watchTvPlayer").removeAttribute('sandbox');
      if (season < 10) { season = "0" + season; }
      if (episode < 10) { episode = "0" + episode; }
      document.getElementById("watchTvPlayer").setAttribute('src', `https://gomo.to/show/${namee.replaceAll(" ", "-")}/${season}-${episode}`);
    } catch (e) { return; }
  }

  if (server === 6) {
    try {
      //document.getElementById("watchTvPlayer").removeAttribute('sandbox');
      //document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-same-origin allow-scripts allow-top-navigation");
      document.getElementById("watchTvPlayer").setAttribute('src', `https://superembed.streampal.repl.co/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`);
      document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");
      //document.getElementById("watchTvPlayer").removeAttribute('sandbox');
      /*var Loc = (server - 6);
      if (adServersList[Loc].server === "doodstream" || adServersList[Loc].server === "streamsb" || adServersList[Loc].server === "highload" || adServersList[Loc].server === "fembed" || adServersList[Loc].server === "vidcloud" || adServersList[Loc].server === "mixdrop") {
        //console.log("Its sandbox detection so removing sandbox please have ad blocker or brave browser recommended!");
        document.getElementById("watchTvPlayer").removeAttribute('sandbox');
        else { document.getElementById("watchTvPlayer").setAttribute('sandbox', "allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"); }*/
      //document.getElementById("watchTvPlayer").setAttribute('src', adServersList[Loc].url);
    } catch (e) { return; }
  }
}


function test() {
  Autohide = !Autohide;
  //console.log("Logo Clicked!");
  //console.log("Autohide Value: ", Autohide);
  if (Autohide == true) {
    //console.log("Hiding Tab Labels!");
    document.getElementById("tababoutlabel")
    document.getElementById("tababoutlabel").setAttribute("style", "display: none");
    document.getElementById("tabhomelabel").setAttribute("style", "display: none");
    document.getElementById("tabchannelslabel").setAttribute("style", "display: none");
    //document.getElementById("tabcountrylabel").setAttribute("style", "display: none");
    document.getElementById("tabmovieslabel").setAttribute("style", "display: none");
    document.getElementById("tabtvlabel").setAttribute("style", "display: none");
    document.getElementById("tabsearchlabel").setAttribute("style", "display: none");
    document.getElementById("tabwatchlabel").setAttribute("style", "display: none");
    //console.log(document.getElementById("tababoutlabel").getAttribute("display"));
  } else {
    document.getElementById("tababoutlabel").removeAttribute("style");
    document.getElementById("tabhomelabel").removeAttribute("style");
    document.getElementById("tabchannelslabel").removeAttribute("style");
    //document.getElementById("tabcountrylabel").removeAttribute("style");
    document.getElementById("tabmovieslabel").removeAttribute("style");
    document.getElementById("tabtvlabel").removeAttribute("style");
    document.getElementById("tabsearchlabel").removeAttribute("style");
    document.getElementById("tabwatchlabel").removeAttribute("style");
  }
}

function cardclicked(id, name, type) {
  //console.log('cardClicked');
  const d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  var kia = "expires=" + d.toUTCString();
  //console.log("Id:", id, "Name:", name, "Type:", type, "Was Clicked");
  const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
  if (parseInt(cookieValue) === id) {
    document.getElementById("tababout").checked = false;
    document.getElementById("tabhome").checked = false;
    document.getElementById("tabchannels").checked = false;
    document.getElementById("tabmovies").checked = false;
    document.getElementById("tabtvshows").checked = false;
    document.getElementById("tabsearch").checked = false;
    document.getElementById("tabwatch").checked = true;
  } else {
    //console.log('Else');
    updatewatchIdAndEtc(id, type, name);

    //Here Right above we will add in the updateRecommendedAndSimilar
    //updatewatchName(name);
    //updatewatchType(type);
    bookmarkInit();
    if (type === "tv") {
      //console.log('Is a TV SHOW!');
      //Package the History Check right Here be the optimal spot!
      if (localStorage.getItem('watch-history')) {
        var historyJson = JSON.parse(localStorage.getItem('watch-history'));
        //console.log('true');
        console.log(historyJson);
        if (historyJson.tv.find(tvobj => parseInt(tvobj.id) === id)) {
          //console.log('found!');
          var history = historyJson.tv.find(tvobj => parseInt(tvobj.id) === id);
          //console.log(history.season);
          //console.log(history.episode);
          document.cookie = "season=" + history.season + "; SameSite=strict; Secure; " + kia;
          document.cookie = "episode=" + history.episode + "; SameSite=strict; Secure; " + kia;
          updateTvContainer();
          updateRecommendedAndSimilar();
        } else { //Not Find so setting the season and episode to 1
          //console.log('First Else!');
          document.cookie = "season=" + 1 + "; SameSite=strict; Secure; " + kia;
          document.cookie = "episode=" + 1 + "; SameSite=strict; Secure; " + kia;
          updateTvContainer();
          updateRecommendedAndSimilar();
        }
      } else { //Not Find so setting the season and episode to 1
        //console.log('Not In the Watch History But is a tv show Card!');
        document.cookie = "season=" + 1 + "; SameSite=strict; Secure; " + kia;
        document.cookie = "episode=" + 1 + "; SameSite=strict; Secure; " + kia;
        updateTvContainer();
        updateRecommendedAndSimilar();
      }
    } else {
      updateMovieContainer();
      updateRecommendedAndSimilar();
    }
    document.getElementById("tababout").checked = false;
    document.getElementById("tabhome").checked = false;
    document.getElementById("tabchannels").checked = false;
    document.getElementById("tabmovies").checked = false;
    document.getElementById("tabtvshows").checked = false;
    document.getElementById("tabsearch").checked = false;
    document.getElementById("tabwatch").checked = true;
  }
}

async function updateRecommendedAndSimilar() {
  var Id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
  var type = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
  if (Id && type) {
    switch (type) {
      case "tv":
        fetch(`https://api.themoviedb.org/3/tv/${Id}/recommendations?language=en-US&page=1`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            total_pages = parseInt(data.total_pages);
            document.getElementById("listofrecommended").innerHTML = "";
            initializeaddbypage("recommended", total_pages);
          }).catch(e => {
            //console.log(e);
          });

        fetch(`https://api.themoviedb.org/3/tv/${Id}/similar?language=en-US&page=1`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            total_pages = parseInt(data.total_pages);
            document.getElementById("listofsuggested").innerHTML = "";
            initializeaddbypage("suggested", total_pages);
          }).catch(e => {
            //console.log(e);
          });
        break;

      case "movie":
        fetch(`https://api.themoviedb.org/3/movie/${Id}/recommendations?language=en-US&page=1`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            total_pages = parseInt(data.total_pages);
            document.getElementById("listofrecommended").innerHTML = "";
            initializeaddbypage("recommended", total_pages);
          }).catch(e => {
            //console.log(e);
          });
        fetch(`https://api.themoviedb.org/3/movie/${Id}/similar?language=en-US&page=1`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            total_pages = parseInt(data.total_pages);
            document.getElementById("listofsuggested").innerHTML = "";
            initializeaddbypage("suggested", total_pages);
          }).catch(e => {
            //console.log(e);
          });
        break;
    }

  }
}

async function tvaddbyPage(n, p) {
  switch (n) {
    case 1:
      fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.asc&page=${(p + 1)}&with_original_language=en&vote_count.gte=1000&vote_average.gte=8&watch_region=US&region=US`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            if (json.poster_path === null && json.backdrop_path === null) {
            }
            if (json.poster_path !== null) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  //console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${json.overview.substring(0, 200)}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("IMDBToptvlist").appendChild(newelement);
            }
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case 2:
      fetch(`https://api.themoviedb.org/3/trending/tv/week?page=${(p + 1)}`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            if (json.poster_path === null && json.backdrop_path === null) {
            }
            if (json.poster_path !== null) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  //console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${json.overview.substring(0, 200)}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("newesttvlist").appendChild(newelement);
            }
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case 3:
      fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=${(p + 1)}&with_original_language=en`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                //console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                    <h3 class="card-title">${json.name}</h3> \
                    <div class="card-content"> \
                      <h3>Description</h3> \
                      <p>${json.overview.substring(0, 200)}</p> \
                    </div> \
                    <div class="card-link-wrapper"> \
                      <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                    </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("populartvlist").appendChild(newelement);
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case 20:
      fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=${(p + 1)}&with_original_language=en&vote_count.gte=10000&vote_average.gte=7&watch_region=US&region=US`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {

            if (json.poster_path === null && json.backdrop_path === null) {

            }
            if (json.poster_path !== null) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
              document.getElementById("IMDBTopmovielist").appendChild(newelement);
            }
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case 21:
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&sort_by=popularity.asc&page=${(p + 1)}&with_original_language=en`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            //console.log(json.id);
            //console.log(json.poster_path);
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
            document.getElementById("popularmovielist").appendChild(newelement);
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case 22:
      fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&region=US%7CUK&sort_by=release_date.desc&page=${(p + 1)}&primary_release_year=2023%7C2022&watch_region=US%7CUK&with_original_language=en&with_release_type=3&primary_release_date.lte=${TodaysDate.toISOString().split("T")[0]}`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            //console.log(json.id);
            //console.log(json.poster_path);
            //console.log(json.backdrop_path);
            if (json.poster_path === null && json.backdrop_path === null) {

            }
            if (json.poster_path !== null) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              //newelement.setAttribute("data-type", "movie");
              //newelement.setAttribute("data-name", json.title);
              //newelement.setAttribute("data-id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
              document.getElementById("newestmovielist").appendChild(newelement);

              //document.getElementById(`${json.id}`).addEventListener("click", cardclicked(`${json.id}`));
              //console.log(JSON.stringify(json));
            }
          }
        }).catch(e => {
          //console.log(e);
        });
      break;

    case "recommended":
      var Id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
      var type = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
      if (Id && type) {
        switch (type) {
          case "tv":
            fetch(`https://api.themoviedb.org/3/tv/${Id}/recommendations?language=en-US&page=${(p + 1)}`, {
              method: 'GET',
              headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
                'content-type': 'application/json;charset=utf-8'
              }
            }).then((response) => response.json())
              .then((data) => {
                //console.log(data);
                for (var json of data.results) {
                  if (json.poster_path === null && json.backdrop_path === null) {
                  }
                  if (json.poster_path !== null) {
                    const newelement = document.createElement("li");
                    var bookmarksrc = "assets/bookmark.png";
                    if (localStorage.getItem('bookmarks')) {
                      if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                        bookmarksrc = "assets/bookmarkfilled.png";
                        console.log('FOUND BOOOKMARK');
                      }
                    }

                    if (json.original_language === "en" && json.origin_country.includes("US" || "UK")) {
                      newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
                      newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                      newelement.setAttribute("id", json.id);
                      newelement.setAttribute("class", "card");
                      newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
                      document.getElementById("listofrecommended").appendChild(newelement);
                    }
                  }
                }
              }).catch(e => {
                //console.log(e);
              });
            break;

          case "movie":
            fetch(`https://api.themoviedb.org/3/movie/${Id}/recommendations?language=en-US&page=${(p + 1)}`, {
              method: 'GET',
              headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
                'content-type': 'application/json;charset=utf-8'
              }
            }).then((response) => response.json())
              .then((data) => {
                //console.log(data);
                for (var json of data.results) {
                  if (json.poster_path === null && json.backdrop_path === null) {
                  }
                  if (json.poster_path !== null) {
                    const newelement = document.createElement("li");
                    var bookmarksrc = "assets/bookmark.png";
                    if (localStorage.getItem('bookmarks')) {
                      if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                        bookmarksrc = "assets/bookmarkfilled.png";
                        console.log('FOUND BOOOKMARK');
                      }
                    }
                    if (json.original_language === "en") {
                      newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
                      newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                      newelement.setAttribute("id", json.id);
                      newelement.setAttribute("class", "card");
                      newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
                      document.getElementById("listofrecommended").appendChild(newelement);
                    }
                  }
                }
              }).catch(e => {
                //console.log(e);
              });
            break;
        }
      }
      break;

    case "suggested":
      var Id = document.cookie.split('; ').find((row) => row.startsWith('watchId='))?.split('=')[1];
      var type = document.cookie.split('; ').find((row) => row.startsWith('watchType='))?.split('=')[1];
      if (Id && type) {
        switch (type) {
          case "tv":
            fetch(`https://api.themoviedb.org/3/tv/${Id}/similar?language=en-US&page=${(p + 1)}`, {
              method: 'GET',
              headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
                'content-type': 'application/json;charset=utf-8'
              }
            }).then((response) => response.json())
              .then((data) => {
                //console.log(data);
                for (var json of data.results) {
                  if (json.poster_path === null && json.backdrop_path === null) {
                  }
                  if (json.poster_path !== null) {
                    const newelement = document.createElement("li");
                    var bookmarksrc = "assets/bookmark.png";
                    if (localStorage.getItem('bookmarks')) {
                      if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                        bookmarksrc = "assets/bookmarkfilled.png";
                        console.log('FOUND BOOOKMARK');
                      }
                    }
                    if (json.original_language === "en" && json.origin_country.includes("US" || "UK")) {
                      newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
                      newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                      newelement.setAttribute("id", json.id);
                      newelement.setAttribute("class", "card");
                      newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
                      document.getElementById("listofsuggested").appendChild(newelement);
                    }
                  }
                }
              }).catch(e => {
                //console.log(e);
              });
            break;

          case "movie":
            fetch(`https://api.themoviedb.org/3/movie/${Id}/similar?language=en-US&page=${(p + 1)}`, {
              method: 'GET',
              headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
                'content-type': 'application/json;charset=utf-8'
              }
            }).then((response) => response.json())
              .then((data) => {
                //console.log(data);
                for (var json of data.results) {
                  if (json.poster_path === null && json.backdrop_path === null) {
                  }
                  if (json.poster_path !== null) {
                    const newelement = document.createElement("li");
                    var bookmarksrc = "assets/bookmark.png";
                    if (localStorage.getItem('bookmarks')) {
                      if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                        bookmarksrc = "assets/bookmarkfilled.png";
                        console.log('FOUND BOOOKMARK');
                      }
                    }
                    if (json.original_language === "en") {
                      newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
                      newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                      newelement.setAttribute("id", json.id);
                      newelement.setAttribute("class", "card");
                      newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
                      document.getElementById("listofsuggested").appendChild(newelement);
                    }
                  }
                }
              }).catch(e => {
                //console.log(e);
              });
            break;
        }
      }
      break;

    case 420:
      fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=${(p + 1)}&include_null_first_air_dates=false&with_keywords=302399%7C54169%7C10776%7C171235%7C241040%7C8224%7C258212%7C195631%7C243617%7C171401%7C195632%7C245911`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //console.log(data);
          for (var json of data.results) {
            if (json.poster_path === null && json.backdrop_path === null) {
            }
            if (json.poster_path !== null) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
              document.getElementById("stonermovielist").appendChild(newelement);
            }
          }
        }).catch(e => {
          //console.log(e);
        });
      break;
  }
}

async function initializeaddbypage(n, t_p) {
  for (var p = 0; t_p > p; p++) {
    if (p < 50) {
      //console.log(p);
      tvaddbyPage(n, p);
      await timer(100);
    }
    if (p >= 51) {
      break;
    }
    //console.log(p);
  }
  return;
}

async function initializeaddbypagestoner(n, t_p) {
  for (var p = 0; t_p > p; p++) {
    if (p < 100) {
      //console.log(p);
      tvaddbyPage(n, p);
      await timer(100);
    }
    if (p >= 101) {
      break;
    }
    //console.log(p);
  }
  return;
}

//Show all Button Handler!
async function tvshowAll(n, cb) {
  var total_pages = 1;
  //First we clear the already existing list! then we add to it!
  switch (n) {
    case 1:
      document.getElementById("IMDBToptvlist").innerHTML = "";
      fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en&vote_count.gte=1000&vote_average.gte=8&watch_region=US&region=US`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          //const timer = ms => new Promise(res => setTimeout(res, ms));
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(1, total_pages);
          }
          //console.log(data);

        }).catch(e => {
          //console.log(e);
        });
      break;
    case 2:
      document.getElementById("newesttvlist").innerHTML = "";
      fetch(`https://api.themoviedb.org/3/trending/tv/week?page=1`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(2, total_pages);
          }
          //console.log(data);
        }).catch(e => {
          //console.log(e);
        });
      break;
    case 3:
      document.getElementById("populartvlist").innerHTML = "";
      fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(3, total_pages);
          }
          //console.log(total_pages);
          //console.log(data);
        }).catch(e => {
          //console.log(e);
        });
      break;
    case 20:
      document.getElementById("IMDBTopmovielist").innerHTML = "";
      fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en&vote_count.gte=10000&vote_average.gte=7&watch_region=US&region=US', {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(20, total_pages);
          }
          //console.log(data);
        }).catch(e => {
          //console.log(e);
        });
      break;
    case 21:
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en', {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(21, total_pages);
          }
          //console.log(data);

        }).catch(e => {
          //console.log(e);
        });
      break;
    case 22:
      document.getElementById("newestmovielist").innerHTML = "";
      fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&region=US%7CUK&sort_by=release_date.desc&page=1&primary_release_year=2023%7C2022&watch_region=US%7CUK&with_original_language=en&with_release_type=3&primary_release_date.lte=${TodaysDate.toISOString().split("T")[0]}`, {
        method: 'GET',
        headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((response) => response.json())
        .then((data) => {
          total_pages = parseInt(data.total_pages);
          if (cb.checked) {
            initializeaddbypage(22, total_pages);
          }
          //console.log(data);
        }).catch(e => {
          ////console.log(e);
        });
      break;
  }
  //Here we clear a list if its not checked!
  //  console.log(cb.checked);
  if (!cb.checked) {
    switch (n) {
      case 1:
        fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en&vote_count.gte=1000&vote_average.gte=8&watch_region=US&region=US', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {
              if (json.poster_path === null && json.backdrop_path === null) {
              }
              if (json.poster_path !== null) {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                            <h3 class="card-title">${json.name}</h3> \
                            <div class="card-content"> \
                              <h3>Description</h3> \
                              <p>${json.overview.substring(0, 200)}</p> \
                            </div> \
                            <div class="card-link-wrapper"> \
                              <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                            </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
                document.getElementById("IMDBToptvlist").appendChild(newelement);
              }
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;
      case 2:
        fetch('https://api.themoviedb.org/3/trending/tv/week', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {
              if (json.poster_path === null && json.backdrop_path === null) {
              }
              if (json.poster_path !== null) {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                            <h3 class="card-title">${json.name}</h3> \
                            <div class="card-content"> \
                              <h3>Description</h3> \
                              <p>${json.overview.substring(0, 200)}</p> \
                            </div> \
                            <div class="card-link-wrapper"> \
                              <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                            </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
                document.getElementById("newesttvlist").appendChild(newelement);
              }
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;
      case 3:
        fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                            <h3 class="card-title">${json.name}</h3> \
                            <div class="card-content"> \
                              <h3>Description</h3> \
                              <p>${json.overview.substring(0, 200)}</p> \
                            </div> \
                            <div class="card-link-wrapper"> \
                              <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                            </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
              document.getElementById("populartvlist").appendChild(newelement);
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;

      case 20:
        document.getElementById("IMDBTopmovielist").innerHTML = "";
        fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en&vote_count.gte=10000&vote_average.gte=7&watch_region=US&region=US', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {

              if (json.poster_path === null && json.backdrop_path === null) {

              }
              if (json.poster_path !== null) {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
                document.getElementById("IMDBTopmovielist").appendChild(newelement);
              }
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;
      case 21:
        document.getElementById("popularmovielist").innerHTML = "";
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {
              //console.log(json.id);
              //console.log(json.poster_path);
              const newelement = document.createElement("li");
              var bookmarksrc = "assets/bookmark.png";
              if (localStorage.getItem('bookmarks')) {
                if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                  bookmarksrc = "assets/bookmarkfilled.png";
                  console.log('FOUND BOOOKMARK');
                }
              }
              newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
              newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
              newelement.setAttribute("id", json.id);
              newelement.setAttribute("class", "card");
              newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
              document.getElementById("popularmovielist").appendChild(newelement);
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;
      case 22:
        document.getElementById("newestmovielist").innerHTML = "";
        fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&region=US%7CUK&sort_by=release_date.desc&page=1&primary_release_year=2023%7C2022&watch_region=US%7CUK&with_original_language=en&with_release_type=3&primary_release_date.lte=${TodaysDate.toISOString().split("T")[0]}`, {
          method: 'GET',
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
            'content-type': 'application/json;charset=utf-8'
          }
        }).then((response) => response.json())
          .then((data) => {
            //console.log(data);
            for (var json of data.results) {
              //console.log(json.id);
              //console.log(json.poster_path);
              //console.log(json.backdrop_path);
              if (json.poster_path === null && json.backdrop_path === null) { }
              if (json.poster_path !== null) {
                const newelement = document.createElement("li");
                var bookmarksrc = "assets/bookmark.png";
                if (localStorage.getItem('bookmarks')) {
                  if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                    bookmarksrc = "assets/bookmarkfilled.png";
                    console.log('FOUND BOOOKMARK');
                  }
                }
                newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
                newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
                newelement.setAttribute("id", json.id);
                //newelement.setAttribute("data-type", "movie");
                //newelement.setAttribute("data-name", json.title);
                //newelement.setAttribute("data-id", json.id);
                newelement.setAttribute("class", "card");
                newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
                document.getElementById("newestmovielist").appendChild(newelement);

                //document.getElementById(`${json.id}`).addEventListener("click", cardclicked(`${json.id}`));
                //console.log(JSON.stringify(json));
              }
            }
          }).catch(e => {
            ////console.log(e);
          });
        break;
    }
  }
}

async function minimize(n, cb) {
  if (cb.checked) {
    switch (n) {
      case 1:
        document.getElementById("MostPopularTV").setAttribute('style', 'display: none');
        break;
      case 2:
        document.getElementById("IMDBTopTV").setAttribute('style', 'display: none');
        break;
      case 3:
        document.getElementById("NewestTV").setAttribute('style', 'display: none');
        break;

      case 20:
        document.getElementById("MostPopularMovie").setAttribute('style', 'display: none');
        break;
      case 21:
        document.getElementById("IMDBTopMovie").setAttribute('style', 'display: none');
        break;
      case 22:
        document.getElementById("NewestMovie").setAttribute('style', 'display: none');
        break;
      case 23:
        document.getElementById("StonerMovie").setAttribute('style', 'display: none');
        break

      case 420:
        document.getElementById("StonerTV").setAttribute('style', 'display: none');
        break;
      case "bookmark":
        document.getElementById("bookmarkContainerAll").setAttribute('style', 'display: none; padding-bottom: 0rem;');
        document.getElementById("homeBookmarksDiv").setAttribute('style', 'padding-bottom: 0rem');
        break;
      case "watchHistory":
        document.getElementById("watchHistory").setAttribute('style', 'display: none; padding-bottom: 0rem;');
        document.getElementById("homeWatchDiv").setAttribute('style', 'padding-bottom: 0rem');
        break;
    }
  } else {
    switch (n) {
      case 1:
        document.getElementById("MostPopularTV").removeAttribute('style');
        break;
      case 2:
        document.getElementById("IMDBTopTV").removeAttribute('style');
        break;
      case 3:
        document.getElementById("NewestTV").removeAttribute('style');
        break;

      case 20:
        document.getElementById("MostPopularMovie").removeAttribute('style');
        break;
      case 21:
        document.getElementById("IMDBTopMovie").removeAttribute('style');
        break;
      case 22:
        document.getElementById("NewestMovie").removeAttribute('style');
        break;
      case 23:
        document.getElementById("StonerMovie").removeAttribute('style');
        break

      case 420:
        document.getElementById("StonerTV").removeAttribute('style');
        break;
      case "bookmark":
        document.getElementById("bookmarkContainerAll").removeAttribute('style');
        document.getElementById("homeBookmarksDiv").removeAttribute('style');
        document.getElementById("bookmarkMinimize").removeAttribute('checked');
        break;
      case "watchHistory":
        document.getElementById("watchHistory").removeAttribute('style');
        document.getElementById("homeWatchDiv").removeAttribute('style');
        document.getElementById("watchHistoryMinimize").removeAttribute('checked');
        break;
    }
  }
}

function movieinitexample() {
  try {
    fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en&vote_count.gte=10000&vote_average.gte=7&watch_region=US&region=US', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {

          if (json.poster_path === null && json.backdrop_path === null) {

          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
            document.getElementById("IMDBTopmovielist").appendChild(newelement);
          }
        }
      }).catch(e => {
        ////console.log(e);
      });

    fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&region=US%7CUK&sort_by=release_date.desc&page=1&primary_release_year=2023%7C2022&watch_region=US%7CUK&with_original_language=en&with_release_type=3&primary_release_date.lte=2023-02-14', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (var json of data.results) {
          //console.log(json.id);
          //console.log(json.poster_path);
          //console.log(json.backdrop_path);
          if (json.poster_path === null && json.backdrop_path === null) {

          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            //newelement.setAttribute("data-type", "movie");
            //newelement.setAttribute("data-name", json.title);
            //newelement.setAttribute("data-id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
            document.getElementById("newestmovielist").appendChild(newelement);

            //document.getElementById(`${json.id}`).addEventListener("click", cardclicked(`${json.id}`));
            //console.log(JSON.stringify(json));
          }
        }
      }).catch(e => {
        ////console.log(e);
      });

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {
          //console.log(json.id);
          //console.log(json.poster_path);
          const newelement = document.createElement("li");
          var bookmarksrc = "assets/bookmark.png";
          if (localStorage.getItem('bookmarks')) {
            if (JSON.parse(localStorage.getItem('bookmarks')).movies.find(tree => parseInt(tree) === parseInt(json.id))) {
              bookmarksrc = "assets/bookmarkfilled.png";
              console.log('FOUND BOOOKMARK');
            }
          }
          newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="movie" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.title}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.release_date.split("-")[0]}</p> \
                </div>`
          newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
          newelement.setAttribute("id", json.id);
          newelement.setAttribute("class", "card");
          newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.title}", "movie");`);
          document.getElementById("popularmovielist").appendChild(newelement);
        }
      }).catch(e => {
        ////console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

//Fetch the Highest Rated TV Shows! first 20!
function tvshowinitexample() {
  try {
    fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.asc&page=1&with_original_language=en&vote_count.gte=1000&vote_average.gte=8&watch_region=US&region=US', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {

          if (json.poster_path === null && json.backdrop_path === null) {

          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-1-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("IMDBToptvlist").appendChild(newelement);
          }
        }
      }).catch(e => {
        ////console.log(e);
      });

    fetch('https://api.themoviedb.org/3/trending/tv/week', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {
          //console.log(json.id);
          //console.log(json.poster_path);
          //console.log(json.backdrop_path);
          if (json.poster_path === null && json.backdrop_path === null) {

          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            /*if (BookmarksJson){
            for (var js of BookmarksJson){
             // console.log(js.id);
             // console.log(json.id);
             if (parseInt(js.id) === parseInt(json.id)){
               console.log("Bookmark found!");
               bookmarksrc = "assets/bookmarkfilled.png";
               
             
            }*/
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-2-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("data-type", "tv");
            newelement.setAttribute("data-name", json.name);
            newelement.setAttribute("data-id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("newesttvlist").appendChild(newelement);

            //document.getElementById(`${json.id}`).addEventListener("click", cardclicked(`${json.id}`));
            //console.log(JSON.stringify(json));
          }
        }
      }).catch(e => {
        ////console.log(e);
      });
    fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_original_language=en', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {
          //console.log(json.id);
          //console.log(json.poster_path);
          const newelement = document.createElement("li");
          var bookmarksrc = "assets/bookmark.png";
          if (localStorage.getItem('bookmarks')) {
            if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
              bookmarksrc = "assets/bookmarkfilled.png";
              console.log('FOUND BOOOKMARK');
            }
          }
          newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-3-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
          newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
          newelement.setAttribute("id", json.id);
          newelement.setAttribute("class", "card");
          newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
          document.getElementById("populartvlist").appendChild(newelement);
        }
      }).catch(e => {
        ////console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

function movieinitstonerexample() {
  try {
    fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_keywords=302399%7C54169%7C10776%7C171235%7C241040%7C8224%7C258212%7C195631%7C243617%7C171401%7C195632%7C245911', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        total_pages = parseInt(data.total_pages);
        initializeaddbypagestoner(420, total_pages);
      }).catch(e => {
        ////console.log(e);
      });
    //console.log(jsons);
    fetch('https://api.themoviedb.org/3/genre/movie/list', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Movie Genres:', data);
      }).catch(e => {
        ////console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

function tvshowinitstonerexample() {
  try {
    fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_keywords=302399%7C54169%7C10776%7C171235%7C241040%7C8224%7C258212%7C195631%7C243617%7C171401%7C195632%7C245911', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {
          if (json.poster_path === null && json.backdrop_path === null) {
          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-4-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv");`);
            document.getElementById("stonertvlist").appendChild(newelement);
          }
        }
      }).catch(e => {
        ////console.log(e);
      });


    fetch('https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=2&include_null_first_air_dates=false&with_keywords=302399%7C54169%7C10776%7C171235%7C241040%7C8224%7C258212%7C195631%7C243617%7C171401%7C195632%7C245911', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (var json of data.results) {
          //console.log(json.id);
          //console.log(json.poster_path);
          //console.log(json.backdrop_path);
          if (json.poster_path === null && json.backdrop_path === null) {

          }
          if (json.poster_path !== null) {
            const newelement = document.createElement("li");
            var bookmarksrc = "assets/bookmark.png";
            if (localStorage.getItem('bookmarks')) {
              if (JSON.parse(localStorage.getItem('bookmarks')).tv.find(tree => parseInt(tree) === parseInt(json.id))) {
                bookmarksrc = "assets/bookmarkfilled.png";
                console.log('FOUND BOOOKMARK');
              }
            }
            newelement.innerHTML = `<figure class="card__thumbnail"><img id="bookmarkButton-5-${json.id}" onmouseenter="bookmarkCardHovered(this)" onmouseleave="bookmarkCardHovered(this)" data="bookmarkButton" data-id=${json.id} data-type="tv" onclick="event.stopPropagation();bookmarkCard(this)" src="${bookmarksrc}"></figure> \
                <h3 class="card-title">${json.name}</h3> \
                <div class="card-content"> \
                  <h3>Description</h3> \
                  <p>${json.overview.substring(0, 200)}</p> \
                </div> \
                <div class="card-link-wrapper"> \
                  <p class="card-link">${json.first_air_date.split("-")[0]}</p> \
                </div>`
            newelement.setAttribute("style", `background:url('https://image.tmdb.org/t/p/original${json.poster_path}'); background-repeat: no-repeat; background-size: cover; background-position: center;`);
            newelement.setAttribute("id", json.id);
            newelement.setAttribute("class", "card");
            newelement.setAttribute("onclick", `cardclicked(${json.id}, "${json.name}", "tv")`);
            document.getElementById("stonertvlist").appendChild(newelement);
          }
        }
      }).catch(e => {
        ////console.log(e);
        return;
      });
    fetch('https://api.themoviedb.org/3/genre/tv/list', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
      }
    }).then((response) => response.json())
      .then((data) => {
        //console.log(data);
      }).catch(e => {
        ////console.log(e);
      });

    /*  fetch('https://private-anon-a708459cf9-superembed.apiary-proxy.com/?type=tmdb&id=85723&season=1&episode=1&max_results=5').then((response) => response.json())
        .then((data) => {
          console.log(data);
          .catch(e => {
          //console.log(e);
          ;
        fetch('https://api.themoviedb.org/3/tv/37854', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
        'content-type': 'application/json;charset=utf-8'
        
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        .catch(e => {
        //console.log(e);
        ;*/
  } catch (e) {
    console.log(e);
  }
}
