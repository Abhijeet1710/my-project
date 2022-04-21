import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog( {addProject} ) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () =>setOpen(false);

  const addNewProject = async () => {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let amt = document.getElementById("amtReq").value;

    if(title === '' || desc === '' || amt === '') {
      alert('Please fill all fields');
      return;
    }

    await addProject(title, desc, amt);
    setOpen(false);
  }

  return (
    <div>
      <Button className='flex' variant="outlined" onClick={handleClickOpen} color='error'>
      <img src="https://img.icons8.com/windows/28/fa314a/add-property.png" width="20px" height="14px" className='mr-2'/>
        Add Project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> <span className='flex text-orange-500 font-medium	'> 
            <span className='align-baseline'> Add New Project </span>
          </span>
          </DialogTitle>
        <DialogContent>
          <span className='text-sm'>
            Add Title, Description and Amount required of the project to be added.
          </span>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="amtReq"
            label="Amount Require (in ETH)"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions className='mb-4'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={addNewProject}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
