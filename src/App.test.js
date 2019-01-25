import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Test Case', function() {
    const currenciesList = [
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
    ];


    it('render TextBox, Button correct', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('#text-test')).toHaveLength(1);
        expect(wrapper.find('#input-test'))
    });

    const inputValue = '129.24'; // for test value 129.24
    const expectResult = [ '100 dollar : 1',
        '20 dollar : 1',
        '5 dollar : 1',
        '1 dollar : 4',
        '0.1 dime : 2',
        '0.01 penny : 4' ];

    it('value in Textbox result ', () => {

        let obj = [];
        let results = 0;
        let currencyCount = [];
        // check 100 dollar
        if (inputValue % 100 > 0) {
            obj.push(currenciesList[0]);
            currencyCount.push(Math.floor(inputValue / 100));
            results = (inputValue % 100).toFixed(2);
        } else if (results % 100 === 0) {
            obj.push(currenciesList[0]);
            currencyCount.push(Math.floor(inputValue / 100));
            results = (inputValue % 100).toFixed(2);
        }

        // check 50 dollar
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

        let objPresent = [];
        obj.map((data, key) => {
            if(currencyCount[key] > 0) {
                objPresent.push(`${data.value} ${data.currency} : ${currencyCount[key]}`)
            }
        });

        // console.log('objPresent:', objPresent);
        if(objPresent && objPresent.length > 0){
            // success
            expect(objPresent).toEqual(expectResult);
            console.log('objPresent:', objPresent);
        } else {
            // error
            expect(objPresent).toEqual([]);
            console.log('objPresent: NaN');
        }

    });

});
