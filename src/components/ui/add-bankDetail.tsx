import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { addAccount } from "@/redux/Slices/bankSlices";
import { useState } from "react";

function AddBankDetail() {
  const dispatch = useDispatch();
  const [isOpen , setIsOpen] = useState(false)

  const [form, setForm] = useState({
    nickname: "",
    accountNumber: "",
    accountTitle: "",
    purpose: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = () => {
    if (form.nickname && form.accountNumber && form.accountTitle && form.purpose) {
      const newAccount = {
        id: Date.now().toString(), 
        ...form,
      };
      dispatch(addAccount(newAccount));
      setForm({ nickname: "", accountNumber: "", accountTitle: "", purpose: "" });
      setIsOpen(false)
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Bank Detail</DialogTitle>
          <DialogDescription>
            Add details to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="nickname" className="text-sm font-medium">Nickname</Label>
            <Input id="nickname" type="text" placeholder="Enter your Nickname" value={form.nickname} onChange={handleChange} />
            
            <Label htmlFor="accountNumber" className="text-sm font-medium">Account Number</Label>
            <Input id="accountNumber" type="text" placeholder="Enter your Account Number" value={form.accountNumber} onChange={handleChange} />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="accountTitle" className="text-sm font-medium">Account Title</Label>
            <Input id="accountTitle" type="text" placeholder="Enter your Account Title" value={form.accountTitle} onChange={handleChange} />

            <Label htmlFor="purpose" className="text-sm font-medium">Purpose</Label>
            <Input id="purpose" type="text" placeholder="Enter your Purpose" value={form.purpose} onChange={handleChange} />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Save details</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddBankDetail;
