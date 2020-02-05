import React from 'react';

const Expenditure = ({expenditure}) => {
    return (
        <li className="gastos">
            <p>
                {expenditure.expensivename}
                <span className="gasto">${expenditure.quantity}</span>
            </p>
        </li>
    );
};

export default Expenditure;