import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function App() {
  const [courseName, setCourseName] = useState("")
  const [grade, setGrade] = useState("")
  const [courses, setCourses] = useState<{ id: number; name: string; mark: number }[]>([])

  const addCourse = () => {
    if (!courseName || !grade) return
    
    const newCourse = {
      id: Date.now(),
      name: courseName,
      mark: parseFloat(grade)
    }

    setCourses([...courses, newCourse])
    setCourseName("")
    setGrade("")
  }

  const overallAverage = courses.length > 0 
    ? (courses.reduce((sum, item) => sum + item.mark, 0) / courses.length).toFixed(1)
    : "0.0"

  return (
    // Uses bg-background and text-foreground so the canvas shifts fluidly between light and dark
    <div className="min-h-screen p-6 flex flex-col items-center justify-center transition-colors duration-600">
      
      <div className="w-full max-w-4xl flex flex-col gap-6">
        
        {/* Header Block using the standard adaptive border utilities */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Academic Analytics</h1>
            <p className="text-sm text-muted-foreground">Track courses and compute averages real-time</p>
          </div>
          {/* bg-card adapts dynamically; text-primary uses your system accent token */}
          <div className="bg-card border border-border px-4 py-2 rounded-xl text-center shadow-sm">
            <span className="text-xs text-muted-foreground block uppercase font-semibold">Current Average</span>
            <span className="text-2xl font-black text-primary">{overallAverage}%</span>
          </div>
        </div>

        {/* Dashboard Grid split view Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Input Sidebar Panel */}
          <div className="bg-card text-card-foreground border border-border p-5 rounded-2xl flex flex-col gap-4 md:col-span-1 shadow-sm">
            <h3 className="text-sm font-medium text-foreground">Add New Course</h3>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Course Identifier</label>
              <Input 
                placeholder="e.g., ICS3U" 
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-muted-foreground">Achieved Mark (%)</label>
              <Input 
                type="number" 
                placeholder="e.g., 98" 
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>

            {/* The default Shadcn button handles light/dark hover and active states natively */}
            <Button onClick={addCourse} className="w-full mt-2 font-medium">
              Record Entry
            </Button>
          </div>

          {/* Right Ledger Log View Display Panel */}
          <div className="bg-card text-card-foreground border border-border p-5 rounded-2xl flex flex-col gap-4 md:col-span-2 shadow-sm">
            <h3 className="text-sm font-medium text-foreground">Registered Courses Ledger</h3>
            
            {courses.length === 0 ? (
              <div className="flex-1 flex items-center justify-center border border-dashed border-border rounded-xl p-8 text-muted-foreground text-sm">
                No course profiles recorded yet.
              </div>
            ) : (
              // 💡 Swap out your old overflow div for this premium ScrollArea wrapper!
              <ScrollArea className="h-[280px] w-full rounded-xl pr-3">
                <div className="flex flex-col gap-2">
                  {courses.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-xl">
                      <span className="font-medium font-mono text-foreground">{item.name}</span>
                      <span className="font-bold text-primary">{item.mark}%</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}