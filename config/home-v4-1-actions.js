window.AFL_HOME_V41_CONFIG={
  categories:[
    {id:'hoy',label:'Continuar / Hoy',desc:'Pendientes, retornos y tareas interrumpidas.'},
    {id:'vehiculo',label:'Vehículo',desc:'Ingreso, captura, selección, retoque y galería.'},
    {id:'contenido',label:'Crear contenido',desc:'Video, flyers, paquete de redes, revisión y cierre visual.'},
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
    plan_captura:{category:'vehiculo',label:'Plan de captura',desc:'Planifica fotos/video desde motores históricos y necesidades reales.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PLAN_CAPTURA.md'},
    seleccionar:{category:'vehiculo',label:'Seleccionar material',desc:'Audita y selecciona según HERO, familias y hooks utilizables.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/SELECCIONAR_MATERIAL.md'},
    retocar:{category:'vehiculo',label:'Lavar / retocar',desc:'Trabaja solo sobre la selección formal.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/LAVAR_FOTOS.md'},
    galeria:{category:'vehiculo',label:'Galería prospectos',desc:'Fotos para lead, no para publicación.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/GALERIA_PROSPECTOS.md'},

    producir_video:{category:'contenido',label:'Reel / TikTok',desc:'Produce video usando Motor Editorial, familias, hooks y auditoría histórica.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PRODUCIR_REDES.md',extra:'Producir únicamente Facebook Reel y/o TikTok según la instrucción de Miguel. Aplicar el GATE AUDIOVISUAL obligatorio, elegir familia editorial, hook 0–3 s, duración, CTA y referencia histórica comparable. Adaptar por red; no producir clones automáticos. No producir flyer salvo que Miguel lo pida expresamente.'},
    producir_grafico:{category:'contenido',label:'Flyer / historia / portada',desc:'Produce pieza gráfica usando Motor Visual y auditoría de 100 flyers.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PRODUCIR_REDES.md',extra:'Producir únicamente flyer, historia y/o portada según la instrucción de Miguel. Aplicar el GATE VISUAL obligatorio, Motor Visual, familias, errores históricos y referencias positivas. Si no existe HERO suficiente, bloquear en vez de forzar una pieza.'},
    producir:{category:'contenido',label:'Paquete completo de redes',desc:'Facebook, TikTok, historias, flyers, portadas y copies con gates por tipo.',fields:['vehicle','drive','notes'],requires:['vehicle','drive'],promptFile:'prompts/PRODUCIR_REDES.md',extra:'Producir el paquete solicitado aplicando por separado el Gate audiovisual para Reel/TikTok y el Gate visual para flyers/historias/portadas. No tratar una salida como plantilla universal.'},
    revisar:{category:'contenido',label:'Revisión / aprobación',desc:'Compara cada pieza contra el motor/auditoría correspondiente.',fields:['vehicle','drive','handoff','notes'],requires:['vehicle'],promptFile:'prompts/REVISION_APROBACION.md'},
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
    medir24:{category:'publicar',label:'Medición 24 h',desc:'Primer checkpoint ligado a familia, hook/CTA o HERO.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 24 horas y relacionarla con las variables creativas registradas.'},
    medir72:{category:'publicar',label:'Medición 72 h',desc:'Segundo checkpoint y comparación de variables.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 72 horas y comparar contra el checkpoint anterior.'},
    medir7d:{category:'publicar',label:'Medición 7 días',desc:'Cierre comparativo sin elevar un caso a regla.',fields:['vehicle','publicUrl','notes'],requires:['vehicle','publicUrl'],promptFile:'prompts/PUBLICACION_MEDICION.md',extra:'Ejecutar específicamente la medición de 7 días y clasificar el aprendizaje sin atribuir causalidad no demostrada.'},

    cerrar_chat:{category:'mas',label:'Cerrar / sincronizar chat',desc:'Deja continuidad durable antes de cerrar.',fields:['vehicle','drive','handoff','notes'],promptFile:'prompts/CIERRE_CHAT.md'},
    principal:{category:'mas',label:'Nuevo chat principal',desc:'Arranca coordinador desde fuentes vigentes.',fields:['handoff','notes'],promptFile:'prompts/CHAT_PRINCIPAL.md'},
    tiktok_audit:{category:'mas',label:'Continuar auditoría TikTok',desc:'Trabaja solo archivos nuevos o pendientes.',fields:['drive','handoff','notes'],requires:['drive'],promptFile:'prompts/TIKTOK_AUDITORIA.md'},
    fuentes:{category:'mas',label:'Fuentes y seguridad',desc:'Ver arquitectura, privacidad y reglas de autoridad.',ui:'advanced'}
  }
};