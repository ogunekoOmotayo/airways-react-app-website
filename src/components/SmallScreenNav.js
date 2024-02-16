import { Link } from "react-router-dom";
import { data } from "../dataStore";

export const SmallScreenNav = () => {
	return (
		<div className="SmallScreenNav bg-orange-400 block w-full md:hidden absolute  h-screen overflow-hidden">
			<section className="h-full">
				<nav className="animation h-full w-10/12">
					<ul className="flex flex-col ">
						{data.map((myData) => {
							const { title, path } = myData;
							return (
								<Link to={path} className="smallScreenNavListStyle">
									{title}
								</Link>
							);
						})}
					</ul>
				</nav>
			</section>
		</div>
	);
};

//
