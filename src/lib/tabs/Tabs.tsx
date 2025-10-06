import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { TabsContext } from './tabsContext';

/**
 * Props for the Tabs component.
 */
export interface TabsProps {
	/**
	 * Compound children: TabList, TabPanels, etc.
	 */
	children: ReactNode;
	/**
	 * The initially selected tab index (default: 0).
	 */
	defaultIndex?: number;
}

/**
 * Tabs is the parent component for the compound tab pattern.
 * Wrap TabList and TabPanels inside Tabs to enable tab selection and context sharing.
 *
 * Usage:
 * <Tabs defaultIndex={0}>
 *   <TabList>
 *     <Tab index={0}>Home</Tab>
 *     <Tab index={1}>Profile</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel index={0}>...</TabPanel>
 *     <TabPanel index={1}>...</TabPanel>
 *   </TabPanels>
 * </Tabs>
 */
export const Tabs: React.FC<TabsProps> = ({ children, defaultIndex = 0 }) => {
	const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

	return (
		<TabsContext.Provider value={{ selectedIndex, setSelectedIndex }}>
			<div className="tabs-container">{children}</div>
		</TabsContext.Provider>
	);
};