// this function is to be used in nodejs env 
// it generates json with apartments plans data from folder with images using images names
// transfer the file to the folder with the plans files, write down the correct paths and run using node


var fs = require('fs');
function createApartmentsData() {
    const apartmentsPlansAbsolutePath = '/Users/alik/Desktop/apartments';
    const entriesStaticPath = '../images/plans/apartments_plans/';

    let result = [];
    fs.readdir(apartmentsPlansAbsolutePath, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }
        files.forEach(function (file, index) {
            file = file.replace('.png', '');
            const apartmentParams = file.split('_')
            if (apartmentParams.filter((elem) => elem).length === 4) {
                result.push({
                    floor: apartmentParams[0],
                    section: apartmentParams[1],
                    area: apartmentParams[2],
                    rooms: apartmentParams[3],
                    path: `${entriesStaticPath}/${file}.png`
                })
            }
        });
        fs.writeFile("apartmentsPlansData.json", JSON.stringify(result), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    })
}
createApartmentsData();
