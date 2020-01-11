import React from 'react';
import Section from './Section'
export default class About extends React.Component{
    render(){
        return(
            <Section class="page-section bg-primary text-white mb-0" id="about" title="About">
                 <div className="row">
                <div className="col-lg-4 ml-auto">
                  <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-4 mr-auto">
                  <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
              </div>
            </Section>        
       )

    }
}

