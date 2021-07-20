import React from 'react';
import BasicTable from "../component/table";
import {useEffect, useState} from "react";
import axios from "axios";

export default function WorldTable(){
    const emptyRow = [{country:'',confirm:'', death:'', recover:'', population:'', total:'', life: ''}]
    const [row, setRow] = useState(emptyRow)
    useEffect(async () => {
        let result = await axios(
            'https://covid-api.mmediagroup.fr/v1/cases',
        );
        result = result.data;
        let tempRow=[];
        for(const property in result) {
            const tempObject ={};
            tempObject.country= property;
            tempObject.confirm=result[property].All.confirmed;
            tempObject.death=result[property].All.deaths;
            tempObject.recover=result[property].All.recovered;
            tempObject.population=result[property].All.population;
            tempObject.total=result[property].All.sq_km_area;
            tempObject.life=result[property].All.life_expectancy;
            tempRow.push(tempObject);
        }
        setRow(tempRow)
    });
    return (
        <BasicTable row={row}/>
    )
}