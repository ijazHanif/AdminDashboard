"use client";

import { Avatar } from "@/components/ui/avatar";
import image1 from "../../../../public/avatars/01.png";
import image2 from "../../../../public/avatars/02.png";
import image3 from "../../../../public/avatars/03.png";
import image4 from "../../../../public/avatars/04.png";
import image5 from "../../../../public/avatars/05.png";
import Image from "next/image";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <Image src={image1.src} alt="Avatar" width={100} height={100} />
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,9.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          {/* <AvatarImage src="/avatars/02.png" alt="Avatar" /> */}
          <Image src={image2.src} alt="Avatar" width={100} height={100} />
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$23.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/03.png" alt="Avatar" /> */}
          <Image src={image3.src} alt="Avatar" width={100} height={100} />
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$29.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/04.png" alt="Avatar" /> */}
          <Image src={image4.src} alt="Avatar" width={100} height={100} />
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/05.png" alt="Avatar" /> */}
          <Image src={image5.src} alt="Avatar" width={100} height={100} />
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
