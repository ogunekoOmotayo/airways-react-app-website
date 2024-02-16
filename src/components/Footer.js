import telIcon from "./image/icons8-rotary-phone-48.png";
export const Footer = () => {
	return (
		<footer className="bg-tomatolike text-slate-200 flex flex-col w-full h-fit items-center justify-center py-10">
			<div className="h-fit flex items-center justify-center">
				<span className=" text-lightbluuBg">
					OMO <span className="text-slate-200">Airways</span>
					<i className="fas fa-plane-departure" aria-hidden="true"></i>
				</span>
				<p>copyright © 2024</p>
			</div>

			<div className=" w-fit  flex items-start justify-center mt-3">
				<a href="tel:+23470661 56225" className="flex">
					Call Us
					<img src={telIcon} alt="telIcon" className="w-5 h-5" />
				</a>
			</div>
		</footer>
	);
};
