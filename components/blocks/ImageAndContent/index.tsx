import Image from 'next/image'

export default function ImageAndContent({ data }) {
	
	let blockClass = [ 'block_content-and-image' ];

	data.image_position == "left" ? blockClass.push('imageLeft') : blockClass.push("imageRight");

	return (
		<section className={blockClass.join(" ")}>
			<div className="container">
			<div className="image">
				<Image
				src={data.image.url}
				alt={data.image.alt}
				width={data.image.width}
				height={data.image.height}
				/>
			</div>
			<div className="text">
				<h2 className='title'>{data.title}</h2>
				<div dangerouslySetInnerHTML={{ __html: data.text }}></div>
			</div>
			</div>
		</section>
	);
}
