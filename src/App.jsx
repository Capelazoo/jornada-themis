import { useState } from "react";

const G="#C5A059",DG="#8B6914",CR="#8B0000",OW="#FDF2F2",DB="#3D1F00";

const DEUSA_META={
  Atena:{cor:"#2C3E6B",corLight:"#E8EBF5",simbolo:"🦉",titulo:"Estratégia · Lucidez · Ação Pensada"},
  Afrodite:{cor:"#8B2252",corLight:"#F5E6EF",simbolo:"🌹",titulo:"Criação · Desejo · Potência Vital"},
  Ártemis:{cor:"#2D6B3C",corLight:"#E6F5EB",simbolo:"🌙",titulo:"Direção · Foco · Autonomia"},
  Hera:{cor:"#5C2D8B",corLight:"#EEE6F5",simbolo:"👑",titulo:"Compromisso · Dignidade · Soberania"},
  Héstia:{cor:"#8B4513",corLight:"#F5EDE6",simbolo:"🔥",titulo:"Centro · Presença · Fogo Interior"},
  Deméter:{cor:"#4A6B2D",corLight:"#EBF5E6",simbolo:"🌾",titulo:"Constância · Nutrição · Permanência"},
};

const NIVEL_META={
  "Ruínas":{cor:"#8B4513",icon:"🏚️",desc:"Ponto de partida — reconstrução consciente"},
  "Percepção":{cor:"#8B6914",icon:"👁️",desc:"O despertar — padrões começam a ser vistos"},
  "Permissão":{cor:"#2D6B3C",icon:"🚪",desc:"Portal entreaberto — a mulher começa a se autorizar"},
  "Preferência":{cor:"#2C3E6B",icon:"⚡",desc:"Escolhas mais conscientes — clareza em expansão"},
  "Desenvolvimento":{cor:"#5C2D8B",icon:"🌱",desc:"Em expansão ativa — o Olimpo está sendo habitado"},
  "Olimpo":{cor:CR,icon:"🏛️",desc:"Plenitude e expressão plena do potencial"},
};

