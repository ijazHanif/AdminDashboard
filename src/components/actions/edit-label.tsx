import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateAccount } from "@/redux/Slices/receiptSlices";

interface EditBankProps {
  accountId: string | number;
}

function EditReceipt({ accountId }: EditBankProps) {
  const dispatch = useDispatch();
  const account = useSelector((state: any) =>
    state.label.accounts.find((acc: any) => acc.id === accountId)
  );

  const [labelName, setLabelName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [date, setDate] = useState('');
  const [lastModified , setLastModified] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (account) {
      setLabelName(account.labelName);
      setDescription(account.description);
      setColor(account.color);
      setDate(account.date);
      setLastModified(account.lastModified);

    }
  }, [account]);

  const handleSave = () => {
    dispatch(updateAccount({ id: accountId, updatedData: { labelName, description, color, lastModified } }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <Edit size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Edit Label Detail</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="labelName" className="text-sm font-medium">LabelName</Label>
            <Input
              id="labelName"
              type="text"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
              placeholder="Enter your label name"
            />
            <Label htmlFor="description" className="text-sm font-medium">Description</Label>
            <Input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="color" className="text-sm font-medium">Color</Label>
            <Input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Enter your color"
            />
            <Label htmlFor="date" className="text-sm font-medium">Date Created</Label>
            <Input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter your created date"
            />
            <Label htmlFor="last" className="text-sm font-medium">Last Modified</Label>
            <Input
              id="last"
              type="text"
              value={lastModified}
              onChange={(e) => setLastModified(e.target.value)}
              placeholder="Enter your modified date"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button type="button" onClick={handleSave}>
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditReceipt;
