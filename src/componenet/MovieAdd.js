import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const MovieAdd = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handelChange = (e) => setModal({ ...modal, [e.target.name]: e.target.value });

  return (
    <div>
    
      <Button color="success" onClick={toggle}> + Add Movies {buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Movie</ModalHeader>
        <ModalBody>
          <div>
            <label className="inp">Title:</label>  
            <input type="text" name="name" class="form-control"
            onChange={handelChange}
            value={modal.name}/>
            </div> 
            <div>
            <label className="inp">Image:</label>  
            <input type="text" name="image" class="form-control"
            onChange={handelChange}
            value={modal.image}/>
            </div> 
            <div>
            <label className="inp">Rating:</label>  
            <input type="text" name="rating" class="form-control"
            onChange={handelChange}
            value={modal.rating}/>
            </div> 
            <div>
            <label className="inp">Year:</label>  
            <input type="text" name="year" class="form-control"
             onChange={handelChange}
             value={modal.year}/>
            </div>  
            <div>
            <label className="inp">Text:</label>  
            <input type="text" name="text" class="form-control"
             onChange={handelChange}
             value={modal.text}/>
            </div>  
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => {
              props.add(modal);
              toggle();
            }}>Add + </Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MovieAdd;