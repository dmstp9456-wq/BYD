document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("reservationForm"); if(!form)return;
  const params=new URLSearchParams(location.search);
  if(params.get("vehicle")) document.getElementById("vehicle").value=params.get("vehicle");
  if(params.get("type")) document.getElementById("consultation_type").value=params.get("type");
  const date=document.getElementById("visit_date"); if(date){const d=new Date();const local=new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);date.min=local;}
  const status=document.getElementById("formStatus"),button=document.getElementById("submitBtn");
  form.addEventListener("submit",async e=>{
    e.preventDefault();status.textContent="";
    if(!document.getElementById("privacy_consent").checked){status.textContent="개인정보 수집 및 이용에 동의해 주세요.";return;}
    const cfg=window.BYD_SITE_CONFIG||{};
    if(!window.emailjs||!cfg.EMAILJS_PUBLIC_KEY||!cfg.EMAILJS_SERVICE_ID||!cfg.EMAILJS_TEMPLATE_ID){status.textContent="상담 접수 설정을 확인 중입니다. 전화 010-2495-9456으로 문의해 주세요.";return;}
    button.disabled=true;button.textContent="전송 중입니다...";
    const data={
      customer_name:form.customer_name.value.trim(),
      customer_phone:form.customer_phone.value.trim(),
      vehicle:form.vehicle.value||"미선택",
      consultation_type:form.consultation_type.value,
      visit_date:form.visit_date.value||"미정",
      visit_time:form.visit_time.value||"미정",
      message:form.message.value.trim()||"별도 문의 내용 없음",
      privacy_consent:"동의"
    };
    try{
      emailjs.init({publicKey:cfg.EMAILJS_PUBLIC_KEY});
      await emailjs.send(cfg.EMAILJS_SERVICE_ID,cfg.EMAILJS_TEMPLATE_ID,data);
      location.href="./success.html";
    }catch(err){
      console.error("EmailJS error",err);
      status.textContent="전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.";
      button.disabled=false;button.textContent="상담 신청 보내기 ↗";
    }
  });
});