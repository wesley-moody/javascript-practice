// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // Check if value is undefined, if so, delete the entry
  if (value === "") {
    delete collection[id][prop]
    // Check if the prop is tracks
  } else if (prop === 'tracks') {
    // if id prop exists for tracks set it equal to itself  OR set to empty array
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

// Alter values below to test your code
updateRecords(2468, 'tracks', 'test')
console.log(updateRecords(5439, 'artist', 'ABBA'))

