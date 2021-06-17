import styles from './FormInput.module.css'
import PropTypes from 'prop-types'

const FormInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="text" name="todo" className={styles.input} value={value} onChange={onChange} />
      <button type="submit" className={styles.addButton}>Save</button>
    </form>
  )
}

FormInput.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default FormInput
