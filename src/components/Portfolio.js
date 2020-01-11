import React from "react";
import Section from './Section';

 class PortfolioItems extends React.Component{

  constructor(props){
    super(props);
    this.state = {hasImage:true};
  }
 onUpdateImageState(e) {
  this.setState({hasImage: false});
  setTimeout(()=> {
      this.setState({hasImage:true})
  },100)
 }
  render() {
    var path = `img/portfolio/${this.props.data.img}.png`
 
    return(

      <div className="col-md-6 col-lg-4" onClick={this.onUpdateImageState.bind(this)}>
                 
      <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        {this.state.hasImage?<img className="img-fluid" src={path} alt=""/>:null}    
      </div>
    </div>
    )
  }
}

class Portfolio extends React.Component {
    render() {
      var children =[];
      for(var item of this.props.data)
      {
        debugger
         children.push(<PortfolioItems data={item} key={children.length}/>)
      }
        return(
            <Section class="page-section portfolio" id="portfolio" title="Portfolio">
                {children  }    
          </Section>
        

        )
    }
}
export default Portfolio