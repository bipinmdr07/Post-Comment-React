import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {

  onChangeHandler = (e) => {
    e.preventDefault();
    this.props.inputFieldChangeHandler(e.target.name, e.target.value);
  }
  
  render () {
    const {
      type,
      name,
      placeholder,
      value,
      iconType
    } = this.props;

    return (
      <div className="field">
        <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
        <div className="ui left icon input">
          <i className={ iconType + " icon"}></i>
          <input
          type={ type }
          name={ name }
          placeholder={ placeholder }
          value={ value }
          onChange={this.onChangeHandler}
          />
        </div>
      </div>
    );
  } 
}

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  inputFieldChangeHandler: PropTypes.func
}

export default InputField;