import { styled } from '@mui/material/styles';
import { Button }  from '@mui/material';

export const ProgressButton = styled(Button)({
  backgroundColor: '#faa749',
  boxShadow: 'none',
  transition:" all 0.6s",
  '&:hover': {
    backgroundColor: '#f6c288',
    boxShadow: 'none'
  }
});

export const PrevButton = styled(Button)({
  backgroundColor: '#580016',
  boxShadow: 'none',
  transition: "all 0.6s",
  '&:hover': {
    backgroundColor: '#73021e',
    boxShadow: 'none'
  }
});

export const MainButton = styled(Button)({
  backgroundColor: '#231f20',
  boxShadow: 'none',
  border: "2px solid white",
  color: "white",
  transition: "all 0.6s",
  borderRadius: "20px",
  '&:hover': {
    backgroundColor: '#faa749',
    boxShadow: 'none',
    border: '2px solid #231f20'
  }
});