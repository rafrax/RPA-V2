const Productos = [
    {id:"1", 
    title:"titulo", 
    description:"descripcion", 
    price:100, 
    pictureUrl:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
    },
    {id:"2", 
    title:"titulo", 
    description:"descripcion", 
    price:100, 
    pictureUrl:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
    }
];

function a () {
return new Promise ((resolve, reject) => {
    setTimeout(() =>{
        resolve(Productos);
    }, 2000);
});
}

function b () {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(Productos);
        }, 2000);
    });
    }

const task = async () => {
    const resultA = await a();
    const resultb = await b();
}

task();