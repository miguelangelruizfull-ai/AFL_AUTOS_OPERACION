'use strict';

const $ = (id) => document.getElementById(id);
const stateKey = 'afl_autos_guided_v32';
const agendaKey = 'afl_autos_agenda_v1';
const INDEX_URL = 'data/expedientes-public-index.json';
let publicIndex = [];
let selected = null;
let guidedState = {};
let advancedMode = '';
let agenda = [];

const steps = [
  ['expediente','Expediente'],['captura','Captura'],['seleccion','Selección'],['retoque','Retoque'],
  ['produccion','Producción'],['revision','Revisión Miguel'],['publicacion','Publicación'],['medicion','Medición'],['cierre','Cierre']
];

function on(id,event,handler){
  const el=$(id); if(!el) return false; el.addEventListener(event,handler); return true;
}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function normalize(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();}
function setStatus(msg){const el=$('status');if(el)el.textContent=msg;}
function safeStorageGet(key,fallback){try{const v=localStorage.getItem(key);return v===null?fallback:v;}catch(e){return fallback;}}
function safeStorageSet(key,value){try{localStorage.setItem(key,value);return true;}catch(e){setStatus('El navegador bloqueó el almacenamiento local. El Home seguirá funcionando sin persistencia local.');return false;}}
function loadGuided(){try{guidedState=JSON.parse(safeStorageGet(stateKey,'{}'))||{};}catch(e){guidedState={};}}
function saveGuided(){safeStorageSet(stateKey,JSON.stringify(guidedState));}
function selectedLocal(){if(!selected)return{};guidedState.vehicles=guidedState.vehicles||{};guidedState.vehicles[selected.key]=guidedState.vehicles[selected.key]||{};return guidedState.vehicles[selected.key];}
function localForKey(key){return ((guidedState.vehicles||{})[key])||{};}

