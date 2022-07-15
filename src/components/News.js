import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  
  static propTypes = {
    category:PropTypes.string
  }

  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
        articles:[],
        loading: false
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - News Pie`;
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=912b3d27accf4613a83eef1bd6d38ee2&page=1`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles})
  }

  handlePreviousClick=async()=>{
    console.log("previous");
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=912b3d27accf4613a83eef1bd6d38ee2&page=${this.state.page - 1}`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata);
    this.setState({
      page:this.state.page - 1,
      articles:parseddata.articles
    })

  }

  handleNextClick=async()=>{
    console.log("next");
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=912b3d27accf4613a83eef1bd6d38ee2&page=${this.state.page + 1}`;
    let data=await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page + 1,
      articles:parseddata.articles
    })

  }
  render() {
    return (
      <div className='container' my="3">
        <h2 style={{margin :'35px 0px'}}>NewsPie : Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h2>
        <div className="row" > 
        {this.state.articles.map((mytop)=>{
             return <div className="col-md-3" key={mytop.url}>
              <Newsitem newsurl={mytop.url} title={mytop.title} description={mytop.description} imageUrl={mytop.urlToImage} author={mytop.author} Date={mytop.publishedAt} source={mytop.source.name} />
              </div>
        }
        )} 
        </div>
        <div class="container d-flex justify-content-between">
         <button type="button" class="btn btn-primary" onClick={this.handlePreviousClick}>Previous</button>
         <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next</button>
         </div>
      </div>
    )
  }
}

export default News