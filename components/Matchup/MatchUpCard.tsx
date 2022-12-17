import React from 'react';
import { Card, Line, TopRow, Location } from './styles';

type Props = {};
const MatchUpCard = ({}: Props) => {
  return (
    <Card>
      <div>
        <TopRow>
          <div>
            <span>Week 1</span>
            <span>Date</span>
          </div>
          <div>score</div>
        </TopRow>
        <Line />
      </div>
      <div>Team</div>
      <Location>
        <svg>
          <path d='M6 3.2c-1.5 0-2.7 1.2-2.7 2.6 0 1.4 1.2 2.6 2.7 2.6s2.7-1.2 2.7-2.6c0-1.4-1.2-2.6-2.7-2.6zM6 0c3.3 0 6 2.6 6 5.8 0 1.2-.8 2.9-1.3 3.9L6 18 1.3 9.6C.8 8.7 0 6.9 0 5.8 0 2.6 2.7 0 6 0z' />
        </svg>
        <span>Location</span>
      </Location>
    </Card>
  );
};

export default MatchUpCard;
