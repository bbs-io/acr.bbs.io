import React, { Component } from 'react';
import {
  NavigationMenuIcon,
  NavigationMoreorizIcon,
  NavigationMoreVertIcon,
  ContentSortIcon
} from '../icons';

import {
  IconMenu,
  IconButton,
  FontIcon, 
  SvgIcon,
  MenuItem,
  DropDownMenu,
  RaisedButton,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui';

export function AppToolbar(props) {
  return   <Toolbar className="toolbar">
    <ToolbarGroup firstChild={true} float="left">
      <DropDownMenu value={3}>
        <MenuItem value={1} primaryText="All Broadcasts" />
        <MenuItem value={2} primaryText="All Voice" />
        <MenuItem value={3} primaryText="All Text" />
        <MenuItem value={4} primaryText="Complete Voice" />
        <MenuItem value={5} primaryText="Complete Text" />
        <MenuItem value={6} primaryText="Active Voice" />
        <MenuItem value={7} primaryText="Active Text" />
      </DropDownMenu>
    </ToolbarGroup>

    <ToolbarGroup float="right">
      <ToolbarSeparator />
      <IconMenu iconButtonElement={
          <IconButton touch={true}>
            <NavigationMoreVertIcon />
          </IconButton>
        }>
        <MenuItem primaryText="Download" />
        <MenuItem primaryText="More Info" />
      </IconMenu>
    </ToolbarGroup>
    
    <ToolbarGroup float="right">
      <ToolbarTitle text="Options" />
      
      <IconButton touch={true}>
        <ContentSortIcon />
      </IconButton>
      
      <ToolbarSeparator />
      <RaisedButton label="Create Broadcast" primary={true} />
      
    </ToolbarGroup>

  </Toolbar>
};
