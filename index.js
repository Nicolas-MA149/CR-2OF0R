const libOne = document.getElementById('lib-1');
const libTwo = document.getElementById('lib-2');
const libThree = document.getElementById('lib-3');
const beatName = document.getElementById('beat-name');
const padContainer = document.getElementById('pad-container');

let selectedLib;
const pressKeyHandler = (e) => {
    switch (e.keyCode) {
            case 81:
                classClick('Q');
                const filterQ = selectedLib.filter((pad) => pad.key === 'Q');
                playSound(filterQ[0].sound, filterQ[0].name);
                break;
            case 87:
                classClick('W');
                const filterW = selectedLib.filter((pad) => pad.key === 'W');
                playSound(filterW[0].sound, filterW[0].name);
                break;
            case 69:
                classClick('E');
                const filterE = selectedLib.filter((pad) => pad.key === 'E');
                playSound(filterE[0].sound, filterE[0].name);
                break;
            case 65:
                classClick('A');
                const filterA = selectedLib.filter((pad) => pad.key === 'A');
                playSound(filterA[0].sound, filterA[0].name);
                break;            
            case 83:
                classClick('S');
                const filterS = selectedLib.filter((pad) => pad.key === 'S');
                playSound(filterS[0].sound, filterS[0].name);
                break;
            case 68:
                classClick('D');
                const filterD = selectedLib.filter((pad) => pad.key === 'D');
                playSound(filterD[0].sound, filterD[0].name);
                break;
            case 90: 
                classClick('Z');
                const filterZ = selectedLib.filter((pad) => pad.key === 'Z');
                playSound(filterZ[0].sound, filterZ[0].name);
                break;
            case 88:
                classClick('X');
                const filterX = selectedLib.filter((pad) => pad.key === 'X');
                playSound(filterX[0].sound, filterX[0].name);
                break;
            case 67:
                classClick('C');
                const filterC = selectedLib.filter((pad) => pad.key === 'C');
                playSound(filterC[0].sound, filterC[0].name);
                break;
            case 49:
                selectedLib = libraryOne;
                createPads(libraryOne)
                break;
            case 50:
                selectedLib = libraryTwo;
                createPads(libraryTwo)
            case 51:
                selectedLib = libraryThree;
                createPads(libraryThree)
            default:
                break;
        }
    };
document.addEventListener('keydown', pressKeyHandler);

function sound(src){
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.classList.add('clip');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    };
    this.stop = function() {
        this.sound.pause();
    };
}

oneQ = new sound('./sound_library/Library_1/high-tom.wav');
oneW = new sound('./sound_library/Library_1/low-mid-tom.wav');
oneE = new sound('./sound_library/Library_1/snare.wav');
oneA = new sound('./sound_library/Library_1/crash-drum.wav');
oneS = new sound('./sound_library/Library_1/kick-drum.wav');
oneD = new sound('./sound_library/Library_1/open-high-hat.wav');
oneZ = new sound('./sound_library/Library_1/high-hat-closed.wav');
oneX = new sound('./sound_library/Library_1/ride-cymbal.wav');
oneC = new sound('./sound_library/Library_1/shaker.wav');

libraryOne = [
    {
        sound: oneQ,
        name: 'High Tom',
        key: 'Q'
    },

    {
        sound: oneW,
        name: 'Low Tom',
        key: 'W'
    },

    {
        sound: oneE,
        name: 'Snare',
        key: 'E'
    },

    {
        sound: oneA,
        name: 'Crash',
        key: 'A'
    },

    {
        sound: oneS,
        name: 'Bass Drum',
        key: 'S'
    },

    {
        sound: oneD,
        name: 'High Hat (open)',
        key: 'D'
    },
    
    {
        sound: oneZ,
        name: 'High Hat (closed) ',
        key: 'Z'
    },

{
        sound: oneX,
        name: 'Ride Cymbal',
        key: 'X'
},

{
        sound: oneC,
        name: 'Shaker',
        key: 'C'
}
    ];

//second library
twoQ = new sound('./sound_library/Library_2/high-tom.wav');
twoW = new sound('./sound_library/Library_2/low-mid-tom.wav');
twoE = new sound('./sound_library/Library_2/snare.wav');
twoA = new sound('./sound_library/Library_2/crash-drum.wav');
twoS = new sound('./sound_library/Library_2/kick-drum.wav');
twoD = new sound('./sound_library/Library_2/open-high-hat.wav');
twoZ = new sound('./sound_library/Library_2/high-hat-closed.wav');
twoX = new sound('./sound_library/Library_2/ride-cymbal.wav');
twoC = new sound('./sound_library/Library_2/Shaker.wav');

libraryTwo = [
    {
        sound: twoQ,
        name: 'High Tom',
        key: 'Q'
    },

    {
        sound: twoW,
        name: 'Low Tom',
        key: 'W'
    },

    {
        sound: twoE,
        name: 'Snare',
        key: 'E'
    },

    {
        sound: twoA,
        name: 'Crash',
        key: 'A'
    },

    {
        sound: twoS,
        name: 'Bass Drum',
        key: 'S'
    },

    {
        sound: twoD,
        name: 'High Hat (open)',
        key: 'D'
    },
    
    {
        sound: twoZ,
        name: 'High Hat (closed) ',
        key: 'Q'
    },

{
        sound: twoX,
        name: 'Ride Cymbal',
        key: 'X'
},

{
        sound: twoC,
        name: 'Bass Track',
        key: 'C'
}
];

