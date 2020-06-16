// confirm('Is it ok?');
// up 38 down 40 left 37 right 39

let rocket = document.querySelector('#rocket');
let fire = document.querySelector('#fire');
let rocket_sound = document.querySelector('#rocket_sound');


class Rocket {
    constructor(z, y, r) {    
        this.z = z;
        this.y = y;
        this.r = r;
    };

    goHorizontally(eh) {
        if(eh.keyCode == 37) {
            this.z = this.z - 2;
            this.r = this.r - .5;
            rocket.style.marginLeft = this.z + 'px';
            rocket.style.transform = `rotate(${this.r}deg)`;
            fire.style.display = 'block';
            rocket_sound.play();
        }
        else if(eh.keyCode == 39) {
            this.z = this.z + 2;
            this.r = this.r + .5;
            rocket.style.marginLeft = this.z + 'px';
            rocket.style.transform = `rotate(${this.r}deg)`;
            fire.style.display = 'block';
            rocket_sound.play();
        }    

    }

    goVertical(ev) {
        if(ev.keyCode == 38) {
            this.y = this.y - 2;
            this.r = this.r - .5;
            rocket.style.marginTop = this.y + 'px';
            rocket.style.transform = `rotate(${this.r}deg)`;
            fire.style.display = 'block';
            rocket_sound.play();
        }
        else if(ev.keyCode == 40) {
            this.y = this.y + 2;
            this.r = this.r - .5;
            rocket.style.marginTop = this.y + 'px';
            rocket.style.transform = `rotate(${this.r}deg)`;
            fire.style.display = 'block';
            rocket_sound.play();
        }

    }

}

let x = new Rocket(2, 2, 0);

window.addEventListener('keydown', e => {
    x.goHorizontally(e);
}) 

window.addEventListener('keydown', e => {
    x.goVertical(e);
}) 

window.addEventListener('keyup', e => {
    fire.style.display = 'none';
    rocket_sound.pause();
}) 


if(rocket.style.marginLeft > 242 + 'px') {
    alert('Game over');
}



//test Rotating


// let btn = document.querySelector('#btn');
// let r = 10;

// btn.addEventListener('click', () => {
//     rocket.style.transform = `rotate(${r}deg)`;
// })