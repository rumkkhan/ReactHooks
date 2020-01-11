import React from 'react';

class TextFooter  extends React.Component{
  render(){
    return(
          <div className="col-lg-4 mb-5 mb-lg-0">
  <h4 className="text-uppercase mb-4">{this.props.title}</h4>
    <p className="lead mb-0">{this.props.content}</p>
        </div>
    )
  }
}
class ConmplexFooter extends React.Component{
  render(){
    return(
      <div className="col-lg-4 mb-5 mb-lg-0">
  <h4 className="text-uppercase mb-4">{this.props.title}</h4>
      <a className="btn btn-outline-light btn-social mx-1" href="#">
        <i className="fab fa-fw fa-facebook-f"></i>
      </a>
      
    </div>
    )
  }
}
export default class Footer extends React.Component{


    render() {
        return(
            <footer className="footer text-center">
            <div className="container">
              <div className="row">
              <TextFooter {...this.props.data[0]}/>  
              <ConmplexFooter  />
              <TextFooter {...this.props.data[2]}/>  
              </div>
            </div>
          </footer>
        
        )
    }
}