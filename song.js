var songs = [];
console.log ()
//array.push "adds one more element to the end of array"
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";

songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
console.log(songs.length)
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
console.log(songs.length)
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
console.log(songs.length)
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log(songs.length)

songs.unshift("Legs > by Z*ZTop on the album Eliminator")
songs.push("Legs > by Z*ZTop on the album Eliminator")
console.log(songs)

for (i = 0; i < songs.length; i++) 
