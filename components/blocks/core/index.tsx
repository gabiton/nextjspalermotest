import Image from 'next/image'

export default function AnimationExmaple({ data }) {
	return (
		<div className='coreBlock container' dangerouslySetInnerHTML={{ __html: data }}></div>
	);
}
