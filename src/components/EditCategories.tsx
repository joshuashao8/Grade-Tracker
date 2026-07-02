import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {useState} from "react";

import { Trash2, Plus } from "lucide-react"; 


export function EditCategories({ categories, onSave }: { categories: any[]; onSave: (updatedCats: any[]) => void }) {
  const [cats, setCats] = useState(categories);

  const handleAddCategory = () => {
    const newCat = { id: crypto.randomUUID(), name: "New Category", weight: 0, items: [] };
    setCats([...cats, newCat]);
  };

  const handleRemoveCategory = (id: string) => {
    setCats(cats.filter((c: any) => c.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedCats = cats.map((c: any) => ({
      ...c,
      name: formData.get(`cat-name-${c.id}`) as string,
      weight: Number(formData.get(`cat-weight-${c.id}`)),
    }));

    onSave(updatedCats);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Manage Categories</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Course Structure</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 max-h-[50vh] overflow-y-auto">
            {cats.map((cat: any) => (
              <div key={cat.id} className="flex gap-2 items-end">
                <div className="flex-grow">
                  <Input name={`cat-name-${cat.id}`} defaultValue={cat.name} />
                </div>
                <div className="w-24">
                  <Input name={`cat-weight-${cat.id}`} type="number" defaultValue={cat.weight} />
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveCategory(cat.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <Button type="button" variant="secondary" className="w-full gap-2" onClick={handleAddCategory}>
            <Plus className="h-4 w-4" /> Add New Category
          </Button>

          <DialogFooter>
            <Button type="submit" className="w-full">Save Structure</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}