import style from './Button.module.css'
import propTypes from 'prop-types'

const Button = ({children, href}) => {
  return <div>
    {/* <button className={style.Button}><a href="https://github.com/">{children}</a></button> */}
    <a href={href} ><button className={style.Button}>{children}</button></a>
    
  </div>;
};
Button.propTypes ={
    children:propTypes.node.isRequired,
    href:propTypes.node.isRequired,
}

export default Button;