function cleanMD(t=""){
  return t
    .replace(/#{1,6}\s*/g,"")
    .replace(/\*{1,3}([^*]+)\*{1,3}/g,"$1")
    .replace(/^[-•]\s+/gm,"")
    .replace(/_{1,2}([^_]+)_{1,2}/g,"$1")
    .replace(/\n{3,}/g,"\n\n")
    .trim();
}

const LOGO_URLS=["https://i.imgur.com/hLGKx7c.jpg","https://i.imgur.com/hLGKx7c.png","https://i.imgur.com/hLGKx7c.jpeg"];

function LogoThemis({size=80}){
  const [idx,setIdx]=useState(0);
  const [failed,setFailed]=useState(false);
  if(failed) return(
    <svg width={size} height={size*0.9} viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="gld" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#E8C96A"/><stop offset="50%" stopColor="#C5A059"/><stop offset="100%" stopColor="#8B6914"/></linearGradient></defs>
      <polygon points="50,4 96,82 4,82" fill="url(#gld)" opacity="0.95"/>
      <polygon points="50,22 82,72 18,72" fill="#FDF2F2" opacity="0.15"/>
      <polygon points="50,28 68,60 32,60" fill="url(#gld)" opacity="0.7"/>
      <polygon points="50,14 60,32 40,32" fill="#FDF2F2" opacity="0.3"/>
      <line x1="50" y1="28" x2="50" y2="62" stroke="#FDF2F2" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
  return <img src={LOGO_URLS[idx]} alt="Jornada Themis" width={size} height={size} style={{objectFit:"contain"}}
    onError={()=>{if(idx<LOGO_URLS.length-1)setIdx(idx+1);else setFailed(true);}}/>;
}

const QUESTIONS=[
  {q:"Como você reage diante de desafios?",opts:{A:"Analiso antes de agir.",B:"Busco conexão e apoio.",C:"Parto para a ação imediatamente.",D:"Assumo o controle da situação.",E:"Procuro manter a paz e evitar conflitos.",F:"Penso no impacto a longo prazo e no legado."}},
  {q:"O que mais te incomoda no dia a dia?",opts:{A:"Falta de lógica e organização.",B:"Falta de atenção ou afeto.",C:"Lentidão ou inércia.",D:"Falta de respeito ou autoridade.",E:"Ambientes tensos e brigas.",F:"Falta de sentido ou propósito."}},
  {q:"Quando você se desestabiliza, tende a:",opts:{A:"Racionalizar e controlar.",B:"Buscar apoio emocional.",C:"Afastar-se para seguir sozinha.",D:"Reagir com exigência.",E:"Encolher-se para não confrontar.",F:"Trabalhar demais para compensar."}},
  {q:"O que mais importa para você?",opts:{A:"Clareza estratégica.",B:"Beleza, prazer e conexão.",C:"Liberdade e autonomia.",D:"Compromisso e responsabilidade.",E:"Harmonia e cuidado.",F:"Sustentabilidade e legado."}},
  {q:"Como costuma agir em relações?",opts:{A:"Direta e objetiva.",B:"Afetiva e sedutora.",C:"Independente e prática.",D:"Estruturada e exigente.",E:"Acolhedora e estável.",F:"Protetora e nutridora."}},
  {q:"Seu maior talento natural é:",opts:{A:"Pensar estrategicamente.",B:"Encantar e envolver.",C:"Agir com velocidade e foco.",D:"Liderar e tomar decisões.",E:"Sustentar ambientes seguros.",F:"Organizar ciclos e cuidar do futuro."}},
  {q:"Em momentos difíceis, você:",opts:{A:"Busca soluções lógicas.",B:"Procura suporte emocional.",C:"Reage com impulso.",D:"Toma as rédeas.",E:"Retira-se para proteger os outros.",F:"Sacrifica-se pelo bem maior."}},
  {q:"Qual energia domina o seu dia hoje?",opts:{A:"Organização.",B:"Atração/estética.",C:"Produtividade.",D:"Decisão.",E:"Paz/harmonia.",F:"Construção/planejamento."}},
  {q:"O que você mais evita?",opts:{A:"Erros que prejudiquem a estratégia.",B:"Ficar sozinha emocionalmente.",C:"Sentir-se presa.",D:"Parecer fraca.",E:"Confrontos abertos.",F:"Mudanças sem propósito."}},
  {q:"O que te derruba rapidamente?",opts:{A:"Falta de lógica.",B:"Rejeição ou frieza.",C:"Estagnação.",D:"Desrespeito.",E:"Caos emocional.",F:"Perda de sentido."}},
  {q:"Como você reage ao sucesso?",opts:{A:"Planejo o próximo passo.",B:"Celebro e compartilho.",C:"Vou atrás de outro desafio.",D:"Estruturo para escalar.",E:"Agradeço e mantenho equilíbrio.",F:"Uso para consolidar legado."}},
  {q:"Sob estresse, você tende a:",opts:{A:"Ficar mais analítica.",B:"Buscar afeto.",C:"Ficar reativa.",D:"Ficar rígida.",E:"Isolar-se.",F:"Exaurir-se trabalhando demais."}},
  {q:"Quando está forte, você é:",opts:{A:"Estrategista.",B:"Musa/encantadora.",C:"Guerreira/ação.",D:"Rainha/estrutura.",E:"Guardiã/cuidadora.",F:"Matriarca/planejadora."}},
  {q:"Quando está fraca, você se torna:",opts:{A:"Crítica e distante.",B:"Carente e insegura.",C:"Agressiva ou impaciente.",D:"Controladora.",E:"Invisível ou retraída.",F:"Sobrecarregada ou exausta."}},
];

const BIBLIOTECA={
  Atena:{luz:"Clareza, estratégia e foco. Mente aguçada, visão de longo prazo, capacidade de analisar antes de agir.",sombra:"Frieza emocional, racionalização excessiva, dificuldade de se permitir sentir."},
  Afrodite:{luz:"Criatividade, magnetismo e autenticidade. Presença que atrai, capacidade de encantar e conectar.",sombra:"Instabilidade emocional, dependência de aprovação, dificuldade de se sustentar sem validação externa."},
  Ártemis:{luz:"Direção clara, autonomia e ação precisa. Capacidade de focar num alvo e seguir sem dispersão.",sombra:"Impulsividade, isolamento, dificuldade de pedir ajuda."},
  Hera:{luz:"Soberania, valor pessoal e limites. Presença de autoridade natural, capacidade de sustentar estruturas.",sombra:"Controle excessivo, rigidez, dificuldade de ceder."},
  Héstia:{luz:"Calma, acolhimento e centramento. Capacidade de criar ambientes seguros e permanecer firme no caos.",sombra:"Retraimento, invisibilidade, apagamento."},
  Deméter:{luz:"Cuidado, nutrição e constância. Capacidade de sustentar o que começa, de alimentar processos com paciência.",sombra:"Autossacrifício, exaustão, dificuldade de receber cuidado."},
};

const NIVEIS={
  "Ruínas":"Ponto de partida. Fragmentação ou ausência de direção. O que foi destruído pode ser reconstruído com mais consciência.",
  "Percepção":"Algo começa a ser visto. Os padrões surgem, as perguntas aparecem. É o despertar.",
  "Permissão":"A mulher começa a se autorizar. Há mais abertura para mudança, ainda que com resistência.",
  "Preferência":"Escolhas mais conscientes. A mulher decide com mais clareza quem quer ser.",
  "Desenvolvimento":"Em expansão ativa. Crescimento visível, energia em movimento. O Olimpo está sendo habitado.",
  "Olimpo":"Plenitude e expressão plena do potencial.",
};

function calcDeusas(ans){
  const c={A:0,B:0,C:0,D:0,E:0,F:0};
  ans.forEach(a=>{if(c[a]!==undefined)c[a]++;});
  const m={A:"Atena",B:"Afrodite",C:"Ártemis",D:"Hera",E:"Héstia",F:"Deméter"};
  const sorted=Object.entries(c).sort((a,b)=>b[1]-a[1]);
  const dc=sorted[0][1];
  const nivel=dc<=2?"Ruínas":dc===3?"Percepção":dc===4?"Permissão":dc===5?"Preferência":dc>=7?"Olimpo":"Desenvolvimento";
  return{dominante:m[sorted[0][0]],sombra:m[sorted[1][0]],adormecida:m[sorted[sorted.length-1][0]],nivel,counts:c};
}

async function callAPI(usr){
  const sys=`Você é THEMIS da Jornada Themis por Silvana Capelazo. Escreva APENAS em português brasileiro. Tom cerimonial, profundo e amoroso. IMPORTANTE: use apenas texto simples — sem asteriscos, sem #, sem markdown, sem bullets. Separe parágrafos com linha em branco. Cada parágrafo deve ser denso e completo, nunca corte no meio.`;
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),55000);
  try{
    const r=await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      signal:controller.signal,
      body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:sys,messages:[{role:"user",content:usr}]})
    });
    clearTimeout(timeout);
    const d=await r.json();
    return cleanMD(d.content?.[0]?.text||"");
  }catch(e){
    clearTimeout(timeout);
    throw e;
  }
}

