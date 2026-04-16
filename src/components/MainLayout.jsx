import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { 
  SearchIcon, BellIcon, HelpIcon, MenuIcon, HomeIcon, 
  InboxIcon, MapIcon, DatabaseIcon, SettingsIcon, LogOutIcon, ChevronRightIcon 
} from './Icons';
const brandLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 40' fill='none'%3E%3Ccircle cx='20' cy='20' r='10' fill='%23e46335'/%3E%3Ctext x='40' y='26' font-family='sans-serif' font-size='20' font-weight='bold' fill='%230f172a'%3Ecustomers.new%3C/text%3E%3C/svg%3E";

const Sidebar = ({ isMobile }) => {
  const [isSetupOpen, setIsSetupOpen] = useState(true);

  const getNavLinkClass = ({ isActive }, isNested = false) => {
    const base = isNested 
      ? "flex items-center gap-2 pl-6 pr-3 py-2.5 rounded-md font-medium text-nav-link transition-colors whitespace-nowrap relative overflow-hidden"
      : "flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors font-medium text-nav-link relative overflow-hidden";
      
    const active = isActive 
      ? "bg-card shadow-sm text-text" 
      : "text-text-subtle hover:text-text hover:bg-card-sidepanel";
      
    return `${base} ${active}`;
  };

  const renderActivePill = (isActive) => {
    return isActive ? <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md"></div> : null;
  };

  return (
    <div className={`${isMobile ? 'flex' : 'hidden md:flex'} w-sidebar flex-col bg-background h-full pt-sidebar-pad pb-6 px-4`}>
      <a href="/" className="flex items-center px-4 mb-8 mt-[15px]">
        <img src={brandLogo} alt="customers.new logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain" />
      </a>

      <nav className="flex flex-col gap-1">
        <NavLink to="/dashboard" className={(props) => getNavLinkClass(props, false)}>
          {(props) => (
            <>
              {renderActivePill(props.isActive)}
              <HomeIcon /> 
              Dashboard
            </>
          )}
        </NavLink>
        <NavLink to="/inbox" className={(props) => getNavLinkClass(props, false)}>
          {(props) => (
            <>
              {renderActivePill(props.isActive)}
              <InboxIcon /> Inbox
            </>
          )}
        </NavLink>
        <NavLink to="/journey" className={(props) => getNavLinkClass(props, false)}>
          {(props) => (
            <>
              {renderActivePill(props.isActive)}
              <MapIcon /> Journey
            </>
          )}
        </NavLink>
        <NavLink to="/data-enrichment" className={(props) => getNavLinkClass(props, false)}>
          {(props) => (
            <>
              {renderActivePill(props.isActive)}
              <DatabaseIcon /> Data Enrichment
            </>
          )}
        </NavLink>
      </nav>

      <div 
        className="mt-8 mb-2 px-3 flex justify-between items-center cursor-pointer group" 
        onClick={() => setIsSetupOpen(!isSetupOpen)}
      >
        <span className="text-[10px] sm:text-xs font-semibold text-text-subtle uppercase tracking-wider group-hover:text-text transition-colors">
          Setup
        </span>
        <ChevronRightIcon className={`w-3 h-3 text-text-subtle transition-transform duration-200 ${isSetupOpen ? 'rotate-90' : ''}`} />
      </div>
      
      {isSetupOpen && (
        <nav className="flex flex-col gap-1">
          <NavLink to="/widget" className={(props) => getNavLinkClass(props, true)}>
            {(props) => (
              <>
                {renderActivePill(props.isActive)}
                <SettingsIcon className="w-4 h-4 shrink-0" /> customers.new Widget
              </>
            )}
          </NavLink>
          <NavLink to="/train" className={(props) => getNavLinkClass(props, true)}>
            {(props) => (
              <>
                {renderActivePill(props.isActive)}
                <MapIcon className="w-4 h-4 shrink-0" /> Train customers.new
              </>
            )}
          </NavLink>
          <NavLink to="/settings" className={(props) => getNavLinkClass(props, true)}>
            {(props) => (
              <>
                {renderActivePill(props.isActive)}
                <SettingsIcon className="w-4 h-4 shrink-0" /> Settings
              </>
            )}
          </NavLink>
        </nav>
      )}

      <div className="mt-auto pt-8 flex px-3">
        <a href="#" className="flex items-center gap-3 text-text-subtle hover:text-text transition-colors font-medium text-nav-link">
          <LogOutIcon /> Sign out
        </a>
      </div>
    </div>
  );
};

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isInbox = location.pathname.includes('/inbox');

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      
      {/* Mobile Fixed Top App Bar */}
      <header className="md:hidden flex h-topbar fixed top-0 w-full bg-background z-50 items-center justify-between px-4 border-b border-border-soft">
        <div className="flex items-center gap-3">
          <MenuIcon 
            className="text-text cursor-pointer hover:opacity-80 transition-opacity shrink-0" 
            onClick={() => setIsMobileMenuOpen(true)} 
          />
          <img src={brandLogo} alt="customers.new logo" className="h-[22px] w-auto object-contain" />
        </div>
        <SearchIcon className="text-text-subtle" />
      </header>

      {/* Mobile Off-Canvas Drawer */}
      <div className={`md:hidden fixed inset-0 z-50 transition-colors duration-300 ${isMobileMenuOpen ? 'pointer-events-auto bg-black/50' : 'pointer-events-none bg-black/0'}`}>
         {/* Drawer Overlay (closes drawer on click) */}
         <div 
           className="absolute inset-0" 
           onClick={() => setIsMobileMenuOpen(false)}
         ></div>
         
         {/* Drawer Panel */}
         <div className={`w-sidebar h-full bg-background relative shadow-page transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <Sidebar isMobile={true} />
         </div>
      </div>

      {/* Desktop Sidebar */}
      <Sidebar isMobile={false} />

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col bg-background min-w-0">
        
        {/* Desktop Top Utility Bar */}
        <header className="hidden md:flex h-[64px] items-center justify-between px-8 z-10 w-full shrink-0 bg-background">
          <div className="flex items-center text-text-subtle gap-2 text-sm bg-white px-4 py-2 rounded-md border border-border-soft w-64 shadow-md shadow-black/5">
            <SearchIcon className="opacity-50" />
            <span>Search for anything</span>
          </div>
          <div className="flex items-center gap-5 text-text-subtle">
            <HelpIcon className="cursor-pointer hover:text-text transition-colors" />
            <BellIcon className="cursor-pointer hover:text-text transition-colors" />
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-border-soft cursor-pointer shadow-md shadow-black/5">
               <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Main Curved Canvas */}
        <main className={`flex-1 bg-background-content md:rounded-tl-[20px] shadow-page overflow-y-auto relative pt-[64px] pb-[70px] md:pb-10 ${isInbox ? 'md:pt-2' : 'md:pt-6'}`}>
          <Outlet />
        </main>
      </div>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav className="md:hidden flex fixed bottom-0 w-full bg-card shadow-nav z-50 border-t border-border-soft justify-around items-center h-[70px] pb-safe text-text-subtle">
        <NavLink to="/dashboard" className={({ isActive }) => `flex flex-col items-center gap-1.5 cursor-pointer w-1/4 transition-colors ${isActive ? 'text-primary' : 'hover:text-text'}`}>
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </NavLink>
        <NavLink to="/inbox" className={({ isActive }) => `flex flex-col items-center gap-1.5 cursor-pointer w-1/4 transition-colors ${isActive ? 'text-primary' : 'hover:text-text'}`}>
          <InboxIcon className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Inbox</span>
        </NavLink>
        <NavLink to="/journey" className={({ isActive }) => `flex flex-col items-center gap-1.5 cursor-pointer w-1/4 transition-colors ${isActive ? 'text-primary' : 'hover:text-text'}`}>
          <MapIcon className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Journey</span>
        </NavLink>
        <div className="flex flex-col items-center gap-1.5 hover:text-text transition-colors cursor-pointer w-1/4">
          <MenuIcon className="w-5 h-5" />
          <span className="text-[10px] font-semibold">More</span>
        </div>
      </nav>

    </div>
  );
}
