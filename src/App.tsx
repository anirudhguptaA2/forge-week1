import { Tabs, TabList, Tab, TabPanels, TabPanel } from './lib/tabs';
import './App.css';

function App() {
  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>Home</Tab>
          <Tab index={1}>Profile</Tab>
          <Tab index={2}>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <h2>Welcome to the Home tab!</h2>
          </TabPanel>
          <TabPanel index={1}>
            <h2>This is your Profile.</h2>
          </TabPanel>
          <TabPanel index={2}>
            <h2>Adjust your Settings here.</h2>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
