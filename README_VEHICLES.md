# Componente de Vehículos 🚗

Este módulo incluye componentes para mostrar vehículos con las mejores prácticas de React y CSS Modules.

## Componentes Incluidos

### 1. `Vehicle`
Componente individual para mostrar un vehículo con:
- ✅ Información detallada (marca, modelo, año, precio, etc.)
- ✅ Funcionalidad de favoritos
- ✅ Detalles expandibles
- ✅ Estado de disponibilidad
- ✅ Diseño responsive
- ✅ Validación con PropTypes

### 2. `VehicleList`
Componente lista para mostrar múltiples vehículos con:
- ✅ Búsqueda por marca y modelo
- ✅ Filtros por marca, combustible y disponibilidad
- ✅ Ordenación múltiple (precio, año, kilometraje)
- ✅ Grid responsive
- ✅ Estadísticas en tiempo real
- ✅ Gestión de estado completa

### 3. Datos de Ejemplo
- 12 vehículos de ejemplo con datos realistas
- Funciones helper para filtrado y estadísticas
- Imágenes de Unsplash

## Mejores Prácticas Implementadas

### React
- ✅ Componentes funcionales con Hooks
- ✅ PropTypes para validación
- ✅ Separación de responsabilidades
- ✅ Gestión de estado con useState
- ✅ Optimización con useMemo
- ✅ Event handlers con stopPropagation
- ✅ Patrón de composición
- ✅ Documentación JSDoc

### CSS Modules
- ✅ Estilos encapsulados
- ✅ Convenciones de nomenclatura consistentes
- ✅ Diseño responsive (mobile-first)
- ✅ Variables CSS y gradientes
- ✅ Transiciones y animaciones suaves
- ✅ Estados hover y focus
- ✅ Grid y Flexbox moderno

### Estructura
- ✅ Arquitectura modular
- ✅ Barrel exports (index.js)
- ✅ Separación de datos y componentes
- ✅ Reutilización de componentes

## Uso

### Importar componentes:
```jsx
import { Vehicle, VehicleList, vehiculosEjemplo } from '../components/Vehicle';
```

### Usar VehicleList:
```jsx
const handleVehicleSelect = (vehiculo) => {
  console.log('Vehículo seleccionado:', vehiculo);
};

<VehicleList 
  vehiculos={vehiculosEjemplo}
  onVehicleSelect={handleVehicleSelect}
  titulo="Mi Catálogo"
/>
```

### Usar Vehicle individual:
```jsx
<Vehicle
  id="1"
  marca="Toyota"
  modelo="Corolla"
  año={2023}
  color="Blanco"
  precio={25000}
  imagen="https://example.com/image.jpg"
  combustible="Híbrido"
  kilometraje={15000}
  disponible={true}
  onSelect={handleSelect}
/>
```

## Funcionalidades

### Filtros Disponibles
- 🔍 Búsqueda por texto (marca/modelo)
- 🏷️ Filtro por marca
- ⛽ Filtro por tipo de combustible
- ✅ Solo vehículos disponibles
- 📊 Ordenación múltiple

### Interacciones
- ❤️ Marcar como favorito
- 📋 Ver más detalles
- ✅ Seleccionar vehículo
- 🔄 Limpiar filtros

## Responsive Design
- 📱 Mobile: Vista de columna única
- 💻 Tablet: Grid de 2-3 columnas
- 🖥️ Desktop: Grid de 4+ columnas
- ⚡ Optimizado para todos los tamaños

## Archivos Creados
```
src/components/Vehicle/
├── Vehicle.jsx              # Componente individual
├── Vehicle.module.css       # Estilos del componente
├── VehicleList.jsx         # Lista de vehículos
├── VehicleList.module.css  # Estilos de la lista
├── vehiclesData.js         # Datos y funciones helper
└── index.js               # Barrel exports

src/pages/
└── Vehicles.jsx           # Página de ejemplo
```

## Próximos Pasos Sugeridos
1. Integrar con una API real
2. Agregar formulario para crear/editar vehículos
3. Implementar sistema de favoritos persistente
4. Agregar más filtros (rango de precios, etc.)
5. Implementar carrito de compras
6. Agregar vista de detalles completa
7. Implementar comparador de vehículos

