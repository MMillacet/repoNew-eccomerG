export default {
    name: 'preguntaRespuesta',
    title: 'Pregunta y Respuesta',
    type: 'object',
    fields: [
        {
            name: 'pregunta',
            title: 'Pregunta',
            type: 'string',
        },
        {
            name: 'respuesta',
            title: 'Respuesta',
            type: 'blockContent',
        },
    ],
};
