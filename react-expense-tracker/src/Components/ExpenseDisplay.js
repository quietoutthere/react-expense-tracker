import React from 'react';
import { Table } from 'react-bootstrap';

function Display ({ expenseArray }) {
    
    const deleteRow = (e) => {
        const target = e.target.parentElement;
        target.remove();
    }
    const expenseTable = expenseArray.map((expense) => {
        return (
            <tr id={Math.random()} key="id">
                <td>{expense.type}</td>
                <td>{expense.vendor}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <button id="button" onClick={deleteRow}>X</button>
            </tr>
        )
    })

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
                { expenseTable }
            </tbody>
        </table>
    )
}

export default Display;
