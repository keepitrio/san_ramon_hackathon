import React, { Component } from 'react';
import { connect } from 'react-redux';

class OffersForum extends Component {
  renderOffers() {
    let offers = [
    {title: "title1", items: "item1", message: "This is a message."},
    {title: "title2", items: "item2", message: "This is a message."},
    {title: "title3", items: "item3", message: "This is a message."},
    {title: "title4", items: "item4", message: "This is a message."},
    {title: "title5", items: "item5", message: "This is a message."}
    ];

    return offers.map(offer => {
      return(
        <li key={offer.title} className="list-group-item">
          <h5>{offer.title}</h5>
          <p>Items: {offer.items}</p>
          <p>Message: {offers.message}</p>
        </li>
      );
    })
  }

  render() {
    return(
      <div>
        <h1>Offered Resources</h1>
        <ul className="list-group">
          {this.renderOffers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { offers: state.offers}
}

export default connect(mapStateToProps)(OffersForum);