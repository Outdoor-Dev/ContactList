import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<li className="list-group-item ">
			<div className="row w-100 ">
				<div className="col-12 col-sm-6 col-md-3 px-0 ">
					<img
						src="https://images.unsplash.com/photo-1593536604657-c7087cdc9c9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<i className="icons fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className=" icons fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead text-white">{props.contact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-white">{props.contact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-white small">{props.contact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-white small text-truncate">{props.contact.email}</span>
				</div>
			</div>
		</li>
	);
};

ContactCard.propTypes = {
	contact: PropTypes.object,
	history: PropTypes.object,
	onDelete: PropTypes.func
};
ContactCard.defaultProps = {
	onDelete: null
};
