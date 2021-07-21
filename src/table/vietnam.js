import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useEffect, useState} from "react";
import axios from "axios";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function VietnamTable() {
    const classes = useStyles();
    const [rows, setRow] = useState([])
    useEffect(() => {
        async function fetchData(){
        let result = await axios(
            'https://covid-api.mmediagroup.fr/v1/vaccines?country=Vietnam',
        );
        result = result.data.All;
        const tempRow =[];
        const admininistered ={name: 'Administered', number:result.administered};
        const people_vaccinated ={name: 'People Vaccinated', number:result.people_vaccinated};
        const people_partially_vaccinated ={name: 'People Partially Vaccinated', number:result.people_partially_vaccinated};
        const population ={name: 'Population', number:result.population};
        const sq_km_area ={name: 'Total Area', number:result.sq_km_area};
        const life_expectancy ={name: 'Life Expectancy', number:result.life_expectancy};
        tempRow.push(admininistered,people_vaccinated,people_partially_vaccinated,population,sq_km_area,life_expectancy)
        setRow(tempRow)
        }
        fetchData();
    },[])
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Vietnam Vaccination</TableCell>
                        <TableCell align="right">Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
