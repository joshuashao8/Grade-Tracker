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
        <div className="flex-1 flex w-full flex-col p-6 space-y-4 scroll-fade-20">
            <div className="flex">
                <h1 className="text-3xl font-bold">Course Information on </h1>
                <h1 className="text-3xl pl-3 font-bold text-primary shimmer">{course.name}</h1>

            </div>
            <p className="text-xl">
                Current Mark: <span className="font-semibold">{finalMark.toFixed(1)}%</span>
            </p>

            <Separator className="my-6 mb-1" />
            <div className="w-full scroll-fade-20">
                {course.categories.map((category) => (
                    <Card key={category.id} className="mx-auto w-full shadow-2xl my-6">
                        <CardHeader>
                            <CardTitle className="px-3 text-xl font-bold">{category.name}</CardTitle>
                            <CardDescription className="px-3">{category.id}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {category.items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/70 transition-colors">
                                
                                    {/* Left Side: Name and Date stacked vertically */}
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-medium text-base">{item.title}</span>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </div>

                                    {/* Right Side: Big, prominent mark */}
                                    <div className="text-2xl font-bold tracking-tight text-primary">
                                        {item.mark}%
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full shadow-lg">
                                Edit
                            </Button>
                        </CardFooter>
                    </Card>
                ))
                }
            </div>
            <Button>Add New Category</Button>
        </div>
    )
}