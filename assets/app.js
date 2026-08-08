
(() => {
  const env = window.ENV || {};
  const url = env.SUPABASE_URL || "";
  const key = env.SUPABASE_KEY || "";
  const configured = url.startsWith("https://") && key && !key.startsWith("YOUR_");
  const sb = configured && window.supabase ? window.supabase.createClient(url, key) : null;

  const $ = (id) => document.getElementById(id);
  const modal = $("authModal"), authMsg = $("authMsg"), contactMsg = $("contactMsg");

  const showMsg = (el, text, type="error") => {
    if (!el) return;
    el.textContent = text; el.className = `msg ${type}`;
  };
  const clearMsg = (el) => { if(el){ el.textContent=""; el.className="msg"; } };

  function requireConfig(el){
    if(sb) return true;
    showMsg(el, "Supabase 설정이 필요합니다. 배포 전 config.js의 프로젝트 URL과 anon key를 입력해 주세요.");
    return false;
  }

  // modal
  $("openAuth")?.addEventListener("click", ()=>{ modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); clearMsg(authMsg); });
  $("closeAuth")?.addEventListener("click", ()=>{ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); });
  modal?.addEventListener("click", e=>{ if(e.target===modal) $("closeAuth").click(); });
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && modal?.classList.contains("open")) $("closeAuth").click(); });

  document.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
    ["login","signup","reset"].forEach(name => {
      const f = $(name+"Form"); if(f) f.style.display = btn.dataset.tab===name ? "grid" : "none";
    });
    clearMsg(authMsg);
  }));

  const krError = (message="") => {
    if(message.includes("Invalid login credentials")) return "이메일 또는 비밀번호를 확인해 주세요.";
    if(message.includes("Email not confirmed")) return "이메일 인증을 먼저 완료해 주세요.";
    if(message.includes("User already registered")) return "이미 가입된 이메일입니다.";
    if(message.includes("Password should be")) return "비밀번호는 6자리 이상으로 입력해 주세요.";
    if(message.includes("rate limit")) return "요청 횟수가 많습니다. 잠시 후 다시 시도해 주세요.";
    return message || "요청 처리 중 오류가 발생했습니다.";
  };

  $("loginForm")?.addEventListener("submit", async e=>{
    e.preventDefault(); clearMsg(authMsg); if(!requireConfig(authMsg)) return;
    const { error } = await sb.auth.signInWithPassword({email:$("loginEmail").value.trim(), password:$("loginPassword").value});
    if(error) return showMsg(authMsg, krError(error.message));
    showMsg(authMsg,"로그인되었습니다.","success");
    setTimeout(()=>$("closeAuth").click(),500);
  });

  $("signupForm")?.addEventListener("submit", async e=>{
    e.preventDefault(); clearMsg(authMsg); if(!requireConfig(authMsg)) return;
    if($("signupPassword").value !== $("signupPassword2").value) return showMsg(authMsg,"비밀번호 확인이 일치하지 않습니다.");
    if(!$("signupConsent").checked) return showMsg(authMsg,"개인정보 처리 동의가 필요합니다.");
    const redirectTo = `${location.origin}/`;
    const { data, error } = await sb.auth.signUp({
      email:$("signupEmail").value.trim(),
      password:$("signupPassword").value,
      options:{ emailRedirectTo: redirectTo }
    });
    if(error) return showMsg(authMsg, krError(error.message));
    if(data.session) showMsg(authMsg,"회원가입 및 로그인이 완료되었습니다.","success");
    else showMsg(authMsg,"가입 확인 이메일을 발송했습니다. 이메일의 인증 링크를 확인해 주세요.","success");
  });

  $("resetForm")?.addEventListener("submit", async e=>{
    e.preventDefault(); clearMsg(authMsg); if(!requireConfig(authMsg)) return;
    const { error } = await sb.auth.resetPasswordForEmail($("resetEmail").value.trim(), { redirectTo:`${location.origin}/` });
    if(error) return showMsg(authMsg,krError(error.message));
    showMsg(authMsg,"비밀번호 재설정 이메일을 발송했습니다.","success");
  });

  $("googleLogin")?.addEventListener("click", async ()=>{
    clearMsg(authMsg); if(!requireConfig(authMsg)) return;
    const { error } = await sb.auth.signInWithOAuth({ provider:"google", options:{ redirectTo:`${location.origin}/` }});
    if(error) showMsg(authMsg,krError(error.message));
  });

  function renderUser(session){
    const nav = $("authNav"); if(!nav) return;
    if(!session?.user){
      nav.innerHTML='<button class="auth-open" id="openAuthDyn" type="button">로그인 / 회원가입</button>';
      $("openAuthDyn")?.addEventListener("click",()=>$("openAuth")?.click() || (modal.classList.add("open")));
      return;
    }
    const email=(session.user.email||"로그인 사용자").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    nav.innerHTML=`<div class="userbox"><span>${email}</span><button class="auth-small" id="logoutBtn" type="button">로그아웃</button></div>`;
    $("logoutBtn")?.addEventListener("click", async ()=>{ await sb.auth.signOut(); location.reload(); });
  }

  if(sb){
    sb.auth.getSession().then(({data})=>renderUser(data.session));
    sb.auth.onAuthStateChange((_event,session)=>renderUser(session));
  }

  $("contactForm")?.addEventListener("submit", async e=>{
    e.preventDefault(); clearMsg(contactMsg); if(!requireConfig(contactMsg)) return;
    if(!$("contactConsent").checked) return showMsg(contactMsg,"개인정보 처리 동의가 필요합니다.");
    const payload={
      category:$("contactCategory").value,
      name:$("contactName").value.trim(),
      email:$("contactEmail").value.trim(),
      message:$("contactMessage").value.trim()
    };
    if(!payload.name || !payload.email || !payload.message) return showMsg(contactMsg,"필수 항목을 모두 입력해 주세요.");
    const table=env.CONTACT_TABLE || "inquiries";
    const { error } = await sb.from(table).insert(payload);
    if(error){
      console.error(error);
      return showMsg(contactMsg,"문의 저장에 실패했습니다. 잠시 후 다시 시도하거나 운영 이메일로 문의해 주세요.");
    }
    e.target.reset();
    showMsg(contactMsg,"문의가 정상적으로 접수되었습니다. 확인 후 입력한 이메일로 답변드리겠습니다.","success");
  });
})();
