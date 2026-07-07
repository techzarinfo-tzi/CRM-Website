"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface KanbanCard {
  id: string;
  name: string;
  company: string;
  assignedTo: string;
  created: string;
  value: string;
  textColor: string;
  tagBg: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  count: number;
  headerBg: string;
  headerTextColor: string;
  cards: KanbanCard[];
}

interface LeadRow {
  id: string;
  name: string;
  contact: string;
  company: string;
  clientType: string;
  country: string;
  status: 'Hot' | 'Warm' | 'Cold' | 'Junk';
  assignee: string;
}

interface ReminderItem {
  id: string;
  name: string;
  date: string;
  time: string;
  timeAgo: string;
  expiresIn: string;
  isRead: boolean;
  isCompleted: boolean;
}

// Define the static initial states outside to support pristine resets for the loop
const initialKanbanState: KanbanColumn[] = [
  {
    id: "qualification",
    title: "Qualification",
    count: 33,
    headerBg: "bg-[#EAEFFF]",
    headerTextColor: "text-[#0052FF]",
    cards: [
      {
        id: "john",
        name: "John Davis",
        company: "ABC Solutions",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "3,45,656 INR",
        textColor: "#0052FF",
        tagBg: "#EAEFFF"
      },
      {
        id: "david",
        name: "David Miller",
        company: "Modern Tech",
        assignedTo: "Sarah",
        created: "21 Jul 2026",
        value: "14,240 USD",
        textColor: "#0052FF",
        tagBg: "#EAEFFF"
      }
    ]
  },
  {
    id: "proposal",
    title: "Proposal Sent-Negotiation",
    count: 2,
    headerBg: "bg-[#FFF0E6]",
    headerTextColor: "text-[#FF6B00]",
    cards: [
      {
        id: "felson",
        name: "Fiona Nelson",
        company: "ComCans",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "3,45,656 INR",
        textColor: "#FF6B00",
        tagBg: "#FFF0E6"
      },
      {
        id: "kenny",
        name: "Kenneth Chen",
        company: "Teddy Stores",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "3,45,656 INR",
        textColor: "#FF6B00",
        tagBg: "#FFF0E6"
      }
    ]
  },
  {
    id: "invoice",
    title: "Invoice Sent",
    count: 2,
    headerBg: "bg-[#E1FAFC]",
    headerTextColor: "text-[#00A3C4]",
    cards: [
      {
        id: "leo",
        name: "Leonard Vance",
        company: "Snow Solutions",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "11,20,353 INR",
        textColor: "#00A3C4",
        tagBg: "#E1FAFC"
      },
      {
        id: "andres",
        name: "Andrew Cooper",
        company: "99 Store",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "83,788 INR",
        textColor: "#00A3C4",
        tagBg: "#E1FAFC"
      }
    ]
  },
  {
    id: "closed",
    title: "Closed Won",
    count: 2,
    headerBg: "bg-[#E2FBE9]",
    headerTextColor: "text-[#00A854]",
    cards: [
      {
        id: "luffy",
        name: "Lucas Foster",
        company: "Moon Tech",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "30,15,999 INR",
        textColor: "#00A854",
        tagBg: "#E2FBE9"
      },
      {
        id: "eren",
        name: "Ethan Reynolds",
        company: "Titan Technologies",
        assignedTo: "Michael",
        created: "22 Jul 2026",
        value: "13,20,455 INR",
        textColor: "#00A854",
        tagBg: "#E2FBE9"
      }
    ]
  }
];

const initialLeadsState: LeadRow[] = [
  { id: "1", name: "Sarah Jenkins", contact: "9100054020", company: "Venus", clientType: "Enterprise", country: "Australia", status: "Hot", assignee: "Emma" },
  { id: "2", name: "Oliver Vance", contact: "9885444555", company: "SADF", clientType: "SMB", country: "Antarctica", status: "Warm", assignee: "Michael" },
  { id: "3", name: "Ahmed Ali", contact: "9158401200", company: "Rays Ltd", clientType: "SMB", country: "India", status: "Cold", assignee: "Sarah" },
  { id: "4", name: "Ahmed Verma", contact: "8882777272", company: "Klug.co", clientType: "Enterprise", country: "India", status: "Junk", assignee: "Michael" },
  { id: "5", name: "Mohanad Al-Subai", contact: "7558745501", company: "SCA", clientType: "SMB", country: "India", status: "Hot", assignee: "Sarah" }
];

