import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../style/detailPatient.css';


 class DetailDialogue extends React.Component {
  state = {open: false};

  handleClickOpen = () => {  
    this.setState({ open: true });
  };

  handleCloseDone = () => {   
    this.props._TraitementDone(this.props.data);
    this.setState({ open: false });
  };

  handleCloseImpossible = () => {   
    this.props._TraitementImpossible(this.props.data)
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button id="detailButton" onClick={this.handleClickOpen}>Dossier medical</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>             
                <TextField label="Pathologie" value={this.props.data.pathologie} margin="normal"/>              
            </DialogContentText>
            <DialogContentText>  
               <TextField label="Observation" value={this.props.data.observation} margin="normal"
                className="multi"/>    
            </DialogContentText> 
            <DialogContentText>  
               <TextField label="Traitement" value={this.props.data.traitement} margin="normal"
                className="multi"/>    
            </DialogContentText>  
          
          </DialogContent>
          <div className="nextAppointementt">
          
          <form  noValidate>
                    <TextField
                        label="Prochain rendez-vous"
                        type="datetime-local"
                        value={this.state.nextAppointement}
                        onChange={(oEvt)=> this.setState({nextAppointement: oEvt.target.value})}
                        // defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>  
            </div>      
          <DialogActions>
            <Button onClick={this.handleCloseDone} color="primary">
              Traitement effectué
            </Button>
            <Button onClick={this.handleCloseImpossible} color="primary">
              Traitement impossible
            </Button>
           
            
          </DialogActions>


        </Dialog>
      </div>
    );
  }
}

export default DetailDialogue;

