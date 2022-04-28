import React, { useState } from "react";
import './App.scss';

function App() {

  const [isDeviceActive, setDeviceActive] = useState(false);
  const [isRMMToolsActive, setRMMToolsActive] = useState(false);
  const [isAutomationActive, setAutomationActive] = useState(false);
  const [isAlertManagementActive, setAlertManagementActive] = useState(false);
  const [isOSPatchingActive, setOSPatchingActive] = useState(false);
  const [isCollapsed, setCollapsed] = useState(true);
  const [isPined, setPined] = useState(false);

  const handleToggleDeviceActive = () => {
    setDeviceActive(!isDeviceActive);
  };

  const handleExpandDeviceOnHover = () => {
    if (isCollapsed) {
      setRMMToolsActive(false)
      setDeviceActive(true);
    }
  };

  const handleExpandRMMToolsOnHover = () => {
    if (isCollapsed) {
      setRMMToolsActive(true)
      setDeviceActive(false);
    }
  };

  const handleCollapseAllOnHover = () => {
    if (isCollapsed) {
      setRMMToolsActive(false)
      setDeviceActive(false);
    }
  }

  const handleToggleRMMToolsActive = () => {
    setRMMToolsActive(!isRMMToolsActive);
  };

  const handleToggleAutomationActive = () => {
    setAutomationActive(!isAutomationActive);
  };

  const handleToggleAlertManagementActive = () => {
    setAlertManagementActive(!isAlertManagementActive);
  };

  const handleToggleOSPatchingActive = () => {
    setOSPatchingActive(!isOSPatchingActive);
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
              <div className={`level1 hasChild ${isDeviceActive && (!isCollapsed) ? "expanded" : ""}`} onMouseEnter={handleExpandDeviceOnHover}>
                <div className='level1Item selected' onClick={handleToggleDeviceActive} >
                  <div className='deviceIcon icon'></div>
                  <span>Devices</span>
                  <div className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className='level2Item selected'>Computers</li>
                  <li className='level2Item'>Mobile</li>
                  <li className='level2Item'>Device Groups</li>
                  <li className='level2Item'>Communicator</li>
                  <li className='level2Item'>Secure Information Store</li>
                </ul>
              </div>


              <div className='level1' onMouseEnter={handleCollapseAllOnHover} ><div className='level1Item' ><div className='alertIcon icon'></div><span>Alert Management</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover} ><div className='level1Item' ><div className='reportingIcon icon'></div><span>Reporting</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover} ><div className='level1Item' ><div className='integrationsIcon icon'></div><span>Integration</span></div></div>

              <div className={`level1 hasChild ${isRMMToolsActive && (!isCollapsed) ? "expanded" : ""}`} onMouseEnter={handleExpandRMMToolsOnHover}>
                <div className='level1Item' onClick={handleToggleRMMToolsActive}>
                  <div className='automationIcon icon'></div>
                  <span>RMM Tools</span>
                  <div className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className={`level2 hasChild ${isAutomationActive && (!isCollapsed) ? "expanded" : ""}`}>
                    <li className='level2Item' onClick={handleToggleAutomationActive}>
                      <span>Automation</span>
                      <div className='chevronIcon icon'></div>
                    </li>
                    <ul className='level2Children'>
                      <li className='level3Item'>Tasks</li>
                      <li className='level3Item'>Scheduled Tasks</li>
                    </ul>
                  </li>

                  <li className={`level2 hasChild ${isAlertManagementActive && (!isCollapsed) ? "expanded" : ""}`}>
                    <li className='level2Item' onClick={handleToggleAlertManagementActive}>
                      <span>Alert Management</span>
                      <div className='chevronIcon icon'></div>
                    </li>
                    <ul className='level2Children'>
                      <li className='level3Item'>Intellimon Alerts</li>
                      <li className='level3Item'>Suspension</li>
                      <li className='level3Item'>Monitors</li>
                    </ul>
                  </li>

                  <li className={`level2 hasChild ${isOSPatchingActive && (!isCollapsed) ? "expanded" : ""}`}>
                    <li className='level2Item' onClick={handleToggleOSPatchingActive}>
                      <span>OS Patching</span>
                      <div className='chevronIcon icon'></div>
                    </li>
                    <ul className='level2Children'>
                      <li className='level3Item'>Patch Approvals</li>
                      <li className='level3Item'>Patch Exclusions</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className='group'>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='elementsIcon icon'></div><span>Elements</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='packagesIcon icon'></div><span>Packages</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='policiesIcon icon'></div><span>Policies</span></div></div>
            </div>

            <div className='group'>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='dashboardIcon icon'></div><span>Dashboard</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='quickAccessIcon icon'></div><span>Quick Access</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='patchesIcon icon'></div><span>Patches</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='scriptsIcon icon'></div><span>Scripts</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='reportsIcon icon'></div><span>Reports</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='adminIcon icon'></div><span>Admin</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='rmmSetupIcon icon'></div><span>RMM Setup</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='bdrIcon icon'></div><span>BDR</span></div></div>
              <div className='level1' onMouseEnter={handleCollapseAllOnHover}><div className='level1Item' ><div className='securityIcon icon'></div><span>Security</span></div></div>
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
