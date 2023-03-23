import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPagesWithSlugs, getPageBySlug } from "@/lib/api";

import SiteTemplate from "@/components/layout/SiteTemplate";
import * as blocks from "@/blocks/index";

function dashCasetoPascalCase(str) {
	return str
		.replace(/-([a-z])/g, function (g) {
			return g[1].toUpperCase();
		})
		.replace(/^[a-z]/, function (g) {
			return g.toUpperCase();
		})
		.replace('-','');
}

const Page = ({ data }) => {
	var page = data.page;
	var pagecontent = [];
	
	if (page && page.gbcontent) {
		var content = JSON.parse(page.gbcontent);
		content.map((element, key) => {
			if (element.name !== null) {
				let blockName = element.name.split("/");
				
				if (blockName[0] == "core") {
					pagecontent.push(<blocks.default.Core key={key} data={element.html} />);
				} else{
					blockName = dashCasetoPascalCase(blockName[1]);
					if ( blocks.default[blockName] ) {
						let BlockComponent = blocks.default[blockName];
						pagecontent.push(
							<BlockComponent key={key} data={element.fields} />
						);
					} else {
						console.warn("Missing component for block: " + blockName);
					}
				}
			}
		});
	}

	return <SiteTemplate>{pagecontent}</SiteTemplate>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = await getPageBySlug(params.slug);

	return {
		props: {
			data: data
		},
		revalidate: 10,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pagesWithSlugs = await getAllPagesWithSlugs();

	return {
		//paths: pagesWithSlugs.edges.map(({ node }) => `/posts/${node.slug}`) || [],
		paths: [],
		fallback: "blocking",
	};
};

export default Page;
