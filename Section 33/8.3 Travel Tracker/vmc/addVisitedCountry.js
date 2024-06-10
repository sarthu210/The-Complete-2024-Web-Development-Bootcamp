import pg from "pg";
import { getDb } from "../db/connectPg.js";

const db = getDb();

async function addVisitedCountry(input){
    

    try{
        const result  = await db.query("SELECT country_code FROM countries WHERE country_name = $1" , [input]);

        console.log(result.rows);
        
        if(result.rows.length !== 0){
            const data = result.rows[0];
            const countryCode = data.country_code;

            console.log(countryCode);

            await db.query("INSERT INTO countryname (country_code) VALUES($1)" , [countryCode]);
        }
    }
    catch{
        console.log(error.message);
    }
    
}

export default addVisitedCountry;