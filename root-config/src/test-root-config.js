import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

// setTimeout(() => {
//   registerApplication(applications[0]);
// }, 2000);

// setTimeout(() => {
//   registerApplication(applications[1]);
// }, 4000);

layoutEngine.activate();
start();
