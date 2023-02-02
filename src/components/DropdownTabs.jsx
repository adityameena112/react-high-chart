import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  tabs: {
    display: "flex"
  },
  select: {
    marginLeft: theme.spacing(2)
  }
}));

const DropdownTabs = ({ onChartTypeChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [dropdownValue, setDropdownValue] = useState("bar");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDropdownChange = event => {
    setDropdownValue(event.target.value);
    onChartTypeChange(event.target.value)
  };

  return (
    <div className={classes.tabs}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Farmer Type" value={0} />
        <Tab label="Gender" value={1} />
        <Tab label="Caste" value={2} />
      </Tabs>
      <Select
        className={classes.select}
        value={dropdownValue}
        onChange={handleDropdownChange}
        label="Region"
      >
        <MenuItem value="bar">Bar</MenuItem>
        <MenuItem value="line">Line</MenuItem>
        <MenuItem value="column">Column</MenuItem>
      </Select>
    </div>
  );
};

export default DropdownTabs;
