const receivesAFunction = (cb) => cb();

const returnsANamedFunction = () => {
    return function namedfunction(){

    }
}
const returnsAnAnonymousFunction = () => {
    return function() {
        
    }
}