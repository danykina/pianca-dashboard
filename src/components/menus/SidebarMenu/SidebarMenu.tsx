import React, { FunctionComponent } from 'react';

import { IconButton } from '@material-ui/core';

import { Link } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import VideocamIcon from '@material-ui/icons/Videocam';

const SidebarMenu: FunctionComponent = () => {
  return (
    <>
      <IconButton aria-label="dashboard" component={Link} to="/dashboard">
        <DashboardIcon fontSize="large" />
      </IconButton>

      <IconButton aria-label="webcam" component={Link} to="/webcams">
        <VideocamIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default SidebarMenu;
