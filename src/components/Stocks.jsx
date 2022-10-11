import React from "react";
import {Button, Table,TableHead, TableCell, TableRow , TableBody, styled, } from '@material-ui/core';
import { useStateValue } from "../context/StateProvider";
  

const StyledTable = styled(Table)`
width:90%;
Margin: 80px auto 0 auto
`;

const THead = styled(TableRow)`
& > th {
  font-size: 20px;
  background: White
  color:black
}`;

const TRow = styled(TableRow)`
& > td{
  font-size:18px;
}`


const Stocks =()=>{
  
  return (
    <div >
    <h1 style={{fontSize:"25px",fontWeight:"bold", textAlign:"center" }}>All Stocks</h1><br/><br/>
   <StyledTable>
    
    <TableHead>
      <THead>
        <TableCell>Id </TableCell>
        <TableCell>Id </TableCell>
        <TableCell>Id </TableCell>
        <TableCell>Id </TableCell>
        <TableCell>Id </TableCell>
        <TableCell>Id </TableCell>
      </THead>
    </TableHead>
    <TableBody>
      <TRow>
        <TableCell>1</TableCell>
        <TableCell>dgdh</TableCell>
        <TableCell>cghdhddj</TableCell>
        <TableCell>dsfsf</TableCell>
        <TableCell>sdfsf</TableCell>
        <TableCell>fsfs</TableCell>
       
      </TRow>
      <TRow>
        <TableCell>1</TableCell>
        <TableCell>dgdh</TableCell>
        <TableCell>cghdhddj</TableCell>
        <TableCell>dsfsf</TableCell>
        <TableCell>sdfsf</TableCell>
        <TableCell>fsfs</TableCell>
       
      </TRow>
      <TRow>
        <TableCell>1</TableCell>
        <TableCell>dgdh</TableCell>
        <TableCell>cghdhddj</TableCell>
        <TableCell>dsfsf</TableCell>
        <TableCell>sdfsf</TableCell>
        <TableCell>fsfs</TableCell>
       
      </TRow>
    </TableBody>
   </StyledTable>
   </div>
  );
}
 export default Stocks;
        

