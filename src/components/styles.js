import { styled } from '@mui/system';

export const DivRoot = styled('div')({
  display: 'flex',
  height: '100%'
});

export const DivMain = styled('main')({
  flexGrow: 1,
  padding: '2em'
});

export const DivToolbar = styled('div')({
  height: '70px'
});

// export default styled(() => ({
//   root: {
//     display: 'flex',
//     height: '100%'
//   },
//   toolbar: {
//     height: '70px'
//   },
//   content: {
//     flexGrow: 1,
//     padding: '2em'
//   }
// }));
