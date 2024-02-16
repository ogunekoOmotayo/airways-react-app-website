export const BookingForm = () => {
	return (
		<div className=" bg-lightbluuBg  text-slate-50 h-fit m-3 p-3 md:w-80 lg:w-96 ">
			<h2 className="text-slate-300 font-bold">Book Your Ticket</h2>
			<form action="" className="flex flex-col py-5">
				<label for="name">Name </label>
				<input
					type="text"
					id="name"
					placeholder="Name"
					className="h-8 rounded-sm pl-2 outline-none text-gray-500"
					required
				/>
				<label for="email" className="mt-4">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Enter Email..."
					className="h-8 rounded-sm pl-2 mb-3 outline-none text-gray-500"
					required
				/>
				<label for="bookingOption">
					<p className="py-5 font-semibold text-lg">Choose Your Suite</p>
					<select
						name="bookingOption"
						id="bookingOption"
						className="text-blue-950 text-sm p-1 outline-none"
					>
						<option value="economic">Economic Ticket</option>
						<option value="first-class">First-Class Ticket</option>
						<option value="business">Business Ticket</option>
					</select>
				</label>
				<br />
				<button
					type="submit"
					className=" bg-tomatolike hover:opacity-90 w-full text-slate-200 py-2 rounded-sm text-sm font-semibold"
				>
					Book
				</button>
			</form>
		</div>
	);
};
