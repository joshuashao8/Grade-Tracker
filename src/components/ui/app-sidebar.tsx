import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

import { data } from "@/components/data"

export function AppSidebar() {

    
  return (
    <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="rounded-xl p-4 ml-0 m-1 mb-0 hover:shimmer shimmer-spread-40 transition-all duration-600">

                            <Link to="/landing-page" className="text-2xl font-bold tracking-tight ">Grade Tracker</Link>
                            <p className="text-xs text-muted-foreground">Ultra Pro Max</p>
                        </div>
                        <hr className="mx-4 mb-5"></hr>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/" className="font-light mx-1">Dashboard</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/settings" className="font-light ml-1">Settings</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        
                        <Accordion type="single"  collapsible defaultValue="courses-item" className="max-w-lg border-none">
                            <AccordionItem value="courses-item" className="border-none">
                                <AccordionTrigger className="hover:no-underline px-3 py-2 font-light ml-1">Courses</AccordionTrigger>
                                <AccordionContent>
                                    {data.map((course) => ( 
                                        <SidebarMenuItem key={course.id}>
                                            <SidebarMenuButton asChild>
                                                <Link to={`/course/${course.id}`} className="font-light ml-1 no-underline">{course.name}</Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}