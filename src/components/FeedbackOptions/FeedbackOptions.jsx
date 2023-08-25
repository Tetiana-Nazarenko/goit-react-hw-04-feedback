import PropTypes from 'prop-types';
import { ButtonBlock, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonBlock>
    {Object.keys(options).map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ButtonBlock>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
