import React, { Component } from 'react'
import './HwDetailed.css'
import commentBox from 'commentbox.io'

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Row from 'react-bootstrap/Row'

class CommentBox extends Component {
    constructor(props) {
        super(props);
        console.log("here",this.props.articleNumber)
        this.articleId = this.props.articleNumber
        this.commentId = "http://localhost:3000/" + decodeURIComponent(this.articleId) ;
        console.log(this.commentId)

    }
    componentDidMount() {
        let id = this.articleId;
        this.removeCommentBox = commentBox('5635443081084928-proj', {
            className: 'commentbox', // the class of divs to look for
            defaultBoxId: 'commentbox', // the default ID to associate to the div
            tlcParam: 'tlc', // used for identifying links to comments on your page
            backgroundColor: null, // default transparent
            textColor: null, // default black
            subtextColor: null, // default grey
            singleSignOn: null, // enables Single Sign-On (for Professional plans only)
            createBoxUrl(boxId, pageLocation) {

                let cur_url = "http://localhost:3000/" + decodeURIComponent(id);
                console.log(cur_url)

                pageLocation.search = ''; // removes query string!
                //let id=this.props.articleNumber;
                pageLocation.hash = boxId;
                return cur_url;
            },
        });
    }
    componentWillUnmount() {
        this.removeCommentBox();
    }

    render() {
        // console.log("article ID inside render!")
        // console.log(decodeURI(this.articleId))

        return (
            <>
                <div className="commentbox" id={this.commentId} />
                {
                    //the reason for giving a unique id is so that comments are particular for each article id
                }

            </>
        )
    }
}

class HwDetailed extends Component {
  constructor(props) {
      super(props);
      this.state = {
        articleId: 1
      };

  }
  componentDidMount(){
        // const { articleId } = this.props.match.params
        // console.log(this.state.articleId)
        // console.log(this.props.articleId)
        // var article_data = decodeURIComponent(articleId)
        // this.setState({articleId:article_data})
        // console.log(this.state.articleId)

  }

  render() {

    return (
      <>
        <Row className="cardRow">
          <Col xs={12} sm= {12} md={12} lg={12} xl={12} className="cardTitle">
              What is x*x?
          </Col>
          <Col xs={12} sm= {12} md={12} lg={12} xl={12}>
              <img src = "https://lh3.googleusercontent.com/proxy/Qx-T_RalEqPN_bSA9oQI4rIZnJ7ex9VxSgkbmZRK6onw6nUIB5LpmXe973oOBgU2ZnteHo4tWSPB7eCheDI-SPEmAN_PPukVw_j_EGTK3aWHfA"/>
          </Col>
        </Row>
        <CommentBox articleNumber={this.state.articleId} />

      </>
    )
  }
}

export default HwDetailed
