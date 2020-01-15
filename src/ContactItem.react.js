import React from 'react';

export class ContactItem extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <div className="ContactItem" data-id="contact-item" name="contact-item">
        <p data-id="full-name-label">
          Name: <strong data-id="content"><div class="inner-content" data-id="inner-content">{item.name}</div></strong>
        </p>
        <p>
          Gender: <strong data-id="content">{item.gender}</strong>
        </p>
        <p>
          Phone: <strong data-id="content">{item.phone}</strong>
        </p>
        <p>
          Address: <strong data-id="content">{item.street}, {item.city}</strong>
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
