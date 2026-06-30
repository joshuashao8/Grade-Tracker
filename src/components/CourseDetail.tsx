import {useParams} from "react-router-dom"
import { data, type Category } from "@/components/Data"; 

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {Button} from "@/components/ui/button"
import { Separator} from "@/components/ui/separator"


export function CalculateMark(categories: Category[]): number {
    let totalMark = 0;
    let totalWeightUsed = 0;

    categories.forEach((cat) => {
        let sum = 0;
        cat.items.forEach((item) => {
            sum += item.mark;
        })

        const categoryAverage = sum / cat.items.length;
        totalMark += categoryAverage * (cat.weight / 100);
        totalWeightUsed += cat.weight;
    })

    if (totalWeightUsed === 0) return 0;

    return (totalMark / totalWeightUsed) * 100;
}

export function CourseDetail() {
    const {id} = useParams();

    const course = data.find((c) => c.id === id);

    if (!course) {
        return <div> Course not found</div>;
    }
    const finalMark = CalculateMark(course.categories);

    return (
        <div className="flex-1 flex flex-col p-6 space-y-4">
            <h1 className="text-3xl font-bold">Course Detail of {course.name}</h1>
            <p className="text-xl">
                Current Mark: <span className="font-semibold">{finalMark.toFixed(1)}%</span>
            </p>

            <Separator className="my-6 mb-1" />
            <div className="scroll-fade-20">
                {course.categories.map((category) => (
                    <Card className="mx-auto w-full shadow-2xl my-6">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                            <CardDescription>{category.id}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                Edit
                            </Button>
                        </CardFooter>
                    </Card>
                ))
                }
            </div>
        </div>
    )
}