import React, { useState, memo } from 'react';
import './Nesteddata.css';

const NestedData = memo(({ data }) => {
  const [showChildren, setShowChildren] = useState({});

  const toggleChildren = (name) => {
    setShowChildren({ ...showChildren, [name]: !showChildren[name] });
  };

  const renderNestedData = (items) => {
    return (
      <ul className="tree-view">
        {items.map((item) => {
          const children =
            item.children && showChildren[item.name]
              ? renderNestedData(item.children)
              : null;
          return (
            <li key={item.name}>
              <div className="parent" onClick={() => toggleChildren(item.name)}>
                {item.name}
              </div>
              {children && <ul className="tree-view">{children}</ul>}
            </li>
          );
        })}
      </ul>
    );
  };

  const infiniteNestedData = renderNestedData(data);

  return <>{infiniteNestedData}</>;
});

export default NestedData;