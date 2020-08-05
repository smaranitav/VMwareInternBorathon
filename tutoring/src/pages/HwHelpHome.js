import React, { Component } from 'react'
import './HwHelpHome.css'
import {
    BrowserRouter as Router,
    Switch as RouteSwitch,
    Route,
    NavLink,
    Link

} from "react-router-dom";
import HwDetailed from './HwDetailed'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HwHelpHome extends Component {
  constructor(props) {
      super(props);
      this.state = {
        articlesPresent : false,
        all_articles :[],
        detailed: false,
        all : true
      };
      this.displayDetailed = this.displayDetailed.bind(this);

  }

  componentDidMount() {
    var obj = { "articles": [] }
    if (localStorage.getItem('articles') != null) {
            this.setState({articlesPresent : true})
            var retrievedObject = localStorage.getItem('articles');//its a JSONstr
            console.log('retrieved articles: ', JSON.parse(retrievedObject));
            obj = JSON.parse(retrievedObject)
            this.setState({all_articles:obj["articles"]})
      }
  }

  displayDetailed(){
    this.setState({detailed:true})
  }

  render() {

    return (
      <>
      <RouteSwitch>
        <Route path="/expanded/:articleId"
                            component={HwDetailed} />
      </RouteSwitch>

      <div> My Questions
        {
          !this.state.articlesPresent && this.state.all &&
          <div> No questions posted by you yet! </div>
        }
        {
          this.state.articlesPresent && this.state.all &&
          <div className="articleSample"> {this.state.all_articles.map((article, index) => (
              <div key={index}>
              <Link to={{
                pathname: "/expanded/" + encodeURIComponent(article.articleId)
                }}
                className="cardLink">

                <Row className="cardRow">
                  <Col xs={12} sm= {12} md={12} lg={12} xl={12}>
                      {article.question}
                  </Col>
                  <Col xs={12} sm= {12} md={12} lg={12} xl={12}>
                    Posted by Smaranita Vasudev
                  </Col>
                </Row>
                </Link>
              </div>

            ))}
          </div>
        }
      </div>
      </>
    )
  }
}

export default HwHelpHome
