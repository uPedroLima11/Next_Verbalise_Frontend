"use client";
import Link from "next/link";
import {useUsuarioStore} from "@/context/usuario";
import {useRouter} from "next/navigation";
import {HiUserGroup} from "react-icons/hi";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {JetBrains_Mono} from "next/font/google";
import {useEffect, useState} from "react";

import Cookies from "js-cookie";
import {House} from "lucide-react";

const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const { usuario, logar, deslogar } = useUsuarioStore();
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("client_key")) {
      const usuarioSalvo = localStorage.getItem("client_key") as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, "");
      Cookies.set("token_usuario_logado", "Aprovado");
      buscaUsuarios(usuarioValor);
    }

    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
      }
    }
  }, []);

  const abrirNavbar = () => {
    setIsClicked(!isClicked);
  };

  function sairCliente() {
    router.push("/");
    deslogar();

    Cookies.remove("token_usuario_logado");
    Cookies.remove("descricao");

    if (localStorage.getItem("client_key")) {
      localStorage.removeItem("client_key");
    }
  }

  return (
    <nav className="font-sans bg-gradient-to-r py-[0.35rem] bg-[#693f94] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed w-screen z-20 top-0">
      <div className="w-screen flex items-center justify-between px-2 lg:px-6 xl:px-10">
        <a href="/" className="flex justify-center items-center flex-col space-x-3 rtl:space-x-reverse">
          <img src="/logos/Logo_preta.png" className="h-10" />
          <span className={`${jetbrains.className} p-0 pr-2  elf-center text-lg font-semibold whitespace-nowrap text-white`}>Verbalize</span>
        </a>
        {usuario.id ? (
          <>
            <div className="hidden items-center justify-between w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex items-center justify-center flex-row gap-36  font-medium ">
                <li>
                  <a href="/" className=" flex items-center justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <House size={38} className="text-black" />
                    Home
                  </a>
                </li>
                <li>
                  <Link href="/comunidades" className="flex items-center justify-center flex-col font-bold py-2 px-3 text-white text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <HiUserGroup size={38} className="text-black" />
                    Comunidades
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-5">
                  <Link href="/perfil" className="flex items-center justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded hover:text-[#B38000] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <Avatar>
                      <AvatarImage src={usuario.foto} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                  <span onClick={sairCliente} className="cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center m-0 text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center ">
                    Sair
                  </span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="hidden items-center justify-between w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex justify-around p-4 px-6 mt-0 gap-36 font-medium">
                <li>
                  <Link href="/informacoes" className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg" aria-current="page">
                    Porque escolher nós
                  </Link>
                </li>
                <li>
                  <Link href="/#planos" className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg">
                    Tornar-se um Cliente
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg">
                    Sobre-nós
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden items-center justify-center mr-5 md:order-2 space-x-4 lg:flex">
              <Link href={"/registro"} className="transition delay-150 duration-300 ease-in-out text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-2 text-center ">
                Registro
              </Link>
              <Link href={"/login"} type="button" className="transition delay-150 duration-300 ease-in-out text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-2 text-center ">
                Login
              </Link>
            </div>
          </>
        )}
        <div className="lg:hidden flex items-end ">
          <button className="inline-flex items-center justify-center p-2 rounded-b-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={abrirNavbar}>
            {isClicked ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClicked && usuario.id && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm-px-3">
            <Link href="/comunidades" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-base rounded   md:p-0 ">
              Comunidades
            </Link>
            <Link href="/" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-base rounded  md:p-0 ">
              Mensagens
            </Link>
            <Link href="/perfil" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded ">
              Perfil
            </Link>
            <span onClick={sairCliente} className="cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center m-0 text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center ">
              Sair
            </span>
          </div>
        </div>
      )}
      {isClicked && !usuario.id && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm-px-3">
            <Link href="/informacoes" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-base rounded ">
              Porque escolher nós
            </Link>
            <Link href="/#planos" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-base rounded ">
              Tornar-se um Cliente
            </Link>
            <Link href="/sobre" className="flex justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded ">
              Sobre-nós
            </Link>
            <div className="flex flex-col gap-3">
              <Link href={"/login"} className="cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center m-0 text-white bg-slate-800  focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center ">
                Login
              </Link>
              <Link href={"/registro"} className="cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center m-0 text-white bg-slate-800 focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center ">
                Registro
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
