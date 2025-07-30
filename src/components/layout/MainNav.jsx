"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "NEXT 부트캠프",
      items: [
        { href: "/bootcamp/about", label: "NEXT 부트캠프란?" },
        { href: "/bootcamp/greeting", label: "위원장 인사말" },
      ],
    },
    {
      title: "입과신청",
      items: [
        { href: "/apply/application", label: "지원하기" },
        { href: "/apply/results", label: "합격조회" },
      ],
    },
    {
      title: "교육과정",
      items: [{ href: "/curriculum", label: "커리큘럼" }],
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/metarich.png"
              alt="Metarich Logo"
              width={150}
              height={33}
              className="w-32 md:w-[150px]"
              priority
            />
          </Link>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {menuItems.map((item) =>
                  item.items ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="h-12 px-5 text-base font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[240px] gap-3 p-6">
                          {item.items.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className={`${navigationMenuTriggerStyle()} h-12 px-5 text-base font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <Link
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()} h-12 px-5 text-base font-medium`}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="메뉴 열기"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
                  <div className="flex items-center justify-between">
                    <Image
                      src="/metarich.png"
                      alt="Metarich Logo"
                      width={120}
                      height={26}
                      priority
                    />
                    <SheetClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100">
                      <span className="sr-only">닫기</span>
                    </SheetClose>
                  </div>
                </SheetHeader>
                <div className="px-6 py-4">
                  {menuItems.map((item) => (
                    <div key={item.title} className="py-2">
                      <h3 className="text-base font-medium text-gray-500 mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.items ? (
                          item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-3 py-2 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
