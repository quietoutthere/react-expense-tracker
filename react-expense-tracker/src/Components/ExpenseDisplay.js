import React from 'react';
import InputFields from './InputFields';

function Display (props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Vendor</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.type}</td>
                    <td>{props.vendor}</td>
                    <td>{props.date}</td>
                    <td>{props.amount}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Display;

//test case

//pull state of InputFields and place them in the table

//