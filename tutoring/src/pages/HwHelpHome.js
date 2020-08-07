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

function setSectionBg(index){
    if (index < 1)
      {
        return (<span className="maths">Mathematics</span>)
      }
    else if (index == 2)
      {
        return (<span className="science">Science</span>)
      }
    else
      {
        return (<span className="history">History</span>)
      }
}

function setDate(index){
  if (index<1){
    return <span className="date">Posted by Jess on 08-05-2020</span>
  }
  else{
    return <span className="date">Posted by Diego on 08-04-2020</span>
  }
}


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
      <div className = "bg">
      <RouteSwitch>
        <Route path="/expanded/:articleId"
                            component={HwDetailed} />
      </RouteSwitch>

      <div className = "backgroundDiv">
        <span className = "pagetitle"> My Questions </span>
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
                  <Col xs={12} sm= {12} md={12} lg={12} xl={12} className="cardTitle">
                      {article.question}
                  </Col>

                  <Col xs={8} sm= {8} md={8} lg={8} xl={8} className="cardOther">
                      <div className="cardDate">
                      {setDate(index)}
                      </div>

                      <div className="cardSection" align="right">
                                    {setSectionBg(index)}
                      </div>

                  </Col>
                </Row>
                </Link>
              </div>

            ))}
          </div>
        }
      </div>
      </div>
    )
  }
}

export default HwHelpHome
