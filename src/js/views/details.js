import React from "react";
import { useParams } from "react-router-dom";

export const Details = () => {

    const {name} = useParams();

    return (
        <>
            <h1>{name} Pokemon Details</h1>
        </>
    )
}