import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		address: "",
		phone: "",
		agenda_slug: "pachito"
	});
	const { actions } = useContext(Context);
	const history = useHistory();
	console.log(contact);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5 text-white ">Add a new contact</h1>
				<form>
					<div className="form-group text-white">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.full_name}
							onChange={e => setContact({ ...contact, full_name: e.target.value })}
						/>
					</div>
					<div className="form-group text-white">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={contact.email}
							onChange={e => setContact({ ...contact, email: e.target.value })}
						/>
					</div>
					<div className="form-group text-white">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={contact.phone}
							onChange={e => setContact({ ...contact, phone: e.target.value })}
						/>
					</div>
					<div className="form-group text-white">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={contact.address}
							onChange={e => setContact({ ...contact, address: e.target.value })}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addSingleContact(contact);
							history.push("/");
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center text-white" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
