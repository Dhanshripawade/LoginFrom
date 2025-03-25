import React, { useState, useEffect } from "react";
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import Home from "../../components/Dashboard/Home";

function DashboardPage() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarToggle(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: sidebarToggle ? "80px" : "250px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar1 sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <div className="p-4 mt-5">
          <Home />
          
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
