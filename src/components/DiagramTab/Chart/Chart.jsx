import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './Chart.css';

const options = {
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Chart = ({ data, totalBalance }) => {
  return (
    <div className="statistic__douhnut">
      <Doughnut
        options={options}
        data={data}
        style={{ width: 'auto', height: 'auto' }}
      />
      {totalBalance !== 0 && <span className="balance">₴ {totalBalance}</span>}
      {/* <span className="balance">₴ {totalBalance}</span> */}
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
  totalBalance: PropTypes.number,
};

export default Chart;
