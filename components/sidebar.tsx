// "use client"

// import { LayoutDashboard, Gamepad2, Trophy, Users, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// interface SidebarProps {
//   isOpen: boolean
//   onNavigate: (page: string) => void
//   currentPage: string
// }

// export function Sidebar({ isOpen, onNavigate, currentPage }: SidebarProps) {
//   const menuItems = [
//     { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
//     { id: "quiz", label: "Play Quiz", icon: Gamepad2 },
//     { id: "leaderboard", label: "Leaderboard", icon: Trophy },
//     { id: "profile", label: "Join Game", icon: Users },
//   ]

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => onNavigate(currentPage)} />}

//       {/* Sidebar */}
//       <aside
//         className={cn(
//           "fixed left-0 top-0 z-50 h-screen w-64 border-r border-border bg-sidebar transition-transform duration-300 lg:relative lg:translate-x-0",
//           isOpen ? "translate-x-0" : "-translate-x-full",
//         )}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
//             <h2 className="text-lg font-bold text-sidebar-foreground">Menu</h2>
//             <Button variant="ghost" size="icon" onClick={() => onNavigate(currentPage)} className="lg:hidden">
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           {/* Navigation Items */}
//           <nav className="flex-1 p-4 space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon
//               const isActive = currentPage === item.id

//               return (
//                 <Button
//                   key={item.id}
//                   variant={isActive ? "default" : "ghost"}
//                   className={cn(
//                     "w-full justify-start gap-3",
//                     isActive && "bg-sidebar-primary text-sidebar-primary-foreground",
//                   )}
//                   onClick={() => onNavigate(item.id)}
//                 >
//                   <Icon className="h-5 w-5" />
//                   <span>{item.label}</span>
//                 </Button>
//               )
//             })}
//           </nav>

//           {/* Footer */}
//           <div className="p-4 border-t border-sidebar-border">
//             <p className="text-xs text-sidebar-foreground/60">Quiz Master v1.0</p>
//           </div>
//         </div>
//       </aside>
//     </>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Gamepad2, LayoutDashboard, Trophy, Users, X, Zap } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onNavigate: (page: string) => void
  currentPage: string
}

export function Sidebar({ isOpen, onNavigate, currentPage }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "quiz", label: "Play Quiz", icon: Gamepad2 },
    { id: "challenges", label: "Challenges", icon: Zap },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "profile", label: "Join Game", icon: Users },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => onNavigate(currentPage)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 border-r border-border bg-sidebar transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
            <h2 className="text-lg font-bold text-sidebar-foreground">Menu</h2>
            <Button variant="ghost" size="icon" onClick={() => onNavigate(currentPage)} className="lg:hidden">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    isActive && "bg-sidebar-primary text-sidebar-primary-foreground",
                  )}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Button>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/60">Quiz Master v1.0</p>
          </div>
        </div>
      </aside>
    </>
  )
}
