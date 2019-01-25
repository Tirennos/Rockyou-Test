import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currenciesList: [
                {
                    "id": 1,
                    "value": 100,
                    "currency": "dollar"
                },
                {
                    "id": 2,
                    "value": 50,
                    "currency": "dollar"
                },
                {
                    "id": 3,
                    "value": 20,
                    "currency": "dollar"
                },
                {
                    "id": 4,
                    "value": 10,
                    "currency": "dollar"
                },
                {
                    "id": 5,
                    "value": 5,
                    "currency": "dollar"
                },
                {
                    "id": 6,
                    "value": 1,
                    "currency": "dollar"
                },
                {
                    "id": 7,
                    "value": 0.25,
                    "currency": "quarter"
                },
                {
                    "id": 8,
                    "value": 0.10,
                    "currency": "dime"
                },
                {
                    "id": 9,
                    "value": 0.05,
                    "currency": "nickel"
                },
                {
                    "id": 10,
                    "value": 0.01,
                    "currency": "penny"
                }
            ],
            inputValue: 0,
            currencyResult: [],
            objNameList: []
        }
    }

    onSubmit = () => {
        const { inputValue, currenciesList } = this.state;
        const num = Number(inputValue);
        console.log('inputValue:', num.toFixed(2));
        let obj = [];
        let results = 0;
        let currencyCount = [];
        // check 100 dollar
        if (inputValue % 100 > 0) {
            obj.push(currenciesList[0]);
            currencyCount.push(Math.floor(inputValue / 100));
            results = (inputValue % 100).toFixed(2);
            console.log('results2:', results);
        } else if (results % 100 === 0) {
            obj.push(currenciesList[0]);
            currencyCount.push(Math.floor(inputValue / 100));
            results = (inputValue % 100).toFixed(2);
        }

        // check 50 dollar
        console.log('50 dol')
        if (results % 50 > 0) {
            obj.push(currenciesList[1]);
            currencyCount.push(Math.floor(results / 50));
            results = (results % 50).toFixed(2);
        } else if (results % 50  === 0){
            obj.push(currenciesList[1]);
            currencyCount.push(Math.floor(results / 50));
            results = (results % 50).toFixed(2);
        }

        // check 20 dollar
        console.log('20 dol')
        if (results % 20 > 0) {
            obj.push(currenciesList[2]);
            currencyCount.push(Math.floor(results / 20));
            results = (results % 20).toFixed(2);
        } else if (results % 20  === 0){
            obj.push(currenciesList[2]);
            currencyCount.push(Math.floor(results / 20));
            results = (results % 20).toFixed(2);
        }

        // check 10 dollar
        console.log('10 dol')
        if (results % 10 > 0) {
            obj.push(currenciesList[3]);
            currencyCount.push(Math.floor(results / 10));
            results = (results % 10).toFixed(2);
        } else if (results % 10  === 0){
            obj.push(currenciesList[3]);
            currencyCount.push(Math.floor(results / 10));
            results = (results % 10).toFixed(2);
        }

        // check 5 dollar
        console.log('5 dol')
        if (results % 5 > 0) {
            obj.push(currenciesList[4]);
            currencyCount.push(Math.floor(results / 5));
            results = (results % 5).toFixed(2);
        } else if (results % 5  === 0){
            obj.push(currenciesList[4]);
            currencyCount.push(Math.floor(results / 5));
            results = (results % 5).toFixed(2);
        }

        // check 1 dollar
        console.log('1 dol')
        if (results % 1 > 0) {
            obj.push(currenciesList[5]);
            currencyCount.push(Math.floor(results));
            results = (results % 1).toFixed(2);
        } else if (results % 1  === 0){
            obj.push(currenciesList[5]);
            currencyCount.push(Math.floor(results));
            results = (results % 1).toFixed(2);
        }

        // $.25 cents (quarter)
        console.log('1 dol')
        if (results % 0.25 > 0) {
            obj.push(currenciesList[6]);
            currencyCount.push(Math.floor(results / 0.25));
            results = (results % 0.25).toFixed(2);
        } else if (results % 0.25  === 0){
            obj.push(currenciesList[6]);
            currencyCount.push(Math.floor(results / 0.25));
            results = (results % 0.25).toFixed(2);
        }

        // $.10 cents (dime)
        if (results % 0.10 > 0) {
            obj.push(currenciesList[7]);
            currencyCount.push(Math.floor(results / 0.10));
            results = (results % 0.10).toFixed(2);
        } else if (results % 0.10  === 0){
            obj.push(currenciesList[7]);
            currencyCount.push(Math.floor(results / 0.10));
            results = (results % 0.10).toFixed(2);
        }

        // $.05 cents (nickel)
        if (results % 0.05 > 0) {
            obj.push(currenciesList[8]);
            currencyCount.push(Math.floor(results / 0.05));
            results = (results % 0.05).toFixed(2);
        } else if (results % 0.05  === 0){
            obj.push(currenciesList[8]);
            currencyCount.push(Math.floor(results / 0.05));
            results = (results % 0.05).toFixed(2);
        }

        // $.01 cents (penny)
        if (results % 0.01 > 0) {
            obj.push(currenciesList[9]);
            currencyCount.push(Math.floor(results / 0.01));
            results = (results % 0.01).toFixed(2);
        } else if (results % 0.01  === 0){
            obj.push(currenciesList[9]);
            currencyCount.push(Math.floor(results / 0.01));
            results = (results % 0.01).toFixed(2);
        }

        this.setState({
            inputValue: num.toFixed(2),
            objNameList: obj,
            currencyResult: currencyCount
        })

    }

    render() {
        const { objNameList,  currencyResult } = this.state;
        console.log('objNameList:', objNameList);
        console.log('currencyResult:', currencyResult);
        let objPresent = [];
        objNameList.map((data, key) => {
            if(currencyResult[key] > 0) {
                objPresent.push(<li><i className="fas fa-circle"></i>{`${data.value} ${data.currency} : ${currencyResult[key]}`}</li>)
            }
        });
        return (
            <div className="App-header">
                <div className="input-group col-md-4">
                    <input
                        id='input-test'
                        type="text"
                        className="form-control"
                        placeholder="input your money Ex. 129.24"
                        onChange={(e) => this.setState({inputValue: e.target.value})}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            style={{color: 'wheat'}}
                            type="button"
                            onClick={() => this.onSubmit()} >
                            Submit
                        </button>
                    </div>
                </div>
                <br />
                <text id='text-test'> = {this.state.inputValue}</text>
                <br />
                <ul value={objPresent} id="output" className="fa-ul">
                    {objPresent}
                </ul>
            </div>
        );
    }
}

export default App;
