import React from 'react';

export default function (ComposedComponent, sectionId) {
  return props => (
    <section id={sectionId}>
      <ComposedComponent {...props} />
    </section>
  );
}
