import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = ({ children }) =>
  <code>{children}</code>;

CodeBlock.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CodeBlock;
