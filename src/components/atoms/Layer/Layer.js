import React from 'react';
import { useMove } from 'providers/layerposition';
import { ReactComponent as One } from 'assets/icons/1 (1).svg';
import { ReactComponent as Two } from 'assets/icons/2 (1).svg';
import { ReactComponent as Three } from 'assets/icons/3 (1).svg';
import { ReactComponent as Four } from 'assets/icons/4 (1).svg';
import { ReactComponent as Five } from 'assets/icons/5 (1).svg';
import { ReactComponent as Seven } from 'assets/icons/7 (1).svg';
import { ReactComponent as Eight } from 'assets/icons/8.svg';
import { Wrapper } from './Layer.styled';

const Layer = () => {
	const { handleMouseMove } = useMove();
	return (
		<Wrapper onMouseMove={handleMouseMove}>
			<One className='layer' speed='2'></One>
			<Two className='layer' speed='5'></Two>
			<Three className='layer' speed='-2'></Three>
			<Four className='layer' speed='-7'></Four>
			<Five className='layer' speed='6'></Five>
			<Seven className='layer' speed='-9'></Seven>
			<Eight className='layer' speed='-9'></Eight>
		</Wrapper>
	);
};

export default Layer;
