import React, { useState, useEffect } from "react";
import {
  Home,
  FolderClosed,
  SquarePen,
  Search,
  Mic,
  Upload,
  Notebook,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import toast from "react-hot-toast";
import { getRecentNotes } from "@/services/api/notes";
import LogOut from "./LogOut";
import { Skeleton } from "@mui/material";
import SideBarNoteSkeleton from "./Skeletons/SideBarNoteSkeleton";

const items = [
  {
    title: "ទំព័រដើម",
    url: "/home",
    icon: Home,
  },
  // {
  //   title: "សឺមីឯកសារ",
  //   url: "/folder",
  //   icon: FolderClosed,
  // },
  {
    title: "កំណត់ត្រា",
    url: "/notes",
    icon: Notebook,
  },
  {
    title: "ថតសំឡេងភ្លាមៗ",
    url: "/recording",
    icon: Mic,
  },
  {
    title: "បញ្ចូលឯកសារ",
    url: "/upload",
    icon: Upload,
  },
];

export function AppSidebar() {
  const [notes, setNotes] = useState([]);
  const [activePath, setActivePath] = useState("/");
  const [expandedGroups, setExpandedGroups] = useState({
    today: true,
    last7Days: true,
    last30Days: true,
    byMonth: {},
  });

  useEffect(() => {
    fetchNotes();
    setActivePath(window.location.pathname || "/");
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getRecentNotes(10, "updatedAt", "DESC");
      setNotes(data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Function to categorize notes
  const categorizeNotes = (notes) => {
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0)).getTime();
    const sevenDaysAgo = new Date(todayStart - 7 * 24 * 60 * 60 * 1000).getTime();
    const thirtyDaysAgo = new Date(todayStart - 30 * 24 * 60 * 60 * 1000).getTime();

    const groupedNotes = {
      today: [],
      last7Days: [],
      last30Days: [],
      byMonth: {},
    };

    notes.forEach((note) => {
      const updatedAt = new Date(note.updatedAt).getTime();
      const monthYear = new Date(note.updatedAt).toISOString().slice(0, 7); // Format: "YYYY-MM"

      if (updatedAt >= todayStart) {
        groupedNotes.today.push(note);
      } else if (updatedAt >= sevenDaysAgo) {
        groupedNotes.last7Days.push(note);
      } else if (updatedAt >= thirtyDaysAgo) {
        groupedNotes.last30Days.push(note);
      } else {
        if (!groupedNotes.byMonth[monthYear]) {
          groupedNotes.byMonth[monthYear] = [];
        }
        groupedNotes.byMonth[monthYear].push(note);
      }
    });

    return groupedNotes;
  };

  const groupedNotes = categorizeNotes(notes);

  // Toggle group expansion
  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  // Toggle month expansion
  const toggleMonth = (monthYear) => {
    setExpandedGroups((prev) => ({
      ...prev,
      byMonth: {
        ...prev.byMonth,
        [monthYear]: !prev.byMonth[monthYear],
      },
    }));
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-row gap-5 items-center mb-4 ml-2">
            <SquarePen className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
            <Search className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
          <SidebarGroupLabel className="mb-2"> <span className="text-2xl text-primary">ម៉ឺនុយកម្មវិធី</span>​​</SidebarGroupLabel>
          <hr className="border-gray w-full mb-2" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center gap-3 py-6 text-xl rounded-lg transition-all duration-300 ${activePath === item.url
                        ? 'bg-gray text-primary text-xl font-medium  hover:bg-gray hover:text-primary text-gray-600'
                        : 'font-medium hover:bg-gray hover:text-primary text-gray-600'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePath(item.url);
                        window.location.href = item.url;
                      }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <hr className="border-gray w-full my-4" />
          {groupedNotes && Object.keys(groupedNotes).length !== 0 ?  (
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Today */}
                {groupedNotes.today.length > 0 && (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleGroup("today")}
                    >
                      <SidebarGroupLabel><h2 className="text-lg font-medium">ថ្ងៃនេះ</h2></SidebarGroupLabel>
                      {expandedGroups.today ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {expandedGroups.today &&
                      groupedNotes.today.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton asChild>
                            <a
                              href={`/notes/${item.id}/transcriptions`}
                              className="flex flex-row justify-between p-2 text-gray-600 hover:bg-smean-blue/20 hover:text-smean-blue rounded-lg transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/notes/${item.id}/transcriptions`;
                              }}
                            >
                              <p className="text-lg font-medium truncate w-40 block">
                                {item.title.length > 40
                                  ? `${item.title.substring(0, 30)}...`
                                  : item.title}
                              </p>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </>
                )}

                {/* Previous 7 Days */}
                {groupedNotes.last7Days.length > 0 && (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer mt-6"
                      onClick={() => toggleGroup("last7Days")}
                    >
                      <SidebarGroupLabel><h2 className="text-lg font-medium">7 ថ្ងៃមុន</h2></SidebarGroupLabel>
                      {expandedGroups.last7Days ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {expandedGroups.last7Days &&
                      groupedNotes.last7Days.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton asChild>
                            <a
                              href={`/notes/${item.id}/transcriptions`}
                              className="flex flex-row justify-between p-2 text-gray-600 hover:bg-smean-blue/20 hover:text-smean-blue rounded-lg transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/notes/${item.id}/transcriptions`;
                              }}
                            >
                              <span className="text-lg font-medium truncate w-50 block">
                                {item.title.length > 40
                                  ? `${item.title.substring(0, 30)}...`
                                  : item.title}
                              </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </>
                )}

                {/* Previous 30 Days */}
                {groupedNotes.last30Days.length > 0 && (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleGroup("last30Days")}
                    >
                      <SidebarGroupLabel><h2 className="text-lg font-medium">30 ថ្ងៃមុន</h2></SidebarGroupLabel>
                      {expandedGroups.last30Days ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {expandedGroups.last30Days &&
                      groupedNotes.last30Days.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton asChild>
                            <a
                              href={`/notes/${item.id}/transcriptions`}
                              className="flex flex-row justify-between p-2 text-gray-600 hover:bg-smean-blue/20 hover:text-smean-blue rounded-lg transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/notes/${item.id}/transcriptions`;
                              }}
                            >
                              <span className="text-base font-medium truncate w-50 block">
                                {item.title.length > 40
                                  ? `${item.title.substring(0, 30)}...`
                                  : item.title}
                              </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </>
                )}

                {/* Group by Month */}
                {Object.keys(groupedNotes.byMonth).map((monthYear) => (
                  <React.Fragment key={monthYear}>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleMonth(monthYear)}
                    >
                      <SidebarGroupLabel>{monthYear}</SidebarGroupLabel>
                      {expandedGroups.byMonth[monthYear] ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {expandedGroups.byMonth[monthYear] &&
                      groupedNotes.byMonth[monthYear].map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton asChild>
                            <a
                              href={`/notes/${item.id}/transcriptions`}
                              className="flex flex-row justify-between p-2 text-gray-600 hover:bg-smean-blue/20 hover:text-smean-blue rounded-lg transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/notes/${item.id}/transcriptions`;
                              }}
                            >
                              <span className="text-lg font-medium truncate w-50 block">
                                {item.title.length > 40
                                  ? `${item.title.substring(0, 30)}...`
                                  : item.title}
                              </span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                  </React.Fragment>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>

          ) : (
            <SideBarNoteSkeleton />
          )}

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LogOut />
      </SidebarFooter>
    </Sidebar>
  );
}