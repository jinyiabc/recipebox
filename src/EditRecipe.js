import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Modal, Button, ButtonToolbar} from 'react-bootstrap';



class EditRecipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
              smShow: false,
              show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handelSubmit1 = this.handelSubmit1.bind(this);

  }

  showModal() {
  this.setState({ show: true });
}

hideModal() {
  this.setState({ show: false });
}
handelSubmit1(e) {
  e.preventDefault();
  if (this.input1.value == '' && this.input2.value ==''){
    return ;
  }
  const recipe = this.input1.value;
  const ingredients = (this.input2.value).split(',');
  const indexOf = this.props.indexOf;
  this.props.currentRecipe({name:recipe,ingredients:ingredients},indexOf);

}


  render() {
    return (
      <ButtonToolbar>
          <Button bsStyle="info" onClick={this.showModal}>
         Edit
       </Button>
      <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
           bsSize="large" aria-labelledby="contained-modal-title-lg">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Edit current Recipe </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form horizontal onSubmit={this.handelSubmit1}>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Recipe
                    </Col>
                    <Col sm={10}>
                      <FormControl inputRef={ref => { this.input1 = ref; }} type="text" defaultValue={this.props.recipe} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      Ingredients
                    </Col>
                    <Col sm={10}>
                      <FormControl inputRef={ref => { this.input2 = ref; }}  type="text" defaultValue={this.props.ingredients} />
                    </Col>
                  </FormGroup>

                  <FormGroup >
                    <Col smOffset={2} sm={10}>
                      <Button type="submit" onClick={this.hideModal}>
                       Edit Recipe
                      </Button>
                      <Button onClick={this.hideModal}>Close</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </Modal>
          </ButtonToolbar>

    );
  }
};

export default EditRecipe;
