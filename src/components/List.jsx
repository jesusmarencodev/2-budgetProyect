import React from 'react';
import Expenditure from './Expenditure';
import PropTypes from 'prop-types'


const List = ({expenditures}) => {
    console.log(expenditures)
    return (
        <div className="gastos-realizados">
            <h2>List</h2>
            {
                expenditures.map(expenditure => (
                    <Expenditure
                        key = {expenditure.id}
                        expenditure = {expenditure}/>
                ))
            }
        </div>
    );
};
List.propTypes = {
    expenditures : PropTypes.array.isRequired,
}

export default List;