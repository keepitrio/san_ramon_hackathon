import React, { Component } from 'react';
import { fetchChecklist, updateChecklist } from '../actions';
import { connect } from "react-redux";


class Checklist extends Component{

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchChecklist, checklist} = this.props;
    fetchChecklist(checklist);
  }


  handleClick(e){
    const index = parseInt(e.target.getAttribute('data-index'));
    const { updateChecklist, checklist } = this.props;
    updateChecklist(index, checklist);
    // this.forceUpdate();
  }

  renderCheckList() {
    const filtered = this.props.checklist.filter(line => line.completed === false)

    return filtered.map((line, index) => {
      return (
        <li key={index}
            className = "list">
          <div className="row">
            <div className="col-md-12">
              <input 
                data-index= {line.id}
                type="checkbox" 
                onClick={this.handleClick} 
                key={line.index}
              />&nbsp;{line.item}
              <hr />
            </div>
          </div>
        </li>
        )
      })
  }

  renderDoneList() {
    const filtered = this.props.checklist.filter(line => line.completed === true)

    return filtered.map((line, index) => {
      return (
        <li key={index}
            className = "list">
          <div className="row">
            { line.item}
          </div>
        </li>
        )
      })
  }

  render(){
    const list = this.renderCheckList();
    const doneList = this.renderDoneList();

    return(
      <div>
        <h1> Checklist </h1>
        <ul>
          {list}
        </ul>
        <h1> Done list </h1>
        <ul>
          {doneList}
        </ul>
      </div>
    )
  }
}
function mapStateToProps({checklist}) {
  return { checklist };
}

export default connect(mapStateToProps, { fetchChecklist, updateChecklist})(Checklist);
