import React, { Fragment } from 'react';

const BudgetControl = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className="alert">
                Remaining: ${remaining}
            </div>
        </Fragment>
    );
};

export default BudgetControl;