const initialRemindersState: ReminderItem[] = [
  {
    id: "rem-1",
    name: "Ahmed Hassan",
    date: "4/8/2026",
    time: "4:48:00 PM",
    timeAgo: "about 6 hours ago",
    expiresIn: "17 hours",
    isRead: false,
    isCompleted: false
  },
  {
    id: "rem-2",
    name: "Muthees Wari",
    date: "4/10/2026",
    time: "6:30:00 AM",
    timeAgo: "about 8 hours ago",
    expiresIn: "1 day",
    isRead: false,
    isCompleted: false
  },
  {
    id: "rem-3",
    name: "Sarah Johnson",
    date: "4/12/2026",
    time: "8:30:00 PM",
    timeAgo: "about 12 hours ago",
    expiresIn: "3 days",
    isRead: true,
    isCompleted: false
  }
];

export default function StayOrganized() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leadsSectionRef = useRef<HTMLDivElement>(null);
  
  // Demo playing states for Kanban Board (Loop 1)
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [isKanbanSilenced, setIsKanbanSilenced] = useState(false);
  const [kanbanCursorPos, setKanbanCursorPos] = useState<{ x: number; y: number; opacity: number; duration?: string } | null>(null);
  const kanbanTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Demo playing states for Leads & Follow-ups Widgets (Loop 2)
  const [isWidgetsSilenced, setIsWidgetsSilenced] = useState(false);
  const [widgetsCursorPos, setWidgetsCursorPos] = useState<{ x: number; y: number; opacity: number; duration?: string } | null>(null);
  const widgetsTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const [isMounted, setIsMounted] = useState(false);

  // Custom dropdown open/close state
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  // --- Kanban, Leads, Reminders States ---
  const [columns, setColumns] = useState<KanbanColumn[]>(JSON.parse(JSON.stringify(initialKanbanState)));
  const [leads, setLeads] = useState<LeadRow[]>(JSON.parse(JSON.stringify(initialLeadsState)));
  const [reminders, setReminders] = useState<ReminderItem[]>(JSON.parse(JSON.stringify(initialRemindersState)));
  
  const [draggedCardId, setDraggedCardId] = useState<string | null>(null);
  const [draggedSourceColId, setDraggedSourceColId] = useState<string | null>(null);
  const [activeOverColId, setActiveOverColId] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("All");

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lead.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAssignee = assigneeFilter === "All" || lead.assignee.toLowerCase().includes(assigneeFilter.toLowerCase());
    return matchesSearch && matchesAssignee;
  });

  // Helper: calculate absolute coordinates relative to the section container
  const getRelativeCoords = (targetEl: HTMLElement, parentEl: HTMLElement) => {
    const targetRect = targetEl.getBoundingClientRect();
    const parentRect = parentEl.getBoundingClientRect();
    return {
      x: targetRect.left - parentRect.left + targetRect.width / 2,
      y: targetRect.top - parentRect.top + targetRect.height / 2
    };
  };

  // Stop Kanban Board demo loop
  const stopAndSilenceKanban = () => {
    setIsKanbanSilenced(true);
    setIsDemoActive(false);
    setKanbanCursorPos(null);
    kanbanTimeoutsRef.current.forEach(clearTimeout);
    kanbanTimeoutsRef.current = [];
  };

  // Stop Leads and Reminders widgets demo loop
  const stopAndSilenceWidgets = () => {
    setIsWidgetsSilenced(true);
    setActiveDropdownId(null);
    setWidgetsCursorPos(null);
    widgetsTimeoutsRef.current.forEach(clearTimeout);
    widgetsTimeoutsRef.current = [];
  };

  // Loop 1: Kanban Board Slide Animation
  const playKanbanSequence = () => {
    if (isKanbanSilenced) return;

    // Reset columns
    setColumns(JSON.parse(JSON.stringify(initialKanbanState)));
    setKanbanCursorPos(null);
    setIsDemoActive(false);

    const parent = sectionRef.current;
    if (!parent) return;

    // Spawn cursor
    const t0 = setTimeout(() => {
      if (isKanbanSilenced) return;
      const cardEl = document.getElementById("demo-kanban-card");
      if (cardEl) {
        const coords = getRelativeCoords(cardEl, parent);
        setKanbanCursorPos({ x: coords.x, y: coords.y, opacity: 1, duration: '0.1s' });
      }
    }, 100);

    // Slide card
    const t1 = setTimeout(() => {
      if (isKanbanSilenced) return;
      setIsDemoActive(true);
      setKanbanCursorPos(prev => prev ? { ...prev, x: prev.x + 208, duration: '1.3s' } : null);
    }, 400);

    // Complete drop
    const t2 = setTimeout(() => {
      if (isKanbanSilenced) return;
      setColumns(prevCols => {
        const qualCol = prevCols.find(c => c.id === "qualification");
        if (!qualCol) return prevCols;

        const targetCard = qualCol.cards.find(c => c.id === "john");
        if (!targetCard) return prevCols;

        return prevCols.map(col => {
          if (col.id === "qualification") {
            return { ...col, cards: col.cards.filter(c => c.id !== "john"), count: col.count - 1 };
          }
          if (col.id === "proposal") {
            return { ...col, cards: [...col.cards, { ...targetCard, textColor: "#FF6B00", tagBg: "#FFF0E6" }], count: col.count + 1 };
          }
          return col;
        });
      });
      setIsDemoActive(false);
      setKanbanCursorPos(prev => prev ? { ...prev, opacity: 0 } : null);
    }, 1800);

    // Loop restart after 3.8 seconds (2 seconds pause at the end)
    const t3 = setTimeout(() => {
      if (isKanbanSilenced) return;
      playKanbanSequence();
    }, 3800);

    kanbanTimeoutsRef.current.push(t0, t1, t2, t3);
  };

  // Loop 2: Bottom Widgets (Leads & Follow-ups) Animation
  const playWidgetsSequence = () => {
    if (isWidgetsSilenced) return;

    // Reset widgets
    setLeads(JSON.parse(JSON.stringify(initialLeadsState)));
    setReminders(JSON.parse(JSON.stringify(initialRemindersState)));
    setWidgetsCursorPos(null);
    setActiveDropdownId(null);

    const parent = sectionRef.current;
    if (!parent) return;

    // Phase 2: Leads dropdown status select
    const t1 = setTimeout(() => {
      if (isWidgetsSilenced) return;
      const selectEl = document.getElementById("demo-status-select");
      if (!selectEl) return;

      const coords = getRelativeCoords(selectEl, parent);
      setWidgetsCursorPos({ x: coords.x + 30, y: coords.y + 60, opacity: 0 });
      
      const t1_1 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setWidgetsCursorPos({ x: coords.x, y: coords.y, opacity: 1, duration: '0.6s' });
      }, 100);

      const t1_2 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setActiveDropdownId("2");
      }, 800);

      const t1_3 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        const optionEl = document.getElementById("demo-option-hot");
        if (optionEl) {
          const optCoords = getRelativeCoords(optionEl, parent);
          setWidgetsCursorPos({ x: optCoords.x, y: optCoords.y, opacity: 1, duration: '0.6s' });
        }
      }, 1500);

      const t1_4 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setLeads(prevLeads => prevLeads.map(lead => lead.id === "2" ? { ...lead, status: "Hot" } : lead));
        setActiveDropdownId(null);
      }, 2200);

      widgetsTimeoutsRef.current.push(t1_1, t1_2, t1_3, t1_4);
    }, 200);

    // Phase 3: Reminders mark-as-read click (1 second after Phase 2 complete)
    const t2 = setTimeout(() => {
      if (isWidgetsSilenced) return;
      const btnEl = document.getElementById("demo-mark-read");
      if (!btnEl) return;

      const coords = getRelativeCoords(btnEl, parent);
      setWidgetsCursorPos({ x: coords.x + 20, y: coords.y + 40, opacity: 1, duration: '0.6s' });

      const t2_1 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setWidgetsCursorPos({ x: coords.x, y: coords.y, opacity: 1, duration: '0.6s' });
      }, 300);

      const t2_2 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setReminders(prevRem => prevRem.map(rem => rem.id === "rem-1" ? { ...rem, isRead: true } : rem));
      }, 800);

      const t2_3 = setTimeout(() => {
        if (isWidgetsSilenced) return;
        setWidgetsCursorPos(prev => prev ? { ...prev, opacity: 0 } : null);
      }, 1600);

      widgetsTimeoutsRef.current.push(t2_1, t2_2, t2_3);
    }, 3400);

    // Loop restart after 6 seconds (1 second pause at the end)
    const t3 = setTimeout(() => {
      if (isWidgetsSilenced) return;
      playWidgetsSequence();
    }, 6000);

    widgetsTimeoutsRef.current.push(t1, t2, t3);
  };

  // Set isMounted on initial render to prevent SSR mismatch
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Clear timeouts only when component actually unmounts
      kanbanTimeoutsRef.current.forEach(clearTimeout);
      widgetsTimeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // Trigger Demo Animations when scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playKanbanSequence();
          playWidgetsSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);

    const leadsEl = leadsSectionRef.current;
    let leadsObserver: IntersectionObserver | null = null;
    if (leadsEl) {
      leadsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            stopAndSilenceKanban();
            if (leadsObserver) leadsObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      leadsObserver.observe(leadsEl);
    }

    return () => {
      observer.disconnect();
      if (leadsObserver) leadsObserver.disconnect();
    };
  }, []);

  const handleDragStart = (cardId: string, sourceColId: string) => {
    stopAndSilenceKanban();
    setDraggedCardId(cardId);
    setDraggedSourceColId(sourceColId);
  };

  const handleDragOver = (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    setActiveOverColId(colId);
  };

  const handleDragLeave = () => {
    setActiveOverColId(null);
  };

  const handleDrop = (colId: string) => {
    setActiveOverColId(null);
    if (!draggedCardId || !draggedSourceColId || draggedSourceColId === colId) return;

    let cardToMove: KanbanCard | undefined;
    const newColumns = columns.map((col) => {
      if (col.id === draggedSourceColId) {
        cardToMove = col.cards.find((c) => c.id === draggedCardId);
        return {
          ...col,
          cards: col.cards.filter((c) => c.id !== draggedCardId),
          count: col.count - 1
        };
      }
      return col;
    });

    if (cardToMove) {
      const updatedCard = { ...cardToMove };
      if (colId === "qualification") {
        updatedCard.textColor = "#0052FF";
        updatedCard.tagBg = "#EAEFFF";
      } else if (colId === "proposal") {
        updatedCard.textColor = "#FF6B00";
        updatedCard.tagBg = "#FFF0E6";
      } else if (colId === "invoice") {
        updatedCard.textColor = "#00A3C4";
        updatedCard.tagBg = "#E1FAFC";
      } else if (colId === "closed") {
        updatedCard.textColor = "#00A854";
        updatedCard.tagBg = "#E2FBE9";
      }

      setColumns(
        newColumns.map((col) => {
          if (col.id === colId) {
            return {
              ...col,
              cards: [...col.cards, updatedCard],
              count: col.count + 1
            };
          }
          return col;
        })
      );
    }

    setDraggedCardId(null);
    setDraggedSourceColId(null);
  };

  const toggleRead = (id: string) => {
    stopAndSilenceWidgets();
    setReminders(reminders.map(rem => rem.id === id ? { ...rem, isRead: !rem.isRead } : rem));
  };

  const toggleCompleted = (id: string) => {
    stopAndSilenceWidgets();
    setReminders(reminders.map(rem => rem.id === id ? { ...rem, isCompleted: !rem.isCompleted } : rem));
  };

  return (
    <section ref={sectionRef} className="relative z-40 bg-white pt-4 sm:pt-6 lg:pt-4 pb-10 sm:pb-12 lg:pb-14 overflow-hidden">
      
      {/* ── Simulated Finger Hand Cursor (Kanban Demo) ── */}
      {kanbanCursorPos && (
        <div 
          className="absolute pointer-events-none"
          style={{
            left: `${kanbanCursorPos.x}px`,
            top: `${kanbanCursorPos.y}px`,
            opacity: kanbanCursorPos.opacity,
            zIndex: 9999,
            transform: 'translate(-30%, -20%)',
            transition: `left ${kanbanCursorPos.duration || '0.7s'} cubic-bezier(0.25, 0.8, 0.25, 1), top ${kanbanCursorPos.duration || '0.7s'} cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease-out`
          }}
        >
          {/* Click pulse indicator */}
          <div className="absolute top-0 left-0 w-8 h-8 -translate-x-[20%] -translate-y-[20%] rounded-full border border-blue-400 bg-blue-400/20 animate-ping opacity-75" />
          <svg className="w-8 h-8 drop-shadow-lg" viewBox="0 0 24 24" fill="none">
            <path d="M9 10V3.5a1.5 1.5 0 0 1 3 0V10M9 10a1.5 1.5 0 0 0-3 0v4.5A5.5 5.5 0 0 0 11.5 20h2.7A5.8 5.8 0 0 0 20 14.2V11a1.5 1.5 0 0 0-3 0v-1a1.5 1.5 0 0 0-3 0v-1a1.5 1.5 0 0 0-3 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
          </svg>
        </div>
      )}

      {/* ── Simulated Finger Hand Cursor (Widgets Demo) ── */}
      {widgetsCursorPos && (
        <div 
          className="absolute pointer-events-none"
          style={{
            left: `${widgetsCursorPos.x}px`,
            top: `${widgetsCursorPos.y}px`,
            opacity: widgetsCursorPos.opacity,
            zIndex: 9999,
            transform: 'translate(-30%, -20%)',
            transition: `left ${widgetsCursorPos.duration || '0.7s'} cubic-bezier(0.25, 0.8, 0.25, 1), top ${widgetsCursorPos.duration || '0.7s'} cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease-out`
          }}
        >
          {/* Click pulse indicator */}
          <div className="absolute top-0 left-0 w-8 h-8 -translate-x-[20%] -translate-y-[20%] rounded-full border border-blue-400 bg-blue-400/20 animate-ping opacity-75" />
          <svg className="w-8 h-8 drop-shadow-lg" viewBox="0 0 24 24" fill="none">
            <path d="M9 10V3.5a1.5 1.5 0 0 1 3 0V10M9 10a1.5 1.5 0 0 0-3 0v4.5A5.5 5.5 0 0 0 11.5 20h2.7A5.8 5.8 0 0 0 20 14.2V11a1.5 1.5 0 0 0-3 0v-1a1.5 1.5 0 0 0-3 0v-1a1.5 1.5 0 0 0-3 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
          </svg>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Heading ── */}
        <div className="flex flex-col gap-[16px] w-full lg:w-[675px] lg:h-[228px] justify-between sm:mt-0">
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-gray-900 tracking-tight"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
              lineHeight: '58px',
              letterSpacing: '-1.8px'
            }}
          >
            What Your Sales Team Needs to{" "}
            <span className="text-blue-500">Stay Organized</span>
          </h2>
          <p  
            className="text-base sm:text-[18px] lg:text-[22px] "
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '-0.8px',
              color: '#555E67'
            }}
          >
            Managing leads across spreadsheets, emails, messaging apps, and multiple tools can slow down your sales process and also create unnecessary confusion among the team.
          </p>
        </div>

        {/* ── Full-width pipeline card with Interactive Kanban ── */}
        <div 
          onMouseDown={stopAndSilenceKanban}
          className="mt-10 sm:mt-12 rounded-[24px] border border-gray-100 bg-[#F7F8FA] flex flex-col lg:flex-row lg:h-[504px] items-stretch overflow-hidden shadow-sm animate-fade-in p-5 sm:p-8 lg:pt-[40px] lg:pb-[40px] lg:pl-[40px] lg:pr-[40px]"
          style={{
            width: '100%',
            maxWidth: '1223px',
            gap: '23px'
          }}
        >
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col justify-between py-2">
            <div>
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px'
                }}
              >
                Complete Sales Pipeline Visibility
              </h3>
              <p 
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px',
                  color: '#555E67'
                }}
              >
                Monitor every stage of the customer journey - from lead capture to deal closure with real-time insights and performance tracking.
              </p>
            </div>
            <div className="mt-6 hidden lg:block p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-[11px] leading-relaxed">
              <span className="font-semibold">💡 Drag &amp; Drop:</span> Try dragging lead cards between columns to change their stages instantly!
            </div>
          </div>

          {/* Interactive Kanban Board container */}
          <div className="flex-1 w-full overflow-x-auto lg:overflow-hidden flex flex-col pb-3 scrollbar-thin">
            <div className="flex gap-3 h-full items-start justify-between min-w-[820px] lg:min-w-0 lg:w-full">
              {columns.map((column) => (
                <div
                  key={column.id}
                  onDragOver={(e) => handleDragOver(e, column.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={() => handleDrop(column.id)}
                  className={`flex flex-col gap-3 rounded-xl p-2 transition-all duration-300 ${
                    activeOverColId === column.id || (isDemoActive && column.id === "proposal")
                      ? "bg-blue-50/70 ring-2 ring-blue-300 ring-dashed" 
                      : "bg-[#F3F4F6]/50"
                  }`}
                  style={{
                    width: '195px',
                    minWidth: '195px'
                  }}
                >
                  {/* Column Header */}
                  <div className={`flex items-center justify-between px-3 py-1.5 rounded-full ${column.headerBg}`}>
                    <span 
                      className={`text-[11px] font-bold tracking-tight ${column.headerTextColor}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {column.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-white text-[9px] font-extrabold text-gray-500 shadow-sm">
                      {column.count}
                    </span>
                  </div>

                  {/* Column Body Cards */}
                  <div className="flex flex-col gap-2.5">
                    {column.cards.map((card) => (
                      <div
                        key={card.id}
                        id={card.id === "john" ? "demo-kanban-card" : undefined}
                        draggable
                        onDragStart={() => handleDragStart(card.id, column.id)}
                        className="bg-white border border-gray-200/80 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-grab active:cursor-grabbing flex flex-col gap-2.5 group"
                        style={
                          isDemoActive && card.id === "john"
                            ? {
                                transform: 'translate(208px, 0px)',
                                transition: 'transform 1.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                zIndex: 50,
                                position: 'relative',
                                boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
                                borderColor: '#FF6B00',
                                cursor: 'grabbing'
                              }
                            : {}
                        }
                      >
                        {/* Name & More */}
                        <div className="flex items-center justify-between">
                          <span 
                            className="font-bold text-sm transition-colors duration-200"
                            style={{ 
                              color: card.textColor,
                              fontFamily: 'Inter, sans-serif'
                            }}
                          >
                            {card.name}
                          </span>
                          <button suppressHydrationWarning className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          </button>
                        </div>

                        {/* Company Pill */}
                        <div>
                          <span 
                            className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded"
                            style={{ 
                              background: card.tagBg, 
                              color: card.textColor,
                              fontFamily: 'Inter, sans-serif' 
                            }}
                          >
                            {card.company}
                          </span>
                        </div>

                        {/* Assigned To */}
                        <div className="flex items-center gap-1.5 border-t border-dashed border-gray-100 pt-2 text-[10px]">
                          <div className="w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-[9px] font-bold text-indigo-600">
                            {card.assignedTo[0]}
                          </div>
                          <span className="text-[10px] text-gray-500 font-medium">
                            Assigned To <strong className="text-gray-700">{card.assignedTo}</strong>
                          </span>
                        </div>

                        {/* Created & Value */}
                        <div className="rounded-lg bg-[#FCFDF9] border border-[#ECEFE6] p-1.5 flex justify-between items-center gap-1.5">
                          <div className="flex items-center gap-1">
                            <div className="w-3.5 h-3.5 rounded-full bg-amber-100 flex items-center justify-center text-[8px] text-amber-700 font-bold">
                              👤
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold leading-none mb-1">Created</span>
                              <span className="text-[9px] text-gray-700 font-bold leading-none">{card.created}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold leading-none mb-1">Value</span>
                            <span className="text-[9px] text-gray-800 font-extrabold leading-none">{card.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {column.cards.length === 0 && (
                      <div className="border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-[10px] text-gray-400 py-6">
                        Drop here
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Two cards: Lead Management + Follow-Ups ── */}
        <div ref={leadsSectionRef} className="mt-6 sm:mt-8 flex flex-col lg:flex-row gap-6 justify-between items-center w-full max-w-[1252px] mx-auto">
          
          {/* Card 1: Centralized Lead Management (Interactive Leads Table Widget) */}
          <div 
            onMouseDown={stopAndSilenceWidgets}
            className="rounded-[20px] bg-[#F4F5F6] border border-[#EDEEF0] flex flex-col justify-between overflow-hidden w-full lg:w-[614px] lg:h-[554px]"
          >
            {/* Text content block */}
            <div className="p-6 sm:p-10 flex flex-col gap-[10px] lg:h-[159px]">
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '26px',
                  letterSpacing: '-0.2px'
                }}
              >
                Centralized Lead Management
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#555E67'
                }}
              >
                Capture, assign, and track every lead from one dashboard. No more lost contacts or scattered customer information.
              </p>
            </div>
            
            {/* Interactive Leads Table Widget */}
            <div className="mx-4 mb-8 bg-white border border-[#EBEFF5] rounded-xl shadow-sm p-4 flex flex-col gap-3 h-[320px] relative z-20">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                  <span className="text-blue-500">📁</span> Leads Management
                </span>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Search by name/company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2.5 py-1 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 w-[140px]"
                  />
                  <select
                    suppressHydrationWarning
                    value={assigneeFilter}
                    onChange={(e) => setAssigneeFilter(e.target.value)}
                    className="px-2 py-1 text-xs border border-gray-200 rounded-md bg-white text-gray-600 focus:outline-none"
                  >
                    <option value="All">All Assignees</option>
                    <option value="Michael">Michael</option>
                    <option value="Sarah">Sarah</option>
                  </select>
                  <button 
                    suppressHydrationWarning
                    className="bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors cursor-default"
                  >
                    + Create Lead
                  </button>
                </div>
              </div>

              {/* Table wrapper */}
              <div className="flex-1 overflow-auto scrollbar-thin">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      <th className="py-2 pl-2">Lead</th>
                      <th className="py-2">Company</th>
                      <th className="py-2">Country</th>
                      <th className="py-2">Status</th>
                      <th className="py-2 pr-2">Assignee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr 
                        key={lead.id} 
                        className="border-b border-gray-50 text-[11px] hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="py-2.5 pl-2 font-bold text-gray-800 flex flex-col">
                          <span>{lead.name}</span>
                          <span className="text-[9px] text-gray-400 font-normal">{lead.contact}</span>
                        </td>
                        <td className="py-2.5 text-gray-600 font-semibold">{lead.company}</td>
                        <td className="py-2.5 text-gray-500">{lead.country}</td>
                        
                        {/* Custom Select Dropdown simulation for automation support */}
                        <td className="py-2.5 relative">
                          <div className="relative">
                            <button
                              suppressHydrationWarning
                              id={lead.id === "2" ? "demo-status-select" : undefined}
                              onMouseDown={(e) => {
                                e.stopPropagation();
                                stopAndSilenceWidgets();
                                setActiveDropdownId(activeDropdownId === lead.id ? null : lead.id);
                              }}
                              className={`px-2.5 py-1.5 rounded-[6px] text-[10px] font-bold border-0 cursor-pointer flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all ${
                                lead.status === 'Hot' 
                                  ? 'bg-red-50 text-red-600 border border-red-100' 
                                  : lead.status === 'Warm' 
                                  ? 'bg-amber-50 text-amber-600 border border-amber-100'
                                  : lead.status === 'Cold'
                                  ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                  : 'bg-gray-100 text-gray-500 border border-gray-200'
                              }`}
                            >
                              <span>{lead.status}</span>
                              <span className="text-[7px]">▼</span>
                            </button>

                            {activeDropdownId === lead.id && (
                              <div className="absolute left-0 mt-1 w-24 bg-white border border-gray-100 rounded-lg shadow-lg z-[60] py-1">
                                {(['Hot', 'Warm', 'Cold', 'Junk'] as const).map((s) => (
                                  <button
                                    suppressHydrationWarning
                                    key={s}
                                    id={lead.id === "2" && s === "Hot" ? "demo-option-hot" : undefined}
                                    onMouseDown={(e) => {
                                      e.stopPropagation();
                                      stopAndSilenceWidgets();
                                      setLeads(leads.map(l => l.id === lead.id ? { ...l, status: s } : l));
                                      setActiveDropdownId(null);
                                    }}
                                    className="w-full text-left px-2.5 py-1.5 text-[10px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {s}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                        
                        <td className="py-2.5 pr-2 font-medium text-gray-500">{lead.assignee}</td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-xs text-gray-400">
                          No matching leads found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 2: Follow-Ups & Reminders (Interactive Reminders Widget) */}
          <div 
            onMouseDown={stopAndSilenceWidgets}
            className="rounded-[20px] bg-[#F4F5F6] border border-[#EDEEF0] flex flex-col justify-between overflow-hidden w-full lg:w-[614px] lg:h-[554px]"
          >
            {/* Text content block */}
            <div className="p-6 sm:p-10 flex flex-col gap-[10px] lg:h-[185px]">
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '140%',
                  letterSpacing: '-0.2px'
                }}
              >
                Follow-Ups &amp; Reminders
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#555E67'
                }}
              >
                Advanced lead tracking software will never miss an opportunity with automated emails, task reminders and follow-up notifications that keep deals moving forward.
              </p>
            </div>
            
            {/* Interactive Reminders Widget */}
            <div className="mx-4 mb-8 bg-white border border-[#EBEFF5] rounded-xl shadow-sm p-4 flex flex-col gap-3 h-[320px] relative z-20">
              <span className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                <span className="text-orange-500">🔔</span> Upcoming Follow-ups 
                <span className="ml-1 bg-orange-100 text-orange-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                  {reminders.filter(r => !r.isCompleted).length} Due
                </span>
              </span>

              {/* Feed items */}
              <div className="flex-1 overflow-auto pr-1 scrollbar-thin">
                <div className="flex flex-col gap-2.5 min-w-[450px]">
                  {reminders.map((rem) => (
                    <div 
                      key={rem.id}
                      className={`border border-[#EDEEF0] rounded-xl p-3 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                        rem.isCompleted 
                          ? 'bg-gray-50/50 opacity-60' 
                          : rem.isRead 
                          ? 'bg-[#FCFDFD]' 
                          : 'bg-blue-50/20 border-blue-100'
                      }`}
                    >
                      {/* Checkbox trigger to mark as complete */}
                      <input
                        suppressHydrationWarning
                        type="checkbox"
                        checked={rem.isCompleted}
                        onChange={() => toggleCompleted(rem.id)}
                        className="mt-1 h-3.5 w-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer"
                      />

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between">
                          <span className={`text-[12px] font-bold text-gray-800 ${rem.isCompleted ? 'line-through text-gray-400' : ''}`}>
                            Deal Follow-up due: <strong className="text-gray-950">{rem.name}</strong>
                          </span>
                          {!rem.isCompleted && !rem.isRead && (
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          Follow-up date: {rem.date}, {rem.time}
                        </span>
                        
                        {/* Action Triggers */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-dashed border-gray-100 text-[10px]">
                          <button
                            suppressHydrationWarning
                            id={rem.id === "rem-1" ? "demo-mark-read" : undefined}
                            onClick={() => toggleRead(rem.id)}
                            className="text-blue-500 hover:text-blue-700 font-bold transition-colors"
                          >
                            {rem.isRead ? "Mark as unread" : "Mark as read"}
                          </button>
                          <span className="text-amber-600 font-semibold">
                            ⏳ Expires in {rem.expiresIn}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
