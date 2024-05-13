import { ReactNode, useMemo } from 'react';

// material-ui
import {
  CssBaseline, PaletteMode, StyledEngineProvider
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// project import
import Palette from './palette';
import CustomShadows from './shadows';
import componentsOverride from './overrides';
import Typography from './typography';

interface ThemeCustomizationProps {
  children: ReactNode,
  mode?: PaletteMode
}

declare module '@mui/material/styles' {
  interface Theme {
    direction: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    direction?: string
  }
}

export default function ThemeCustomization(
  { children, mode='light' }: ThemeCustomizationProps) {
  // const theme = Palette('light', 'default');
  const theme = Palette(mode);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      mode,
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [theme, themeTypography, themeCustomShadows]
    // [theme, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
