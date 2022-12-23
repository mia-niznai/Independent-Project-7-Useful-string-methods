//Filtering greeting messages

const greetings = ['Happy Birthday!',
    'Merry Christmas, my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'];

for (const greeting of greetings) {
    if (greeting.includes("Christmas")) {
        console.log(greeting)
    }
}

//Fixing capitalization

const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
    let lower = city.toLocaleLowerCase();
    let firstLetter = lower.slice(0, 1).toUpperCase();
    let newCity = lower.replace(lower[0], firstLetter);
    console.log(newCity);
}

//Making new string from old parts

const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
    let stationCode = station.slice(0, 3)
    //console.log(stationCode);
    let semiColon = station.indexOf(";");
    //console.log(semiColon);
    let stationName = station.slice(semiColon +1);
    //console.log(stationName)
    (console.log `${stationCode} : ${stationName}`) 
}
