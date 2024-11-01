// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";
// import { useDispatch } from 'react-redux';
// import { deleteAccount } from '@/redux/Slices/bankSlices';

// interface DeleteBankProps {
//   accountId: string | number;
// }

// function DeleteBank({ accountId }: DeleteBankProps) {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteAccount(accountId));
//   };

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button variant="outline">
//           <Trash size={16} /> {/* Delete icon */}
//         </Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default DeleteBank;
