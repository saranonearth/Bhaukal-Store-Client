import React from 'react';
import useCollapse from 'react-collapsed';
const Faq = () => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();
  return (
    <>
      <button className='collapsible' {...getToggleProps()}>
        {isOpen ? 'Question 1' : 'Question 1'}
      </button>
      <section className='content' {...getCollapseProps()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        debitis mollitia eligendi facilis? Harum, eligendi, quis quaerat
        praesentium animi cupiditate inventore iusto obcaecati distinctio
        voluptatum, non eveniet. Voluptatum, doloremque voluptate!
      </section>
    </>
  );
};

export default Faq;
