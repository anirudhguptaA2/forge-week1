import React from 'react';
import type { ReactNode } from 'react';

/**
 * Props for TabPanels component.
 */
export interface TabPanelsProps {
	/**
	 * TabPanel components to be rendered inside TabPanels.
	 */
	children: ReactNode;
}

/**
 * TabPanels renders the content panels for each tab.
 * Place TabPanel components as children.
 *
 * Usage:
 * <TabPanels>
 *   <TabPanel index={0}>...</TabPanel>
 *   <TabPanel index={1}>...</TabPanel>
 * </TabPanels>
 */
export const TabPanels: React.FC<TabPanelsProps> = ({ children }) => {
	return <div className="tab-panels">{children}</div>;
};