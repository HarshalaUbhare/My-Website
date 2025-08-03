import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import LeisurePursuits from "./LeisurePursuits";
import Contact from "./Contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
  faFileAlt,
  faHeart,
  faLaptop,
  faShareNodes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "About", icon: faUser, label_full: "About  Me" },
    { label: "Resume", icon: faFileAlt },
    { label: "Projects", icon: faLaptop },
    { label: "Leisure Pursuits", icon: faHeart },
    { label: "Connect", icon: faShareNodes },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
          paddingX: 2,
          paddingY: 2,
        }}
      >
        {" "}
        <Box className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold mr-2">
          {tabs[value].label_full || tabs[value].label}
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            width: "100%",
            "& .MuiTabs-flexContainer": {
              flexWrap: "nowrap",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="dynamic icon tabs"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            className="gap-10 border-l border-b rounded-bl-3xl rounded-br-none shadow-lg border-[rgba(255,255,255,0.09)]"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                {...a11yProps(index)}
                style={{ color: "white", minWidth: "100px" }}
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    <FontAwesomeIcon
                      icon={tab.icon}
                      style={{ width: "16px", height: "20px" }}
                    />
                    {value === index && tab.label}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      {/* About  Section */}
      <CustomTabPanel value={value} index={0}>
        <About />
      </CustomTabPanel>

      {/* Eduction Section */}
      <CustomTabPanel value={value} index={1}>
        <Education />
      </CustomTabPanel>

      {/* project sections */}
      <CustomTabPanel value={value} index={2}>
        <div className="h-[300px]">
          <Projects />
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <LeisurePursuits />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <div className="h-[300px]">
          <Contact />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
