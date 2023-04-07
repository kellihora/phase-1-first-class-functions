function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("This is a named function.");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is anonymous. Shh!");
    }
}