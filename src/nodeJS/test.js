const bibliotekaRepo = require("./bibliotekaRepo");

//Mundemi me perdor kete menyre 
// var result = bibliotekaRepo.GetAllLibraries()
//     .then((result) => {
//         console.log({ result })
//     })
//     .catch((err) => {
//         console.log({ err })
//     })

// console.log({ result })

//Ose kete menyre per mi marr rezultatet nga databaza.Preferohet kjo!

async function GetAllLibraries() {
    try {
        var data = await bibliotekaRepo.GetAllLibraries();
    }
    catch (err) {
        console.error(err);
    }
    console.log({ data });
}

// GetAllLibraries();


