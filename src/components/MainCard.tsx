import { ReactNode, forwardRef } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  SxProps,
  Typography
} from '@mui/material';

import { Highlighter } from '.';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': {
    m: '0px auto',
    alignSelf: 'center'
  }
};

interface MainCardProps {
  boxShadow?: boolean,
  contentSX?: SxProps,
  darkTitle?: boolean,
  divider?: boolean,
  elevation?: number,
  secondary?: ReactNode,
  shadow?: string,
  sx?: SxProps,
  title?: (string | ReactNode),
  codeHighlight?: boolean,
  border?: boolean,
  content?: boolean,
  children: ReactNode
}

export const MainCard = forwardRef< HTMLDivElement, MainCardProps >(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight,
      ...others
    },
    ref,
  ) => {
    const theme = useTheme();
    boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;
    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderRadius: 2,
          borderColor: theme.palette.mode === 'dark' ?
            theme.palette.divider : theme.palette.grey.A700,
          boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ?
            shadow || theme.shadows[1] : 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow || theme.shadows[1] : 'inherit'
          },
          '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem'
          },
          ...sx
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader sx={headerSX}
            titleTypographyProps={{ variant: 'subtitle1' }}
            title={title}
            action={secondary} />
        )}
        {
          darkTitle && title &&
            <CardHeader sx={headerSX}
              title={<Typography variant="h3">{title}</Typography>}
              action={secondary} />
        }

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}

        {/* card footer - clipboard & highlighter  */}
        {codeHighlight && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Highlighter codeHighlight={codeHighlight} main>
              {children}
            </Highlighter>
          </>
        )}
      </Card>
    );
  }
);
