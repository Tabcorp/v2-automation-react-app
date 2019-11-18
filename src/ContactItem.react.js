import React from 'react';

export class ContactItem extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <div className="ContactItem" data-id="contact-item" name="contact-item">
        <p>
          Name: <strong>{item.name}</strong>
        </p>
        <p>
          Gender: {item.gender}
        </p>
        <p>Phone: {item.phone}</p>
        <p>
          Address: {item.street}, {item.city}
        </p>
        <button
          className="ContactItemEdit"
          data-id="edit"
          name="edit"
          key="edit"
          onClick={this.onEditClick}
        >
          Edit
        </button>
        <button
          className="ContactItemDelete"
          data-id="delete"
          name="delete"
          key="delete"
          onClick={this.onDeleteClick}
        >
          Delete
        </button>
      </div>
    );
  }

  onEditClick = () => {
    const {onEditClick} = this.props;
    if (onEditClick) onEditClick(this.props.item);
  };

  onDeleteClick = () => {
    const {onDeleteClick} = this.props;
    if (onDeleteClick) onDeleteClick(this.props.item);
  };
}
