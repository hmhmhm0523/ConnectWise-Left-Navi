import React, { useState } from "react";
import './App.scss';

function App() {

  const [isDeviceActive, setDeviceActive] = useState(false);
  const [isAutomationActive, setAutomationActive] = useState(false);
  const [isCollapsed, setCollapsed] = useState(true);
  const [isPined, setPined] = useState(false);

  const handleToggleDeviceActive = () => {
    setDeviceActive(!isDeviceActive);
  };

  const handleExpandDeviceOnHover = () => {
    if (isCollapsed) {
      setAutomationActive(false)
      setDeviceActive(true);
    }
  };

  const handleExpandAutomationOnHover = () => {
    if (isCollapsed) {
      setAutomationActive(true)
      setDeviceActive(false);
    }
  };

  const handleCollapseAllOnHover = () => {
    if (isCollapsed) {
      setAutomationActive(false)
      setDeviceActive(false);
    }
  }

  const handleToggleAutomationActive = () => {
    setAutomationActive(!isAutomationActive);
  };

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handleTogglePined = () => {
    setPined(!isPined);
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='logo'></div>
        <div className='flexSpacer'></div>
        <div className='profile'></div>
      </div>
      <div className='contentPanel'>
        <div className={`leftNavi ${isCollapsed ? "collapsed" : ""}`}
          onMouseEnter={() => isPined ? '' : setCollapsed(false)}
          onMouseLeave={() => isPined ? '' : setCollapsed(true)}>
          <div className='topBar'>
            <div onClick={handleToggleCollapse} className={`icon ${isCollapsed ? 'rightArrow' : 'leftArrow'}`}></div>
            <div className='flexSpacer'></div>
            <div onClick={handleTogglePined} className={`pinButton icon ${isPined ? 'pined' : ''}`}></div>
          </div>
          <div className='navigationContainer'>
            <div className='group'>
              {/* <h4>Workspace</h4> */}
              <div className={`level1 hasChild ${isDeviceActive && (!isCollapsed) ? "expanded" : ""}`}>
                <div className='level1Item selected' onClick={handleToggleDeviceActive} onMouseEnter={handleExpandDeviceOnHover}>
                  <div className='deviceIcon icon'></div>
                  <span>Devices</span>
                  <div className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className='level2Item selected'>Workstations & Servers</li>
                  <li className='level2Item'>Device Groups</li>
                </ul>
              </div>
              

              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='alertIcon icon'></div><span>Alert Management</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='reportingIcon icon'></div><span>Reporting</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='integrationsIcon icon'></div><span>Integration</span></div></div>

              <div className={`level1 hasChild ${isAutomationActive ? "expanded" : ""}`}>
                <div className='level1Item' onClick={handleToggleAutomationActive} onMouseEnter={handleExpandAutomationOnHover}>
                  <div className='automationIcon icon'></div>
                  <span>Automation</span>
                  <div className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className='level2Item'>Tasks</li>
                  <li className='level2Item'>Scheduled Tasks</li>
                </ul>
              </div>
            </div>

            <div className='group'>
              {/* <h4>Settings</h4> */}
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='elementsIcon icon'></div><span>Elements</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='packagesIcon icon'></div><span>Packages</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='policiesIcon icon'></div><span>Policies</span></div></div>
            </div>

            <div className='group'>
              {/* <h4>Classic</h4> */}
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='dashboardIcon icon'></div><span>Dashboard</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='quickAccessIcon icon'></div><span>Quick Access</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='patchesIcon icon'></div><span>Patches</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='scriptsIcon icon'></div><span>Scripts</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='reportsIcon icon'></div><span>Reports</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='adminIcon icon'></div><span>Admin</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='rmmSetupIcon icon'></div><span>RMM Setup</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='bdrIcon icon'></div><span>BDR</span></div></div>
              <div className='level1' ><div className='level1Item' onMouseEnter={handleCollapseAllOnHover}><div className='securityIcon icon'></div><span>Security</span></div></div>
            </div>

          </div>
        </div>
        <div className={`table ${isPined ? 'pined' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        </div>
        <div className='toolbar'>
          <div className='iconCircle'></div>
          <div className='iconCircle'></div>
          <div className='iconCircle'></div>
          <div className='flexSpacer'></div>

        </div>
      </div>
    </div>
  );
}

export default App;
