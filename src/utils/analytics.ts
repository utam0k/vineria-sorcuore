import ReactGA from 'react-ga';

// https://medium.com/@austintoddj/using-google-analytics-with-next-js-423ea2d16a98
export const initGA = () => {
  ReactGA.initialize(process.env.trackingId || '');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
