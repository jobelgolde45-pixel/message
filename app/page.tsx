'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Mail, 
  Send, 
  Sparkles, 
  User, 
  Users,
  ArrowRight,
  Star,
  Music
} from 'lucide-react';

interface CursorHeart {
  id: number;
  x: number;
  y: number;
}

const messages: Record<string, string> = {
  intro: `From: Cathlyne
To: Collection Section & Other Staff

Hello Ma'am, hello Sir HEHE

Still can't believe po I survived 486 hours. 3 months na po pala ako andito—hindi ko po namalayan, time really does fly so fast nga po talaga. Sa loob po ng 3 months, ramdam ko po ang pagmamahal ninyong lahat.

Sorry po dahil mahiyain ako sa inyo, hindi po ako gaanong nagsasalita. But I truly appreciate you all po and how you treated me so well.

Before po, gusto ko agad matapos yung oras ng OJT ko para makauwi po agad ako sa Bicol. Lalo na po nung umalis na yung mga BPA, kasama si Kenneth na partner ko dito sa collection, nalungkot po ako nang sobra. To the point na pagka Monday po non, mag-isa lang ako sa pantry, walang kausap dahil ang aga ko po laging pumasok. Iniwan ko po sa table yung bag at tumbler ko, tapos pumunta ako sa CR kasi hindi ko po maiwasang maiyak dahil hindi po ako sanay.

Tapos ang nasa isip ko po non, hayaan ko na lang po—total mabilis na lang naman po yung remaining kong 186 hours. Pero habang palapit nang palapit po, parang ang hirap po palang umalis knowing na matagal ko po kayong nakasama. Ma-mi-miss ko po kayong lahat, sobra.

Ma-mi-miss ko pong gumising nang maaga para hindi ma-late. Ma-mi-miss ko pong maghintay ng jeep sa may labasan. Ma-mi-miss ko po yung mga guards at utilities na naging close ko na rin po. Ma-mi-miss ko pong makipagkwentuhan at makipagbiruan sa kanila.

Ma-mi-miss ko po si Sir Jason na napakabait sa akin, kabiruan, kaasaran at kakwentuhan ko rin minsan. Siyempre po, hindi mawawala yung bully ko na si Sir Cid HAHAHA Ma-mi-miss ko po yung pang-aasar niya sa akin na hindi na natigil, hanggang sa nasanay na lang ako at gumaganti na rin ako, inaasar ko na rin siya pabalik HAHAHAHA 😝

Thank you so much po for everything, Ma'am and Sir, and to all the staff. I will always be grateful for the memories, learnings, and kindness you've shared with me during my OJT.`,

  nor: `Ma'am Nor

Ma-mi-miss ko pong marinig yung tawa mo Ma'am Nor, at pagiging mabait sa amin ni Kenneth simula nung una pa lang. Napaka-understanding mo din po Ma'am. Nung ngka mali po ako lalo na sa mga envelope, yung dapat ₱35, ginawa ko po pinadikitan ko Ng tig-iisa na hindi naman exact ₱35 HAHAHA. Thank you Ma'am dahil di mo po ako pinagalitan, bagkus tinuruan mo po ako ng tama, Super ma-mi-miss kita Ma'am Nor, you're the supervisor that I won't forget forever kahit konti lang po interaction natin huhu, sorry po mahiyain ako.🥺 I love you, Ma'am Nor!`,

  sirK: `Sir K.

Wahhh ma-mi-miss kita sir! Thank you po sa pag-kukumusta Sakin at sa pagsabi na magpahinga naman ako, at sa pag-aya mag-almusal kahit di ako sumusunod, sorry po 😅 Super appreciated ko po yun. At yung pag-save mo sa akin dun sa galit na Sir, kabado po ako that time. Pero Ngayon po lagi na syang naka ngiti Sakin at kinaka-usap nia na Ako Ng ma ayos at Hindi galit. Thank you so much po!`,

  dess: `Ma'am Dess

Ma-mi-miss ko po ang kwentuhan natin sa counter ng cashier. pag na pasok po Ako Ng Friday gusto ko po lagi don tumambay Kasi nandon po kayo. una palang Ma'am Dess Subrang bait Muna po samin ni Kenneth, and Hindi po nag bago un.I love u po, Ma'am Dess!`,

  rico: `Sir Rico

Ma-mi-miss ko po ang pwesto mo na parang akin na talaga yun HAHA. Nung nagpaalam po ako gamitin yung PC mo, laging okay po sa'yo. Sabi mo pa po kahit di na ako magpaalam. Sayang, need na palitan yung password na unang kong pinalit, maaalala mo sana ako dun sir HAHAHA. (Gardenia.DCream@2026) Salamat din po sa generosity mo po sa akin, iba ka sir Rico (Alrightttttt).`,

  tina: `Ma'am Tina

Ma-mi-miss din kita Ma'am Tina, ang pinakaunang nag-utos sa akin na kumuha ng parcel HAHAHA. Unang kita ko sa'yo Ma'am, akala ko po masungit ka pero ganon ka lang po talaga ka-serious, yung face mo po, at the way na magsalita. Pero habang tumatagal po, masayahin ka din po pala at very mabait po. Natuwa po ako nung naghuhulaan tayo kung sinong Sir po ba ang bibilhan ko ng SB dahil pareho po nating di matandaan, halos na mention ko na po lahat si sir Alim lng Yung hindi, tapos nag-sign na lang ako na naka-headphones lagi HAHAHA, kaya tumawa na lang tayo at nag-apir.`,

  belle: `Ma'am Belle

Ma-mi-miss ko po ang pangungumusta mo at pagsama sakin tuwing nahihiya akong mag-isa. At lagi ka pong naka ngiti Sakin, at kung mag-alala ka Sakin para kitang Ate. Apaka Dali mo pa pong lapitan. I love you Ma'am Belle. Won't forget u po.`,

  aira: `Ma'am Aira

Ma-mi-miss po kita Ma'am Aira🥺 sobrang bait mo din po samin ni Kenneth, na sa-sad lang po Ako na, yun nga po kunti lang po interaction ko po sa Inyo nila Ma'am Nor, Ma'am Anna, Ma'am Krisha, Ma'am Jamie, and Sir Marco po. dahil bukod po sa mahiyain Ako, palagi din po Ako nakala sir Rico dahil don po Ako pumwepwesto para gawin po maka task ko. anyways Ma'am Aira HAHAHA Ma-mi-miss ko din po yung pagiging kalog mo base sa nakikita ko dahil napaka-palatawa mo din Ma'am at joker HAHA. Di pa po kasi kita masyadong nakakausap dahil malayo ako naka-pwesto, tapos kada may tanong ka, nahihiya akong sumagot. Nung tinanong mo po ako kung anong pabango ko, sabi ko secret HAHAHA. Sorry Ma'am Aira, Beville lang po yun, yung purple, sa Hypermarket ko po binili HEHE.`,

  lester: `Sir Lester

Ma-mi-miss ko po yung pag may pinapagawa ka po, minimake sure mo po talaga na magagawa ko nang tama. Thankful po ako sa guidance na binibigay mo po at sa pangungumusta mo din po sa akin at pag-ayang kumain.`,

  anna: `Ma'am Anna

Gusto ko din po makipag-usap tungkol sa K-pop kaso nahihiya ako HAHAHA. Actually po, I stan all HYBE boy groups, not just BTS. ENHYPEN po talaga ult group ko. Nung nakita ko po yung table ni Ma'am Nor na may Seventeen pics. tapos sa calendar si S.Coups, nagulat po ako kasi I also stan Seventeen. Sabi ko pa po kay Kenneth ipapakita ko yung mga repost ko sa kanya, tapos sinearch nia na din po Yung seventeen sa TikTok and IG nia HAHAHA at Ng kwentohan po kami sa Table ni Ma'am Nor habang Ng e-encode cia Ng ITR HAHA. Tapos may time din po na nakita ko pong may Snickers ka at may picture din po ni Gyu sa table mo, dun ko na po na-realize na si Gyu po bias mo, kay Ma'am Nor naman si S.Coups. Actually po they're both on my bias line. Mingyu, Joshua, Jun at S.Coups.`,

  adi: `Sir Adi🫡

Thank you po sa mga learnings na shinare mo, dami ko pong natutunan sa kada pinapagawa mo po. Yung BCS mo po yung pinaka gusto kong i-segregate, Kasi po yung Kay sir Fahad Ng Halo² need Ng masusing pag che-check para di po Ako magka-mali HAHAHA (joke lang sir Fahad 😆). Anyways, thank you so much po sa kabaitan mo sir Adi. Happy to meet you po!`,

  fahad: `Sir Fahad 👁️👁️

Sir kahit mapang-asar ka at yung mata mo parang laging galit sa mundo HAHAHA joke lang po. Sir Fahad wag mo po Akong kalimutang i-kumusta sa mga Alien dyan sa Jupiter. Ma-mi-miss po kita Sir, salamat sa pagsabay sa amin ni Norman pag-uwian super appreciated po namin yun lalo na mahal ang pamasahe. Wala ka nang aasarin babalik na po Ako sa Mars. blehhh 😜`,

  jamie: `Ma'am Jamie

Na-ugma po ako sadto na diyo ta na storyahan san madali na mag-hali si Kenneth. Super boot mo po Ma'am. Sayang po konti lang interaction ko sa iyo, dapat ngani po talaga in Hali Kuna an raw'ay ko. Ma-mi-miss ko po Ikaw Ma'am Jamie`,

  others: `Sir Jalani, Sir Alim, Sir Marco

Ma-mi-miss ko din po kayo. Thank you for your kindness and understanding at sa pagsagot lagi pag may tinatanong po ako.`,

  krisha: `Ma'am Krisha

Ma'am Sa'yo po ako pinaka may least interaction. May times din po na natatakot po ako sa'yo HEHEHE, sorry po Ma'am, pero habang tumatagal po nakikita ko din po kung gano ka po kabait at masayahin siguro po parang Yung first impression ko din po Kay Ma'am Tina, HEHE. Ma-mi-miss kita Ma'am Krisha.`,

  sirA: `Sir A.

Sir, thank you so much po sa everyday lunch ko, sa mga libre n'yo pong BJ, SB, at Gardenia with Dairy cream HEHE at sa pagiging mabait mo po sa akin. Kahit minsan inuuna ko pang magpa-perma kesa tumulong muna sa pag-distribute ng food HEHEHE. Ma-mi-miss ka po ni Kay-kay sir.`,
};

