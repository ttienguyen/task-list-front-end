import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onClick, onRemove }) => {
  const onRemoveFunc = () => {
    onRemove(id);
  };

  const onClickFunc = () => {
    onClick(id);
  };
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onClickFunc}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={onRemoveFunc}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Task;
