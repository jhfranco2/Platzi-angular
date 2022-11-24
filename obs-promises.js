const { resolve } = require('dns');
const { filter,Observable } = require('rxjs/operator');

const doSomething = () => {
    return new Promise((resolve) => {
        resolve('valor 1');
        setTimeout(() => {
            resolve(' valor 2');
        }, 3000)
    });
}


const doSomething$ = () => {
    return new Observable(observer => {
        observer.next('valor 1 $');
        observer.next('valor 2 $');
        observer.next('valor 2 $');
        observer.next('valor 2 $');
        setTimeout(() => {
            observer.next('valor 3');
        }, 5000);
    });
}

(async () => {
    const rta = await doSomething();
    console.log(rta);
})();

(() => {
    const obs$ = doSomething$();
    obs$
    .pipe(
        filter(value => value !== null)
    )
    .subscribe(rta => {
        console.log(rta);
    });
})();