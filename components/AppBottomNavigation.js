import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Book, BubbleChart, Laptop, Person } from "@material-ui/icons";
import Scrollspy from "react-scrollspy";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  scrollspy: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
});

export default function AppBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [elements, setElements] = useState(null);

  const sections = ["about", "skills", "projects", "blogs"];

  useEffect(() => {
      const _elements = [];

      sections.forEach((sectionId) => {
        _elements.push(document.querySelector("#" + sectionId));
      });

      setElements(_elements);
  }, []);

  return (
    <Scrollspy
      items={sections}
      className={classes.scrollspy}
      onUpdate={(section) => {
        setValue(sections.indexOf(section.id));
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

          if (elements !== null) {
            elements[newValue].scrollIntoView();
          }
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="About" icon={<Person />} />
        <BottomNavigationAction label="Skills" icon={<BubbleChart />} />
        <BottomNavigationAction label="Projects" icon={<Laptop />} />
      </BottomNavigation>
    </Scrollspy>
  );
}
