import Header from "@/components/layout/Header/";

export default function SiteTemplate({ children }) {
	return (
		<>
			<Header />
			<div className="siteContainer">{children}</div>
		</>
	);
}
