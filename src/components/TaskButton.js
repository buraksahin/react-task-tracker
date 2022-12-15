import PropTypes from 'prop-types'

const AddTaskButton = ({ color, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={className}
    >
      {text}
    </button>
  )
}

AddTaskButton.defaultProps = {
  color: 'steelblue',
}

AddTaskButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default AddTaskButton