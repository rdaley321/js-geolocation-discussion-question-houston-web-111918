let x = document.getElementById("demo");
let myLatitude
let myLongitude
function getLocation(resolve) {
  if (navigator.geolocation) {
    console.log('in here')
    navigator.geolocation.getCurrentPosition((position) => {
      showPosition(position)
      resolve([myLatitude, myLongitude])
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myLatitude = position.coords.latitude
  myLongitude = position.coords.longitude
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

const givenCoords = [[40.779437,-73.963244],[40.738527,-74.005363],[40.729975,-73.980926]]

function distance(coor1,coor2){
  let x1 = coor1[0]
  let x2 = coor1[1]
  let theDistance = coor2.map((one) => {
    let y1 = one[0]
    let y2 = one[1]
    return Math.sqrt(((x2-x1)**2)+(y2-y1)**2)
  })
  console.log('The distances are:', theDistance)
  return theDistance
}

let promise = new Promise(function(resolve, reject) {
    getLocation(resolve)
});

promise.then((coor1)=> {
  distance(coor1, givenCoords)
});
