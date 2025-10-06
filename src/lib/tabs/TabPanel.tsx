import React from 'react';
import { useTabsContext } from './tabsContext';

/**
 * Props for TabPanel component.
 */
export interface TabPanelProps {
	/**
	 * Content to display when this panel is active.
	 */
	children: React.ReactNode;
	/**
	 * The index of the tab this panel corresponds to.
	 */
	index: number;
}

/**
 * TabPanel displays its content only when its index matches the selected tab.
 *
 * Usage:
 * <TabPanel index={0}>Home content</TabPanel>
 */
export const TabPanel: React.FC<TabPanelProps> = ({ children, index }) => {
	const { selectedIndex } = useTabsContext();
	if (selectedIndex !== index) return null;
	return (
		<div className="tab-panel" role="tabpanel">
			{children}
		</div>
	);
};