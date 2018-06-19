import React from 'react';
import DetailDialogue from './DetailDialogue';

class MappingDialogue extends React.Component{

    render(){
        return (
            <div>
                    {         
                        this.props.patientFolder.map(medicalfolder =><DetailDialogue _TraitementDone={this.props._TraitementDone} _TraitementImpossible={this.props._TraitementImpossible}  data={medicalfolder} patient={this.props.patient}/>) 
                    }
            </div>
        );
    }
    
}

export default MappingDialogue;