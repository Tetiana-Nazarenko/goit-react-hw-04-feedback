//import { type } from '@testing-library/user-event/dist/type';
import PropTypes from 'prop-types';

import { StaticticsList, StaticticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StaticticsList>
      <StaticticsItem>Good: {good}</StaticticsItem>
      <StaticticsItem>Neutral: {neutral}</StaticticsItem>
      <StaticticsItem>Bad: {bad}</StaticticsItem>
      <StaticticsItem>Total: {total}</StaticticsItem>
      <StaticticsItem>
        Positive feedback: {positivePercentage} %{' '}
      </StaticticsItem>
    </StaticticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
