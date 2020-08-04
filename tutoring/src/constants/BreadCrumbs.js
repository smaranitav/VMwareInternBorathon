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

const breadcrumbNameMap = {
    '/': 'Dashboard',
    '/': 'Profile',
    '/': 'My Uploads',
    '/': 'My Questions',
    '/': 'Following',
    '/': 'Calendar',
};

function ListItemLink(props) {
  const { to, iconValue, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={Link} to={to} {...other} >
        <ListItemIcon>
            icon
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
              <ListItemLink to="/" />
              <ListItemLink
                to="/inventory"
                open={this.state.open}
                onClick={this.handleClick}
                // iconValue={InventoryIcon}
              />
              <ListItemLink component={Link} to="/invoice" />
              <ListItemLink to="/shipments" />
              <ListItemLink to="/clinicalSamples" />
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
