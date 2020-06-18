// up 38 down 40 left 37 right 39

let body = document.querySelector('#body');
let ship = document.querySelector('#ship');
let iis = document.querySelector('#iss');
let ship_fire = document.querySelector('#ship_fire');
let rocket = document.querySelector('#rocket');
let rocket_fire = document.querySelector('#rocket_fire');
let rocket_sound = document.querySelector('#rocket_sound');
let rocket_explosion = document.querySelector('#rocket_explosion');
let esplosion = document.querySelector('#explosion_sound');
let game_over = document.querySelector('#game_over');
let counter = document.querySelector('#counter');
let score_p = document.querySelector('#score_p');
let reload = document.querySelector('#reload');
let count = 0;
let speed = 2;
let rot = .5;
let interval;
let interval_2;
let grav = 0;

//rocket

class Rocket {
    constructor(z, y, r) {    
        this.z = z;
        this.y = y;
        this.r = r;
    };

    goHorizontally(eh) {
        if(eh.keyCode == 37) {
            this.r = this.r - rot;
            rocket.style.transform = `rotate(${this.r}deg)`;
            rocket_fire.style.display = 'block';
            rocket_sound.play();
            if(this.r <= -2) {
                g_over();
            }
        }
        else if(eh.keyCode == 39) {
            this.r = this.r + rot;
            rocket.style.transform = `rotate(${this.r}deg)`;
            rocket_fire.style.display = 'block';
            rocket_sound.play();
            if(this.r >= 2) {
                g_over();
            }

        }  
    }

    goVertical(ev) {
        if(ev.keyCode == 32) {
            this.y = this.y - speed;
            rocket.style.marginTop = this.y + 'px';
            rocket_fire.style.display = 'block';
            rocket_sound.play();
        }
    }

    gravity(g) {
        interval = setInterval(() => {
            this.y = this.y + g;
            this.r = this.r + .5;
            // if(this.r > 2) {
            //     g_over();
            // }
            // else if(this.r < 2) {
            //     g_over();
            // }
            rocket.style.marginTop = this.y + 'px';
        }, 1)     
    }

    print() {
        console.log(this.y);
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
    rocket_fire.style.display = 'none';
    rocket_sound.pause();
    x.gravity(.1);
}) 


interval_2 = setInterval(() => {
    console.log(rocket.offsetTop);
    count++;

    counter.innerHTML = count;
    if(rocket.offsetTop > 585) {
        g_over();
    }
    if(rocket.offsetTop > -100) {
        if(count > 130) {
            g_over();
        }
    }
    else {
        rocket.style.display = 'none';
        body.style.backgroundImage = "url('space_2.jpg')";
        ship.style.display = 'block';
        iss.style.display = 'block';
        x.goHorizontally.disable();
    }


}, 100);

let g_over = () => {
    rocket_explosion.style.display = 'block';
    esplosion.play();
    clearInterval(interval_2);
    clearInterval(interval);
    setTimeout(() => {
        game_over.style.display = 'flex';
        rocket.style.display = 'none';
        counter.style.display = 'none';
        score_p.innerHTML = `Your score is: ${count}`
    }, 4000) 
}



reload.addEventListener('click', () => {
    window.open('index.html', '_self');
})


























ship

class Ship {
    constructor(z, y, r) {    
        this.z = z;
        this.y = y;
        this.r = r;
    };

    goHorizontally(eh) {
        if(eh.keyCode == 37) {
            this.z = this.z - speed;
            this.r = this.r - rot;
            ship.style.marginLeft = this.z + 'px';
            ship.style.transform = `rotate(${this.r}deg)`;
            ship_fire.style.display = 'block';
            rocket_sound.play();
        }
        else if(eh.keyCode == 39) {
            this.z = this.z + speed;
            this.r = this.r + rot;
            ship.style.marginLeft = this.z + 'px';
            ship.style.transform = `rotate(${this.r}deg)`;
            ship_fire.style.display = 'block';
            rocket_sound.play();
        }  
    }

    goVertical(ev) {
        if(ev.keyCode == 38) {
            this.y = this.y - speed;
            this.r = this.r + rot;
            ship.style.marginTop = this.y + 'px';
            ship.style.transform = `rotate(${this.r}deg)`;
            ship_fire.style.display = 'block';
            rocket_sound.play();
        }
        else if(ev.keyCode == 40) {
            this.y = this.y + speed;
            this.r = this.r - rot;
            ship.style.marginTop = this.y + 'px';
            ship.style.transform = `rotate(${this.r}deg)`;
            ship_fire.style.display = 'block';
            rocket_sound.play();
        }

    }

    collision() {
        if(this.z >= 120 && this.z <= 140 && this.y >= -30 && this.y <= -50) {
            alert('Well Done!!!');
        }
    }


}

let xx = new Ship(2, 2, 0);

window.addEventListener('keydown', e => {
    xx.goHorizontally(e);
    xx.collision();
}) 

window.addEventListener('keydown', e => {
    xx.goVertical(e);
}) 

window.addEventListener('keyup', e => {
    ship_fire.style.display = 'none';
    rocket_sound.pause();
}) 




//trying collision


// let tip = document.querySelector('#tip');

// let style = tip.currentStyle || window.getComputedStyle(tip);

// let left_margin = window.getComputedStyle(tip).getPropertyValue("margin-left"); // returns margin e.g. '655px'

// let marLeft = getStyle(tip, 'margin-left');
// alert(marLeft);

// console.log(left_margin);
// console.log(style.marginTop);


// if(ship.style.marginLeft > 242 + 'px') {
//     alert('Game over');
// }
