// src/ghl/ghl-mappers.ts

// Step 2
export const HORAS_PANTALLAS_MAP: Record<string, string> = {
  'menos-3': 'Menos de 2 horas',
  '3-6': '2 a 4 horas',
  '6-9': '4 a 8 horas',
  'mas-9': 'Más de 8 horas',
};

// ojo: en GHL tus opciones son textos largos
export const PANTALLAS_ANTES_DORMIR_MAP: Record<string, string> = {
  'casi-no': 'Casi no uso pantallas',
  'un-poco': 'Uso un poco el celular / TV (menos de 1 hora)',
  'hasta-dormir': 'Estoy con el celular o la computadora hasta el momento de dormir',
  'me-duermo': 'Me quedo dormido con la pantalla encendida',
};

export const AMBIENTE_LUZ_ARTIFICIAL_MAP: Record<string, string> = {
  'casi-nunca': 'Casi nunca',
  'a-veces': 'A veces',
  'casi-todos-dias': 'Casi todos los días',
  'todo-dia': 'Todo el día, todos los días',
};

// Step 3
export const HORAS_DORMIR_MAP: Record<string, string> = {
  'menos-5': 'Menos de 5h',
  '5-7': '5-6 horas', // si en el front tenés 5-7, lo acercamos a 5-6
  '7-9': '7-8 horas', // si en el front tenés 7-9, lo acercamos a 7-8
  'mas-9': 'Más de 8h',
};

// en tu GHL las opciones son frases
export const CALIDAD_SUENO_MAP: Record<string, string> = {
  'profundo': 'Excelente - Me despierto descansado/a',
  'me-despierto': 'Buena - Generalmente duermo bien',
  'me-cuesta': 'Regular - Me cuesta conciliar el sueño o me despierto cansado/a',
  'cansado': 'Mala - Insomnio frecuente, sueño fragmentado',
};

export const CANSANCIO_AL_LEVANTAR_MAP: Record<string, string> = {
  'casi-nunca': 'Casi nunca',
  '1-2-veces': '1–2 veces por semana',
  '3-5-veces': '3–5 veces por semana',
  'casi-todos-dias': 'Casi todos los días',
};

// Step 4 (acá tu GHL ya tiene las frases exactas)
export const NIVEL_ENERGIA_MAP: Record<string, string> = {
  'alta-estable': 'Alta y estable durante todo el día',
  'caida-tarde': 'Variable, con picos y bajones',
  'cansado-todo-dia': 'Baja por la mañana, mejor por la tarde/noche',
  'necesito-estimulantes': 'Baja de manera constante, fatiga crónica',
};

export const CONCENTRACION_MAP: Record<string, string> = {
  'casi-nunca': 'Excelente - Puedo mantener el foco sin problemas',
  'a-veces': 'Buena - A veces me distraigo pero puedo volver al foco',
  'muy-seguido': 'Difícil - Me cuesta mantener la atención',
  'casi-siempre': 'Muy difícil - Dispersión mental constante',
};

export const ESTADO_ANIMO_MAP: Record<string, string> = {
  'equilibrado': 'Neutral, sin grandes cambios',
  'algo-irritable': 'Variable, con altibajos frecuentes',
  'bastante-irritable': 'Bajo, con tendencia a la ansiedad o tristeza',
  'muy-irritable': 'Bajo, con tendencia a la ansiedad o tristeza',
  // si te queda el viejo front:
  'positivo': 'Positivo y estable',
  'neutral': 'Neutral, sin grandes cambios',
  'variable': 'Variable, con altibajos frecuentes',
  'bajo': 'Bajo, con tendencia a la ansiedad o tristeza',
};

// Step 5
export const DESEO_SEXUAL_MAP: Record<string, string> = {
  'igual-mejor': 'Alto - Sin cambios notables',
  'poco-bajo': 'Normal - Estable',
  'notablemente-bajo': 'Bajo - Ha disminuido en los últimos meses',
  'casi-inexistente': 'Muy bajo o ausente',
  // compat viejo:
  'alto': 'Alto - Sin cambios notables',
  'normal': 'Normal - Estable',
  'bajo': 'Bajo - Ha disminuido en los últimos meses',
  'muy-bajo': 'Muy bajo o ausente',
};

