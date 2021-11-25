console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  const newObj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(newObj)
  return newObj
};



console.log('added a new record ', addToCollection('Beats', 'Christian Lillinger', 2021))
console.log('added a new record ', addToCollection('Shade', 'Grouper', 2021));
console.log('added a new record ', addToCollection('Haunt Me', 'Tim Hecker', 2001));
console.log('added a new record ', addToCollection('Silent Movies', 'Marc Ribot', 2010));
console.log('added a new record ', addToCollection('Songs We Know', 'Bill Frisell & Fred Hirsch', 1998));
console.log('added a new record ', addToCollection('Happy Moods', 'Ahmad Jamal', 1960));
console.log('added a new record ', addToCollection('Ruins', 'Grouper', 2014));
console.log(collection);

function showCollection(array) {
  console.log('You have ' + array.length + ' records in your collection');
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
  }
}
console.log('testing showCollection, see below:');
console.log(showCollection(collection));
//works, but spits out undefined at the end. Weird.

function findByArtist(artist, array) {
  let result = [];
  for (let newObj of array) {
    if (artist === newObj.artist) {
      result.push(newObj);
    }
  }
  return result;
}
console.log('testing findByArtist, with an existing one see below:');
console.log(findByArtist('Grouper', collection));
console.log('testing findByArtist, with a nonexistent one see below:');
console.log(findByArtist('clowncore', collection));
/*
function find(value, array) {
  let t;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      t = true;
      return t;
    } else {
      t = false;
    }
  }
  return t;
}
*/
