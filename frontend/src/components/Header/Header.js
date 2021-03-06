import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = (theme) => ({
	title: {
		fontSize: 24,
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	left: {
		flex: 1,
	},
	leftLinkActive: {
		color: theme.palette.common.white,
	},
	right: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	rightLink: {
		fontSize: 14,
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
	},
	linkSecondary: {
		color: theme.palette.secondary.main,
	},
});

function Header(props) {
	const {classes} = props;
	return (<div>
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<div className={classes.left}>
					<Link
						variant="h6"
						underline="none"
						color="inherit"
						className={classes.title}
						href="/home"
					>
						{'Playbook'}
					</Link>
				</div>
				
				<div className={classes.right}>
					<Link
						variant="h6"
						underline="none"
						className={clsx(classes.rightLink)}
						href="/results"
					>
						{'Results'}
					</Link>
				</div>
			</Toolbar>
		</AppBar>
		<div className={classes.placeholder}/>
	</div>);

}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);