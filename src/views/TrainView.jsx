import React from 'react';
import { ChevronRightIcon } from '../components/Icons';

export default function TrainView() {
  return (
    <div className="px-5 md:px-8 max-w-canvas mx-auto flex flex-col gap-6 w-full">
      
      {/* Header */}
      <section className="mb-1 w-full pt-2 flex justify-between items-end">
        <div>
          <h1 className="text-page-header font-bold text-accent-teal tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
            Train customers.new
          </h1>
          <p className="text-page-sub text-text-paragraph mt-1">Keep your customers.new up to date with your business knowledge.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Main Content Area */}
        <div className="md:col-span-8 flex flex-col gap-6 w-full">
          
          {/* Auto-Scanned Website */}
          <div className="bg-card w-full border border-border-soft rounded-card p-5 md:p-6 shadow-md shadow-black/10 flex justify-between items-center">
            <div>
              <h2 className="text-[16px] font-bold text-text">Auto-Scanned Website</h2>
              <p className="text-sm text-text-paragraph">We've already read <span className="font-bold text-primary">14 pages</span> from your website.</p>
            </div>
            <button className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors rounded-full font-bold text-sm border border-primary/20 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
              Rescan Website
            </button>
          </div>

          {/* 3 Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-card border border-border-soft rounded-card p-5 shadow-sm hover:shadow-md shadow-black/10 flex flex-col transition-shadow">
              <div className="flex items-center gap-2 font-bold mb-2">
                <div className="w-6 h-6 rounded bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                Custom Q&A
              </div>
              <p className="text-xs text-text-paragraph mb-4 h-[36px]">Manually add questions and answers that customers often ask.</p>
              <button className="w-fit text-[#f59e0b] bg-white border border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">Go to Q&A</button>
            </div>

            <div className="bg-card border border-border-soft rounded-card p-5 shadow-sm hover:shadow-md shadow-black/10 flex flex-col transition-shadow">
              <div className="flex items-center gap-2 font-bold mb-2">
                <div className="w-6 h-6 rounded bg-success/10 text-success flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                Upload Documents
              </div>
              <p className="text-xs text-text-paragraph mb-4 h-[36px]">Upload your Procedures, Processes, and Policies. customers.new will learn from your files and links.</p>
              <button className="w-fit text-success bg-white border border-success/30 hover:bg-success/5 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">Upload Files</button>
            </div>

            <div className="bg-card border border-border-soft rounded-card p-5 shadow-sm hover:shadow-md shadow-black/10 flex flex-col transition-shadow">
              <div className="flex items-center gap-2 font-bold mb-2">
                <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                </div>
                Talk to customers.new
              </div>
              <p className="text-xs text-text-paragraph mb-4 h-[36px]">Have a conversation with customers.new and explain your business in your own words.</p>
              <button className="w-fit text-primary bg-white border border-primary/30 hover:bg-primary/5 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">Start Training Chat</button>
            </div>
          </div>

          {/* Custom Q&A */}
          <div className="bg-card w-full border border-border-soft rounded-card p-6 shadow-md shadow-black/10 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">Custom Q&A</h3>
                <p className="text-sm text-text-paragraph">Add specific question-answer pairs to fine-tune your assistant.</p>
              </div>
              <button className="text-[#f59e0b] text-sm font-bold bg-white border border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5">
                <span>+</span> Add Q&A
              </button>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-[1fr_2fr_30px] gap-4 mb-2 px-2 text-xs font-bold text-text-subtle uppercase border-b border-border-soft pb-2">
                <div>Questions</div>
                <div>Answer</div>
                <div></div>
              </div>
              <div className="flex flex-col">
                {[
                  { q: "What are your business hours?", a: "We are open from 9 AM to 5 PM, Monday to Friday." },
                  { q: "Do you offer free shipping?", a: "Yes, we offer free shipping on all orders over $50." },
                  { q: "What is your return policy?", a: "You can return any item within 30 days of purchase for a full refund." }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_2fr_30px] gap-4 py-3 px-2 border-b border-border-soft/50 text-sm">
                    <div className="font-bold text-text">{item.q}</div>
                    <div className="text-text-paragraph" dangerouslySetInnerHTML={{ __html: item.a.replace(/open/g, '<b>open</b>').replace(/return/g, '<b>return</b>').replace(/full/g, '<b>full</b>') }}></div>
                    <div className="flex justify-end text-text-subtle hover:text-text cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-[#f4fffd] border border-success/20 rounded-md p-4 flex justify-between items-center w-full">
                <span className="text-sm font-bold text-success/80">Upgrade for more conditional answers and bulk import.</span>
                <button className="bg-white border border-success/30 text-success px-4 py-1.5 rounded-full text-xs font-bold hover:bg-success/5 transition-colors">Upgrade Now</button>
            </div>
          </div>

          {/* File Uploads */}
          <div className="flex flex-col w-full mt-2">
            <h3 className="text-lg font-bold text-text mb-1">File Uploads</h3>
            <p className="text-sm text-text-paragraph mb-4">Upload documents like FAQs, menus, or price sheets.</p>
            
            <div className="w-full bg-[#fcfcfc] border-2 border-dashed border-[#ffb29a] rounded-xl p-8 flex flex-col justify-center items-center cursor-pointer hover:bg-background-mainLight transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e14617" strokeWidth="2" className="mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <div className="text-sm text-text mb-1">Drag & drop files here or <span className="font-bold underline text-text">click to upload</span></div>
              <div className="text-xs text-text-subtle">Max 5 files, up to 10MB each. Upgrade for unlimited uploads.</div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="bg-white border border-border-soft rounded-md p-3 flex justify-between items-center shadow-sm">
                 <div className="flex items-center gap-3">
                   <div className="text-[#3b82f6]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                   <span className="text-sm text-text font-medium">faq_document.docx</span>
                 </div>
                 <button className="text-text-subtle hover:text-text"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
              </div>
              <div className="bg-white border border-border-soft rounded-md p-3 flex justify-between items-center shadow-sm">
                 <div className="flex items-center gap-3">
                   <div className="text-[#ef4444]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                   <span className="text-sm text-text font-medium">restaurant_menu.pdf</span>
                 </div>
                 <button className="text-text-subtle hover:text-text"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
              </div>
            </div>
          </div>

          {/* Talk to customers.new */}
          <div className="flex flex-col w-full mt-4">
            <h3 className="text-lg font-bold text-text mb-1">Talk to customers.new</h3>
            <p className="text-sm text-text-paragraph mb-4">Don't have documents? Just talk to customers.new. Tell it about your products, services, and policies - it will learn from you.</p>

            <div className="w-full bg-background-content/50 border border-border-soft rounded-xl p-4 flex flex-col">
               <div className="flex flex-col gap-2 mb-4">
                 <div className="bg-white border border-border-soft rounded-2xl rounded-tl-sm p-3 shadow-sm self-start max-w-[80%]">
                   <p className="text-sm text-text">Hello! I'm here to learn about your business. Tell me about your products, services, or policies.</p>
                 </div>
                 <div className="text-[10px] text-text-subtle ml-1">10:30 AM</div>
               </div>

               <div className="relative mt-auto">
                 <input type="text" placeholder="Type your message..." className="w-full bg-white border border-border-soft rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-[#ffb29a] shadow-sm" />
                 <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                    <button className="text-primary hover:text-primary/80 bg-white mr-1 rounded-full p-1 border border-primary/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                    </button>
                 </div>
               </div>
            </div>
          </div>

          {/* Training Logs */}
          <div className="flex flex-col w-full mt-4">
            <h3 className="text-lg font-bold text-text mb-4">Training Logs</h3>
            <div className="border border-border-soft rounded-xl overflow-hidden bg-card shadow-sm">
                <div className="flex justify-between items-center p-4 border-b border-border-soft hover:bg-background-content/30 cursor-pointer">
                   <div>
                     <div className="font-bold text-sm text-text">Initial Training Session</div>
                     <div className="text-xs text-text-subtle">2023-09-20</div>
                   </div>
                   <div className="flex items-center gap-3">
                     <button className="text-text-subtle hover:text-text"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                     <ChevronRightIcon className="text-text-subtle rotate-90" />
                   </div>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-background-content/30 cursor-pointer">
                   <div>
                     <div className="font-bold text-sm text-text">Product Update Training</div>
                     <div className="text-xs text-text-subtle">2023-09-20</div>
                   </div>
                   <div className="flex items-center gap-3">
                     <button className="text-text-subtle hover:text-text"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                     <ChevronRightIcon className="text-text-subtle rotate-90" />
                   </div>
                </div>
            </div>
          </div>

          {/* Knowledge Base Management */}
          <div className="bg-card w-full border border-border-soft rounded-card p-6 shadow-md shadow-black/10 flex flex-col mt-4">
             <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-text">Knowledge Base Management</h3>
                  <p className="text-sm text-text-paragraph">All training inputs are combined here. Review and manage customers.new knowledge.</p>
                </div>
                <div className="relative">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                   <input type="text" placeholder="Search" className="pl-9 pr-4 py-1.5 bg-white border border-border-soft rounded-md text-sm w-48 focus:outline-none focus:border-border-brand" />
                </div>
             </div>

             <div className="w-full">
                <div className="grid grid-cols-[minmax(100px,1fr)_minmax(150px,2fr)_minmax(100px,1fr)_minmax(80px,1fr)_30px] gap-2 px-2 text-xs font-bold text-text-subtle uppercase border-b border-border-soft pb-2">
                  <div>Source</div>
                  <div>Name/ID</div>
                  <div>Date Added</div>
                  <div>Status</div>
                  <div></div>
                </div>
                
                <div className="flex flex-col">
                  {[
                    { source: 'Q&A', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, name: 'Business Hours Q&A', date: '2023-09-15', status: 'Active', color: 'text-purple-500' },
                    { source: 'File', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, name: 'faq_document.docx', date: '2023-09-15', status: 'Active', color: 'text-blue-500' },
                    { source: 'Conversation', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, name: 'Initial Training Session', date: '2023-09-15', status: 'Active', color: 'text-green-500' },
                    { source: 'File', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, name: 'restaurant_menu.pdf', date: '2023-09-15', status: 'Active', color: 'text-blue-500' },
                    { source: 'Q&A', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, name: 'Shipping Policy Q&A', date: '2023-09-15', status: 'Active', color: 'text-purple-500' }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-[minmax(100px,1fr)_minmax(150px,2fr)_minmax(100px,1fr)_minmax(80px,1fr)_30px] gap-2 py-3 px-2 border-b border-border-soft/60 text-sm items-center hover:bg-background-content/20 transition-colors">
                      <div className={`flex items-center gap-1.5 ${row.color} text-xs font-semibold`}>
                        {row.icon}
                        {row.source}
                      </div>
                      <div className="text-text font-medium text-[13px]">{row.name}</div>
                      <div className="text-text-subtle text-xs">{row.date}</div>
                      <div className="text-success font-bold text-xs">{row.status}</div>
                      <div className="flex justify-end text-text-subtle hover:text-text cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>

        {/* Right Sidebar - Preview & Test */}
        <div className="md:col-span-4 flex flex-col w-full">
          <div className="sticky top-6">
            <h2 className="text-section-hd text-text-section font-bold tracking-wider mb-2">Preview & Test</h2>
            <p className="text-sm text-text-paragraph mb-4">See how customers.new replies with the current knowledge</p>
            
            <div className="bg-card border border-border-soft rounded-[20px] shadow-md shadow-black/10 overflow-hidden flex flex-col h-[600px]">
              {/* Header */}
              <div className="bg-white border-b border-border-soft p-4 flex justify-center items-center shadow-sm z-10 relative">
                <span className="font-bold text-text">customers.new</span>
              </div>
              
              {/* Chat Body */}
              <div className="bg-background-content p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-border-soft flex-shrink-0">
                    <span className="text-lg">🤖</span>
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
                <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer shadow-sm hover:scale-105 transition-transform flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
