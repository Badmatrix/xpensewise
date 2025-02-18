import React from "react";

function EmptyBudget() {
  return (
    <div className="mx-auto flex items-center justify-center py-20">
      <p className="text-lg font-semibold capitalize text-grey-500">
        No budget available click the add new budget button at the top to start
        adding to budget.
      </p>
    </div>
  );
}

export default EmptyBudget;
