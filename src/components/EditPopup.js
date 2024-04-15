import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditPopup = ({ open, onClose, editedRow, onSave }) => {
    const [editedData, setEditedData] = React.useState({ ...editedRow });

    const handleChange = (e, field) => {
        setEditedData({ ...editedData, [field]: e.target.value });
    };

    const handleSave = () => {
        onSave(editedData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>{editedRow.name}</DialogContent>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <TextField label="Category" value={editedData.category} onChange={(e) => handleChange(e, 'category')} fullWidth style={{ padding: '10px 0px' }} />
                <TextField label="Price" value={editedData.price} onChange={(e) => handleChange(e, 'price')} fullWidth style={{ padding: '10px 0px' }} />
                <TextField label="Quantity" value={editedData.quantity} onChange={(e) => handleChange(e, 'quantity')} fullWidth style={{ padding: '10px 0px' }} />
                <TextField label="Value" value={editedData.value} onChange={(e) => handleChange(e, 'value')} fullWidth style={{ padding: '10px 0px' }} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditPopup;