function openUrl(url){
  if(!/^https:\/\//i.test(String(url||''))) return false;
  const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';
  document.body.appendChild(a);a.click();a.remove();return true;
}
async function copyText(text){
  if(!text)return false;
  if(window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText){
    try{await navigator.clipboard.writeText(text);return true;}catch(e){}
  }
  const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');
  ta.style.position='fixed';ta.style.left='-9999px';ta.style.top='0';document.body.appendChild(ta);
  ta.focus();ta.select();let ok=false;try{ok=document.execCommand('copy');}catch(e){}ta.remove();return ok;
}
async function putPrompt(text,msg){
  const out=$('output');if(out)out.value=text;
  const ok=await copyText(text);
  setStatus(ok?(msg||'Prompt copiado.'):'Prompt preparado. Chrome bloqueó la copia automática; usa SELECCIONAR TODO y copia manualmente.');
}

function actionInfo(){
  if(!selected)return{step:'expediente',title:'Selecciona un vehículo',reason:'El Home usará el índice y el último retorno para orientarte.',wait:false,block:false,action:''};
  const local=selectedLocal(),r=local.parsed||{};
  const action=r.SIGUIENTE_PASO||r.SIGUIENTE_MODULO||selected.siguiente_accion||'';
  const all=normalize(action+' '+(r.ESTADO_FINAL||'')+' '+(selected.estado||'')+' '+((selected.flags||[]).join(' ')));
  let step='expediente';
  if(/RECONCILIAR|VERIFICAR_ARTEFACTO|REVISION|APROBACION/.test(all))step='revision';
  else if(/MEDICION/.test(all))step='medicion';
  else if(/PUBLICACION|PUBLICAR|COPYS/.test(all))step='publicacion';
  else if(/PRODUC|PAQUETE_REDES|REEL|TIKTOK|FLYER/.test(normalize(action)))step='produccion';
  else if(/RETOQUE|LAVADO/.test(all))step='retoque';
  else if(/SELECCION/.test(all))step='seleccion';
  else if(/CAPTURA|GRABAR|VIDEO/.test(normalize(action)))step='captura';
  else if(/CIERRE|CERRAR/.test(all))step='cierre';
  const wait=/^(SI|SÍ)$/i.test(r.ESPERANDO_MIGUEL||'')||all.includes('ESPERANDO_MIGUEL')||all.includes('PENDIENTE_APROBACION_MIGUEL');
  const block=/^(SI|SÍ)$/i.test(r.BLOQUEADO||'')||all.includes('REQUIERE_RECONCILIACION')||all.includes('NO_PUBLICAR')||all.includes('BLOQUEADO');
  let title=action||selected.siguiente_accion||'Continuar desde PUENTE';
  if(wait)title=(r.ACCION_MIGUEL&&r.ACCION_MIGUEL!=='NO APLICA')?r.ACCION_MIGUEL:'Revisar y decidir';
  return{step,title,reason:r.ESTADO_FINAL||selected.estado||'Verificar PUENTE vigente antes de actuar.',wait,block,action};
}
function stepIndex(id){return steps.findIndex(x=>x[0]===id);}
function renderBoard(){
  const progress=$('progress'),info=actionInfo(),idx=stepIndex(info.step);if(!progress)return;
  progress.innerHTML=steps.map((s,i)=>{let cls='',desc='Pendiente';if(i<idx){cls='done';desc='Completado según navegación disponible';}else if(i===idx){cls=info.block?'block':info.wait?'wait':'now';desc=info.block?'Bloqueado / requiere atención':info.wait?'Esperando a Miguel':'Haz esto ahora';}return `<div class="step ${cls}"><div class="lamp"></div><div><b>${esc(s[1])}</b><span>${esc(desc)}</span></div></div>`;}).join('');
  if($('nowTitle'))$('nowTitle').textContent=info.title;if($('nowReason'))$('nowReason').textContent=info.reason;
  const alerts=[];if(info.block)alerts.push('<div class="alert red">Hay un bloqueo/contradicción. CONTINUAR debe verificar PUENTE y resolverlo antes de avanzar.</div>');if(info.wait)alerts.push('<div class="alert">La siguiente acción depende de una decisión de Miguel.</div>');if($('nowAlert'))$('nowAlert').innerHTML=alerts.join('');
  if($('reviewSection'))$('reviewSection').classList.toggle('hidden',!(info.wait||info.step==='revision'));
  const local=selected?selectedLocal():{},link=(local.parsed&&local.parsed.LINK_PRINCIPAL)||local.materialShortcut||'';
  if($('openPrimary'))$('openPrimary').disabled=!link;if($('openMaterial'))$('openMaterial').disabled=!(local.materialShortcut||link);
}
function renderVehicle(){
  if(!selected){if($('vehicleMeta'))$('vehicleMeta').textContent='Selecciona una unidad. El índice orienta; el chat trabajador debe verificar PUENTE.md antes de escribir.';if($('materialShortcut'))$('materialShortcut').value='';if($('openPuente'))$('openPuente').disabled=true;renderBoard();return;}
  if($('openPuente'))$('openPuente').disabled=false;const local=selectedLocal();if($('materialShortcut'))$('materialShortcut').value=local.materialShortcut||'';
  if($('vehicleMeta'))$('vehicleMeta').innerHTML=`<b>${esc(selected.label)}</b><br>Estado índice: ${esc(selected.estado)}<br>Siguiente: ${esc(selected.siguiente_accion)}<br><span style="color:#8799a3">${esc(selected.key)}</span>`;renderBoard();
}
function agendaType(action,state,flags,parsed){
  const s=normalize([action,state,(flags||[]).join(' '),parsed&&parsed.ESPERANDO_MIGUEL].join(' '));
  if(s.includes('MEDICION_24'))return'Medición 24h';if(s.includes('MEDICION_72'))return'Medición 72h';if(s.includes('MEDICION_7D'))return'Medición 7d';if(s.includes('MEDICION'))return'Medición';if(s.includes('CAPTURA'))return'Captura';if(s.includes('SELECCION'))return'Selección';if(s.includes('RETOQUE')||s.includes('LAVADO'))return'Retoque';if(s.includes('APROBACION')||s.includes('REVISION'))return'Aprobación';if(s.includes('PUBLIC'))return'Publicación';if(s.includes('AUDIT')||s.includes('RECONCILIAR')||s.includes('VERIFICAR'))return'Auditoría';return'Seguimiento';
}
function automaticAgenda(){return publicIndex.map(x=>{const local=localForKey(x.key),r=local.parsed||{},action=r.SIGUIENTE_PASO||r.SIGUIENTE_MODULO||x.siguiente_accion||'Verificar PUENTE',state=r.ESTADO_FINAL||x.estado||'',all=normalize(action+' '+state+' '+((x.flags||[]).join(' '))),wait=/^(SI|SÍ)$/i.test(r.ESPERANDO_MIGUEL||'')||all.includes('ESPERANDO_MIGUEL')||all.includes('PENDIENTE_APROBACION_MIGUEL'),block=/^(SI|SÍ)$/i.test(r.BLOQUEADO||'')||all.includes('BLOQUEADO')||all.includes('NO_PUBLICAR')||all.includes('REQUIERE_RECONCILIACION'),checkpoints=r.FECHAS_CHECKPOINTS&&r.FECHAS_CHECKPOINTS!=='NO APLICA'?r.FECHAS_CHECKPOINTS:'';return{id:x.key,vehicle:x.label,title:wait&&(r.ACCION_MIGUEL&&r.ACCION_MIGUEL!=='NO APLICA')?r.ACCION_MIGUEL:action,type:agendaType(action,state,x.flags,r),notes:state,due:checkpoints,wait,block,source:r.SIGUIENTE_PASO||r.ESTADO_FINAL?'Último retorno local + índice público':'Índice público sanitizado'};}).filter(t=>t.title);}
function renderAutomaticAgenda(){const box=$('agendaAutoList'),status=$('agendaAutoStatus'),items=automaticAgenda();if(status)status.textContent=items.length?`${items.length} pendientes derivados. No necesitas capturarlos manualmente.`:'Sin pendientes automáticos disponibles.';if(!box)return;if(!items.length){box.innerHTML='';return;}box.innerHTML=items.map(t=>`<div class="agendaItem auto"><span class="agendaDot ${t.block?'block':t.wait?'wait':''}"></span><div><strong>${esc(t.vehicle)} — ${esc(t.title)}</strong><div class="agendaMeta">${esc(t.type)}${t.due?' · '+esc(t.due):''}${t.notes?' · '+esc(t.notes):''}</div><div class="agendaSource">${esc(t.source)} · navegación derivada, PUENTE.md sigue mandando</div></div></div>`).join('');}

async function loadIndex(){
  const select=$('vehicleSelect');if(!select)return;const old=select.value||guidedState.selectedKey||'';
  try{
    const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),12000);
    const res=await fetch(`${INDEX_URL}?t=${Date.now()}`,{cache:'no-store',signal:controller.signal});clearTimeout(timer);if(!res.ok)throw new Error('HTTP '+res.status);
    const data=await res.json();publicIndex=Array.isArray(data.expedientes)?data.expedientes:[];
    select.innerHTML='<option value="">Selecciona vehículo…</option><option value="__NEW__">+ Nuevo vehículo / proyecto manual</option>'+publicIndex.map(x=>`<option value="${esc(x.key)}">${esc(x.label)}</option>`).join('');
    if(old&&publicIndex.some(x=>x.key===old))select.value=old;selected=publicIndex.find(x=>x.key===select.value)||null;if(selected){guidedState.selectedKey=selected.key;saveGuided();}
    setStatus(`Índice cargado: ${publicIndex.length} expedientes.`);renderVehicle();renderAutomaticAgenda();
  }catch(e){select.innerHTML='<option value="">Índice no disponible</option><option value="__NEW__">+ Usar modo manual</option>';setStatus('No se pudo cargar el índice. Usa modo avanzado/manual o pulsa ACTUALIZAR ÍNDICE.');if($('agendaAutoStatus'))$('agendaAutoStatus').textContent='No se pudo cargar el índice público.';if($('agendaAutoList'))$('agendaAutoList').innerHTML='';}
}

