// material-ui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following,
     * and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
    <Box sx={{ width: "85px"}}>
      <svg version="1.1" viewBox="0.0 0.0 161.24146981627297 132.91601049868765" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"  xmlns="http://www.w3.org/2000/svg">
        <clipPath id="p.0">
          <path d="m0 0l161.24147 0l0 132.91602l-161.24147 0l0 -132.91602z" clip-rule="nonzero"/>
        </clipPath>
          <g clip-path="url(#p.0)">
            <path fill={theme.palette.primary.main}
              fill-opacity="0.0" d="m0 0l161.24147 0l0 132.91602l-161.24147 0z" fill-rule="evenodd"/>
            <path fill={theme.palette.primary.main}
              fill-opacity="0.0" d="m0 0l161.29134 0l0 132.50394l-161.29134 0z" fill-rule="evenodd"/>
            <path fill={theme.palette.primary.main}
              d="m33.203125 98.6l0 -58.921875l-22.015625 0l0 -7.890625l52.953125 0l0 7.890625l-22.109375 0l0 58.921875l-8.828125 0zm39.633545 0l0 -66.8125l8.84375 0l0 58.921875l32.90625 0l0 7.890625l-41.75 0zm53.779663 0l0 -66.8125l8.84375 0l0 66.8125l-8.84375 0z" fill-rule="nonzero"/>
          </g>
      </svg>
    </Box>
    </>
  );
};
