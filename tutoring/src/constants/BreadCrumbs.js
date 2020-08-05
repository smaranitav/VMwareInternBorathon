import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@material-ui/core";
import HomeIcon from '../constants/images/home.svg'
import ProfileIcon from '../constants/images/person.svg'
import UploadsIcon from '../constants/images/uploads.svg'
import QuestionsIcon from '../constants/images/help.svg'
import WatchlistIcon from '../constants/images/watchlist.svg'
import CalendarIcon from '../constants/images/calendar.svg'

const breadcrumbNameMap = {
    '/': 'Dashboard',
    '/profile': 'Profile',
    '/myUploads': 'Uploads',
    '/myQuestions': 'My Questions',
    '/following': 'Watchlist',
    '/calendar': 'Calendar',
};

function ListItemLink(props) {
  const { to, iconValue, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={Link} to={to} {...other} >
        <ListItemIcon>
        <img src={iconValue} />
        </ListItemIcon>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 240
  },
  lists: {
    marginTop: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
});

class RouterBreadcrumbs extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <nav className={classes.lists} aria-label="Mailbox folders">
            <List>
              <ListItemLink to="/" iconValue={HomeIcon} />
              <ListItemLink
                to="/profile"
                // open={this.state.open}
                // onClick={this.handleClick}
                iconValue={ProfileIcon}
              />
              <ListItemLink to="/myUploads" iconValue={UploadsIcon}/>
              <ListItemLink to="/myQuestions" iconValue={QuestionsIcon}/>
              <ListItemLink to="/following" iconValue={WatchlistIcon}/>
              <ListItemLink to="/calendar" iconValue={CalendarIcon}/>
            </List>
          </nav>
        </div>
    );
  }
}

RouterBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RouterBreadcrumbs);
