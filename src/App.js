// Imported components inserted in the root component
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { AboutUs } from "./components/About";
import { Bookings } from "./components/Bookings";
import { Footer } from "./components/Footer";
import { SmallScreenNav } from "./components/SmallScreenNav";

// imported Routes and Route
import { Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		// The overall App wrapper
		<div className="mx-auto font-Poppins">
			<>
				{/* The  Mobile Navigation menu window component is rendered to the App component with the Routes and Route elements. it's mainly by the hamburger menu to appear or not to appear*/}
				<Routes>
					<Route path="/SmallScreenNav" element={<SmallScreenNav />} />
				</Routes>
			</>
			{/* Header component wrapper */}
			<>
				{/* The Header component remain constant across the different web pages of this website */}
				<Header />
			</>
			{/* The Routes wrapper */}
			<>
				{/* The Route are linked to different web pages */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About-us" element={<AboutUs />} />
					<Route path="/Bookings" element={<Bookings />} />
				</Routes>
			</>
			{/* The footer  wrapper*/}
			<>
				{/* The footer component remain constant across the different web pages of this website */}
				<Footer />
			</>
		</div>
	);
};
