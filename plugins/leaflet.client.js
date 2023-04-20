import L from 'leaflet';

const leafletPlugin = {
  install: (app) => {
    app.config.globalProperties.$L = L;
  },
};

export default leafletPlugin;
