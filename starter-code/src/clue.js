// Characters
const mrGreen = {
first_name: "Jacob",
last_name: "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}

const drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}
const profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}
const missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}

const mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}
const mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}
// Weapons

const rope = {weight: 10}
const knife = {weight: 8}
const candlestick = {weight: 2}
const dumbbell = {weight: 30}
const poison = {weight: 2}
const axe = {weight: 15}
const bat = {weight: 13}
const trophy = {weight: 25}
const pistol = {weight: 20}

// Rooms
const Dinning Room
const Conservatory
const Kitchen
const Study
const Library
const Billiard Room
const Lounge
const Ballroom
const Hall
const Spa
const Living Room
const Observatory
const Theater
const Guest House
const Patio

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum,missScarlet,
    mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = [rope, knife, andlestick, dumbbell, poison,
    axe, bat, trophy, pistol];

// Rooms' Collection
var roomsArray = [Dinning Room, Conservatory, Kitchen, Study, Library, 
    Billiard-Room, Lounge, Ballroom, Hall, Spa, Living-Room, 
    zObservatory, Theater, Guest-House, Patio];

//Functions
function randomSelector(array){
    let b = Math.random()*(array.length-1)
    let x = Math.round(b)
    console.log(x)
    return array[x]
    }

    function pickMistery(array1,array2,array3){
    let misteryEnvelope = []
    misteryEnvelope.push(randomSelector(array1))
    misteryEnvelope.push(randomSelector(array2))
    misteryEnvelope.push(randomSelector(array3))
    return misteryEnvelope
    }

    function revealMistery(pickMistery){
        let revelation = pickMistery(array1,array2,array3)
        console.log(`${revelation[0].first_name} ${revelation[0].last_name} killed Mr boddy using the ${revelation[1]} in the ${revelation[2]}`)
      }