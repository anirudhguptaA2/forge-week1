import React from 'react';
import type { ReactNode } from 'react';

/**
 * TabList groups Tab components and renders them in a horizontal row.
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
export interface TabListProps {
	/**
	 * Tab components to be rendered inside the TabList.
	 */
	children: ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
	return <div className="tab-list" role="tablist">{children}</div>;
};