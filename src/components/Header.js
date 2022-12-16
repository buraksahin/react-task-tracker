import PropTypes from "prop-types"
import AddTaskButton from './TaskButton'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <AddTaskButton 
        color = {showAdd ? '#ff7fa5' : '#7fffd4'}
        text = {showAdd ? 'Close' : 'Add'}
        onClick = {onAdd}
        className = {'btn'}  
      />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header