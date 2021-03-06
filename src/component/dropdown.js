import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/Language';
import PublicIcon from '@material-ui/icons/Public';
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from '@material-ui/icons/Star';
import {
    Link
} from "react-router-dom";
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <MenuIcon/>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                    <Link to={"/world"}>
                <StyledMenuItem>
                    <ListItemIcon>
                        <PublicIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="World Overall" />
                </StyledMenuItem>
                    </Link>
                    <Link to={"/vietnam"}>
                <StyledMenuItem>
                    <ListItemIcon>
                        <StarIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Vietnam" />
                </StyledMenuItem>
                    </Link>
                <StyledMenuItem>
                    <ListItemIcon>
                        <LanguageIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="World Within 7 days " />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
