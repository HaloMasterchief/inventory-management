import * as React from 'react';
import { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import capitalizeFirstLetter from '../utils/capitalize';
import EditPopup from './EditPopup';

export default function TableView(props) {
    const { tableProps, onEdit, onDelete, onDisable, isAdmin } = { ...props };
    const [editPopupOpen, setEditPopupOpen] = useState(false);
    const [editedRow, setEditedRow] = useState(null);

    const handleEdit = (name) => {
        const editedItem = tableProps.find(item => item.name === name);
        setEditedRow(editedItem);
        setEditPopupOpen(true);
    };

    const handleDelete = (name) => {
        const deletedItem = tableProps.find(item => item.name === name);
        onDelete(deletedItem);
    };

    const handleDisable = (name) => {
        const disabledItem = tableProps.find(item => item.name === name);
        onDisable(disabledItem);
    };

    const TableHeaderStyleObj = { backgroundColor: 'black', padding: '8px 12px', display: 'inline-block', borderRadius: '8px', }

    return (<>
        <TableContainer component={Paper} color="primary">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(tableProps[0]).map((item, index) => (
                            index !== 5 &&
                            <TableCell align="left" key={index} style={{ color: `#adff2f` }}>
                                <div style={TableHeaderStyleObj}>
                                    {capitalizeFirstLetter(item)}
                                </div>
                            </TableCell>
                        ))}
                        <TableCell align="left" style={{ color: `#adff2f` }}>
                            <div style={TableHeaderStyleObj}>
                                Action
                            </div>
                        </TableCell> {/* Added Action column header */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableProps.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{ backgroundColor: row.disabled ? '#d3d3d3' : 'inherit' }}
                        >
                            {Object.values(row).map((value, idx) => (
                                idx !== 5 && <TableCell component="th" scope="row" key={idx} align="left">{value}</TableCell>
                            ))}
                            <TableCell align="left">
                                <IconButton onClick={() => handleEdit(row.name)} style={{ color: (row.disabled || !isAdmin) ? '#a0a0a0' : 'green' }} disabled={row.disabled || !isAdmin}>
                                    <EditIcon />
                                </IconButton> {/* Edit button */}
                                <IconButton onClick={() => handleDisable(row.name)} style={{ color: !isAdmin ? '#a0a0a0' : 'plum' }} disabled={!isAdmin}>
                                    {row.disabled ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton> {/* Disable button */}
                                <IconButton onClick={() => handleDelete(row.name)} style={{ color: !isAdmin ? '#a0a0a0' : 'red' }} disabled={!isAdmin}>
                                    <DeleteIcon />
                                </IconButton> {/* Delete button */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {editPopupOpen && <EditPopup open={editPopupOpen} onClose={() => setEditPopupOpen(false)} editedRow={editedRow} onSave={onEdit} />}
    </>
    );
}