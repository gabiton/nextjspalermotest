import Image from "next/image";

export default function Mascot({ data }) {
	let blockClass = ["mascot", "in"];

	data.image_position == "left"
		? blockClass.push("imageLeft")
		: blockClass.push("imageRight");

	return (
		<section className={blockClass.join(" ")}>
			<div className="container">
				{data.section_title && (
					<div className="sectiontitle">{data.section_title}</div>
				)}

				{data.image && (
					<div className="image">
						<Image
							src={data.image.url}
							alt={data.image.alt}
							width={data.image.width}
							height={data.image.height}
						/>
					</div>
				)}

				<div className="text">
					{data.title && <h2 className="title">{data.title}</h2>}
					{data.text && (
						<div
							dangerouslySetInnerHTML={{ __html: data.text }}
						></div>
					)}
				</div>
			</div>
		</section>
	);
}
