
import PropTypes from 'prop-types';

export default function Error({title, message}){
    return(
        <>
        <h4>{title}</h4>
        <p>{message}</p>
        </>
    )
}

Error.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}