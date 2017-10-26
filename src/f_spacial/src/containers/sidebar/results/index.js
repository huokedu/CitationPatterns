import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Results.css';

// NPM Modules
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Face from 'material-ui-icons/Face';
import File from 'material-ui-icons/InsertDriveFile';
import Divider from 'material-ui/Divider';


// Assets

// Actions

class SearchResults extends React.Component {

  render() {
    return (
      <div className="ResultsList">
        <List>
          {this.props.results.map((res, i) => {
            return (
              <ListItem button key={i}>
                <Avatar>
                  <Face/>
                </Avatar>
                <ListItemText primary={res} secondary="Jan 9, 2016" />
              </ListItem>
              );
            })
          }
          <Divider />
          {this.props.results.map((res, i) => {
            return (
              <ListItem button key={i+this.props.results.length}>
                <Avatar>
                  <File/>
                </Avatar>
                <ListItemText primary={res} secondary="Jan 9, 2016" />
              </ListItem>
              );
            })
          }
        </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