//third library
threeQ = new sound('./sound_library/Library_3/high-tom.wav');
threeW = new sound('./sound_library/Library_3/low-mid-tom.wav');
threeE = new sound('./sound_library/Library_3/snare.wav');
threeA = new sound('./sound_library/Library_3/crash-drum.wav');
threeS = new sound('./sound_library/Library_3/kick-drum.wav');
threeD = new sound('./sound_library/Library_3/open-high-hat.wav');
threeZ = new sound('./sound_library/Library_3/high-hat-closed.wav');
threeX = new sound('./sound_library/Library_3/ride-cymbal.wav');
threeC = new sound('./sound_library/Library_3/bass-track.wav');

libraryThree = [
    {
        sound: threeQ,
        name: 'High Tom',
        key: 'Q'
    },

    {
        sound: threeW,
        name: 'Low Tom',
        key: 'W'
    },

    {
        sound: threeE,
        name: 'Snare',
        key: 'E'
    },

    {
        sound: threeA,
        name: 'Crash',
        key: 'A'
    },

    {
        sound: threeS,
        name: 'Bass Drum',
        key: 'S'
    },

    {
        sound: threeD,
        name: 'High Hat (open)',
        key: 'D'
    },
    
    {
        sound: threeZ,
        name: 'High Hat (closed) ',
        key: 'Q'
    },

{
        sound: threeX,
        name: 'Ride Cymbal',
        key: 'X'
},

{
        sound: threeC,
        name: 'Bass Track',
        key: 'C'
}
];

function newPad(pad) {
    const { sound, name, key } = pad;
    this.newPad = document.createElement('div');
    this.newPad.classList.add('drum-pad');
    this.newPad.setAttribute('id', key);
    this.newPad.setAttribute('type', 'button');
    this.newPad.innerText = key;
    this.newPad.onclick = () => {
        playSound(sound, name);
        classClick(key);
    };
    this.newPad.onmouseover = () => classHover(key);
    this.newPad.onmouseleave = () => {
        this.newPad.classList.remove('drum-pad-hover');
    };
    padContainer.appendChild(this.newPad);
}
const createPads = (library) => {
    while (padContainer.firstChild) {
        padContainer.removeChild(padContainer.lastChild);
    }
    library.map((pad) => {
        new newPad(pad);
    });
};

const playSound = (sound, name) => {
    sound.play();
    beatName.innerHTMl = name;
};

const classHover = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-hover');
};

const classClick = (key) => {
    const pad = document.getElementById(key);
    pad.classList.add('drum-pad-clicked');
    setTimeout(() => {
        pad.classList.remove('drum-pad-clicked');
    }, 500);
};

window.onclick = () => {
    selectedLib = libraryOne
    createPads(libraryOne);
};
libTwo.onclick = () => {
    selectedLib = libraryTwo;
    createPads(libraryTwo);
};
libThree.onclick = () => {
    selectedLib = libraryThree;
    createPads(libraryThree);
};

const patterns = {
    pattern1: [
    { sound: libraryOne[4].sound, name: 'Bass Drum', delay: 0},
    { sound: libraryOne[5].sound, name: 'High Hat (open)', delay: 0},
    { sound: libraryOne[5].sound, name: 'High Hat (open)', delay: 1000},
    { sound: libraryOne[5].sound, name: 'High Hat (open)', delay: 2000},
    { sound: libraryOne[2].sound, name: 'Snare', delay: 3000},
    { sound: libraryOne[5].sound, name: 'High Hat (open)', delay: 3000}
]
};

let activeTimeouts = [];
let activeInterval = null; // To keep track of the loop

// Function to play a preset pattern with looping
const playPattern = (pattern, loop = true) => {
    clearTimeouts(); // Clear any running patterns

    // Function to play the pattern once
    const playOnce = () => {
        pattern.forEach(({ sound, name, delay }) => {
            const timeoutId = setTimeout(() => {
                playSound(sound, name);
            }, delay);
            activeTimeouts.push(timeoutId); // Store timeout IDs
        });
    };

    // Calculate total duration of the pattern
    const totalDuration = 4000; // Adding 500ms buffer

    // Play the pattern once initially
    playOnce();

    // If loop is true, use setInterval to replay the pattern
    if (loop) {
        activeInterval = setInterval(() => {
            playOnce(); // Replay the pattern
        }, totalDuration);
    }
};

// Clear timeouts and intervals (for stop functionality)
const clearTimeouts = () => {
    activeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    activeTimeouts = [];
    clearInterval(activeInterval); // Clear the looping interval
    activeInterval = null;
};

// Example stop button
document.getElementById('stop-btn').onclick = clearTimeouts;
