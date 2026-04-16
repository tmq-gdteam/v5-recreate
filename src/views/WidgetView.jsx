import React, { useState } from 'react';
import { ChevronRightIcon } from '../components/Icons';

// SVG Icons
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-subtle">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const SettingsGearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-subtle hover:text-text cursor-pointer">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const BackButton = ({ onClick }) => (
  <button onClick={onClick} className="w-8 h-8 rounded-full border border-border-soft flex items-center justify-center hover:bg-background-content transition-colors mr-3">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
  </button>
);

const GlobeIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center border border-success/20">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#46a756" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  </div>
);

// Child Components for specific states
const EmptyState = ({ setViewState }) => (
  <div className="flex-1 flex flex-col items-center justify-center -mt-20">
     <div className="w-24 h-24 bg-[#ffb29a]/20 rounded-full flex items-center justify-center mb-6">
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e14617" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
     </div>
     <h2 className="text-2xl font-black text-text mb-2 tracking-tight">No widgets yet</h2>
     <p className="text-text-paragraph text-sm max-w-sm text-center mb-6 leading-relaxed">
       Create your first widget to get started. Each widget can be embedded on your brand's website or channel.
     </p>
     <button 
       onClick={() => setViewState('list')} 
       className="px-6 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-full font-bold shadow-md shadow-black/10 transition-colors flex items-center gap-2"
     >
       + Create Widget
     </button>
  </div>
);

