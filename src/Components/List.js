import { Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { maxWidth } from '@mui/system';

import React from 'react';

const ListComponent = ({data,onDelete})=>{
    
    const handleDelete =(id)=>{
        //console.log("deklete",id)
        onDelete(id);
    }
   
    return(
    
        <div>

      <TableContainer style={{ color: 'blue',}} sx={{maxHeight:'300px'}}>
          <Table style={{ color: 'blue',}} stickyHeader >
              <TableHead style={{ color: 'blue',}} >
                  <TableRow style={{ color: 'blue',}}>
                      <TableCell>ID</TableCell>
                      <TableCell>NAME</TableCell>
                      <TableCell>EMAIL</TableCell>
                    <TableCell> Remove</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                   {data.map((item)=>{
                       return(
                           <TableRow key={item.id}
                           sx={{'&:last-child td,&:last-child th':{border:0}}}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>
                        <Button variant="outlined" color="error" onClick={()=>handleDelete(item.id)}>Delete</Button>
                        </TableCell>

                           </TableRow>
                       )
                   })}
              </TableBody>
          </Table>
      </TableContainer>
   
        </div>
    )
}
export default ListComponent