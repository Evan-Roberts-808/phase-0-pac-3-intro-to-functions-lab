
function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
   console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const cant = "I can't hear you!"
    const can = "YES INDEED!"
    const love = "I would love to!"

    if (string === string.toLowerCase(string)) {
        return cant;
    } else if (string === string.toUpperCase(string)) {
        return can;
    } else if (string === "Let's have dinner together!") {
        return love;
    }
}
