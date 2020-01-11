import React from 'react';


export default class Header extends React.Component{
    render() {
        return(
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
        
           
              <img class="masthead-avatar mb-5" src="img/avataaars.svg" alt=""/>
        
    
              <h1 class="masthead-heading text-uppercase mb-0">Start React with Redux</h1>
                <h4>Reuseable Components</h4>

              <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="divider-custom-line"></div>
              </div>
        

              <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Rumkkhan</p>
        
            </div>
          </header>
        )
    }
}