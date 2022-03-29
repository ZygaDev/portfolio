import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BlocksItem, BlockHead, BlockBody } from './ResumeItem.styled';
const ResumeItem = () => {
	return (
		<>
			<BlocksItem>
				<BlockHead>
					<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
					<span>HTML</span>
					<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
				</BlockHead>
				<BlockBody>
					<span className='c-p'>{`...{`}</span>

					<span className='c-w'>
						{` res.map((resData) => ( `}
						<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;
						{`<ResItem  `} <span className='c-p'>{`key`}</span>={`resData.id} `}
						<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<span className='c-p'>{`resData`}</span>
						{`={resData}></ResItem>`}
					</span>
					<br></br>
					<span className='c-p'>{`))}...`}</span>
				</BlockBody>
			</BlocksItem>
			<BlocksItem>
				<BlockHead>
					<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
					<span>CSS</span>
					<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
				</BlockHead>
				<BlockBody>
					<span className='c-y'>export const Icon = styled.</span>
					<span className='c-p'>div`</span>
					<br />
					<span>&nbsp; color </span>
					<span>: </span>
					<span>{`$({ theme }) => theme.colors.white};`}</span> <br />
					<span>&nbsp; height: </span> <span className='c-o'>7rem;</span>
					<br />
					<span className='c-p'>`;</span>
				</BlockBody>
			</BlocksItem>
			<BlocksItem>
				<BlockHead>
					<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
					<span>JS</span>
					<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
				</BlockHead>
				<BlockBody>
					<span className='c-p'>{`import  `}</span>
					<span className='c-w'>{`React`}</span>
					<span className='c-p'>{` from `}</span>
					<span className='c-w'>{`'react';`}</span>
					<br />
					<span className='c-p'>{`import  `}</span>
					<span className='c-w'>{`{ FontAwesomeIcon } `}</span>
					<span className='c-p'>{` from `}</span>{' '}
					<span className='c-w'>{`  '@fortawesome/react-fontawesome';`}</span>
					<p className='line-3'>
						{' '}
						<span className='c-p'>{``}</span>
					</p>
				</BlockBody>
			</BlocksItem>
		</>
	);
};

export default ResumeItem;
