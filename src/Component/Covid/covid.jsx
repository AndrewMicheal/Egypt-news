import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCovid } from '../actionReducer/covid';
import {Doughnut , HorizontalBar} from "react-chartjs-2";
let date = new Date();

class Covid extends Component {
    componentDidMount(){
        this.props.getCovid();
    }
    render() {
        let death = this.props.covid.deaths;
        let recovered = this.props.covid.recovered;
        let confirmed = this.props.covid.confirmed;
        console.log(this.props)
        return (
           <React.Fragment>
               <section className="my-5 py-3">
                <h2 className="bg-danger text-white text-center py-3 my-4">احصائيات كورونا في مصر بتاريخ : {date.getDate()-1 + "-" + date.getMonth()+1 + "-"+date.getFullYear()}</h2>
                <div className="container">
                    <div className="row mt-4 pt-5">
                        <div className="col-md-6">
                            <Doughnut data={{
                                    labels: ['اجمالى الوفيات','اجمالى الاصابات','اجمالى المتعافين'],
                                    datasets: [{
                                        label : 'Covid 19',
                                        data: [death, confirmed, recovered],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                }}/>
                        </div>
                        <div className="col-md-6">
                            <HorizontalBar data={{
                                    labels: ['اجمالى الوفيات','اجمالى الاصابات','اجمالى المتعافين'],
                                    datasets: [{
                                        label : 'Covid 19',
                                        data: [death, confirmed, recovered],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                }}/>
                        </div>
                    </div>
                </div>
            </section>
           </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        covid : state.covid
    }
}
export default connect(mapStateToProps, {getCovid})(Covid);