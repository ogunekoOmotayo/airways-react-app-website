import { Link } from "react-router-dom";
import { data } from "../dataStore";

export const BigScreenNav = () => {
	return (
		<nav className="w-1/3 mr-10 hidden md:block">
			<ul className="flex justify-between">
				{data.map((mydata) => {
					const { title, path } = mydata;
					return (
						<Link to={path} className="DesktopListStyle">
							{title}
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};
