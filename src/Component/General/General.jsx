import React, { Component } from 'react';
import { connect } from 'react-redux';
import getNews from '../actionReducer/news';

class General extends Component {
    componentDidMount(){
        this.props.getNews("general");
    }
    goToNew(id){
        window.open(this.props.general[id].url)
    }
    render() {
        return (
            <React.Fragment>
               <section className = "my-5 py-5">
                <div className="container">
                    <div className="row">
                        {this.props.general.map((item , index)=>{
                            return(
                                <div key = {index} className = "col-lg-4" onClick = {()=>{this.goToNew(index)}}>
                                    <div className = "news-item card text-center pb-3 my-3">
                                        <div className="image">
                                            <img src = {item.urlToImage} className = "w-100" alt = ""/>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
               </section>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        general : state.news
    }
}
export default connect(mapStateToProps , {getNews})(General);