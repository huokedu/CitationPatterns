import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dropdown.css';
import './stylesheets/Tooltip.css';

// NPM Modules

// Assets
import StatItem from './stat_item';

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

  renderStatItem(value, description, key) {
    if (
        typeof value !== 'undefined'
        && typeof description !== 'undefined'
        && typeof key !== 'undefined'
    ) {
      return  <StatItem
        key={key}
        value={value}
        description={description}
      />
    }
  }

  renderListItems() {
		let items = [];
		for (let i = 0; i < this.props.list.length; i++) {
			const item = this.props.list[i];
			items.push(
        <div className="tooltip" key={i} onClick={this.select.bind(null, item)}>
  				{ item.component }
          <div className="tooltiptext">
            {this.renderStatItem( item.stats.nodes, "Nodes", i + 'numberNodes' )}
            {this.renderStatItem( item.stats.edges, "Edges", i + 'numberEdges' )}
            {this.renderStatItem( item.stats.diameter,"Diameter", i + 'diameter' )}
            {this.renderStatItem( item.stats.average_degree,  "ØDegree", i + 'avgDegree' )}
          </div>
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
          {this.props.selected.component}
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
});

const mapDispatchToProps = (dispatch) => ({
  //exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
