import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div>
      <CircularProgressbar
        background
        backgroundPadding={6}
        styles={{
          // Customize the root svg element
          root: {},
          path: {
            // Path color
            stroke: percentage <= 20 ? '#2e303bf0' : 'red',
            strokeWidth: '10px',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#2e303b81',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
            width: '12px',
          },
          // Customize the text
          text: {
            // Text color
            fill: 'black',
            // Text size
            fontSize: '25px',
            font: 'Comfortaa',
            fontWeight: 'bold',
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#fff',
          },
        }}
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
};

export default ProgressBar;
