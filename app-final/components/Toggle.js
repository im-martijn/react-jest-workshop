import React, {PropTypes, Component} from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    if (props.initialToggledOn) {

      throw new Error('This error is on line 8 of Toggle.js source, which is transpiled for tests!')
    }
    this.state = {
      toggledOn: props.initialToggledOn || false,
    }
  }

  handleToggleClick = () => {
    const toggledOn = !this.state.toggledOn
    this.props.onToggle(toggledOn)
    this.setState({toggledOn})
  };

  render() {
    const {children} = this.props
    const {toggledOn} = this.state

    const onOff = toggledOn ? 'on' : 'off'
    const toggledClassName = `toggle--${onOff}`
    return (
      <div className={`toggle ${toggledClassName}`}>
        <button onClick={this.handleToggleClick}>
          {children}
        </button>
      </div>
    )
  }
}

Toggle.propTypes = {
  initialToggledOn: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default Toggle
