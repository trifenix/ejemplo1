import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';

export interface IMyModalProps {
    open:boolean;
    closeModal? : ()=>void | undefined;
    presionoSi? : ()=>void;
    presionoNo? : ()=>void;
}

export function MyModal (props: IMyModalProps) {

  let localClose = ()=>{
      props.closeModal && props.closeModal();
      console.log("ojala funcione")

  }

  return (
    <Modal  open={props.open} onClose={localClose} >
          <Modal.Header>Desarrollo Web Universidad de valpor</Modal.Header>
          <Modal.Content>
            <p>Le gusta la universidad</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={props.presionoNo}>
                      No</Button>
                      <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content='Sí'
                        onClick={props.presionoSi}
                      />
          </Modal.Actions>
        </Modal>
  );
}
