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
