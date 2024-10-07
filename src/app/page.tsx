'use client';
import Header from '../components/header';
import { useEffect } from 'react';
import { useUsuarioStore } from '@/context/usuario';
import { HiCheckBadge } from "react-icons/hi2";
import Link from 'next/link';
import Banner from '@/components/ui/banner';


export default function Home() {
  const { logar } = useUsuarioStore();
  useEffect(() => {
    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idUsuario}`,
      );
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
      }
    }
    if (localStorage.getItem('client_key')) {
      const usuarioSalvo = localStorage.getItem('client_key') as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, '');
      buscaUsuarios(usuarioValor);
    }
  });
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Banner />
        </section>
      <section className='flex p-10 justify-evenly w-full  '>
        <div className='flex flex-col gap-10 items-center lg:pl-24 lg:pt-20'>
          <h1 className='text-center font-bold text-3xl'> Explore Novos Horizontes <br/> Linguísticos</h1>
          <p className='max-w-96 text-xl font-sans font-normal xl:text-2xl'>Bem-vindo à Verbalize, uma plataforma única onde falantes de diferentes línguas se conectam para ensinar e aprender uns com os outros. </p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          </div>
        </div>
        <img src="./landingPage/computador.png" className='hidden w-2/5 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block lg:ml-40' />
      </section>
      <section className='p-10'>
        <h1 className='text-center font-bold text-3xl pb-5'>Alguns Idiomas Que Você Pode <span className='text-red-500 font-bold '>Aprender</span> </h1>
        <br />
        <div className='flex justify-around py-7'>
          <div className='grid grid-cols-2 gap-10 lg:grid-cols-3 '>
            <div className='bg-[#f1dfdf] flex flex-col items-center justify-center max-w-36 rounded-3xl py-2 px-4 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/china.png" />
              <p className='text-center font-black text-xl'>Mandarim</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/tagalog.png" />
              <p className='text-center font-black text-xl'>Tagalog</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/arabic.png" />
              <p className='text-center font-black text-xl'>Árabe</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/germany.png" />
              <p className='text-center font-black text-xl'>Alemão</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/thailand.png" />
              <p className='text-center font-black text-xl'>Tailandês</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-3 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <img className='w-28 px-6 pb-2' src="./Bandeiras/japan.png" />
              <p className='text-center font-black text-xl'>Japonês</p>
            </div>
          </div>
          <img className='hidden w-2/5 max-h-96 rounded-[2.1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block' src="./landingPage/linguas.png" />
        </div>
      </section>
      <section className='p-10 mb-52'>
      <h1 className='text-center text-3xl font-bold mb-10'>Pronto para Começar? <span className='text-red-500 font-bold '>Inscreva-se Hoje!</span> </h1>
      <div className='flex items-center justify-around'>
      <img className='hidden w-2/5 max-h-96 rounded-[2.1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block' src="./landingPage/menina.png" />
        <div className='flex items-center'>
          <p className='max-w-lg text-xl font-sans font-normal xl:mr-28 xl:text-2xl'>Descubra o poder das conversas reais e faça parte de uma comunidade global de aprendizado. Com a Verbalize, você pode aprender um novo idioma de maneira autêntica, enquanto ensina sua própria língua. É simples, interativo e eficaz.
          </p>
        </div>
      </div>
      </section>
      <section id='planos' className='scroll-m-40 m-2 mb-10'>
        <div className='bg-[#625173] p-10 rounded-3xl pb-20 font-poppins lg:mx-20 xl:mx-25'>
        <h1 className='text-center font-sans text-white text-3xl mb-10'>Conheça as assinaturas</h1>
        <div className='flex flex-col gap-5 justify-around items-center xl:flex-row' >
        <div className='text-start text-white max-w bg-zinc-900 rounded-3xl p-12 flex flex-col gap-5 '>
          <h2 className='text-xl font-bold'>Verbalize Start</h2>
          <h3 className='text-2xl font-bold  '>Gratuito</h3>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Acesso a chats de texto com parceiros linguísticos.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Suporte básico por e-mail.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Histórico de mensagens armazenado por 30 dias.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Acesso a chats de texto com parceiros linguísticos.</p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Link href={'/registro'} type="button" className="hover:scale-110 px-4 py-1 transition delay-150 duration-300 ease-in-out text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none rounded-3xl text-xl text-center ">
              Compre Agora
            </Link>
          </div>
        </div>
        <div className='text-start text-white max-w bg-zinc-900 rounded-3xl p-12 flex flex-col gap-5 '>
          <h2 className='text-xl font-bold'>Verbalize Plus</h2>
          <h3 className='text-2xl font-bold  '>R$19.90 /mês</h3>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Todos os benefícios do plano Start.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Suporte prioritário por e-mail.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Histórico de mensagens ilimitado.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Recurso de tradução automática embutido no chat.</p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Link href={'/registro'} type="button" className="hover:scale-110 px-4 py-1 transition delay-150 duration-300 ease-in-out text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none rounded-3xl text-xl text-center ">
              Compre Agora
            </Link>
          </div>
        </div>
        </div>
        </div>
      </section>
      </main>
    </div>
  );
}
