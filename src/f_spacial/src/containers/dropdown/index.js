import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dropdown.css';
import './stylesheets/Tooltip.css';

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

  renderStatItem(value, description, key) {
    return  <div className="stat_item" key={key}>
              <div className="stat_value">
                {value}
              </div>
              <div className="stat_description">
                {description}
              </div>
            </div>;
  }

  renderListItems() {
		let items = [];
		for (let i = 0; i < this.props.list.length; i++) {
			const item = this.props.list[i];
			items.push(
        <div className="tooltip" key={i} onClick={this.select.bind(null, item)}>
  				{ item.component }
          <div className="tooltiptext">
            {/*
              Depdended on which stats exist
              we render the stats with descriptions
              see
              https://github.com/dnk0/CitationPatterns/issues/50
              for further discussion
            */}
            { item.stats.nodes            ? this.renderStatItem(item.stats.nodes, "Nodes", i + 'numberNodes')                : '' }
            { item.stats.edges            ? this.renderStatItem(item.stats.edges, "Edges", i + 'numberEdges')                : '' }
            { item.stats.diameter         ? this.renderStatItem(item.stats.diameter, "Diameter", i + 'diameter')             : '' }
            { item.stats.average_degree   ? this.renderStatItem(item.stats.average_degree, "ØDegree", i + 'avgDegree')       : '' }
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
