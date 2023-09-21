import PropTypes from 'prop-types';
import { ButtonList, ButtonItem , Button } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({ options , onClickBtn}) => {
return (
    <ButtonList>
    {options.map(option => (
      <ButtonItem key={option}>
        <Button type="button" name={option} onClick={onClickBtn}>
          {option}
        </Button>
      </ButtonItem>
    ))}
  </ButtonList>
)}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickBtn: PropTypes.func.isRequired
}