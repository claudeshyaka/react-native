import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [ results, setResults] = useState([]);
    const [ errorMessage, setErrorMesssage ] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMesssage("Something went wrong!")
            console.log(err);
        }
    };

    // Used to call function once when component is first rendered!
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};