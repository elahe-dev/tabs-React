/* eslint-disable react/prop-types */
 const TabButton = ({children, onSelect, isSelected}) => {
  return (
    <li className="nav-item">
        <button className={isSelected ? 'active' : null} onClick={onSelect}>
            <span>{children}</span>
        </button>
    </li>
  )
}
export default TabButton