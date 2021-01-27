import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		userId: 1841
	});

	const { store, actions } = useContext(Context);
	console.log(store.contacts);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((element, index) => {
							return (
								<ContactCard
									key={index}
									contact={element}
									onDelete={() => setState({ showModal: true })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal
				userId={state.userId}
				onDelete={actions.deleteContact()}
				show={state.showModal}
				onClose={() => setState({ showModal: false })}
			/>
		</div>
	);
};
