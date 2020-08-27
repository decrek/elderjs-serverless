module.exports = {
  hook: 'data',
  name: 'dataa',
  description: 'modify data on server',
  priority: 50,
  run: ({ data, settings }) => {
    console.log('modify props hook, isServer', settings.server);
    const newData = settings.server ? { ...data, aapje: 'aapje-aapje-aapje' } : data;

    return {
      data: newData,
    };
  },
};
