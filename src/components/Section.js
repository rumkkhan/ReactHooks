import React from 'react';
export default class Section extends React.Component {
    render() {
        console.log(this.props.title)
        return (
            <section className={this.props.class} id={this.props.id}>
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-black">{this.props.title}</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                            <i className="fas fa-download mr-2"></i>
                            Free Download!
                </a>
                    </div>

                </div>
            </section>
        )

    }
}

