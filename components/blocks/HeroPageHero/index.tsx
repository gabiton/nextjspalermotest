import Image from "next/image";
//import Svg from "./pagehero"

export default function HeroPageHero({ data }) {
	let blockClass = ["pagehero", "in"];

	data.image_position == "left"
		? blockClass.push("imageLeft")
		: blockClass.push("imageRight");

	return (
		<section className={blockClass.join(" ")}>
			<div className="bg">
				<div className="img">
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
					<div className="after">
						
					</div>
				</div>
			</div>
			<div className="container">
				<div className="container_top">
					<h3 className="pretitle">Pretitle</h3>

					{data.title && <h1 className="title">{data.title}</h1>}
				</div>

				{data.text && (
					<div
						className="text"
						dangerouslySetInnerHTML={{ __html: data.text }}
					></div>
				)}
			</div>
		</section>
	);
}
