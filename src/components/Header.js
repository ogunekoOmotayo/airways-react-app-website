import { BigScreenNav } from "./BigScreenNav";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="Header_style">
			<div className="block md:hidden ">
				<Link to="/SmallScreenNav" className="">
					<i
						className="fas fa-bars-progress text-tomatolike text-xl"
						aria-hidden="true"
					></i>
				</Link>
			</div>
			<div className="logoStyle">
				OMO <span className="text-slate-200">Airways</span>
				<i className="fas fa-plane-departure" aria-hidden="true"></i>
			</div>
			<BigScreenNav />
		</header>
	);
};
