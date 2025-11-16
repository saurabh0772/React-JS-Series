import React, { useState } from "react";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const Contact = () => {
	return (
		<section className=" bg-black ezy__contact4 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
			<div className="container px-4">
				<div className="grid grid-cols-12 py-6 lg:gap-8">
					<div className="col-span-12 lg:col-span-7 mb-4 lg:mb-0">
						<div
							className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[150px] h-full object-cover"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/contact/contact_4.png)",
							}}
						></div>
					</div>
					<div className="col-span-12 lg:col-span-5">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};


export default Contact;