import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Trash2, Plus } from "lucide-react"; // Nice icons for UI actions

import { useState} from "react";



export function EditItems({ category, onSave }: { category: any; onSave: (updatedItems: any[]) => void }) {
  
  // Local state for immediate UI item list changes (like adding/deleting rows on the fly)
  const [items, setItems] = useState(category.items);

  const handleAddItem = () => {
    const newItem = { id: crypto.randomUUID(), title: "New Assignment", date: "2026-07-01", mark: 100 };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item: any) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Read input fields dynamically based on their item IDs
    const updatedItems = items.map((item: any) => ({
      ...item,
      title: formData.get(`title-${item.id}`) as string,
      mark: Number(formData.get(`mark-${item.id}`)),
    }));

    onSave(updatedItems);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full">Edit</Button>
      </SheetTrigger>
      <SheetContent className="px-4 min-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit {category.name}</SheetTitle>
          </SheetHeader>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {items.map((item: any) => (
              <div key={item.id} className="flex gap-2 items-end">
                <div className="flex-1">
                  <Input name={`title-${item.id}`} defaultValue={item.title} />
                </div>
                <div className="w-20">
                  <Input name={`mark-${item.id}`} type="number" defaultValue={item.mark} />
                </div>
                {/* Remove Button */}
                <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                  <Trash2 className="text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <Button type="button" variant="secondary" className="w-full " onClick={handleAddItem}>
            <Plus className="h-4 w-4" /> Add Assignment
          </Button>

          <SheetFooter>
            <Button type="submit">Save Changes</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}