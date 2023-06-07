let drums = [
  {
    id: "crash",
    src: "./sounds/drums/crash.wav",
    type: "audio/wav",
    key: "A",
  },
  {
    id: "hihat",
    src: "./sounds/drums/hi-hat.wav",
    type: "audio/wav",
    key: "S",
  },
  {
    id: "roll",
    src: "./sounds/drums/roll.wav",
    type: "audio/wav",
    key: "D",
  },
  {
    id: "tom",
    src: "./sounds/drums/tom.wav",
    type: "audio/wav",
    key: "F",
  },
  {
    id: "tom1",
    src: "./sounds/drums/tom1.wav",
    type: "audio/wav",
    key: "G",
  },
  {
    id: "tom2",
    src: "./sounds/drums/tom2.wav",
    type: "audio/wav",
    key: "H",
  },
  {
    id: "tom3",
    src: "./sounds/drums/tom3.wav",
    type: "audio/wav",
    key: "J",
  },
  {
    id: "tom4",
    src: "./sounds/drums/tom4.wav",
    type: "audio/wav",
    key: "K",
  },
];

const kalimbas = [
  {
    id: "kalimbaz",
    src: "./sounds/kalimba/kalimba-c.mp3",
    type: "audio/mp3",
    key: "Z",
  },
  {
    id: "kalimbax",
    src: "./sounds/kalimba/kalimba-d.mp3",
    type: "audio/mp3",
    key: "X",
  },
  {
    id: "kalimbac",
    src: "./sounds/kalimba/kalimba-e.mp3",
    type: "audio/mp3",
    key: "C",
  },
  {
    id: "kalimbav",
    src: "./sounds/kalimba/kalimba-f.mp3",
    type: "audio/mp3",
    key: "V",
  },
  {
    id: "kalimbab",
    src: "./sounds/kalimba/kalimba-g.mp3",
    type: "audio/mp3",
    key: "B",
  },
  {
    id: "kalimban",
    src: "./sounds/kalimba/kalimba-a.mp3",
    type: "audio/mp3",
    key: "N",
  },
  {
    id: "kalimbam",
    src: "./sounds/kalimba/kalimba-b.mp3",
    type: "audio/mp3",
    key: "M",
  },
  {
    id: "kalimbacoma",
    src: "./sounds/kalimba/kalimba-c8.mp3",
    type: "audio/mp3",
    key: ",",
  },
];

const drumsElement = document.getElementById("drums");
const kalimbasElement = document.getElementById("kalimbas");
let drumsDiv = "";
let kalimbasDiv = "";

for (let i = 0; i < drums.length; i++) {
  const drum = drums[i];
  drumsDiv += `<div class="key-container" data-key="${drum.key}" onclick="playAudio('${drum.id}')">
                <audio id="${drum.id}">
                  <source src="${drum.src}" type="${drum.type}">
                </audio>
                <p>${drum.key}</p>
               </div>`;
}
for (let i = 0; i < kalimbas.length; i++) {
  const kalimba = kalimbas[i];
  kalimbasDiv += `<div class="key-container" data-key="${kalimba.key}" onclick="playAudio('${kalimba.id}')">
                <audio id="${kalimba.id}">
                  <source src="${kalimba.src}" type="${kalimba.type}">
                </audio>
                <p>${kalimba.key}</p>
               </div>`;
}

drumsElement.innerHTML = drumsDiv;
kalimbasElement.innerHTML = kalimbasDiv;

function playAudio(id) {
  const drum = drums.find((drum) => drum.id === id);
  const kalimba = kalimbas.find((kalimba) => kalimba.id === id);

  if (drum) {
    const audio = new Audio(drum.src);
    audio.play();
  }

  if (kalimba) {
    const audio = new Audio(kalimba.src);
    audio.play();
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  const drum = drums.find((drum) => drum.key === key);
  const kalimba = kalimbas.find((kalimba) => kalimba.key === key);

  if (drum) {
    playAudio(drum.id);
    const keyContainer = document.querySelector(
      `.key-container[data-key="${drum.key}"]`
    );
    if (keyContainer) {
      keyContainer.classList.add("key-down");
    }
  }

  if (kalimba) {
    playAudio(kalimba.id);
    const keyContainer = document.querySelector(
      `.key-container[data-key="${kalimba.key}"]`
    );
    if (keyContainer) {
      keyContainer.classList.add("key-down");
    }
  }
});

document.addEventListener("keyup", function (event) {
  const key = event.key.toUpperCase();
  const drum = drums.find((drum) => drum.key === key);
  const kalimba = kalimbas.find((kalimba) => kalimba.key === key);

  if (drum) {
    const keyContainer = document.querySelector(
      `.key-container[data-key="${drum.key}"]`
    );
    if (keyContainer) {
      keyContainer.classList.remove("key-down");
    }
  }

  if (kalimba) {
    const keyContainer = document.querySelector(
      `.key-container[data-key="${kalimba.key}"]`
    );
    if (keyContainer) {
      keyContainer.classList.remove("key-down");
    }
  }
});
