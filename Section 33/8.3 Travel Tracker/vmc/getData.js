import pg from "pg";
import { getDb } from "../db/connectPg.js";

const db = getDb();


async function getData(countries){
 
    try{
      const result = await db.query("SELECT country_code FROM countryname" );
      result.rows.forEach((country) => countries.push(country.country_code));
      country = result.rows;
    }
    catch(err){
      console.log(err.message);
    }
  }

export default getData