import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dropdown.css';

// NPM Modules

// Assets

// Actions

class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state={
      listVisible:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.select = this.select.bind(this);
    this.renderListItems = this.renderListItems.bind(this);

  }

  select(item) {
    this.props.handleSelect(item);
    this.setState({
      listVisible: false
    });
  }

  handleClick() {
    this.setState({
      listVisible: !this.state.listVisible
    });
  }

  renderListItems() {
		var items = [];
		for (var i = 0; i < this.props.list.length; i++) {
			var item = this.props.list[i];
			items.push(<div key={i} onClick={this.select.bind(null, item)}>
				<span>{item.name}</span>
				<i className="fa fa-check"></i>
			</div>);
		}
		return items;
	}

  render() {
    return (
      <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
	      <div
          className={"dropdown-display" + (this.state.listVisible ? " clicked": "")}
          onClick={this.handleClick}
        >
          <span>
            {this.props.selected.name}
          </span>
          <i className="fa fa-angle-down">
          </i>
        </div>
		    <div className="dropdown-list">
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  //exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
