window.AFL_HOME_V41_CONFIG={
  categories:[
    {id:'hoy',label:'Continuar / Hoy',desc:'Pendientes, retornos y tareas interrumpidas.'},
    {id:'vehiculo',label:'Vehículo',desc:'Ingreso, captura, selección, retoque y galería.'},
    {id:'contenido',label:'Crear contenido',desc:'Producción, revisión y cierre visual.'},
    {id:'comercial',label:'Responder / Lead',desc:'Conversación, calificación, visita y seguimiento.'},
    {id:'publicar',label:'Publicar / Medir',desc:'URLs, publicación y checkpoints.'},
    {id:'mas',label:'Más',desc:'Continuidad, auditorías y herramientas.'}
  ],
  actions:{
    continuar_vehiculo:{category:'hoy',label:'Continuar vehículo',desc:'Retoma desde PUENTE y el primer pendiente real.',fields:['vehicle','drive','handoff','notes'],requires:['vehicle'],promptFile:'prompts/CONTINUAR_VEHICULO.md'},
    procesar_retorno:{category:'hoy',label:'Procesar retorno',desc:'Valida un retorno contra fuentes vigentes antes de continuar.',fields:['vehicle','drive','handoff','notes'],requires:['handoff'],promptFile:'prompts/PROCESAR_RETORNO.md'},
    continuar_hilo:{category:'hoy',label:'Continuar tarea',desc:'Auditoría o trabajo interrumpido sin repetir lo ya hecho.',fields:['vehicle','drive','handoff','notes'],requires:['handoff'],promptFile:'prompts/CONTINUAR_HILO.md'},
    agenda:{category:'hoy',label:'Agenda local',desc:'Ver y editar pendientes guardados en este navegador.',ui:'agenda'},

    nuevo:{category:'vehiculo',label:'+ Nuevo vehículo',desc:'Ingreso e identificación antes de producir.',fields:['vehicle','drive','notes'],requires:['drive'],promptFile:'prompts/NUEVO_VEHICULO.md'},
    plan_captura:{category:'vehiculo',label:'Plan de captura',desc:'Estrategia visual y checklist específico.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PLAN_CAPTURA.md'},
    seleccionar:{category:'vehiculo',label:'Seleccionar material',desc:'Audita la sesión y elige material útil.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/SELECCIONAR_MATERIAL.md'},
    retocar:{category:'vehiculo',label:'Lavar / retocar',desc:'Trabaja solo sobre la selección formal.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/LAVAR_FOTOS.md'},
    galeria:{category:'vehiculo',label:'Galería prospectos',desc:'Fotos para lead, no para publicación.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/GALERIA_PROSPECTOS.md'},

    producir:{category:'contenido',label:'Producir redes',desc:'Paquete de Facebook, TikTok, historias, flyers y copies.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PRODUCIR_REDES.md'},
    revisar:{category:'contenido',label:'Revisión / aprobación',desc:'Revisa sin confundir producido con aprobado.',fields:['vehicle','drive','handoff','notes'],requires:['vehicle'],promptFile:'prompts/REVISION_APROBACION.md'},
    vendido:{category:'contenido',label:'Vendido / entrega',desc:'Cierre visual sin atribución falsa.',fields:['vehicle','drive','notes'],requires:['vehicle'],promptFile:'prompts/VENDIDO_ENTREGA.md'},

    responder:{category:'comercial',label:'Responder',desc:'Comentario, Messenger, TikTok o WhatsApp.',fields:['vehicle','channel','intent','message','notes'],requires:['channel','intent','message'],kind:'commercial',commercialAction:'RESPONDER'},
    calificar:{category:'comercial',label:'Calificar lead',desc:'Pocas preguntas y siguiente acción concreta.',fields:['vehicle','channel','message','notes'],requires:['vehicle','channel'],kind:'commercial',commercialAction:'CALIFICAR'},
    mover_whatsapp:{category:'comercial',label:'Mover a WhatsApp / llamada',desc:'Solo cuando facilite el siguiente paso.',fields:['vehicle','channel','message','notes'],requires:['channel'],kind:'commercial',commercialAction:'MOVER_A_WHATSAPP'},
    fotos_video:{category:'comercial',label:'Enviar fotos / video',desc:'Usa galería vigente para prospectos.',fields:['vehicle','channel','message','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'ENVIAR_FOTOS_VIDEO'},
    visita:{category:'comercial',label:'Proponer visita',desc:'Distingue propuesta, agendada y realizada.',fields:['vehicle','channel','message','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'PROPONER_VISITA'},
    seguimiento:{category:'comercial',label:'Seguimiento',desc:'Contextual, breve y con motivo real.',fields:['vehicle','channel','message','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'SEGUIMIENTO'},
    negociacion:{category:'comercial',label:'Negociación',desc:'Condiciones reales, sin inventar mínimos o descuentos.',fields:['vehicle','channel','message','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'NEGOCIAR'},
    cierre_comercial:{category:'comercial',label:'Cierre comercial',desc:'Confirma venta solo con evidencia operativa.',fields:['vehicle','channel','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'CIERRE'},
    retorno_comercial:{category:'comercial',label:'Registrar retorno comercial',desc:'Retorno sanitizado para coordinación.',fields:['vehicle','channel','handoff','notes'],requires:['vehicle'],kind:'commercial',commercialAction:'REGISTRAR_RETORNO'},

    publicar:{category:'publicar',label:'Registrar publicación',desc:'Sincroniza URL pública y estado real.',fields:['vehicle','drive','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Registrar la publicación real antes de programar mediciones.'},
    medir24:{category:'publicar',label:'Medición 24 h',desc:'Primer checkpoint de desempeño.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 24 horas.'},
    medir72:{category:'publicar',label:'Medición 72 h',desc:'Segundo checkpoint de desempeño.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 72 horas.'},
    medir7d:{category:'publicar',label:'Medición 7 días',desc:'Cierre comparativo del ciclo.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 7 días.'},

    cerrar_chat:{category:'mas',label:'Cerrar / sincronizar chat',desc:'Deja continuidad durable antes de cerrar.',fields:['vehicle','drive','handoff','notes'],promptFile:'prompts/CIERRE_CHAT.md'},
    principal:{category:'mas',label:'Nuevo chat principal',desc:'Arranca coordinador desde fuentes vigentes.',fields:['handoff','notes'],promptFile:'prompts/CHAT_PRINCIPAL.md'},
    tiktok_audit:{category:'mas',label:'Continuar auditoría TikTok',desc:'Trabaja solo archivos nuevos o pendientes.',fields:['drive','handoff','notes'],requires:['drive'],promptFile:'prompts/TIKTOK_AUDITORIA.md'},
    fuentes:{category:'mas',label:'Fuentes y seguridad',desc:'Ver arquitectura, privacidad y reglas de autoridad.',ui:'advanced'}
  }
};