interface ButtonConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const buttons: ButtonConfig[] = [
  { id: 'intro', label: 'Everyone', icon: <Users size={16} /> },
  { id: 'nor', label: "Ma'am Nor", icon: <User size={16} /> },
  { id: 'sirK', label: 'Sir K', icon: <User size={16} /> },
  { id: 'dess', label: "Ma'am Dess", icon: <User size={16} /> },
  { id: 'rico', label: 'Sir Rico', icon: <User size={16} /> },
  { id: 'tina', label: "Ma'am Tina", icon: <User size={16} /> },
  { id: 'belle', label: "Ma'am Belle", icon: <User size={16} /> },
  { id: 'aira', label: "Ma'am Aira", icon: <User size={16} /> },
  { id: 'lester', label: 'Sir Lester', icon: <User size={16} /> },
  { id: 'anna', label: "Ma'am Anna", icon: <User size={16} /> },
  { id: 'adi', label: 'Sir Adi', icon: <User size={16} /> },
  { id: 'fahad', label: 'Sir Fahad', icon: <User size={16} /> },
  { id: 'jamie', label: "Ma'am Jamie", icon: <User size={16} /> },
  { id: 'others', label: 'Sir Jalani / Alim / Marco', icon: <Users size={16} /> },
  { id: 'krisha', label: "Ma'am Krisha", icon: <User size={16} /> },
  { id: 'sirA', label: 'Sir A', icon: <User size={16} /> },
  { id: 'signoff', label: 'Signing Off', icon: <Sparkles size={16} /> },
  { id: 'final', label: 'Final Message', icon: <Heart size={16} /> },
];

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState<string>('intro');
  const [messageClass, setMessageClass] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [cursorHearts, setCursorHearts] = useState<CursorHeart[]>([]);
  const [risingHearts, setRisingHearts] = useState<CursorHeart[]>([]);
  const heartIdRef = useRef(0);
  const risingHeartIdRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newHeart: CursorHeart = {
        id: heartIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setCursorHearts(prev => [...prev.slice(-12), newHeart]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const heartCount = Math.floor(Math.random() * 3) + 1;
      const newHearts: CursorHeart[] = [];
      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: risingHeartIdRef.current++,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
          y: typeof window !== 'undefined' ? window.innerHeight : 600,
        });
      }
      setRisingHearts(prev => [...prev.slice(-20), ...newHearts]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleHeartAnimationEnd = (id: number, type: 'cursor' | 'rising') => {
    if (type === 'cursor') {
      setCursorHearts(prev => prev.filter(h => h.id !== id));
    } else {
      setRisingHearts(prev => prev.filter(h => h.id !== id));
    }
  };

  const showMessage = (name: string) => {
    setIsAnimating(true);
    setCurrentMessage(name);
    setMessageClass('');
    
    setTimeout(() => {
      if (name === 'signoff') {
        setMessageClass('signoff');
        setCurrentMessage('SIR A. Kay-kay is now signing off po!');
      } else if (name === 'final') {
        setMessageClass('final');
        setCurrentMessage(`My internship must be over, but the lessons and memories will always be with me. Thank you po for being my home away from home.

I LOVE U COLLECTION SECTION FAMILY
Sana makita ko po ulit kayo.`);
      }
      setIsAnimating(false);
    }, 180);
  };

  const getMessageContent = () => {
    if (currentMessage === 'signoff' || currentMessage === 'final') {
      return currentMessage;
    }
    return messages[currentMessage] || 'Message not found.';
  };

  return (
    <main>
      {cursorHearts.map((heart) => (
        <div
          key={heart.id}
          className="cursor-heart"
          style={{ left: heart.x, top: heart.y }}
          onAnimationEnd={() => handleHeartAnimationEnd(heart.id, 'cursor')}
        >
          <Heart size={14} fill="#ff2e63" />
        </div>
      ))}
      
      {risingHearts.map((heart) => (
        <div
          key={heart.id}
          className="rising-heart"
          style={{ left: heart.x }}
          onAnimationEnd={() => handleHeartAnimationEnd(heart.id, 'rising')}
        >
          <Heart size={Math.random() * 10 + 10} fill="rgba(255, 46, 99, 0.4)" />
        </div>
      ))}

<div className="main-content">
        <section className="hero-banner">
          <div className="hero-icon">
            <Heart size={48} fill="#ff2e63" />
          </div>
          <h1>Collection Fam</h1>
          <p className="hero-subtitle">A Heartfelt Goodbye 💕</p>
          <div className="hero-decor">
            <span className="decor-heart">💗</span>
            <span className="decor-heart">💖</span>
            <span className="decor-heart">💘</span>
          </div>
          <p className="hero-message">From Cathlyne with love</p>
        </section>
        
        <audio id="bg-music" loop autoPlay playsInline preload="auto" hidden />
        
        <header className={isLoaded ? 'animate-in' : ''}>
          <h1>Collection Fam</h1>
          <p>Tap your name to read my message</p>
        </header>

      <section 
        id="output" 
        className={`output ${messageClass} ${isAnimating ? 'message-exit' : 'message-enter'}`}
      >
        <div className={isAnimating ? 'message-content-exit' : 'message-content-enter'}>
          {getMessageContent()}
        </div>
      </section>

      <section className={`buttons ${isLoaded ? 'animate-in' : ''}`}>
        {buttons.map((btn, index) => (
          <button 
            key={btn.id} 
            onClick={() => showMessage(btn.id)}
            style={{ animationDelay: `${0.7 + index * 0.05}s` }}
            className="btn-animated"
          >
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </section>

      <footer className={isLoaded ? 'animate-in' : ''}>
        Made with love by Cathlyne
      </footer>
      </div>
    </main>
  );
}