function recursiva (max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    setTimeout( function() {
        recursiva(max);
    }, 1000)
};

recursiva(-10);
