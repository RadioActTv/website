// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import history from 'utils/history.utils';
// TODO: remove if no need for Lazy load routes:
import lazyLoad from 'utils/lazy-load.utils';

import store from 'store';
import theme from 'constants/themes.constants';

import Localization from 'components/localization'; // TODO: remove if no localization
import Layout from 'components/layout/layout';

import HomePage from 'pages/home-page';
import CalendarPage from 'pages/calendar-page';
import VideoPage from 'pages/video-page';
import NewsPage from 'pages/news-page';
import AboutPage from 'pages/about-page';

class App extends React.Component<{||}> {
  render() {
    return (
      <Provider store={store}>
        <Localization>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <Layout>
                <Route exact path="/" name="home" component={HomePage} />
                <Route
                  exact
                  path="/videos"
                  name="videos"
                  component={VideoPage}
                />
                <Route exact path="/news" name="news" component={NewsPage} />
                <Route exact path="/about" name="news" component={AboutPage} />
                <Route
                  exact
                  path="/calendar"
                  name="calendar"
                  component={CalendarPage}
                />
                <Route
                  path="/lazy"
                  name="lazy"
                  component={lazyLoad(() => import('sample/lazy'))}
                />
              </Layout>
            </Router>
          </ThemeProvider>
        </Localization>
      </Provider>
    );
  }
}

export default App;
