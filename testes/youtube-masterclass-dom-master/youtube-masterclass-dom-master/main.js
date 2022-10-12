//get all keys
const keys = document.querySelectorAll('.key')

//play notes
function playNote(event){
    let audioKeyCode = getKeyCode(event);
    //keycode
    function getKeyCode(event){
        let keyCode;
        const isKeybord = event.type === "keydown"
            if (isKeyboard){
                keyCode = event.keyCode
            } else{
                keycode = event.target.dataset.key
            }
            return KeyCode
    }
    //typed key
    const audio = document.querySelector(`.key[audio[data-key=${audioKeyCode}]]`)

    

    //if key exists
    const isKeyExists = key
    if(!isKeyExists){
        return;
    }

    //play audio
    addPlayingClass(key)
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
    
}

function addPlayngClass(key){
    key.classList.add('playing')
}

//click with mouse
keys.forEach(function(key){
    key.addEventListener('click', playNote)
})

//keybord type
window.addEventListener('keydown', playNote)