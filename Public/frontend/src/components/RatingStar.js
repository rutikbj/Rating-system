import React from 'react';

const RatingStar = ({ rating }) => (
  <div>
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
  </div>
);

export default RatingStar;