function parseReturn(text){const out={};String(text||'').split(/\r?\n/).forEach(line=>{const m=line.match(/^\s*([^:]{2,40}):\s*(.*)$/);if(!m)return;const k=normalize(m[1]).replace(/[^A-Z0-9]+/g,'_').replace(/^_|_$/g,'');out[k]=m[2].trim();});return out;}
const returnBlock=`\n\n## RETORNO_AL_COORDINADOR\nTRABAJO:\nVEHÍCULO/PROYECTO:\nEXPEDIENTE_KEY:\nPUENTE_PATH:\nETAPA EJECUTADA:\nPASO_TERMINADO:\nRESULTADO:\nDRIVE:\nLINK_PRINCIPAL:\nGITHUB:\nCOMMITS:\nESTADO FINAL:\nBLOQUEADO: SI/NO\nESPERANDO_MIGUEL: SI/NO\nACCION_MIGUEL:\nPENDIENTES:\nFECHAS/CHECKPOINTS:\nSIGUIENTE_PASO:\nSIGUIENTE MÓDULO:\nCONTRADICCIONES/RIESGOS:\n\nSi un campo no aplica, escribe NO APLICA. No inventes.`;
function guidedPrompt(){if(!selected)return '# AFL AUTOS — NUEVO VEHÍCULO\n\nUsa el módulo + Nuevo vehículo del Home o prompts vigentes. No inventes datos.';const info=actionInfo(),l=selectedLocal(),p=l.parsed||{};return `# AFL AUTOS — CONTINUAR GUIADO V3.2\n\nEXPEDIENTE_KEY: ${selected.key}\nPUENTE_PATH: ${selected.puente_path}\nVEHÍCULO/PROYECTO: ${selected.label}\nPASO SUGERIDO POR NAVEGACIÓN: ${info.action||selected.siguiente_accion}\nESTADO ÍNDICE: ${selected.estado}\n${p.ESTADO_FINAL?`ULTIMO_ESTADO_RETORNO: ${p.ESTADO_FINAL}\n`:''}${p.ACCION_MIGUEL?`ACCION_MIGUEL: ${p.ACCION_MIGUEL}\n`:''}\nINSTRUCCIÓN\n1. Lee/fetch el PUENTE.md vigente antes de actuar; PUENTE manda sobre este resumen.\n2. Lee AFL_AUTOS_OPERACION/prompts/CONTINUAR_GUIADO.md.\n3. Ejecuta únicamente el siguiente bloque lógico real.\n4. Para contenido normal usa PUENTE + AFL_AUTOS_CONTENT_SYSTEM/runtime/CONTENT_RUNTIME.md + material real.\n5. No repitas trabajo terminado ni abras auditorías completas salvo necesidad.\n6. No publiques automáticamente.\n7. Si necesito intervenir, devuelve ACCION_MIGUEL y LINK_PRINCIPAL.\n${returnBlock}`;}
function manualRoute(task,source){const v=selected?selected.label:($('manualVehicle')?.value||'NO INDICADO'),key=selected?selected.key:'NO APLICA',path=selected?selected.puente_path:'LOCALIZAR SI EXISTE';return `# AFL AUTOS — ${task}\n\nVEHÍCULO/PROYECTO: ${v}\nEXPEDIENTE_KEY: ${key}\nPUENTE_PATH: ${path}\nDRIVE/REFERENCIA MANUAL: ${$('manualDrive')?.value||'NO PEGADO'}\nNOTAS: ${$('notes')?.value||'Sin notas'}\n\nLee ${source}. Verifica PUENTE vigente antes de escribir. Ejecuta solo esta etapa, conserva trazabilidad y no publiques automáticamente.${returnBlock}`;}
const advancedTemplates={
  nuevo:()=>`# AFL AUTOS — NUEVO VEHÍCULO\n\nVEHÍCULO/PROYECTO: ${$('manualVehicle')?.value||'PENDIENTE'}\nDRIVE: ${$('manualDrive')?.value||'NO PEGADO'}\nNOTAS: ${$('notes')?.value||'Sin notas'}\n\nInventaría e identifica con evidencia real. Busca expediente existente antes de crear uno. No selecciones, retoques ni produzcas aún. Actualiza PUENTE y devuelve el siguiente paso.${returnBlock}`,
  captura:()=>manualRoute('PLAN_CAPTURA','prompts/PLAN_CAPTURA.md'),seleccionar:()=>manualRoute('SELECCIONAR_MATERIAL','prompts/SELECCIONAR_MATERIAL.md'),lavar:()=>manualRoute('RETOQUE_FOTOGRAFICO','PUENTE vigente y reglas de preparación fotográfica de CONTENT_RUNTIME'),redes:()=>manualRoute('PRODUCIR_REDES','prompts/PRODUCIR_REDES.md'),visual:()=>manualRoute('REVISION_APRENDIZAJE','prompts/REVISAR_DISENO_APRENDIZAJE.md'),retorno:()=>`# AFL AUTOS — PROCESAR RETORNO MANUAL\n\n${$('handoff')?.value||'RETORNO NO PEGADO'}\n\nVerifica PUENTE/fuentes vigentes, no repitas trabajo y determina el siguiente paso.${returnBlock}`,hilo:()=>manualRoute('CONTINUAR_HILO','prompts/CONTINUAR_GUIADO.md'),publicado:()=>manualRoute('PUBLICACION_MEDICION','prompts/PUBLICACION_MEDICION.md'),vendido:()=>manualRoute('VENDIDO_ENTREGA','PUENTE vigente; registrar venta solo por confirmación de Miguel'),referencia:()=>`# AFL AUTOS — ANALIZAR REFERENCIA CREATIVA EXTERNA\n\nREFERENCIA/DRIVE: ${$('manualDrive')?.value||'USAR INBOX CANONICO PRIVADO'}\nCOMENTARIO_MIGUEL: ${$('notes')?.value||'Analiza qué patrones pueden servir'}\n\nLee prompts/ANALIZAR_REFERENCIA_CREATIVA.md y AFL_AUTOS_CONTENT_SYSTEM/library/external_references/README.md. Extrae patrones y adapta de forma original a AFL AUTOS. No copies branding, fotos, textos completos ni layouts distintivos. No uses la referencia como evidencia técnica.${returnBlock}`,principal:()=>`# AFL AUTOS — NUEVO CHAT COORDINADOR\n\nLee AFL_AUTOS_OPERACION/README.md, docs/COMO_EMPEZAR.md y docs/ARQUITECTURA.md vigentes. Usa Home V3.2 como flujo guiado. Para unidades, PUENTE.md manda. Para creatividad diaria usa CONTENT_RUNTIME. Complejidad histórica solo bajo demanda.${returnBlock}`
};

