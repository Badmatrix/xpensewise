import React from "react";

function EmptyPots() {
  return (
    <div className="mx-auto flex items-center justify-center py-20">
      <p className="text-lg font-semibold capitalize text-grey-500">
        No savings available in your pot click the add new button at the top to
        start adding to your pot.
      </p>
    </div>
  );
}

export default EmptyPots;
