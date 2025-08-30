/**
 * Datos de ejemplo para los vehículos
 * En una aplicación real, estos datos vendrían de una API o base de datos
 */

export const vehiculosEjemplo = [
  {
    id: "1",
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    color: "Blanco",
    precio: 25000,
    imagen:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    combustible: "Híbrido",
    kilometraje: 15000,
    disponible: true,
  },
  {
    id: "2",
    marca: "BMW",
    modelo: "X3",
    año: 2022,
    color: "Negro",
    precio: 45000,
    imagen:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    kilometraje: 28000,
    disponible: true,
  },
  {
    id: "3",
    marca: "Tesla",
    modelo: "Model 3",
    año: 2024,
    color: "Azul",
    precio: 52000,
    imagen:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    combustible: "Eléctrico",
    kilometraje: 5000,
    disponible: true,
  },
  {
    id: "4",
    marca: "Mercedes",
    modelo: "C-Class",
    año: 2021,
    color: "Plateado",
    precio: 42000,
    imagen:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
    combustible: "Diésel",
    kilometraje: 35000,
    disponible: false,
  },
  {
    id: "5",
    marca: "Audi",
    modelo: "A4",
    año: 2023,
    color: "Rojo",
    precio: 38000,
    imagen:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    kilometraje: 12000,
    disponible: true,
  },
  {
    id: "6",
    marca: "Volkswagen",
    modelo: "Golf",
    año: 2022,
    color: "Verde",
    precio: 28000,
    imagen:
      "https://images.unsplash.com/photo-1549399905-7c6923d72119?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    kilometraje: 22000,
    disponible: true,
  },
  {
    id: "7",
    marca: "Honda",
    modelo: "Civic",
    año: 2023,
    color: "Gris",
    precio: 26000,
    imagen:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop",
    combustible: "Híbrido",
    kilometraje: 8000,
    disponible: true,
  },
  {
    id: "8",
    marca: "Ford",
    modelo: "Mustang",
    año: 2022,
    color: "Amarillo",
    precio: 55000,
    imagen:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    kilometraje: 18000,
    disponible: false,
  },
  {
    id: "9",
    marca: "Nissan",
    modelo: "Leaf",
    año: 2024,
    color: "Blanco",
    precio: 32000,
    imagen:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    combustible: "Eléctrico",
    kilometraje: 2000,
    disponible: true,
  },
  {
    id: "10",
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2023,
    color: "Negro",
    precio: 35000,
    imagen:
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&h=300&fit=crop",
    combustible: "Híbrido",
    kilometraje: 14000,
    disponible: true,
  },
  {
    id: "11",
    marca: "Mazda",
    modelo: "CX-5",
    año: 2022,
    color: "Azul",
    precio: 33000,
    imagen:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    kilometraje: 26000,
    disponible: true,
  },
  {
    id: "12",
    marca: "Kia",
    modelo: "Sorento",
    año: 2023,
    color: "Plateado",
    precio: 37000,
    imagen:
      "https://images.unsplash.com/photo-1597149840657-bbf4bbbb76e6?w=400&h=300&fit=crop",
    combustible: "Diésel",
    kilometraje: 11000,
    disponible: true,
  },
];

/**
 * Función para obtener un vehículo por ID
 * @param {string} id - ID del vehículo
 * @returns {Object|null} - Vehículo encontrado o null
 */
export const obtenerVehiculoPorId = (id) => {
  return vehiculosEjemplo.find((vehiculo) => vehiculo.id === id) || null;
};

/**
 * Función para filtrar vehículos por marca
 * @param {string} marca - Marca a filtrar
 * @returns {Array} - Array de vehículos de la marca especificada
 */
export const obtenerVehiculosPorMarca = (marca) => {
  return vehiculosEjemplo.filter(
    (vehiculo) => vehiculo.marca.toLowerCase() === marca.toLowerCase()
  );
};

/**
 * Función para obtener vehículos disponibles
 * @returns {Array} - Array de vehículos disponibles
 */
export const obtenerVehiculosDisponibles = () => {
  return vehiculosEjemplo.filter((vehiculo) => vehiculo.disponible);
};

/**
 * Función para obtener estadísticas de los vehículos
 * @returns {Object} - Objeto con estadísticas
 */
export const obtenerEstadisticas = () => {
  const total = vehiculosEjemplo.length;
  const disponibles = vehiculosEjemplo.filter((v) => v.disponible).length;
  const marcas = [...new Set(vehiculosEjemplo.map((v) => v.marca))].length;
  const precioPromedio =
    vehiculosEjemplo.reduce((sum, v) => sum + v.precio, 0) / total;

  return {
    total,
    disponibles,
    noDisponibles: total - disponibles,
    marcas,
    precioPromedio: Math.round(precioPromedio),
  };
};