const S={
  page:{minHeight:"100vh",background:"linear-gradient(160deg,#FDF2F2 0%,#F5E6D3 55%,#FDF2F2 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,fontFamily:"Georgia,serif",color:DB},
  card:{background:"rgba(253,242,242,0.97)",border:`2px solid ${G}`,borderRadius:16,padding:"28px 32px",maxWidth:660,width:"100%",boxSizing:"border-box",margin:"0 auto"},
  voice:{background:"rgba(197,160,89,0.08)",border:"1px solid rgba(197,160,89,0.35)",borderRadius:12,padding:"16px 20px",marginBottom:20,lineHeight:1.8,color:"#5C3A1E",fontSize:15},
  inp:{width:"100%",padding:"11px 15px",border:`2px solid ${G}`,borderRadius:8,fontSize:15,background:"rgba(253,242,242,0.9)",color:DB,outline:"none",boxSizing:"border-box",fontFamily:"Georgia,serif"},
  btn:{background:`linear-gradient(135deg,${G},${DG})`,color:OW,border:"none",borderRadius:8,padding:"13px 28px",fontSize:15,cursor:"pointer",width:"100%",fontFamily:"Georgia,serif",letterSpacing:"0.5px",marginTop:8},
  logo:{fontSize:11,color:G,textAlign:"center",marginTop:14,opacity:0.7},
};

const pbar=(v,mx)=>(
  <div style={{height:4,background:"rgba(197,160,89,0.18)",borderRadius:2,marginBottom:18}}>
    <div style={{height:4,background:`linear-gradient(90deg,${G},${DG})`,borderRadius:2,width:`${Math.round((v/mx)*100)}%`,transition:"width 0.3s"}}></div>
  </div>
);

function DeusaCard({deusa,papel,papelCor,papelDesc}){
  const meta=DEUSA_META[deusa]||{cor:DG,corLight:"#FDF2F2",simbolo:"✨",titulo:""};
  return(
    <div style={{background:`linear-gradient(135deg,${meta.cor},${meta.cor}cc)`,borderRadius:16,padding:"20px 24px",color:"white",position:"relative",overflow:"hidden",flex:1,minWidth:160}}>
      <div style={{position:"absolute",right:-10,top:-10,fontSize:60,opacity:0.12}}>{meta.simbolo}</div>
      <div style={{fontSize:9,letterSpacing:2,textTransform:"uppercase",opacity:0.8,marginBottom:4,background:papelCor,color:"white",display:"inline-block",padding:"2px 8px",borderRadius:20}}>{papel}</div>
      <div style={{fontSize:36,marginBottom:4}}>{meta.simbolo}</div>
      <div style={{fontSize:20,fontWeight:"bold",letterSpacing:1,marginBottom:4}}>{deusa}</div>
      <div style={{fontSize:11,opacity:0.85,lineHeight:1.4}}>{meta.titulo}</div>
      {papelDesc&&<div style={{marginTop:8,fontSize:11,opacity:0.75,fontStyle:"italic",borderTop:"1px solid rgba(255,255,255,0.2)",paddingTop:8}}>{papelDesc}</div>}
    </div>
  );
}

function BlocoCard({titulo,corTitulo,icone,texto,bg}){
  if(!texto)return null;
  const paragrafos=texto.split("\n\n").filter(p=>p.trim().length>10);
  return(
    <div style={{marginBottom:28,background:bg||"rgba(253,242,242,0.6)",border:`1px solid rgba(197,160,89,0.25)`,borderRadius:14,overflow:"hidden"}}>
      <div style={{background:corTitulo||`linear-gradient(135deg,${DG},${G})`,padding:"14px 22px",display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontSize:22}}>{icone}</span>
        <span style={{color:"white",fontWeight:"bold",fontSize:14,letterSpacing:1,textTransform:"uppercase"}}>{titulo}</span>
      </div>
      <div style={{padding:"20px 24px"}}>
        {paragrafos.map((p,i)=>(
          <p key={i} style={{lineHeight:1.9,fontSize:14,color:DB,margin:"0 0 14px",textAlign:"justify"}}>{p.trim()}</p>
        ))}
      </div>
    </div>
  );
}

function NivelCard({nivel}){
  const meta=NIVEL_META[nivel]||{cor:DG,icon:"🏔️",desc:""};
  const levels=["Ruínas","Percepção","Permissão","Preferência","Desenvolvimento","Olimpo"];
  const idx=levels.indexOf(nivel);
  return(
    <div style={{background:`linear-gradient(135deg,${meta.cor}22,${meta.cor}11)`,border:`2px solid ${meta.cor}55`,borderRadius:14,padding:"20px 24px",marginBottom:28}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
        <span style={{fontSize:32}}>{meta.icon}</span>
        <div>
          <div style={{fontSize:10,letterSpacing:2,color:meta.cor,textTransform:"uppercase",marginBottom:2}}>Nível da Montanha</div>
          <div style={{fontSize:22,fontWeight:"bold",color:meta.cor}}>{nivel}</div>
        </div>
      </div>
      <p style={{color:DB,fontSize:13,fontStyle:"italic",margin:"0 0 14px",lineHeight:1.6}}>{meta.desc}</p>
      <div style={{display:"flex",gap:4,alignItems:"center"}}>
        {levels.map((l,i)=>(
          <div key={l} style={{flex:1,textAlign:"center"}}>
            <div style={{height:6,borderRadius:3,background:i<=idx?meta.cor:"rgba(197,160,89,0.2)",marginBottom:4,transition:"all 0.3s"}}></div>
            <div style={{fontSize:8,color:i===idx?meta.cor:"rgba(139,105,20,0.4)",fontWeight:i===idx?"bold":"normal",letterSpacing:0.3}}>{l.substring(0,3).toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App(){
  const [phase,setPhase]=useState("welcome");
  const [name,setName]=useState("");
  const [prof,setProf]=useState("");
  const [pass,setPass]=useState("");
  const [passErr,setPassErr]=useState(false);
  const [qi,setQi]=useState(0);
  const [ans,setAns]=useState([]);
  const [result,setResult]=useState({b1:"",b2:"",b3:"",b4:"",b5:""});
  const [calc,setCalc]=useState(null);
  const [copied,setCopied]=useState(false);
  const [hov,setHov]=useState(null);
  const [genStep,setGenStep]=useState(0);
  const [genError,setGenError]=useState(false);
  const [savedAns,setSavedAns]=useState([]);

  function checkPass(){
    if(pass.trim().toUpperCase()==="ACEITO A JORNADA"){setPhase("quiz");setPassErr(false);}
    else setPassErr(true);
  }

  function answerQ(l){
    const na=[...ans,l];setAns(na);
    if(qi===13){setSavedAns(na);setPhase("analyzing");generate(na);}
    else setQi(qi+1);
  }

  async function generate(answers){
    const d=calcDeusas(answers);
    setCalc(d);
    setGenStep(0);setGenError(false);
    setResult({b1:"",b2:"",b3:"",b4:"",b5:""});
    const bib=BIBLIOTECA;
    const ctx=`NOME: ${name} | PROFISSÃO: ${prof}
DOMINANTE: ${d.dominante} | SOMBRA: ${d.sombra} | ADORMECIDA: ${d.adormecida} | NÍVEL: ${d.nivel}
${d.dominante}: Luz=${bib[d.dominante]?.luz} | Sombra=${bib[d.dominante]?.sombra}
${d.sombra}: Luz=${bib[d.sombra]?.luz} | Sombra=${bib[d.sombra]?.sombra}
${d.adormecida}: Luz=${bib[d.adormecida]?.luz} | Sombra=${bib[d.adormecida]?.sombra}
NÍVEL ${d.nivel}: ${NIVEIS[d.nivel]}`;
    const prompts=[
      `${ctx}\n\nGere a análise da DEUSA DOMINANTE ${d.dominante} para ${name} (${prof}).\nEscreva 4 parágrafos completos em texto corrido sem formatação markdown:\nParágrafo 1: Forças e luz — como ${d.dominante} se manifesta plenamente em ${name}, seus dons naturais e como isso aparece em sua atuação como ${prof}.\nParágrafo 2: Como ela aparece no cotidiano — decisões, relacionamentos, ritmo de vida, escolhas naturais de ${name}.\nParágrafo 3: Riscos e sombra — o que acontece quando essa energia vai ao extremo em ${name}. Padrões de autossabotagem.\nParágrafo 4: Mensagem de ${d.dominante} diretamente para ${name} em primeira pessoa, cerimonial e amorosa.`,
      `${ctx}\n\nGere a análise da DEUSA SOMBRA ${d.sombra} para ${name} (${prof}).\nEscreva 4 parágrafos completos em texto corrido sem formatação markdown:\nParágrafo 1: O que opera nas sombras — padrões silenciosos que se repetem em ${name}, quedas recorrentes, gatilhos como ${prof}.\nParágrafo 2: Pontos cegos — o que ${name} não consegue ver em si mesma. Impacto nas relações e decisões profissionais.\nParágrafo 3: Caminho de integração — como transformar essa energia em aliada. Movimentos práticos para ${name} como ${prof}.\nParágrafo 4: Convite à integração — mensagem gentil do que ${d.sombra} pede de ${name}.`,
      `${ctx}\n\nGere a análise da DEUSA ADORMECIDA ${d.adormecida} para ${name} (${prof}).\nEscreva 4 parágrafos completos em texto corrido sem formatação markdown:\nParágrafo 1: Potência esquecida — o que ${d.adormecida} representa e por que adormeceu em ${name}. O que foi perdido.\nParágrafo 2: O que muda quando desperta — como a vida e atuação de ${name} como ${prof} se transformariam.\nParágrafo 3: Como despertar sem desequilibrar — o papel de ${d.adormecida} no pantheon interno de ${name}.\nParágrafo 4: Primeiro passo concreto e simbólico para ${name} começar a despertar ${d.adormecida} hoje.`,
      `${ctx}\n\nGere a análise do NÍVEL DA MONTANHA ${d.nivel} para ${name} (${prof}).\nEscreva 4 parágrafos completos em texto corrido sem formatação markdown:\nParágrafo 1: Estado atual — o que o Nível ${d.nivel} revela sobre ${name} como ${prof} agora.\nParágrafo 2: Comportamento característico — como ${name} pensa, age e reage a partir desse lugar.\nParágrafo 3: Risco — o maior perigo de permanecer nesse nível para ${name}.\nParágrafo 4: Potencial — o que está disponível e como é o próximo degrau para ${name} como ${prof}.`,
      `${ctx}\n\nGere o PRÓXIMO PASSO para ${name} (${prof}).\nEscreva 4 parágrafos completos em texto corrido sem formatação markdown:\nParágrafo 1: Orientação prática — 3 a 4 ações concretas que ${name} pode começar esta semana como ${prof}.\nParágrafo 2: Movimento emocional — trabalho interno prioritário. Emoção ou padrão que precisa ser acolhido.\nParágrafo 3: Como ${d.dominante}, ${d.sombra} e ${d.adormecida} trabalham juntas no caminho à frente de ${name}.\nParágrafo 4: Mensagem final cerimonial e amorosa de Temis para ${name}, celebrando sua coragem.`,
    ];
    const keys=["b1","b2","b3","b4","b5"];
    for(let i=0;i<prompts.length;i++){
      setGenStep(i+1);
      try{
        const text=await callAPI(prompts[i]);
        setResult(prev=>({...prev,[keys[i]]:text}));
      }catch(e){setGenError(true);setPhase("error");return;}
      await new Promise(r=>setTimeout(r,500));
    }
    setPhase("result");
  }

  const printStyles=`
    @media print {
      body { margin: 0; background: white !important; }
      .no-print { display: none !important; }
      .print-area { padding: 0 !important; }
      .page-break { page-break-before: always; }
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    }
  `;

  if(phase==="welcome") return(
    <div style={S.page}>
      <style>{printStyles}</style>
      <div style={{...S.card,textAlign:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:8}}>
          <LogoThemis size={100}/>
          <div style={{fontSize:10,letterSpacing:3,color:G,textTransform:"uppercase",marginTop:8}}>Capelazo Desenvolvimento Humano</div>
          <h1 style={{fontSize:28,margin:"6px 0 0",letterSpacing:3}}><span style={{color:DG}}>JORNADA </span><span style={{color:CR}}>THEMIS</span></h1>
        </div>
        <p style={{color:G,fontStyle:"italic",fontSize:15,margin:"6px 0 20px"}}>O Olimpo já começou a ser habitado.</p>
        <div style={S.voice}>
          Respira um pouquinho antes de começarmos... 🌿<br/><br/>
          Eu sou <strong>Themis</strong>, e caminho ao seu lado na primeira etapa da sua Jornada.<br/><br/>
          Aqui vamos olhar para suas tendências emocionais e comportamentais com clareza, gentileza e profundidade.<br/><br/>
          <em>Nada aqui te julga. Nada te apressa.<br/>Você é acolhida exatamente como está.</em>
        </div>
        <button style={S.btn} onClick={()=>setPhase("identify")}>✨ Entrar na Jornada</button>
        <div style={S.logo}>© Capelazo Desenvolvimento Humano · Silvana Capelazo</div>
      </div>
    </div>
  );

  if(phase==="identify") return(
    <div style={S.page}>
      <div style={S.card}>
        <div style={{textAlign:"center",marginBottom:16}}><LogoThemis size={60}/></div>
        <div style={S.voice}>Antes de abrirmos a primeira porta, me diga, Deusa...<br/>como devo te chamar? E qual é o seu caminho no mundo? 🌿</div>
        <div style={{marginBottom:14}}>
          <label style={{display:"block",color:DG,marginBottom:5,fontSize:11,letterSpacing:1,textTransform:"uppercase"}}>Seu nome</label>
          <input style={S.inp} value={name} onChange={e=>setName(e.target.value)} placeholder="Como gostaria de ser chamada..."/>
        </div>
        <div style={{marginBottom:20}}>
          <label style={{display:"block",color:DG,marginBottom:5,fontSize:11,letterSpacing:1,textTransform:"uppercase"}}>Sua profissão</label>
          <input style={S.inp} value={prof} onChange={e=>setProf(e.target.value)} placeholder="Sua atuação profissional..." onKeyDown={e=>e.key==="Enter"&&name&&prof&&setPhase("password")}/>
        </div>
        <button style={{...S.btn,opacity:(name&&prof)?1:0.5}} onClick={()=>setPhase("password")} disabled={!name||!prof}>Continuar →</button>
        <div style={S.logo}>© Capelazo Desenvolvimento Humano</div>
      </div>
    </div>
  );

  if(phase==="password") return(
    <div style={S.page}>
      <div style={S.card}>
        <div style={{textAlign:"center",marginBottom:16}}><LogoThemis size={60}/></div>
        <div style={S.voice}>É uma alegria caminhar com você, <strong>{name}</strong>. 🌸<br/><br/>Por favor, me diga a <strong>senha de acesso</strong>.</div>
        <input style={{...S.inp,letterSpacing:2,textTransform:"uppercase",borderColor:passErr?CR:G}} value={pass} onChange={e=>setPass(e.target.value)} placeholder="Digite a senha..." onKeyDown={e=>e.key==="Enter"&&checkPass()}/>
        {passErr&&<p style={{color:CR,textAlign:"center",marginTop:8,fontSize:13}}>⛔ A senha não confere. Este espaço é reservado para participantes da Jornada.</p>}
        <button style={{...S.btn,marginTop:14}} onClick={checkPass}>✨ Confirmar Acesso</button>
        <div style={S.logo}>© Capelazo Desenvolvimento Humano</div>
      </div>
    </div>
  );

  if(phase==="quiz"){
    const q=QUESTIONS[qi];
    return(
      <div style={S.page}>
        <div style={S.card}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
            <span style={{fontSize:11,color:G,letterSpacing:1,textTransform:"uppercase"}}>Diagnóstico das Deusas</span>
            <span style={{fontSize:11,color:G,fontWeight:"bold"}}>{qi+1} / 14</span>
          </div>
          {pbar(qi+1,14)}
          <div style={S.voice}>
            <div style={{fontSize:11,color:G,letterSpacing:1,textTransform:"uppercase",marginBottom:10}}>Pergunta {qi+1}</div>
            <strong style={{fontSize:17,lineHeight:1.5,color:DB}}>{q.q}</strong>
          </div>
          {Object.entries(q.opts).map(([l,txt])=>(
            <button key={l}
              style={{background:hov===l?"rgba(197,160,89,0.13)":"transparent",border:`2px solid ${hov===l?DG:G}`,borderRadius:10,padding:"12px 16px",marginBottom:8,cursor:"pointer",width:"100%",textAlign:"left",fontSize:14,color:DB,display:"flex",alignItems:"center",gap:12,fontFamily:"Georgia,serif",transition:"all 0.15s"}}
              onClick={()=>answerQ(l)} onMouseEnter={()=>setHov(l)} onMouseLeave={()=>setHov(null)}>
              <div style={{background:`linear-gradient(135deg,${G},${DG})`,color:"white",borderRadius:"50%",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:"bold",flexShrink:0}}>{l}</div>
              <span>{txt}</span>
            </button>
          ))}
          <div style={S.logo}>Temis · © Capelazo Desenvolvimento Humano</div>
        </div>
      </div>
    );
  }

  if(phase==="analyzing"||phase==="error"){
    const steps=["Deusa Dominante","Deusa Sombra","Deusa Adormecida","Nível da Montanha","Próximo Passo"];
    return(
      <div style={S.page}>
        <div style={{...S.card,textAlign:"center"}}>
          <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.94)}} @keyframes fd{0%{opacity:0.3}100%{opacity:1}}`}</style>
          {phase==="analyzing"&&<div style={{display:"flex",justifyContent:"center",animation:"pulse 2.2s ease-in-out infinite",marginBottom:16}}><LogoThemis size={80}/></div>}
          {phase==="error"&&<div style={{fontSize:48,marginBottom:16}}>⚠️</div>}
          <h2 style={{color:phase==="error"?CR:DG,fontSize:20,marginBottom:12}}>
            {phase==="error"?"Algo interrompeu o Portal...":"O Portal está se abrindo..."}
          </h2>
          {phase==="analyzing"&&<div style={S.voice}>Respira comigo, <strong>{name}</strong>... 🌿<br/><br/>Vou preparar sua interpretação com cuidado, presença e verdade.<br/><em>Cada bloco sendo tecido agora...</em></div>}
          {phase==="error"&&<div style={{...S.voice,borderColor:"rgba(139,0,0,0.3)"}}>Houve uma interrupção, <strong>{name}</strong>. Suas respostas estão guardadas — podemos tentar novamente.</div>}
          <div style={{textAlign:"left",marginBottom:20}}>
            {steps.map((s,i)=>{
              const done=i<genStep-1;
              const active=i===genStep-1&&phase==="analyzing";
              const failed=phase==="error"&&i===genStep-1;
              return(
                <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid rgba(197,160,89,0.15)"}}>
                  <div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,background:failed?"rgba(139,0,0,0.8)":done?`linear-gradient(135deg,${G},${DG})`:active?"rgba(197,160,89,0.5)":"rgba(197,160,89,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:"bold",color:done||failed?"white":DG}}>
                    {failed?"✗":done?"✓":active?"…":i+1}
                  </div>
                  <span style={{fontSize:13,color:failed?CR:done?DG:active?DB:"rgba(61,31,0,0.4)",fontWeight:active?"bold":"normal"}}>
                    {s}{active&&<span style={{color:G,fontStyle:"italic"}}> · gerando...</span>}{done&&<span style={{color:DG,fontStyle:"italic"}}> · pronto ✓</span>}{failed&&<span style={{color:CR}}> · erro</span>}
                  </span>
                </div>
              );
            })}
          </div>
          {phase==="error"&&<button style={S.btn} onClick={()=>{setPhase("analyzing");generate(savedAns);}}>🔄 Tentar Novamente</button>}
          <div style={S.logo}>© Capelazo Desenvolvimento Humano</div>
        </div>
      </div>
    );
  }

  if(phase==="result"&&calc){
    const domMeta=DEUSA_META[calc.dominante]||{};
    return(
      <div style={{...S.page,paddingTop:0}} className="print-area">
        <style>{printStyles}</style>
        <div style={{maxWidth:720,width:"100%"}}>
          <div style={{background:`linear-gradient(160deg,${domMeta.cor||CR} 0%,${DG} 100%)`,borderRadius:"0 0 24px 24px",padding:"48px 40px 40px",textAlign:"center",marginBottom:32,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",right:-20,top:-20,fontSize:160,opacity:0.07}}>{domMeta.simbolo}</div>
            <div style={{position:"absolute",left:-20,bottom:-20,fontSize:120,opacity:0.05}}>⚖️</div>
            <LogoThemis size={80}/>
            <div style={{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.7)",textTransform:"uppercase",marginTop:10}}>Capelazo Desenvolvimento Humano</div>
            <h1 style={{fontSize:26,color:"white",letterSpacing:3,margin:"8px 0 4px"}}>DIAGNÓSTICO DAS DEUSAS</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontStyle:"italic",fontSize:14,margin:"0 0 28px"}}>Jornada Themis · Devolutiva Completa</p>
            <div style={{background:"rgba(255,255,255,0.12)",borderRadius:12,padding:"16px 24px",display:"inline-block",backdropFilter:"blur(8px)"}}>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>Esta devolutiva foi preparada para</div>
              <div style={{fontSize:26,color:"white",fontWeight:"bold",letterSpacing:1}}>{name}</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.75)",marginTop:2}}>{prof}</div>
            </div>
          </div>
          <div style={{padding:"0 16px"}}>
            <div style={{marginBottom:32}}>
              <div style={{fontSize:11,color:G,letterSpacing:2,textTransform:"uppercase",textAlign:"center",marginBottom:16}}>Seu Panteon Interior</div>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <DeusaCard deusa={calc.dominante} papel="Dominante" papelCor={CR} papelDesc="Sua força principal — a deusa que governa sua alma agora"/>
                <DeusaCard deusa={calc.sombra} papel="Sombra" papelCor={DG} papelDesc="Opera nas sombras — pede integração e consciência"/>
                <DeusaCard deusa={calc.adormecida} papel="Adormecida" papelCor="#666" papelDesc="Potência esquecida — aguarda ser despertada"/>
              </div>
            </div>
            <NivelCard nivel={calc.nivel}/>
            <BlocoCard titulo={`Deusa Dominante · ${calc.dominante}`} corTitulo={`linear-gradient(135deg,${domMeta.cor||CR},${domMeta.cor||CR}aa)`} icone={domMeta.simbolo||"✨"} texto={result.b1} bg={domMeta.corLight||"#FDF2F2"}/>
            <BlocoCard titulo={`Deusa Sombra · ${calc.sombra}`} corTitulo={`linear-gradient(135deg,${DEUSA_META[calc.sombra]?.cor||DG},${DEUSA_META[calc.sombra]?.cor||DG}aa)`} icone={DEUSA_META[calc.sombra]?.simbolo||"🌑"} texto={result.b2} bg={DEUSA_META[calc.sombra]?.corLight||"#F5F5F5"}/>
            <BlocoCard titulo={`Deusa Adormecida · ${calc.adormecida}`} corTitulo="linear-gradient(135deg,#666,#999)" icone={DEUSA_META[calc.adormecida]?.simbolo||"💤"} texto={result.b3} bg={DEUSA_META[calc.adormecida]?.corLight||"#F5F5F5"}/>
            <BlocoCard titulo={`Nível da Montanha · ${calc.nivel}`} corTitulo={`linear-gradient(135deg,${NIVEL_META[calc.nivel]?.cor||DG},${NIVEL_META[calc.nivel]?.cor||DG}aa)`} icone={NIVEL_META[calc.nivel]?.icon||"🏔️"} texto={result.b4}/>
            <BlocoCard titulo="Próximo Passo · Sua Jornada Continua" corTitulo={`linear-gradient(135deg,${CR},#6B0000)`} icone="🏛️" texto={result.b5}/>
            <div style={{background:`linear-gradient(135deg,rgba(197,160,89,0.1),rgba(139,105,20,0.05))`,border:`1px solid rgba(197,160,89,0.3)`,borderRadius:14,padding:"28px",textAlign:"center",marginBottom:24}}>
              <div style={{fontSize:28,marginBottom:12}}>⚖️</div>
              <p style={{color:G,fontStyle:"italic",fontSize:14,lineHeight:1.9,margin:"0 0 8px"}}>
                O Portal se fecha por agora...<br/>
                mas sua Jornada continua.<br/>
                Você não está só — O Olimpo já está sendo habitado.
              </p>
              <p style={{color:CR,fontSize:16,fontWeight:"bold",margin:0}}>Themis ❤️</p>
              <p style={{color:G,fontSize:11,margin:"12px 0 0",opacity:0.7}}>© Capelazo Desenvolvimento Humano · Silvana Capelazo</p>
            </div>
            <div className="no-print" style={{background:"white",border:`2px solid ${G}`,borderRadius:14,padding:"20px 24px",marginBottom:32}}>
              <p style={{color:DG,fontSize:12,marginBottom:14,textAlign:"center",letterSpacing:1,textTransform:"uppercase",fontWeight:"bold"}}>Salvar sua Devolutiva</p>
              <button style={{...S.btn,background:`linear-gradient(135deg,${CR},#6B0000)`,display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontSize:16,padding:"16px"}} onClick={()=>window.print()}>
                📄 Baixar como PDF
              </button>
              <p style={{color:G,fontSize:11,textAlign:"center",marginTop:10,opacity:0.7}}>Clique em "Salvar como PDF" na janela de impressão que abrir</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
