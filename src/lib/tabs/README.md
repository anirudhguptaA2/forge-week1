# Tabs Compound Component

A fully accessible, self-documenting Tabs component for React using the Compound Component pattern and Context API.

## Usage Example

```tsx
import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';

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
```

## Features
- Accessible keyboard navigation
- Context-driven state management
- Easy to extend and style
- TypeScript support

---

## Storybook Integration

1. **Install Storybook:**
   ```sh
   npx storybook@latest init
   ```
2. **Create a story file:**
   Create `Tabs.stories.tsx` in the same folder:

   ```tsx
   import React from 'react';
   import { Tabs } from './Tabs';
   import { TabList } from './TabList';
   import { Tab } from './Tab';
   import { TabPanels } from './TabPanels';
   import { TabPanel } from './TabPanel';

   export default {
     title: 'Compound/Tabs',
     component: Tabs,
   };

   export const Default = () => (
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
   );
   ```
3. **Run Storybook:**
   ```sh
   npm run storybook
   ```

You’ll see your Tabs component in isolation, ready for documentation and accessibility testing.
