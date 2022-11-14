import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {

    const [info, setInfo] = useState();
    const { name } = useParams();

    const getPokeAsync = async () => {
        try {
            const getPoke = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
            const data = await getPoke.json();
            console.log(data)
            setInfo(data);
        }
        catch {
            console.log('error');
        }
    };

    useEffect(() => {
        getPokeAsync();
    }, []);

    return (
        <div className="mx-auto">
            <h1>{name} Pokemon Details</h1>
            <div className="mx-auto">
                <img src={info?.sprites.front_default}></img>
                <img src={info?.sprites.back_default}></img>
                <img src={info?.sprites.front_shiny}></img>
                <img src={info?.sprites.back_shiny}></img>
            </div>
        </div>
    )
}