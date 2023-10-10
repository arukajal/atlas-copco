import DashboardIcon from '@mui/icons-material/Dashboard';
import RuleIcon from '@mui/icons-material/Rule';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';
     
  const appSections = [
    {
      name: "Dashboard",
      to: "/",
      icon: DashboardIcon,
      tooltip: "DashBoard",
    },
    {
      name: "Manage Rules",
      to: "/manage-rules",
      icon: RuleIcon,
      tooltip: "Manage Rules",
    },
    {
      name: "Test",
      to: "/test",
      icon: BugReportIcon,
      tooltip: "Test",
    },
    {
      name: "Settings",
      to: "/settings",
      icon: SettingsIcon,
      tooltip: "Settings",
    },
   
  ];
  export default appSections;
  