import Link from "next/link";
import useSWR from "swr";
import { request } from "graphql-request";

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

const fetcher = (query) => request(WORDPRESS_API_URL, query);

const Nav = ({ location, className }) => {
	let query = `
	{
		menus(where: {location: ${location}}) {
		  nodes {
			menuItems {
			  edges {
				node {
				  url
				  title
				  target
				  cssClasses
				  label
				  uri
				  childItems {
					edges {
					  node {
						cssClasses
						url
						title
						target
						label
						uri
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	`;
	const { data, error, isLoading } = useSWR(query, fetcher);

	if (error) return <></>;
	if (isLoading) return <>loading</>;
	

	return (
		<nav className={className}>
			<ul>
				{data.menus.nodes[0].menuItems.edges.map((item, key) => (
					<li key={key}>
						<Link href={item.node.uri}>
							{item.node.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
