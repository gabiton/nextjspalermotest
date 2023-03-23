import Image from "next/image";

export default function CallToAction2({ data }) {
	let blockClass = ["perspective", "in"];

	data.image_position == "left"
		? blockClass.push("imageLeft")
		: blockClass.push("imageRight");

	return (
		<section className={blockClass.join(" ")}>
			{data.background && (
				<div className="bg">
					<Image
						src={data.background.url}
						alt={data.background.alt}
						width={data.background.width}
						height={data.background.height}
					/>
				</div>
			)}

			<div className="container">
				<div className="left_col">
					{data.title && <h2 className="title">{data.title}</h2>}
				</div>
				<div className="right_col">
					{data.text && <div dangerouslySetInnerHTML={{ __html: data.text }}></div>}

					{data.button && <a className="button">Button title</a>}
				</div>
			</div>
		</section>
	);
}
