import React, { Component } from 'react'

export class NewsItem extends Component {
  static propTypes = {}

  render() {
    let {title,description,imageUrl,newsurl,author,Date,source}=this.props;
    return (
      <div className="my-3">
            <div className="card" >
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%' , zIndex:'1'}}>
                 {source}
                 </span>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p class="card-text"><small className="text-muted">By {!author?"unknown":author} on {Date}</small></p>
                <a href={newsurl} target="blank" className="btn btn-primary">Read More</a>
                
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem