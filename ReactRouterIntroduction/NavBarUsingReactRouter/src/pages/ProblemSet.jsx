import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ProblemSet() {
    console.log("rendered");
    const [queryParams, setQueryParams] = useSearchParams();

    // console.log(queryParams.getAll("page"));

    //It will check name key is present or not
    // console.log(queryParams.has("name"));
    // console.log(queryParams.has("name", "nar"));

    //ForEach is used to get the data. It is more helpful during the API calls.
    queryParams.forEach((key, value) => {
        console.log(key, value);
    })

    const appendParam = () => {
        setQueryParams((prev) => 
        {
            prev.append("name", "naresh")   //It adds the name query params
            prev.set("page", 2);            //It sets or updates the name query value
            return prev;
        }
        );
    }

    const deleteParams = () => {
        setQueryParams((prev) => {
            prev.delete("name", "anil");       //It delets the name query params
            return prev;
        });
    }

    return (
        <div>
            <h3>Problem Set</h3>
            <button onClick={appendParam}>Add append queryParam</button>
            <button onClick={deleteParams}>Delete</button>
        </div>
    );
}