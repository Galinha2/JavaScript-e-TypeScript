function random (min = 500, max = 5000) {
    return Math.floor(Math.random() * (max - min));
}

function f1 (callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, random());
};

function f2 (callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, random());
};

function f3 (callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, random());
};

f1(f1callback);

function f1callback() {
    f2(f2callback);
};

function f2callback() {
    f3();
};
