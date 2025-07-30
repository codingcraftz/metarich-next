"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center">
        <Image src="/metarich.png" alt="Metarich Logo" width={150} height={33} priority />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>NEXT 부트캠프</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li className="row-span-3">
                  <Link href="/bootcamp/about" className={navigationMenuTriggerStyle()}>
                    NEXT 부트캠프란?
                  </Link>
                </li>
                <li className="row-span-3">
                  <Link href="/bootcamp/greeting" className={navigationMenuTriggerStyle()}>
                    위원장 인사말
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>입과신청</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li className="row-span-3">
                  <Link href="/apply/application" className={navigationMenuTriggerStyle()}>
                    지원하기
                  </Link>
                </li>
                <li className="row-span-3">
                  <Link href="/apply/results" className={navigationMenuTriggerStyle()}>
                    합격조회
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>교육과정</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                <li className="row-span-3">
                  <Link href="/curriculum" className={navigationMenuTriggerStyle()}>
                    커리큘럼
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/notice" className={navigationMenuTriggerStyle()}>
              공지사항
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNav;
