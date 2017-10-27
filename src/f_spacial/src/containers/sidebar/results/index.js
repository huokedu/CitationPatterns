import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Results.css';

// NPM Modules
import Grid from 'material-ui/Grid';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';

// Assets

// Actions

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.displayAuthor = this.displayAuthor.bind(this);
    this.displayTitle = this.displayTitle.bind(this);
  }

  displayAuthor(author_name) {
    let new_author_name = author_name.trim();
    if(new_author_name.length > 23) {
      new_author_name = new_author_name.substring(0,20);
      new_author_name = new_author_name.trim();
      new_author_name += "...";
    }
    return new_author_name;
  }

  displayTitle(title) {
    let new_title = title.trim();
    if(new_title.length > 63) {
      new_title = new_title.substring(0, 60);
      new_title = new_title.trim();
      new_title += "...";
    }
    return new_title;
  }

  render() {
    return (
      <div className="ResultsList">
        <ul className="List">
          {this.props.results.map((res, i) => {
            return (
              <Grid key={i} container direction={'column'} spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <li>
                    <Grid container direction={'column'} spacing={0}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="ListItem_Header">
                          <Grid container direction={'row'} spacing={0}>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                              <div className="ListItem_Author">
                                {this.displayAuthor(res.author)}
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className="ListItem_Title">
                          {this.displayTitle(res.name+res.name)}
                        </div>
                      </Grid>
                    </Grid>
                  </li>
                </Grid>
              </Grid>
              );
            })
          }
        </ul>
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
