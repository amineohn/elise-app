import React from 'react'
export default Modal = props => {
    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='model-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <div className='modal-title'>
                        test
                    </div>
                </div>
            </div>
        </div>
    )
}