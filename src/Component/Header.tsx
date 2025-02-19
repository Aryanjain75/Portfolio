import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  School as SchoolIcon,
  Work as WorkSharpIcon,
  BusinessCenter as BusinessCenterSharpIcon,
  Category as CategorySharpIcon,
  Person as PersonIcon,
  ContactMail as ContactIcon,
} from "@mui/icons-material";

const menuItems = [
  { icon: <HomeIcon />, label: "Home", id: "home" },
  { icon: <SchoolIcon />, label: "Education", id: "education" },
  { icon: <WorkSharpIcon />, label: "Experience", id: "education" },
  { icon: <BusinessCenterSharpIcon />, label: "Projects", id: "projects" },
  { icon: <CategorySharpIcon />, label: "Skills", id: "skills" },
  { icon: <PersonIcon />, label: "About Me", id: "home" },
  { icon: <ContactIcon />, label: "Contact", id: "contact" },
];

function Header() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="bg-blue-300/30 relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex bg-transparent flex-wrap justify-center">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            className=" p-1 sm:p-2 m-0.5 sm:m-1 cursor-pointer"
            title={item.label}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll(item.id)}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6">{item.icon}</div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Header;
