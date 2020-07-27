import React from 'react';

/**
 * Componente para crear un elemento container
 * @param {React.Component} children Contenido del container
 * @param {String} [size=xl] Resolución actual de la pantalla ['xs','sm'...]
 */
const Container = ({ children, size = 'xl', className = '' }) => (
	<div className={`container-${size} ${className}`}>{children}</div>
);

export default Container;