export const VITALIDAD_FISICA_MAP: Record<string, string> = {
  'fuerte-recupero': 'Me siento fuerte y recupero bien',
  'canso-rapido': 'Me canso más rápido que antes',
  'cuesta-recuperar': 'Me cuesta mucho recuperarme, vivo agotado',
  'sin-energia': 'Prácticamente no tengo energía para entrenar o moverme',
};

// Mujeres
export const REGULARIDAD_CICLO_MAP: Record<string, string> = {
  'regular': 'Se mantiene regular como siempre',
  'adelanta-atrasa': 'A veces se adelanta o se atrasa',
  'irregular': 'Es cada vez más irregular',
  'no-anticipar': 'Prácticamente no puedo anticipar cuándo me va a venir',
};

export const SINTOMAS_MENSTRUALES_MAP: Record<string, string> = {
  'igual': 'No, siguen igual',
  'poco-intensos': 'Un poco más intensos que antes',
  'muy-intensos': 'Mucho más intensos (dolor, irritabilidad, insomnio, retención, etc.)',
  'cambiaron-notable': 'Cambiaron de forma notable y no entiendo por qué',
};



export const ENERGIA_CICLO_MAP: Record<string, string> = {
  'estable': 'Tengo energía estable casi todo el mes',
  'altibajos': 'Tengo altibajos más marcados que antes',
  'fatiga': 'Siento fatiga la mayor parte del ciclo',
  'agotada': 'Estoy agotada casi todos los días',
};

export const FERTILIDAD_MAP: Record<string, string> = {
  'no-cambios': 'No noté cambios',
  'dificil-identificar': 'Me cuesta identificar mis días fértiles',
  'irregulares': 'Mis ciclos son tan irregulares que se complica planificar',
  'dificultades': 'Estoy notando dificultades y no sé si puede estar relacionado',
  'no-aplica': 'No aplica / Prefiero no responder',
};

// Step 6
export const ASPECTO_FISICO_MAP: Record<string, string> = {
  'igual': 'No, me veo igual',
  'poco-ojeras': 'Un poco más de ojeras / cara de cansancio',
  'bastante-peor': 'Bastante peor (ojeras marcadas, piel opaca, mirada apagada)',
  'muy-deteriorado': 'Muy deteriorado comparado con antes',
};

export const SINTOMAS_FISICOS_MAP: Record<string, string> = {
  'dolor-cabeza': 'Dolor de cabeza o migrañas',
  'ojos-secos': 'Ojos secos o irritados',
  'vision-borrosa': 'Visión borrosa después de muchas horas de pantalla',
  'dolor-cuello': 'Dolor de cuello o espalda por tensión',
  'ninguno': 'Ninguno de los anteriores',
  'ninguno-de-los-anteriores': 'Ninguno de los anteriores',
};

// helper por si el front ya manda textos en vez de códigos
export const mapSintomasFisicosToGhl = (values: string[] = []) =>
  values.map(v => SINTOMAS_FISICOS_MAP[v] ?? v);

// visionAfectada llega como array de códigos o textos.
// Si vos ya mandás el texto exacto desde el front, no hace falta mapear.
// Si mandás códigos, agregamos un map más adelante.

// Step 7
export const PROTECCION_PANTALLAS_MAP: Record<string, string> = {
  'no-uso-nada': 'No uso nada',
  'modo-nocturno': "A veces activo el 'modo nocturno' del celular / Compu",
  'gafas-vez-cuando': 'Uso gafas con filtro de luz azul solo de vez en cuando',
  'gafas-casi-todos-dias': 'Uso gafas con filtro específico, casi todos los días y en horarios clave',
};

export const HORARIOS_PANTALLAS_MAP: Record<string, string> = {
  'hasta-dormir': 'No, uso pantallas hasta el momento de dormir',
  'intento-cortar': 'A veces intento cortar, pero no siempre lo logro',
  'corto-1-hora': 'Casi siempre corto mínimo 1 hora antes de dormir',
  'rutina-cuidada': 'Tengo una rutina muy cuidada de noche (luces cálidas, sin pantallas, etc.)',
};

export const DISPOSICION_GAFAS_MAP: Record<string, string> = {
  'muy-dispuesto': 'Muy dispuesto, las usaría todos los días',
  'bastante-dispuesto': 'Bastante dispuesto, especialmente de noche',
  'no-seguro': 'No estoy seguro, pero me gustaría probar',
  'no-usaria': 'No creo que las usaría',
};