const ListState = ({ setViewState }) => (
  <div className="flex flex-col gap-6 w-full mt-4">
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2"><SearchIcon /></div>
          <input type="text" placeholder="Search" className="pl-9 pr-4 py-2 border border-border-soft rounded-md text-sm w-64 focus:outline-none focus:border-border-brand bg-white" />
        </div>
        <div className="relative">
          <select className="appearance-none pl-4 pr-10 py-2 border border-border-soft rounded-md text-sm bg-white focus:outline-none text-text font-medium cursor-pointer">
            <option>All Status</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </div>
      <button 
         onClick={() => setViewState('setup')}
         className="px-5 py-2 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-full font-bold shadow-md shadow-black/10 transition-colors text-sm flex items-center gap-2"
      >
        + Create Widget
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {[1, 2, 3, 4, 5, 6].map((idx) => (
        <div key={idx} className="bg-card border border-border-soft rounded-card p-5 shadow-sm hover:shadow-md shadow-black/10 flex flex-col justify-between transition-shadow group">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <GlobeIcon />
              <div>
                <div className="font-bold text-[15px] text-text">My Sample customers.new Widget</div>
                <div className="text-xs text-text-subtle font-medium">Created 2 weeks ago</div>
              </div>
            </div>
            <div onClick={(e) => { e.stopPropagation(); setViewState('settings'); }}><SettingsGearIcon /></div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-[#f59e0b] rounded-full relative cursor-pointer">
                 <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs font-semibold text-text-subtle">Widget is Active</span>
            </div>
            <button 
              onClick={() => setViewState('setup')}
              className="px-6 py-1.5 border border-border-soft hover:bg-background-content rounded-full text-text text-sm font-bold shadow-sm transition-colors"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SetupState = ({ setViewState }) => (
  <div className="flex flex-col gap-6 w-full mt-2">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 items-start w-full">
       
       <div className="flex flex-col gap-6 w-full">
         <div className="text-text-subtle text-sm font-bold">Current Plan</div>
         
         <div className="grid grid-cols-2 gap-4 mb-2">
           <div className="bg-white border border-border-soft shadow-sm shadow-black/5 rounded-[14px] p-5">
             <div className="font-bold text-[18px] text-text mb-3 flex items-center gap-1.5">Free <span>✨</span></div>
             <div className="flex flex-col gap-2">
               <div className="flex items-start gap-2 text-sm text-text font-medium"><span className="text-success text-base leading-none">✓</span> Text-based customer support</div>
               <div className="flex items-start gap-2 text-sm text-text font-medium"><span className="text-success text-base leading-none">✓</span> Website content-aware responses</div>
             </div>
           </div>
           <div className="bg-transparent border border-transparent p-5">
             <div className="font-bold text-[18px] text-text mb-3 flex items-center gap-1.5">Conversational <span className="opacity-70">🎤</span></div>
             <div className="flex flex-col gap-2">
               <div className="flex items-start gap-2 text-sm text-text font-medium"><span className="text-success text-base leading-none">✓</span> Natural voice conversations</div>
               <div className="flex items-start gap-2 text-sm text-text font-medium"><span className="text-success text-base leading-none">✓</span> Enhanced lead capture</div>
             </div>
           </div>
         </div>

         <div className="bg-white border border-border-soft rounded-card shadow-sm w-full">
           <div className="p-4 border-b border-border-soft flex justify-between items-center cursor-pointer hover:bg-background-content/50">
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-full bg-success/20 text-success flex items-center justify-center text-xs font-black">1</div>
               <span className="font-bold text-text">Connect Website</span>
             </div>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
           </div>
           <div className="p-5 flex flex-col gap-4">
             <div className="flex w-full">
               <input type="text" defaultValue="https://www.yourwebsite.com/" className="flex-1 border border-border-soft border-r-0 rounded-l-md px-3 py-2 text-sm focus:outline-none text-text shadow-sm" />
               <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2 rounded-r-md text-sm font-bold shadow-sm transition-colors border border-[#f59e0b]">Scan Website</button>
             </div>
             <div className="w-full bg-[#dcfce7] h-2 rounded-full overflow-hidden">
               <div className="bg-success h-full w-[45%]"></div>
             </div>
           </div>
         </div>

         <div className="bg-white border border-border-soft rounded-card shadow-sm w-full">
           <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-background-content/50">
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-full bg-background-content text-text-subtle border border-border-soft flex items-center justify-center text-xs font-black">2</div>
               <span className="font-bold text-text">Customize Widget</span>
             </div>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
           </div>
         </div>
       </div>

       <div className="flex flex-col gap-4 w-full">
         <div className="font-bold text-text mb-[-4px]">Live Preview</div>
         
         <div className="bg-card border border-border-soft rounded-[14px] shadow-md shadow-black/10 overflow-hidden flex flex-col h-[320px]">
           <div className="bg-[#f0f0f0] border-b border-border-soft p-2 flex items-center gap-2">
             <div className="flex gap-1.5 ml-2">
               <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
             </div>
             <div className="bg-white text-[10px] text-text-subtle font-medium rounded-sm mx-auto px-16 py-1 border border-border-soft shadow-sm">
               yourwebsite.com
             </div>
           </div>
           <div className="flex-1 bg-white p-6 relative">
             <div className="w-2/3 h-8 bg-background-content rounded-sm mb-4"></div>
             <div className="w-full h-3 bg-background-content/50 rounded-sm mb-2"></div>
             <div className="w-5/6 h-3 bg-background-content/50 rounded-sm mb-2"></div>
             <div className="w-4/5 h-3 bg-background-content/50 rounded-sm mb-8"></div>
             
             <div className="w-1/3 h-16 bg-background-content rounded-sm mb-4"></div>
             
             <div className="absolute right-4 bottom-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-md border border-border-soft flex items-center justify-center relative bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Leo')] bg-contain bg-center">
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
             </div>
           </div>
         </div>

         <div className="bg-[#fdf8ec] border border-[#f59e0b]/20 p-4 rounded-md shadow-sm w-full flex justify-between items-center mt-2">
            <span className="text-xs text-text font-medium w-2/3 leading-tight">Add natural voice to your assistant. Upgrade to Conversational for <span className="font-bold">$20/mo, unlimited.</span></span>
            <button className="bg-white border border-[#f59e0b] text-[#f59e0b] px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#f59e0b]/5 transition-colors shadow-sm">Upgrade Now</button>
         </div>

         <div className="bg-white border border-border-soft p-5 rounded-card shadow-md shadow-black/10 mt-2">
           <div className="font-bold text-sm text-text mb-4">Quick Actions</div>
           
           <div className="flex justify-between items-center mb-6">
             <span className="text-xs text-text-subtle font-medium">Status</span>
             <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-text">Widget is Active</span>
               <div className="w-10 h-5 bg-[#f59e0b] rounded-full relative cursor-pointer shadow-inner">
                 <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
               </div>
             </div>
           </div>

           <div className="flex flex-col gap-3">
             <span className="text-[11px] font-bold text-text-subtle uppercase tracking-wide">Widget Controls</span>
             <div className="grid grid-cols-2 gap-3">
               <button className="w-full py-2 border border-border-soft rounded-full text-sm font-bold text-text-paragraph hover:bg-background-content shadow-sm transition-colors flex justify-center items-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                 Deactivate
               </button>
               <button className="w-full py-2 bg-[#f59e0b] rounded-full text-sm font-bold text-white shadow-sm hover:bg-[#d97706] transition-colors flex justify-center items-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                 Publish
               </button>
               <button className="w-full py-2 border border-border-soft rounded-full text-sm font-bold text-text-paragraph hover:bg-background-content shadow-sm transition-colors flex justify-center items-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                 Copy Code
               </button>
               <button className="w-full py-2 border border-border-soft rounded-full text-sm font-bold text-text hover:bg-background-content shadow-sm transition-colors flex justify-center items-center gap-2">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                 Open
               </button>
             </div>
           </div>
         </div>

         <div className="bg-white border border-border-soft p-4 rounded-md shadow-sm w-full flex justify-between items-center cursor-pointer hover:bg-background-content/50 mt-2">
           <span className="text-sm text-[#f59e0b] font-bold">Show Code</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
         </div>

       </div>
    </div>
  </div>
);

const SettingsState = ({ setViewState }) => (
  <div className="flex flex-col gap-6 w-full mt-2">
    
    {/* Navigation Tabs */}
    <div className="flex border-b border-border-soft overflow-x-auto whitespace-nowrap">
      <div className="px-4 py-3 border-b-2 border-text text-sm font-bold text-text cursor-pointer flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
        Personality & Greetings
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        Voice
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        Language
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        Integrations
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Analysis
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        Tools
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div className="px-4 py-3 text-sm font-medium text-text-subtle hover:text-text cursor-pointer flex items-center gap-2 opacity-50">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        Advanced
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
    </div>

    {/* Upgrade Banner */}
    <div className="bg-[#f4fffd] border border-success/30 rounded-card p-4 flex justify-between items-center w-full shadow-sm mt-2">
       <div className="flex items-center gap-4">
         <div className="w-10 h-10 rounded-full bg-white border border-border-soft flex items-center justify-center text-accent-teal shadow-sm text-xl pb-1">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
         </div>
         <div>
           <div className="font-bold text-text mb-0.5">Unlock Advanced Features</div>
           <div className="text-sm text-text-paragraph">Upgrade to Pro for voice capabilities, advanced tools, and detailed analytics</div>
         </div>
       </div>
       <div className="flex items-center gap-4">
         <div className="flex flex-col items-end mr-2">
           <span className="text-[10px] text-text-subtle font-bold uppercase tracking-wider">Current Plan</span>
           <span className="text-success font-bold text-sm">Free</span>
         </div>
         <button className="bg-white border border-text/20 text-text px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-background-content transition-colors">Upgrade Now</button>
       </div>
    </div>

    {/* Main Settings Content */}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8 items-start w-full mt-2">
       
       {/* Form */}
       <div className="flex flex-col gap-6">
         <div className="flex flex-col">
           <label className="text-sm font-bold text-text mb-2">customers.new Name</label>
           <input type="text" defaultValue="Leo" className="w-full bg-background-content/50 border border-border-soft rounded-md px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-text/30" />
           <p className="text-xs text-text-paragraph mt-2">This is how customers.new will introduce itself to customers.</p>
         </div>
         
         <div className="flex flex-col">
           <label className="text-sm font-bold text-text mb-2">Greeting Message</label>
           <textarea rows={3} className="w-full bg-background-content/50 border border-border-soft rounded-md px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-text/30 resize-none" defaultValue="Hi there! I'm Leo, your go-to for any SmartHome Innovations queries. How can I assist you today?" />
           <p className="text-xs text-text-paragraph mt-2">The first message customers will see when they start a conversation.</p>
         </div>

         <div className="flex flex-col">
           <label className="text-sm font-bold text-text mb-2">Personality Prompt</label>
           <textarea rows={4} className="w-full bg-background-content/50 border border-border-soft rounded-md px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-text/30 resize-none text-text-subtle text-justify" defaultValue="You are a helpful and friendly customer support assistant. Be professional yet approachable, always maintain a positive tone, and provide clear and concise answers. If you don't know something, be honest about it and offer to help find the information." />
           <p className="text-xs text-text-paragraph mt-2">Describe how customers.new should talk to customers - their tone, style, and approach.</p>
         </div>

         <div className="flex justify-end gap-3 mt-4 mb-10">
            <button className="px-6 py-2 border border-[#f59e0b]/50 text-[#f59e0b] bg-white rounded-full text-sm font-bold shadow-sm hover:bg-[#f59e0b]/5 transition-colors">Save & Preview</button>
            <button className="px-6 py-2 bg-[#f59e0b] text-white rounded-full text-sm font-bold shadow-sm hover:bg-[#d97706] transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Publish
            </button>
         </div>
       </div>

       {/* Right Sidebar - Preview & Test */}
       <div className="flex flex-col w-full sticky top-4">
          <h2 className="text-section-hd text-text-section font-bold tracking-wider mb-2">Preview & Test</h2>
          <p className="text-sm text-text-paragraph mb-4">See how customers.new replies with the current knowledge</p>
          
          <div className="bg-card border border-border-soft rounded-[20px] shadow-md shadow-black/10 overflow-hidden flex flex-col h-[520px]">
            {/* Header */}
            <div className="bg-white border-b border-border-soft p-4 flex justify-center items-center shadow-sm z-10 relative">
              <span className="font-bold text-text">customers.new</span>
            </div>
            
            {/* Chat Body */}
            <div className="bg-background-content p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-border-soft flex-shrink-0 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Leo')] bg-contain bg-center">
                </div>
                <div className="flex flex-col">
                   <div className="bg-white border border-border-soft p-3 rounded-2xl rounded-tl-sm text-sm text-text shadow-sm inline-block">
                     Hello! How can we help you today?
                   </div>
                   <span className="text-[10px] text-text-subtle mt-1 ml-1">12:59:09 PM</span>
                </div>
              </div>

              <div className="flex items-end justify-end mt-2">
                <div className="flex flex-col items-end">
                   <div className="bg-[#f0f0f0] border border-border-soft p-3 rounded-2xl rounded-tr-sm text-sm text-text inline-block">
                     Tell me about your company and what does<br/>your product do.
                   </div>
                   <span className="text-[10px] text-text-subtle mt-1 mr-1">12:59:09 PM</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-white p-3 border-t border-border-soft flex items-center gap-2 relative">
              <input type="text" placeholder="Write your message here..." className="w-full bg-transparent border-none focus:outline-none text-sm px-2 text-text" />
              <button className="w-8 h-8 rounded-full text-[#3b82f6] flex items-center justify-center cursor-pointer hover:bg-background-content/50 transition-colors flex-shrink-0 font-bold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </div>
       </div>

    </div>
  </div>
);

export default function WidgetView() {
  const [viewState, setViewState] = useState('list'); // Default to list for easy nav, though could be empty

  return (
    <div className="px-5 md:px-8 max-w-canvas mx-auto flex flex-col gap-6 w-full min-h-[calc(100vh-64px)]">
      
      {/* Header */}
      <section className="mb-2 w-full pt-2 flex justify-between items-start">
        <div className="flex items-center gap-4">
          {(viewState === 'setup' || viewState === 'settings') && (
            <BackButton onClick={() => setViewState('list')} />
          )}
          
          {(viewState === 'empty' || viewState === 'list') && (
            <div>
              <h1 className="text-page-header font-bold text-accent-teal tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
                Chat Widget Management
              </h1>
              <p className="text-page-sub text-text-paragraph mt-1">Manage and configure chat widgets for your brands</p>
            </div>
          )}

          {viewState === 'setup' && (
            <div className="flex items-center gap-3">
               <GlobeIcon />
               <div>
                  <h1 className="text-xl font-bold text-text">My Sample customers.new Widget</h1>
                  <p className="text-xs text-text-subtle font-medium">Created 2 weeks ago</p>
               </div>
            </div>
          )}

          {viewState === 'settings' && (
            <div className="flex flex-col">
              <div className="text-sm font-bold text-text-subtle mb-1">Chat Widget Management</div>
              <div className="flex items-center gap-3">
                <GlobeIcon />
                <div>
                    <h1 className="text-xl font-bold text-text">My Sample customers.new Widget</h1>
                    <p className="text-xs text-text-subtle font-medium">Created 2 weeks ago</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {viewState === 'settings' && (
          <div className="flex items-center gap-3 mt-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-soft rounded-full text-xs font-bold text-text hover:bg-background-content transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Test <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-soft rounded-full text-xs font-bold text-text hover:bg-background-content transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Chat <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#f59e0b]/50 rounded-full text-xs font-bold text-[#f59e0b] hover:bg-[#f59e0b]/5 transition-colors">
              Talk to customers.new <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-border-soft rounded-full text-xs font-bold text-text hover:bg-background-content transition-colors shadow-sm ml-2">
              Publish <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <button className="w-8 h-8 flex flex-col items-center justify-center gap-0.5 text-text-subtle hover:text-text cursor-pointer">
              <div className="w-1 h-1 bg-currentColor rounded-full"></div>
              <div className="w-1 h-1 bg-currentColor rounded-full"></div>
              <div className="w-1 h-1 bg-currentColor rounded-full"></div>
            </button>
          </div>
        )}
      </section>

      {/* State Renderer */}
      {viewState === 'empty' && <EmptyState setViewState={setViewState} />}
      {viewState === 'list' && <ListState setViewState={setViewState} />}
      {viewState === 'setup' && <SetupState setViewState={setViewState} />}
      {viewState === 'settings' && <SettingsState setViewState={setViewState} />}

      {/* Floating State Dev Toggle for assessment purposes */}
      <div className="fixed bottom-4 right-4 flex gap-2 bg-text p-2 rounded-lg opacity-20 hover:opacity-100 transition-opacity z-50">
         <span className="text-white text-xs font-bold px-1 my-auto mr-1">DEV:</span>
         {['empty', 'list', 'setup', 'settings'].map(s => (
           <button 
             key={s} 
             onClick={() => setViewState(s)}
             className={`px-2 py-1 text-[10px] uppercase font-bold rounded ${viewState === s ? 'bg-primary text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}
           >
             {s}
           </button>
         ))}
      </div>

    </div>
  );
}
