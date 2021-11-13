export default {
    name: 'preguntasFrecuentes',
    title: 'Preguntas Frecuentes',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'preguntas',
            title: 'Preguntas',
            type: 'array',
            of: [{ type: 'preguntaRespuesta' }],
        },
    ],
};
