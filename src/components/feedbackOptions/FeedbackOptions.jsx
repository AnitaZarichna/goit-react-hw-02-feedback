import PropTypes from 'prop-types';

export function FeedbackOptions ({ options , onLeaveFeedback}){
    const keys = Object.keys(options);
    return(
        <ul>
        {keys.map(key => (
            <li key={key}>
                <button
                    key={key}
                    type="button"
                    name={key}
                    onClick={onLeaveFeedback}
                >
                    {key}
                </button>
            </li>
        ))}
    </ul>
    )

}
FeedbackOptions.propTypes = {
    option: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
};