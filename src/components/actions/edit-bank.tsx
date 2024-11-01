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
import { updateAccount } from '@/redux/Slices/bankSlices';

interface EditBankProps {
  accountId: string | number;
}

function EditBank({ accountId }: EditBankProps) {
  const dispatch = useDispatch();
  const account = useSelector((state: any) =>
    state.bank.accounts.find((acc: any) => acc.id === accountId)
  );

  const [nickname, setNickname] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountTitle, setAccountTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (account) {
      setNickname(account.nickname);
      setAccountNumber(account.accountNumber);
      setAccountTitle(account.accountTitle);
      setPurpose(account.purpose);
    }
  }, [account]);

  const handleSave = () => {
    dispatch(updateAccount({ id: accountId, updatedData: { nickname, accountNumber, accountTitle, purpose } }));
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
          <DialogTitle>Edit Bank Detail</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="Nickname" className="text-sm font-medium">Nickname</Label>
            <Input
              id="Nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter your Nickname"
            />
            <Label htmlFor="account" className="text-sm font-medium">Account Number</Label>
            <Input
              id="account"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your Account Number"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">Account Title</Label>
            <Input
              id="title"
              type="text"
              value={accountTitle}
              onChange={(e) => setAccountTitle(e.target.value)}
              placeholder="Enter your Account Title"
            />
            <Label htmlFor="Purpose" className="text-sm font-medium">Purpose</Label>
            <Input
              id="Purpose"
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Enter your Purpose"
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

export default EditBank;
