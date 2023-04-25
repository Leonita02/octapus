//import { dbConnection } from "./db_connection";

const dbConnection =  require('./db_connection')



function GetAllLibraries() {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM biblioteka', (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                return;
                reject(err);
            }
            resolve(results);
        });
    });
}

module.exports =  {
    GetAllLibraries
}