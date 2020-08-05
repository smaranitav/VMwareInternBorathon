import React, { Component } from 'react'
import './HwHelpPage.css'
import Upload from './upload/Upload'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import { Multiselect } from 'multiselect-react-dropdown';

class HwHelpPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showPopup: false,
        subjectOptions: [{name: 'Mathematics', id: 1},{name: 'Science', id: 2},
        {name: 'History', id: 3}, {name: 'Geography', id: 4}]
      };
      this.callbackFunction = this.callbackFunction.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
  }
  onSelect(selectedList, selectedItem){

  }
  onRemove(selectedList, removedItem){

  }
  callbackFunction = (childData) => {
        this.setState({showPopup: childData});
  }
  uploadFile(){
    this.setState({showPopup: true});
  }

  render() {
    return (
      <div className="HwHelpPage">
        { !this.state.showPopup &&
        <div className="FormLayout">
          <div>
            <h4>Submit your question</h4>
          </div>
          <div>
          <Container>
          <Form className>
            <Col className = "FormData">
              <FormGroup>
                <div>
                  <Label>Question:</Label>
                </div>
                <textarea className = "FormInput">

                </textarea>
              </FormGroup>
            </Col>
            <Col className = "FormData">
              <FormGroup>
                <Label>Subject Tags:</Label>
                <Multiselect
                  style={{chips: { background: "#354e56" }, searchBox: { border: "none", "border-bottom": "1px solid blue", "border-radius": "0px" }}}
                  options={this.state.subjectOptions} // Options to display in the dropdown
                  selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  className ="MultiSelect"
                  placeholder = "Choose subject tags"
                />
              </FormGroup>
            </Col>
            <Col className = "FormData">
              <FormGroup>
                <div>
                  <Label>Upload Image/File:</Label>
                </div>
                <Button className = "FormData" onClick ={this.uploadFile}>Upload attachments</Button>
              </FormGroup>
            </Col>
            <Button className = "FormData">Post</Button>
          </Form>
        </Container>
        </div>
      </div>
      }
      { this.state.showPopup &&
        <div className="Card">
          <Upload parentCallback = {this.callbackFunction} />
        </div>
      }
      </div>
    )
  }
}

export default HwHelpPage
