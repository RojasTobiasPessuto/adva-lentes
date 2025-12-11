export const HORAS_PANTALLAS_MAP: Record<string, string> = {
  '0-2': 'Menos de 2 horas',
  '2-4': '2 a 4 horas',
  '4-8': '4 a 8 horas',
  '8+': 'Más de 8 horas',
};

export const HORAS_DORMIR_MAP: Record<string, string> = {
  '<5': 'Menos de 5h',
  '5-6': '5-6 horas',
  '7-8': '7-8 horas',
  '8+': 'Más de 8h',
};

export const CALIDAD_SUENO_MAP: Record<string, string> = {
  // acá asumimos que en el front usás algo como 'excelente', 'buena', etc.
  'excelente': 'Excelente - Me despierto descansado/a',
  'buena': 'Buena - Generalmente duermo bien',
  'regular': 'Regular - Me cuesta conciliar el sueño o me despierto cansado/a',
  'mala': 'Mala - Insomnio frecuente, sueño fragmentado',
};

export const PANTALLAS_ANTES_DORMIR_MAP: Record<string, string> = {
  'nunca': 'Nunca o rara vez',
  'a-veces': 'A veces',
  'siempre': 'Casi siempre',
};

export const NIVEL_ENERGIA_MAP: Record<string, string> = {
  'alta': 'Alta y estable durante todo el día',
  'variable': 'Variable, con picos y bajones',
  'baja-manana': 'Baja por la mañana, mejor por la tarde/noche',
  'baja-constante': 'Baja de manera constante, fatiga crónica',
};

export const CONCENTRACION_MAP: Record<string, string> = {
  'excelente': 'Excelente - Puedo mantener el foco sin problemas',
  'buena': 'Buena - A veces me distraigo pero puedo volver al foco',
  'dificil': 'Difícil - Me cuesta mantener la atención',
  'muy-dificil': 'Muy difícil - Dispersión mental constante',
};

export const ESTADO_ANIMO_MAP: Record<string, string> = {
  'positivo': 'Positivo y estable',
  'neutral': 'Neutral, sin grandes cambios',
  'variable': 'Variable, con altibajos frecuentes',
  'bajo': 'Bajo, con tendencia a la ansiedad o tristeza',
};

export const DESEO_SEXUAL_MAP: Record<string, string> = {
  'alto': 'Alto - Sin cambios notables',
  'normal': 'Normal - Estable',
  'bajo': 'Bajo - Ha disminuido en los últimos meses',
  'muy-bajo': 'Muy bajo o ausente',
};

export const LIBIDO_CAMBIOS_MAP: Record<string, string> = {
  'sin-cambios': 'Sin cambios',
  'disminucion': 'Disminución',
  'disminucion-importante': 'Disminución importante',
};

// Para ciclo menstrual y síntomas menstruales, asumimos códigos similares:
export const CICLO_MENSTRUAL_MAP: Record<string, string> = {
  'regular': 'Sí, muy regular',
  'irregular': 'Irregular o con variaciones',
  'muy-irregular': 'Muy irregular o ausente',
  'no-aplica': 'No aplica (menopausia, etc.)',
};

export const SINTOMAS_MENSTRUALES_MAP: Record<string, string> = {
  'pocos': 'Pocos o ninguno',
  'moderados': 'Moderados',
  'intensos': 'Intensos',
};

// Hábitos de salud lumínica:
export const USA_GAFAS_MAP: Record<string, string> = {
  'si': 'Sí, regularmente',
  'a-veces': 'A veces',
  'no': 'No',
};

export const ILUMINACION_NOCTURNA_MAP: Record<string, string> = {
  'calida': 'Luz cálida, tenue (ámbar, amarilla)',
  'mixta': 'Mezcla de luces cálidas y frías',
  'fria': 'Luz blanca fría o muy brillante',
  'no-se': 'No sé / No le presto atención',
};

export const EXPONE_AL_SOL_MAP: Record<string, string> = {
  'mucho': 'Sí, más de 30 minutos al día',
  'poco': 'Poco, menos de 30 minutos',
  'casi-nada': 'Casi nada, paso el día en interiores',
};
