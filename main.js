const arr = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

// Task 1: burda phone nomreleri olduğu kimi qalacaq herbiri necedirse ele lakin o rəqəmlərin herbiri random olacaq məsələn
// Phone:987654321 dirse
// Bu reqem herbirj random reqemlerle evez olunacaq
// Meselen :610373930Daha sonra o reqemler icinde min maxdan istifade edib en boyuk ve en kiçik reqemi tapacaqsiz 

// // forma-1
// function RandomPhoneNumber() {
//     // 10 təsadüfi rəqəmdən ibarət telefon nömrəsi yaradır
//     return `${Math.floor(Math.random() * 9000000000) + 1000000000}`;
// }


// arr.forEach(person => {
//     person.phone = RandomPhoneNumber();
// });

// console.log('Updated Array:', arr);

// // Telefon nömrələrinin ən böyük və ən kiçik rəqəmlərinin tapılması
// function findMinMaxDigits(numbers) {
//     let allDigits = numbers.join('').split('').map(Number); // Bütün rəqəmləri bir araya gətirir
//     let minDigit = Math.min(...allDigits); // Ən kiçik rəqəmi tapır
//     let maxDigit = Math.max(...allDigits); // Ən böyük rəqəmi tapır
//     return { minDigit, maxDigit };
// }

// // Telefon nömrələrindən rəqəmləri çıxarır
// const phoneNumbers = arr.map(person => person.phone);
// const { minDigit, maxDigit } = findMinMaxDigits(phoneNumbers);

// console.log('Minimum Digit:', minDigit);
// console.log('Maximum Digit:', maxDigit);


//      // forma-2


// const randomNum =(length) =>Math.floor(Math.random() * length)
 
// const changeNum = () => {
// arr.forEach((item) => {
// let number = item.phone.split('')
// let newNum = []
// for ( let symbol of number){
//     if(symbol >= 0 && symbol.trim()){
//         newNum.push(symbol)
//     }
// }
// let result =newNum.join('')

// let newResult =[]
// for (let i=0;i<result.length;  i++){
//     newResult.push(randomNum())
// }
// let minNum = Math.min(...newResult)
// let maxNum = Math.max(...newResult)
// for (let i=3;i < newResult.length; i+=4){
//     newResult.splice(i,0,'-')
// }
// let resultEnd = newResult.join('')
// console.log(resultEnd);




// })


// }












// // task2:Adresleri random cixaran Array qaytaran bir function qurun

//  function getRandomAddress(arr) {
//     // Massivdən təsadüfi bir indeks seçin
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     // Təsadüfi seçilmiş obyektin ünvanını əldə edin
//     const randomUser = arr[randomIndex];
//     const address = randomUser.address;

//     // Ünvanı qaytarın
//     return address;
// }

// // Funksiyanı çağırın və nəticəni çap edin
// const randomAddress = getRandomAddress(arr);
// console.log(randomAddress);



// // Task-3: Email ları random cixaran Array şəklində qaytaran bir function qurun

// // Email-ları random seçən funksiya
// function getRandomEmails(arr) {
//     // Bütün email-ları toplayan array
//     const emails = arr.map(user => user.email);
    

//     const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];


//     const numEmails = 5; // Burada istədiyimiz sayda email sece bilerik
    
//     // Seçilmiş e-maillərin siyahısı
//     const randomEmails = [];
//     for (let i = 0; i < numEmails; i++) {
//         randomEmails.push(getRandomElement(emails));
//     }
    
//     return randomEmails;
// }

// // Funksiyanı çağırmaq
// const randomEmails = getRandomEmails(arr);
// console.log(randomEmails);


// const mySet = new Set([1, 2, 3, 4]);
// const myArray = [...mySet];

// console.log(myArray); // [1, 2, 3, 4]








// const getData = () => {
//     let map = new Map();
//     let sum = 0;

//     arr.forEach((item) => {
//         map.set(item.id, item.username);
//     })

//     let size = map.size
//     map.forEach((item, key) => sum += key);
//     let result = sum / size
//     let netice = Math.floor(result)
//     map.delete(netice);
//     console.log(Array.from(map));
// }

// getData()