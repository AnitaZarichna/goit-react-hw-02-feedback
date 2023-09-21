import { StatisticList , StatisticItem , Stat} from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = props => {
    const { positivePercentage } = props;
    return (
      <StatisticList>
        {['good', 'neutral', 'bad', 'total'].map(option => (
          <StatisticItem key={option}>
            <Stat>
              {option}: {props[option]}
            </Stat>
          </StatisticItem>
        ))}
        <Stat>
          Positive feedback: {positivePercentage}%
        </Stat>
      </StatisticList>
    );
  };

  Statistics.propTypes = {
    props: PropTypes.exact ({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
  })

  }