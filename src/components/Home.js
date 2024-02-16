import { Newsettler } from "./Newsettler";
import firstImage from "./image/OIP (1).jpeg";
import secondImage from "./image/OIP.jpeg";
import thirdImage from "./image/download.jpeg";

export const Home = () => {
	return (
		<div>
			<div className="h-78vh text-orange-300">
				<div className=" h-78vh w-full flex flex-col items-center justify-center bg-aeroImage bg-fixed bg-cover absolute"></div>

				<div className="p-3 md:p-20 bg-lightBlack w-full h-78vh flex flex-col justify-center items-center absolute">
					<h1 className="text-center text-lg md:text-3xl py-5 text-amber-400 font-semibold">
						Affordable & Convenient Flight Ratess
					</h1>

					<p className=" text-center text-sm md:text-lg ">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
						eveniet eaque. Necessitatibus obcaecati iusto saepe exercitationem
						culpa? Numquam adipisci, debitis modi ad explicabo aliquam! Ipsam a
						quibusdam vero possimus nulla.
					</p>
				</div>
			</div>

			<Newsettler />
			<div className="grid grid-col-1 md:grid-cols-3 p-5 h-fit text-slate-500">
				<div className="m-1 md:m-3">
					<img src={firstImage} alt="img" className="w-full h-56 md:h-64" />
					<h3 className="text-xl">Economy Suite</h3>
					<p className="text-sm text-justify ">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Exercitationem eum aspernatur minima! Sint hic dignissimos
						cupiditate nesciunt ipsam vitae inventore, non maiores pariatur in
						voluptatum quisquam qui optio illum adipisci repellendus. A error
						debitis minus voluptatibus delectus alias, impedit voluptate facere
						ipsum nam laboriosam commodi iure quidem. Tenetur, libero minima.
					</p>
				</div>
				<div className="m-1 md:m-3">
					<img src={secondImage} alt="img" className="w-full h-56 md:h-64" />
					<h3 className="text-xl">Business Suite</h3>
					<p className="text-sm text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Exercitationem eum aspernatur minima! Sint hic dignissimos
						cupiditate nesciunt ipsam vitae inventore, non maiores pariatur in
						voluptatum quisquam qui optio illum adipisci repellendus. A error
						debitis minus voluptatibus delectus alias, impedit voluptate facere
						ipsum nam laboriosam commodi iure quidem. Tenetur, libero minima.
					</p>
				</div>
				<div className="m-1 md:m-3">
					<img src={thirdImage} alt="img" className="w-full h-56 md:h-64" />
					<h3 className="text-xl">First Class Suite</h3>
					<p className="text-sm text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Exercitationem eum aspernatur minima! Sint hic dignissimos
						cupiditate nesciunt ipsam vitae inventore, non maiores pariatur in
						voluptatum quisquam qui optio illum adipisci repellendus. A error
						debitis minus voluptatibus delectus alias, impedit voluptate facere
						ipsum nam laboriosam commodi iure quidem. Tenetur, libero minima.
					</p>
				</div>
			</div>
		</div>
	);
};
