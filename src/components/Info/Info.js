import React from 'react';
import PropTypes from 'prop-types';
import { informations } from 'data/data';
import InfoItem from 'components/InfoItem/InfoItem';

const Info = (props) => {
	return (
		<>
			{informations.map((informationsData) => (
				<InfoItem informationsData={informationsData}></InfoItem>
			))}
		</>
	);
};

Info.propTypes = {};

export default Info;
