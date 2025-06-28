"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCategory } from "@/context/CategoryProvider";
import React, { ReactNode, useRef, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function CategoryDialog({children, title} : Props) {

    const [nameInput, setNameInput] = useState<string>("");
    const {addCategory} = useCategory();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }

    const handleCategory = () => {
        if(!nameInput) return;
        addCategory(nameInput);
        setNameInput("");
        dialogCloseRef.current?.click();
    }
    
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle> {/* Here */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              name
            </Label>
            <Input
              onChange={handleNameInput}
              value={nameInput}
              id="name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCategory}>
            Save changes
          </Button>
          <DialogClose asChild>
            <button ref={dialogCloseRef} className="sr-only">
              Close Dialog
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
