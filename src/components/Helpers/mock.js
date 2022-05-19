export const cards = [   
    {id: '1', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
    {id: '2', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
    {id: '3', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
    {id: '4', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
    {id: '5', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
    {id: '6', img: '../assets/png/card-img.png', profile: '../assets/jpg/profile-img.jpg'},
];
    
export const getFetch = new Promise((resolve, reject) => {

    let condicion = true;
    if (condicion) {
        setTimeout(()=> {
        resolve(cards);
    }, 1000 )
    } else {
    reject("error");
    }
});

