import _ from 'underscore';
import React from 'react';
import {Counter} from './ContactCounter.react.js';

import {ContactItem} from './ContactItem.react';

export class ContactList extends React.Component {
  state = {
    query: null,
  };

  render() {
    const {query} = this.state;
    console.log({query})
    let lowerCaseQuery;
    if (query != null) {
      lowerCaseQuery = query.toLowerCase();
    }
    const items = this.props.items.filter(item => {
      return (
        !lowerCaseQuery ||
        (item.name.toLowerCase().includes(query) ||
          item.phone.toLowerCase().includes(query) ||
          item.street.toLowerCase().includes(query) ||
          item.city.toLowerCase().includes(query))
      );
    });

    const sortedItems = _.sortBy(items, item => {
      return item.name;
    });

    const renderedItems = sortedItems.map((item, i) => (
      <ContactItem
        key={item.id}
        item={item}
        onEditClick={this.props.onEditClick}
        onDeleteClick={this.props.onDeleteClick}
      />
    ));

    const body =
      renderedItems.length > 0 ? (
        renderedItems
      ) : (
        <p>There are no items to display</p>
      );

    return (
      <div className="ContactList">
        <Counter/>
        <div className="ContactListSearch" key="search">
          <div className="hidden-div" data-id="hidden-div"></div>
          <div className="hidden-div" data-id="hidden-div"></div>
          <input onChange={this.onSearchChange} data-id="search" placeholder="Search" />
          <button className="ContactListAdd" data-id="add-button" onClick={this.props.onAddClick}>
            Add
          </button>
        </div>
        <div className="ContactListItems" key="items">
          {body}
        </div>
      </div>
    );
  }

  onSearchChange = event => {
    this.setState({
      query: event.currentTarget.value.trim(),
    });
  };
}
