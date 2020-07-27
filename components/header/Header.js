import React, { useContext } from 'react';

import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

import { ResponsiveContext } from '../../lib/context';

/**
 * Component that chooses the header to be rendered
 * @returns {React.Component} Header
 */
const Header = () => {
	const { resolution } = useContext(ResponsiveContext);	

	switch (resolution) {
		case 'lg':
		case 'md':
			return <HeaderDesktop />;
		default:
			return <HeaderMobile />;
	}
};

export default Header;
