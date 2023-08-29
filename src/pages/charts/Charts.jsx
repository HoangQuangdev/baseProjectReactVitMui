import { Box } from '@mui/material';
import BarChart from '../../components/charts/BarChart';
import LineChar from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import Scatter from '../../components/charts/Scatter';

function Charts(props) {
  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Box >
        <BarChart/>
        <LineChar />
      </Box>
      <Box>
        <PieChart/>
        <Scatter />
      </Box>
    </Box>
  );
}

export default Charts;