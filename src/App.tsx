import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import {Separator } from "@/components/ui/separator"

import {Dashboard} from "@/components/Dashboard"
import {CourseDetail} from "@/components/CourseDetail"
import {Settings} from "@/components/Settings"
import {LandingPage} from "@/components/LandingPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { data, type Category } from "@/components/data"


export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <main className="flex-1 flex flex-col p-6">
            <SidebarTrigger className="p-5 pt-6"/>
              <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/settings" element={<Settings />} />
                <Route path="/course/:id" element={<CourseDetail />} />
                <Route path="/landing-page" element={<LandingPage />} />
              </Routes>
            </main>
          </div>
      </SidebarProvider>
    </BrowserRouter>
  )
}