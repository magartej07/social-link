import propType from 'prop-types'
import style from './Container.module.css'

const Container = ({children}) => {
  return <div className={style.Container}>
    {children}
  </div>
};

Container.propTypes = {
    children : propType.node.isRequired,
}
export default Container;