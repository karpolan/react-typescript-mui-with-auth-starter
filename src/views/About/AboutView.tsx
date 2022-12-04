import { Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { AppButton, AppLink, AppIconButton } from '../../components';
import DialogsSection from './DialogsSection';

/**
 * Renders "About" view
 * url: /about
 */
const AboutView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title="Application title here..." subheader="Version 0.1" />
          <CardContent>Detailed description of the application here...</CardContent>
          <CardActions>
            <AppButton to="/" color="primary">
              OK
            </AppButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <DialogsSection />
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="AppLink" />
          <CardContent>
            <AppLink>MUI default</AppLink> <AppLink color="inherit">MUI inherit</AppLink>{' '}
            <AppLink color="primary">MUI primary</AppLink> <AppLink color="secondary">MUI secondary</AppLink>{' '}
            <AppLink color="textPrimary">MUI textPrimary</AppLink>{' '}
            <AppLink color="textSecondary">MUI textSecondary</AppLink> <AppLink color="error">MUI error</AppLink> <br />
            <AppLink to="/">Internal Link</AppLink> &nbsp;
            <AppLink to="/" openInNewTab>
              Internal Link in New Tab
            </AppLink>{' '}
            &nbsp;
            <AppLink href="//karpolan.com">External Link</AppLink> &nbsp;
            <AppLink href="//karpolan.com" openInNewTab={false}>
              External Link in Same Tab
            </AppLink>{' '}
            &nbsp;
            <br />
            <AppButton to="/" sx={{ ml: 0 }} size="small" label="as Default Button" />
            <AppButton to="/" size="small" color="primary" label="as Primary Button" />
            <AppButton to="/" sx={{ mr: 0 }} size="small" color="secondary" label="as Secondary Button" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="AppButton" />
          <CardContent>
            <AppButton sx={{ ml: 0 }}>Default</AppButton>
            <AppButton disabled>Disabled</AppButton>
            <AppButton color="primary">Primary</AppButton>
            <AppButton color="secondary">Secondary</AppButton>
            <AppButton color="error">Error</AppButton>
            <AppButton color="warning">Warning</AppButton>
            <AppButton color="info">Info</AppButton>
            <AppButton color="success">Success</AppButton>
            <AppButton color="#FF8C00">#FF8C00</AppButton>
            <AppButton color="rgb(50, 205, 50)">rgb(50, 205, 50)</AppButton>
            <AppButton color="inherit" sx={{ mr: 0 }}>
              Inherit
            </AppButton>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="AppIconButton" />
          <CardContent>
            <AppIconButton title="Default icon, no color specified" />
            <AppIconButton icon="close" color="primary" title="Close icon with Primary color" />
            <AppIconButton icon="menu" color="secondary" title="Menu icon with Secondary color" />
            <AppIconButton icon="settings" color="error" title="Settings icon with Error color" />
            <AppIconButton icon="search" color="warning" title="Search icon with Warning color" />
            <AppIconButton icon="info" color="info" title="Info icon with Info color" />
            <AppIconButton icon="home" color="success" title="Home icon with Success color" />
            <AppIconButton
              icon="visibilityoff"
              color="#FF8C00"
              title="VisibilityOff icon with DarkOrange (#FF8C00) color"
            />
            <AppIconButton
              icon="visibilityon"
              color="rgb(50, 205, 50)"
              title="VisibilityOn icon with LimeGreen (rgb(50, 205, 50)) color"
            />
            <AppIconButton icon="account" color="inherit" title="Account icon with Inherit color" />
            {/* <AppIconButton icon="close" color="primary" disabled title="Disabled Close icon with Primary color" /> */}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h1">MUI Typo h1</Typography>
            <Typography variant="h2">MUI Typography h2</Typography>
            <Typography variant="h3">MUI Typography h3</Typography>
            <Typography variant="h4">MUI Typography h4</Typography>
            <Typography variant="h5">MUI Typography h5</Typography>
            <Typography variant="h6">MUI Typography h6</Typography>
            <Divider />
            <Typography variant="subtitle1">MUI Typography subtitle1</Typography>
            <Typography variant="subtitle2">MUI Typography subtitle2</Typography>
            <Typography variant="caption">MUI Typography caption</Typography>
            <Divider />
            <Typography variant="body1">
              MUI Typography body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Divider />
            <Typography variant="body2">
              MUI Typography body2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Divider />
            <Typography variant="overline">MUI Typography overline</Typography>
            <Divider />
            <Typography variant="button">MUI Typography button</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutView;
