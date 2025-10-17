// "use client"

// import { Menu, LogOut } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface NavigationProps {
//   onToggleSidebar: () => void
//   isSidebarOpen: boolean
// }

// export function Navigation({ onToggleSidebar, isSidebarOpen }: NavigationProps) {
//   return (
//     <nav className="border-b border-border bg-card">
//       <div className="flex items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="lg:hidden">
//             <Menu className="h-5 w-5" />
//           </Button>
//           <h1 className="text-xl font-bold text-foreground">Quiz Master</h1>
//         </div>

//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="sm" className="gap-2">
//             <LogOut className="h-4 w-4" />
//             Logout
//           </Button>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"

interface NavigationProps {
  onToggleSidebar: () => void
  isSidebarOpen: boolean
  currentUser?: any
  onLogout?: () => void
}

export function Navigation({ onToggleSidebar, isSidebarOpen, currentUser, onLogout }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">EcoLearn</h1>
        </div>

        <div className="flex items-center gap-4">
          {currentUser && (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, <span className="font-semibold text-foreground">{currentUser.name || currentUser.email}</span>
              </span>
              <Button variant="ghost" size="sm" className="gap-2" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
