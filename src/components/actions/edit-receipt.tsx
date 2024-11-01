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
import { updateAccount } from '@/redux/Slices/receiptSlices';

interface EditBankProps {
  accountId: string | number;
}

function EditBank({ accountId }: EditBankProps) {
  const dispatch = useDispatch();
  const account = useSelector((state: any) =>
    state.receipt.accounts.find((account: any) => account.id === accountId)
  );

  const [invoice , setInvoice] = useState('');
  const [customerName , setCustomerName] = useState('');
  const [amount ,setAmount] = useState('');
  const [status , setStatus] = useState('');
  const [date , setDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (account) {
      setInvoice(account.invoice);
      setCustomerName(account.customerName);
      setAmount(account.amount);
      setStatus(account.status)
      setDate(account.date);
    }
  }, [account]);

  const handleSave = () => {
    dispatch(updateAccount({ id: accountId, updatedData: { invoice, customerName, amount, status, date } }));
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
          <DialogTitle>Edit Receipt Detail</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="invoice" className="text-sm font-medium">Invoice</Label>
            <Input
              id="invoice"
              type="text"
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              placeholder="Enter your Nickname"
            />
            <Label htmlFor="customerName" className="text-sm font-medium">Customer Name</Label>
            <Input
              id="customer"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your customer name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium">Amount</Label>
            <Input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter your Amount"
            />
            <Label htmlFor="status" className="text-sm font-medium">Status</Label>
            <Input
              id="staus"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Enter your Status"
            />
            <Label htmlFor="date" className="text-sm font-medium">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Enter your date"
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
