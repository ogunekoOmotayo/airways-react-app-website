export const Newsettler = () => {
	return (
		<div>
			<div className=" bg-lightbluuBg flex text-xs text-slate-300  h-20 items-center justify-between px-3 md:text-sm md:px-10">
				<p className="w-fit">Subscribe To Our Newsettler</p>
				<fieldset className="flex w-3/4 md:w-1/3">
					<input
						className="w-2/3  outline-none p-1 text-slate-700"
						type="email"
						placeholder="Enter Email..."
						maxlength=""
					/>
					<button
						type="submit"
						className="w-fit p-1  bg-tomatolike hover:opacity-90"
					>
						Subscribe
					</button>
				</fieldset>
			</div>
		</div>
	);
};
