import fs from 'node:fs'
// Función para leer y guardar datos
function readData(DATA_FILE) {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        if (!data) return [];

        const parsedData = JSON.parse(data);

        // Si es un array o un objeto válido, lo devolvemos directamente
        if (Array.isArray(parsedData)) {
            return parsedData;
        }

        if (typeof parsedData === 'object' && parsedData !== null) {
            return [parsedData]; // Si es un objeto, lo envolvemos en un array
        }

        return [];
    } catch (error) {
        console.error('Error leyendo la base de datos:', error.message);
        return [];
    }
}
function saveData(data,DATA_FILE) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export {readData,saveData}