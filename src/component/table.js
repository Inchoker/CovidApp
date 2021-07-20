import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Confirmed</TableCell>
                        <TableCell align="right">Death</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                        <TableCell align="right">Population</TableCell>
                        <TableCell align="right">Total Area</TableCell>
                        <TableCell align="right">Life Expectancy</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.row.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.country}
                            </TableCell>
                            <TableCell align="right">{row.confirm}</TableCell>
                            <TableCell align="right">{row.death}</TableCell>
                            <TableCell align="right">{row.recover}</TableCell>
                            <TableCell align="right">{row.population}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <TableCell align="right">{row.life}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
