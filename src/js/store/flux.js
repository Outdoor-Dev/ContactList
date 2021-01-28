const url = "https://assets.breatheco.de/apis/fake/contact/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			deleteContact: id => {
				fetch(`${url}${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(() => getActions().allContacts())
					.catch(error => console.log(error));
			},

			allContacts: () => {
				fetch(`${url}agenda/pachito`)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			addSingleContact: contact => {
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(() => getActions().allContacts())
					.catch(error => console.log(error));
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
