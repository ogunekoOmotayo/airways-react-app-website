import { Newsettler } from "./Newsettler";
import { BookingForm } from "./BookingForm";

export const Bookings = () => {
	return (
		<div>
			<Newsettler />
			<div className="grid md:grid-cols-2 ">
				<div className="p-3 justify-self-end text-slate-500">
					<h2 className=" text-deeppink font-semibold my-3">
						Ticket-Booking Page
					</h2>
					<div class=" bg-gray-200 p-3 md:w-80 lg:w-96 mt-1">
						<h3>Economic Suite</h3>
						<p className=" text-sm py-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Architecto, alias quos, beatae quam, perferendis fugiat neque
							obcaecati quas adipisci deserunt sequi. Tenetur, commodi deleniti
							repellat odio nostrum necessitatibus id nam.
						</p>
						<p>Pricing= $500 - $1,000</p>
					</div>
					<div class="bg-gray-200 p-3 md:w-80 lg:w-96 mt-1">
						<h3>First-Class Suite</h3>
						<p className="text-sm py-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							nihil ab quisquam suscipit ea reprehenderit sit? Optio eius minus
							nihil sequi placeat quasi eaque repudiandae similique dignissimos,
							veniam animi! Quam.
						</p>
						<p>Pricing= $4,000 - $5,000</p>
					</div>
					<div class="bg-gray-200 p-3 md:w-80 lg:w-96 mt-1">
						<h3>Business Suite</h3>
						<p className="text-sm py-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
							repudiandae culpa optio numquam consequatur eaque suscipit. Quia
							ex nemo delectus sit perspiciatis. Ratione dignissimos facere
							corporis accusamus et tenetur earum.
						</p>
						<p>Pricing= $1,500 - $3,000</p>
					</div>
				</div>
				<BookingForm />
			</div>
		</div>
	);
};
