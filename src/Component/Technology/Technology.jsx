import React, { Component } from 'react';
import { connect } from 'react-redux';
import getNews from '../actionReducer/news';

class Technology extends Component {
    componentDidMount(){
        this.props.getNews("technology")
    }
    goToNew(index){
        window.open(this.props.technology[index].url,"_blank")
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <section className = "my-5 py-5">
                    <div className="container">
                        <div className="row">
                            {this.props.technology.map((item , index)=>{
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
        technology : state.news
    }
}
export default connect(mapStateToProps , {getNews})(Technology);