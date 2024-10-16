// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { toast } from "react-toastify";
// import { useAuth } from "@/app/commons/auth/firebaseConfig";
// import { useToken } from "@/app/commons/contexts/contexts";
// import { useRouter } from "next/navigation";

// const UserMenu = ({ iconSrc }) => {
//   const { signOut } = useAuth();

//   const handleLogout = async (event: React.MouseEvent) => {
//     event.preventDefault();
//     const result = await signOut();
//     setToken("");
//     if (result === "Sign out") {
//       toast.success("ログアウトしました");
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="focus:outline-none transition-opacity duration-300 hover:opacity-70"
//       >
//         <Image
//           src={iconSrc}
//           alt="User Icon"
//           width={32}
//           height={32}
//           className="rounded-full"
//         />
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 z-10">
//           <Link href="/login" onClick={handleLogout}>
//             <p className="block px-4 py-2 font-semibold text-base text-gray-700 hover:text-[#FA6183]">
//               {token ? "ログアウト" : "ログイン"}
//             </p>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserMenu;
