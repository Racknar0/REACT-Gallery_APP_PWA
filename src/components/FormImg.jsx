import React from 'react'
import PropTypes from 'prop-types'

const FormImg = ({handleSubmit}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
                <label className="w-100 text-white fw-bold">
                    {' '}
                    Buscar:{' '}
                    <input className="w-100" type="text" name="inputText" />
                </label>
                <button type="submit" className='btn btn-primary mt-3'>
                    <i class="bi bi-search me-1"></i>Buscar
                </button>
            </form>
    </>
  )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func,
}

export default FormImg