import React from 'react';

import React from 'react';

const Vehicle: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Vehicle Details</h2>
      <ul className="space-y-1 text-sm text-light-800 dark:text-dark-300">
        <li><span className="font-medium">Make / Model:</span> Honda Civic 2023</li>
        <li><span className="font-medium">Odometer:</span> 12 345 km</li>
        <li><span className="font-medium">Last Service:</span> 15 Jun 2026</li>
      </ul>
    </div>
  );
};

export default Vehicle;


export default VehicleProfile;
