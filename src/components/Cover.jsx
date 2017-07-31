import React from 'react';

export default function (ComposedComponent, coverId, className) {
  return props => (
    <div id={`${coverId}-cover`} className={`bg-parallax ${className || ''}`}>
      <ComposedComponent {...props} />
    </div>
  );
}
