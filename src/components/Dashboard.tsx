import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"

export function Dashboard() {return (
    <div className="p-4 pt-1.5">
        <h1 className="text-4xl font-bold p-6">Dashboard</h1>
        <Separator />
        <Calendar mode="single" className="p-4 m-5 rounded-xl border"></Calendar>

    </div>

)}