import { StatisticList , StatisticItem , Stat} from "./Statistics.styled"


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