function loadAgenda(){try{agenda=JSON.parse(safeStorageGet(agendaKey,'[]'));if(!Array.isArray(agenda))agenda=[];}catch(e){agenda=[];}renderAgenda();}
function saveAgenda(){safeStorageSet(agendaKey,JSON.stringify(agenda));renderAgenda();}
function renderAgenda(){const box=$('agendaList');if(!box)return;if(!agenda.length){box.innerHTML='<div class="status">Sin pendientes manuales.</div>';return;}const sorted=[...agenda].sort((a,b)=>(Number(a.done)-Number(b.done))||String(a.due||'').localeCompare(String(b.due||'')));box.innerHTML=sorted.map(t=>`<div class="agendaItem ${t.done?'done':''}"><input type="checkbox" ${t.done?'checked':''} data-task-toggle="${esc(t.id)}" aria-label="Marcar pendiente"><div><strong>${esc(t.vehicle||'General')} — ${esc(t.title)}</strong><div class="agendaMeta">${esc(t.due||'Sin fecha')} · ${esc(t.type)}${t.notes?' · '+esc(t.notes):''}</div></div><button type="button" class="mini" data-task-delete="${esc(t.id)}">Borrar</button></div>`).join('');}

function bindEvents(){
  on('vehicleSelect','change',()=>{const v=$('vehicleSelect').value;if(v==='__NEW__'){selected=null;if($('advancedDetails'))$('advancedDetails').open=true;advancedMode='nuevo';$('manualVehicle')?.focus();renderVehicle();return;}selected=publicIndex.find(x=>x.key===v)||null;if(selected){guidedState.selectedKey=selected.key;saveGuided();}renderVehicle();});
  on('reloadIndex','click',loadIndex);on('refreshAgendaStatus','click',loadIndex);
  on('saveShortcut','click',()=>{if(!selected){setStatus('Selecciona un expediente antes de guardar un atajo.');return;}selectedLocal().materialShortcut=$('materialShortcut').value.trim();saveGuided();renderBoard();setStatus('Atajo guardado solo en este navegador.');});
  on('openPuente','click',()=>{if(!selected)return;if(!openUrl(`https://github.com/miguelangelruizfull-ai/Vehiculos/blob/main/${selected.puente_path}`))setStatus('No hay PUENTE válido para abrir.');});
  on('openMaterial','click',()=>{if(!selected)return;const l=selectedLocal(),url=(l.parsed&&l.parsed.LINK_PRINCIPAL)||l.materialShortcut||'';if(!openUrl(url))setStatus('No hay un enlace local válido todavía.');});
  on('openPrimary','click',()=>{if(!selected)return;const l=selectedLocal(),url=(l.parsed&&l.parsed.LINK_PRINCIPAL)||l.materialShortcut||'';if(!openUrl(url))setStatus('No hay LINK_PRINCIPAL válido.');});
  on('continueBtn','click',()=>putPrompt(guidedPrompt(),'Siguiente prompt copiado. Puedes abrir ChatGPT.'));
  on('processReturn','click',()=>{const text=$('handoff').value.trim();if(!text){$('returnStatus').textContent='Pega un retorno primero.';return;}const parsed=parseReturn(text),key=parsed.EXPEDIENTE_KEY;if(key&&publicIndex.some(x=>x.key===key)){$('vehicleSelect').value=key;selected=publicIndex.find(x=>x.key===key);guidedState.selectedKey=key;}if(!selected){$('returnStatus').textContent='No pude asociar el retorno a un expediente. Selecciónalo primero.';return;}const l=selectedLocal();l.lastReturn=text;l.parsed=parsed;saveGuided();$('returnStatus').textContent=`Retorno procesado. Siguiente: ${parsed.SIGUIENTE_PASO||parsed.SIGUIENTE_MODULO||selected.siguiente_accion||'verificar PUENTE'}.`;renderVehicle();renderAutomaticAgenda();});
  on('clearReturn','click',()=>{if(selected){const l=selectedLocal();delete l.lastReturn;delete l.parsed;saveGuided();}$('handoff').value='';$('returnStatus').textContent='Retorno local limpiado.';renderBoard();renderAutomaticAgenda();});
  on('prepareReview','click',()=>{if(!selected){setStatus('Selecciona un vehículo.');return;}if(!$('reviewDecision').value){setStatus('Selecciona la decisión de Miguel.');return;}const text=`# AFL AUTOS — REVISAR DISEÑO / REGISTRAR APRENDIZAJE\n\nEXPEDIENTE_KEY: ${selected.key}\nPUENTE_PATH: ${selected.puente_path}\nVEHÍCULO/PROYECTO: ${selected.label}\nPIEZA/VERSION: ${$('reviewPiece').value||'NO INDICADA'}\nDECISION_MIGUEL: ${$('reviewDecision').value}\nQUE_NO_GUSTO: ${$('reviewDislike').value||'NO INDICADO'}\nQUE_SI_CONSERVAR: ${$('reviewKeep').value||'NO INDICADO'}\nREFERENCIA_VISUAL: ${$('reviewReference').value||'NO INDICADA'}\nCOMENTARIO_MIGUEL: ${$('reviewComment').value||'SIN COMENTARIO ADICIONAL'}\n\nLee prompts/REVISAR_DISENO_APRENDIZAJE.md vigente. Usa FAST PATH: pieza real + PUENTE + CONTENT_RUNTIME + este feedback. Abre fuentes profundas solo si hace falta. Registra durablemente el aprendizaje y NO publiques automáticamente.${returnBlock}`;putPrompt(text,'Decisión copiada para el chat trabajador.');});
  document.querySelectorAll('.modeBtn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.modeBtn').forEach(x=>x.classList.remove('active'));b.classList.add('active');advancedMode=b.dataset.mode||'';}));
  on('generateAdvanced','click',()=>{if(!advancedMode){setStatus('Selecciona una opción avanzada.');return;}const fn=advancedTemplates[advancedMode];if(!fn){setStatus('Opción avanzada no disponible.');return;}putPrompt(fn(),'Prompt avanzado copiado.');});
  on('refPrompt','click',()=>{advancedMode='referencia';putPrompt(advancedTemplates.referencia(),'Prompt de análisis de referencia copiado.');});
  on('saveRefShortcut','click',()=>{guidedState.refInboxShortcut=$('refInboxShortcut').value.trim();saveGuided();updateRefShortcut();setStatus('Atajo al inbox guardado solo en este navegador.');});
  on('openRefInbox','click',()=>{if(!openUrl(guidedState.refInboxShortcut))setStatus('Guarda primero un enlace https válido.');});
  on('copy','click',()=>{const text=$('output').value;if(!text){setStatus('No hay prompt preparado.');return;}putPrompt(text,'Prompt copiado.');});
  on('selectAll','click',()=>{const out=$('output');out.focus();out.select();setStatus('Texto seleccionado. Usa Ctrl+C si Chrome no permite copia automática.');});
  on('addTask','click',()=>{const title=$('taskTitle').value.trim();if(!title){setStatus('Escribe una actividad.');return;}agenda.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),vehicle:$('taskVehicle').value.trim(),title,due:$('taskDue').value,type:$('taskType').value,notes:$('taskNotes').value.trim(),done:false});saveAgenda();$('taskTitle').value='';$('taskNotes').value='';setStatus('Pendiente manual guardado localmente.');});
  on('clearDone','click',()=>{agenda=agenda.filter(x=>!x.done);saveAgenda();setStatus('Pendientes manuales completados eliminados.');});
  on('agendaPrompt','click',()=>{const auto=automaticAgenda().map(t=>({vehicle:t.vehicle,title:t.title,due:t.due||'',type:t.type,notes:t.notes})),manual=agenda.filter(x=>!x.done),p=[...auto,...manual];if(!p.length){setStatus('No hay pendientes activos.');return;}const body=p.map((t,i)=>`${i+1}. ${t.vehicle||'General'} | ${t.title} | ${t.due||'SIN FECHA'} | ${t.type}${t.notes?' | '+t.notes:''}`).join('\n');putPrompt(`# AFL AUTOS — CREAR / REGISTRAR RECORDATORIOS\n\n${body}\n\nLa lista automática viene del índice/STATUS de navegación y puede incluir elementos sin fecha. Crea solo automatizaciones que correspondan a acciones futuras con fecha/cadencia suficiente. No inventes horarios. Distingue lo programado de lo solo registrado.`,'Prompt de recordatorios copiado.');});
  on('agendaList','change',(e)=>{const id=e.target?.dataset?.taskToggle;if(!id)return;const t=agenda.find(x=>x.id===id);if(t){t.done=!!e.target.checked;saveAgenda();}});
  on('agendaList','click',(e)=>{const id=e.target?.dataset?.taskDelete;if(!id)return;agenda=agenda.filter(x=>x.id!==id);saveAgenda();});
}
function updateRefShortcut(){if($('refInboxShortcut'))$('refInboxShortcut').value=guidedState.refInboxShortcut||'';if($('openRefInbox'))$('openRefInbox').disabled=!guidedState.refInboxShortcut;}
function boot(){loadGuided();loadAgenda();updateRefShortcut();bindEvents();loadIndex();document.documentElement.dataset.homeReady='1';}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
