import React from 'react';

interface HistoryCardProps {
  sessionDate: string;
  duration: string;
  rounds: number;
  intervalTimes: string[];
}

const HistoryCard: React.FC<HistoryCardProps> = ({ sessionDate, duration, rounds, intervalTimes }) => {
  return (
    <div className="history-card">
      <h3>Session Date: {sessionDate}</h3>
      <p>Duration: {duration}</p>
      <p>Rounds: {rounds}</p>
      <p>Interval Times: {intervalTimes.join(', ')}</p>
    </div>
  );
};

export default HistoryCard;