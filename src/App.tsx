import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, MapPin, GraduationCap, Landmark, ScrollText, Lightbulb, Star, Quote } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-300 selection:bg-gold-500/30 selection:text-gold-300" ref={containerRef}>
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl tracking-widest text-gold-500 uppercase">
            Баласагуни
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-500 hidden sm:block">
            XI Век • Мыслитель • Поэт
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-10" />
          <img 
            src="https://picsum.photos/seed/islamic-architecture/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col items-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold-500 mb-8" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-light text-white mb-6 tracking-tight leading-none"
          >
            Жусуп <br className="md:hidden" />
            <span className="text-gold-500 italic">Баласагуни</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl leading-relaxed"
          >
            Выдающийся тюркский поэт, философ, мыслитель, государственный деятель и учёный XI века, один из крупнейших представителей культуры средневекового Востока.
          </motion.p>
        </motion.div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-32 md:space-y-48">
        
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-semibold">Происхождение</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight">Рождение в <br/><span className="italic text-gold-400">Баласагуне</span></h2>
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
              <p>
                Жусуп Баласагуни родился приблизительно в 1015–1016 годах в городе Баласагун, который находился на территории современной Чуйской долины рядом с нынешним городом Токмок.
              </p>
              <p>
                Сегодня на месте древнего города располагается археологический комплекс Башня Бурана, являющийся остатком столицы Караханидского государства.
              </p>
              <p>
                Баласагун в XI веке был крупным политическим и культурным центром. Семья будущего мыслителя принадлежала к состоятельной и влиятельной социальной группе, что позволило Жусупу получить прекрасное образование.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10" />
              <img 
                src="https://fv5-7.files.fm/thumb_show.php?i=rkh5sf8zrx&view&v=1&PHPSESSID=18ccf157d15e77cadad659532b96287d27bf0b90" 
                alt="Жусуп Баласагуни" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl shadow-2xl max-w-xs">
              <MapPin className="text-gold-500 mb-3" size={24} />
              <p className="text-sm text-zinc-300">Баласагун был центром торговли, образования и научной деятельности Караханидов.</p>
            </div>
          </FadeIn>
        </section>

        <section>
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <GraduationCap className="text-gold-500 mx-auto mb-6" size={40} strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl text-white mb-6">Интеллектуальное <span className="italic text-gold-400">развитие</span></h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Обучался в крупнейших культурных центрах мусульманского Востока: Бухаре, Кашгаре и Фарабе. Владел арабским и персидским языками.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Философия", "Теология", "Математика", "Астрономия", 
              "Геометрия", "Естествознание", "Литература", "Поэзия"
            ].map((subject, i) => (
              <FadeIn key={subject} delay={i * 0.1}>
                <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-center group">
                  <span className="text-gold-500/50 group-hover:text-gold-500 transition-colors font-serif italic text-xl">{subject}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 bg-gradient-to-r from-gold-500/10 to-transparent border-l-2 border-gold-500 p-8 rounded-r-2xl">
            <h3 className="text-xl text-white mb-4 font-serif">Влияние великих умов</h3>
            <p className="text-zinc-400 font-light">
              На формирование его мировоззрения оказали влияние идеи Абу Насра аль-Фараби, Ибн Сины и Фирдоуси. Кроме науки, Жусуп хорошо разбирался в политике, истории и искусстве шахмат.
            </p>
          </FadeIn>
        </section>

        <section className="grid md:grid-cols-12 gap-12">
          <FadeIn className="md:col-span-5 space-y-8">
            <div className="sticky top-32">
              <Landmark className="text-gold-500 mb-6" size={40} strokeWidth={1} />
              <h2 className="text-4xl md:text-5xl text-white mb-6">Улуг Хасс <br/><span className="italic text-gold-400">Хаджиб</span></h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Жусуп Баласагуни занимал важную придворную должность хасс-хаджиба — руководителя придворного аппарата и посредника между правителем и чиновниками.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Этот титул («великий министр двора») он получил после того, как представил правителю свой главный труд.
              </p>
            </div>
          </FadeIn>
          
          <div className="md:col-span-7">
            <FadeIn className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
              
              <ScrollText className="text-gold-500 mb-8 relative z-10" size={48} strokeWidth={1} />
              <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif relative z-10">Кутадгу билиг</h3>
              <p className="text-gold-400 uppercase tracking-widest text-sm mb-8 relative z-10">Благодатное знание (1069–1070)</p>
              
              <div className="space-y-6 text-zinc-400 font-light leading-relaxed relative z-10">
                <p>
                  Поэма была написана в городе Кашгар за 18 месяцев. Состоит примерно из 13 тысяч стихотворных строк на старотюркском языке.
                </p>
                <p>
                  Это один из первых крупных литературных памятников на тюркском языке, полностью сохранившихся до наших дней. Поэма имеет форму философского диалога между четырьмя символическими персонажами:
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { name: "Кюн-Тогды", role: "Справедливость" },
                    { name: "Ай-Толды", role: "Счастье" },
                    { name: "Огдюлмиш", role: "Разум" },
                    { name: "Одгурмыш", role: "Умеренность" }
                  ].map((char) => (
                    <div key={char.name} className="border border-white/5 p-4 rounded-xl">
                      <div className="text-white font-serif text-lg mb-1">{char.name}</div>
                      <div className="text-gold-500/70 text-sm">{char.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section>
          <FadeIn className="text-center mb-16">
            <Lightbulb className="text-gold-500 mx-auto mb-6" size={40} strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl text-white">Основные <span className="italic text-gold-400">идеи</span></h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Государство",
                desc: "Идеальный правитель должен быть мудрым, справедливым и образованным человеком."
              },
              {
                title: "Роль знания",
                desc: "Главное богатство человека — знание и мудрость. Именно разум отличает человека от животных."
              },
              {
                title: "Гармония",
                desc: "Власть и народ должны действовать в согласии для достижения социальной гармонии."
              },
              {
                title: "Нравственность",
                desc: "Основа общества — мораль, честность, ответственность и справедливость каждого."
              },
              {
                title: "Образование",
                desc: "Развитие науки и образования — ключ к улучшению управления государством и жизни общества."
              }
            ].map((idea, i) => (
              <FadeIn key={idea.title} delay={i * 0.1} className={i === 3 || i === 4 ? "md:col-span-1.5" : ""}>
                <div className="h-full p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold-500/30 transition-colors">
                  <h3 className="text-2xl text-white mb-4 font-serif">{idea.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">{idea.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4">
            <Star className="text-gold-500" size={32} strokeWidth={1} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl text-white mb-6 font-serif">Последние годы</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                После завершения поэмы Баласагуни жил и работал при дворе правителей Караханидского государства. Он умер в возрасте около 55 лет, приблизительно в 1075 году.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Местом его захоронения считается район города Кашгар на территории современного Синьцзян-Уйгурского автономного района Китая.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl text-white mb-6 font-serif">Наследие и память</h2>
              <ul className="space-y-4 text-zinc-400 font-light">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span>Основатель письменной литературы тюркских народов, оказавший огромное влияние на философию и политическую мысль.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span>Кыргызский национальный университет в Бишкеке носит его имя.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span>Портрет мыслителя изображён на национальной валюте — купюре в 1000 сомов Кыргызстана.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span>В 2016 году ТЮРКСОЙ объявила год тысячелетия Юсуфа Баласагуни.</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 text-center text-zinc-600 font-light text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <BookOpen size={24} className="text-gold-500/50" strokeWidth={1} />
          <p>«Кутадгу билиг» — Благодатное знание</p>
          <p className="text-xs uppercase tracking-widest mt-4">XI Век • Наследие Востока</p>
        </div>
      </footer>
    </div>
  );
}
