function walk() {
    console.log('walk');
}

// Anonymous Function Expression

const run = function() {
    console.log('Function Expression');
};

const float = () => {
    return 'float';
};

const fly = () => 'fly';

walk();
let move;
move = run;
console.log(move);
run();
float()
fly();
