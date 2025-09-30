import React from 'react';
import { useTabsContext } from './tabsContext';

/**
 * Props for Tab component.
 */
export interface TabProps {
	/**
	 * Tab label or content.
	 */
	children: React.ReactNode;
	/**
	 * The index of this tab in the TabList.
	 */
	index: number;
}

/**
 * Tab renders a clickable tab button. Use inside TabList.
 *
 * Usage:
 * <Tab index={0}>Home</Tab>
 */
export const Tab: React.FC<TabProps> = ({ children, index }) => {
	const { selectedIndex, setSelectedIndex } = useTabsContext();
	const isSelected = selectedIndex === index;

	return (
		<button
			className={`tab${isSelected ? ' selected' : ''}`}
			onClick={() => setSelectedIndex(index)}
			aria-selected={isSelected}
			role="tab"
			tabIndex={isSelected ? 0 : -1}
		>
			{children}
		</button>
	);
};