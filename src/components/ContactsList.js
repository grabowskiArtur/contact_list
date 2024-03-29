import React, {Component} from 'react';

import ContactItem from './ContactItem';

class ContactsList extends Component {
	contactToContactItem = contact => {
		const avatarUrl = contact.picture.thumbnail;
		const { title, first, last } = contact.name;
		const name = `${title} ${first} ${last}`.trim();
		const phone = contact.phone;
		const key = contact.login.username;
		return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />;
	};
	render() {
		return (
			<ul className="ui relaxed divided list selection" >
				{this.props.contacts.map(this.contactToContactItem)}
			</ul>
		)
	}


}

export default ContactsList;