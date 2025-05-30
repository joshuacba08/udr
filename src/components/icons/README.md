# Sistema de Iconos UDR

Este sistema convierte automáticamente todos los archivos SVG de `src/assets/icons/icons_logos` en componentes React reutilizables con propiedades personalizables.

## Componentes Generados

El sistema ha generado **26 componentes de iconos** basados en los archivos SVG existentes:

- `AirConditioningIcon` - Icono de aire acondicionado
- `ArrowIcon` - Icono de flecha
- `AvisLogo` - Logo de Avis
- `BudgetLogo` - Logo de Budget
- `CarWidgetLogo` - Logo de widget de coche
- `CarryIcon` - Icono de equipaje de mano
- `CheckLogo` - Icono de verificación
- `ChevronIcon` - Icono de chevron/flecha direccional
- `DeleteLogo` - Icono de eliminar
- `DisneyWidgetLogo` - Logo de widget de Disney
- `DoorsIcon` - Icono de puertas
- `FeaturedIcon` - Icono destacado
- `FilterIcon` - Icono de filtro
- `GreenFlameLogo` - Logo de Green Flame
- `IataLogo` - Logo de IATA
- `InfoIcon` - Icono de información
- `LogoUdr` - Logo principal de UDR
- `LuggageIcon` - Icono de equipaje
- `MokWidgetLogo` - Logo de widget de MOK
- `PassengersIcon` - Icono de pasajeros
- `PaylessLogo` - Logo de Payless
- `SpaFlag` - Bandera de España
- `StarOutlinedIcon` - Icono de estrella contorneada
- `StarSolidIcon` - Icono de estrella sólida
- `TransmissionIcon` - Icono de transmisión
- `UniversalWidgetLogo` - Logo de widget universal

## Propiedades Disponibles

Todos los iconos soportan las siguientes propiedades:

```typescript
interface IconProps {
  size?: number | string;        // Tamaño uniforme (ancho = alto)
  width?: number | string;       // Ancho específico
  height?: number | string;      // Alto específico
  rotation?: number;             // Rotación en grados
  className?: string;            // Clases CSS adicionales
  style?: React.CSSProperties;   // Estilos inline
}
```

## Ejemplos de Uso

### Importación

```tsx
import { ChevronIcon, InfoIcon, LogoUdr, SpaFlag } from '@/components/icons';
```

### Uso Básico

```tsx
// Tamaño por defecto
<ChevronIcon />

// Tamaño personalizado
<InfoIcon size={32} />

// Dimensiones específicas
<LogoUdr width={200} height={50} />
```

### Rotación

```tsx
// Rotar 90 grados (flecha hacia abajo)
<ChevronIcon rotation={90} />

// Rotar 180 grados (flecha hacia izquierda)
<ArrowIcon rotation={180} />

// Rotar 270 grados
<ChevronIcon rotation={270} />
```

### Styling con CSS

```tsx
// Con clases de Tailwind
<InfoIcon 
  size={24} 
  className="text-blue-500 hover:text-blue-700 cursor-pointer" 
/>

// Con estilos inline
<StarSolidIcon 
  size={32} 
  style={{ color: '#fbbf24' }} 
/>
```

### Ejemplos Avanzados

```tsx
// Botón con icono
<Button className="flex items-center gap-2">
  <FilterIcon size={16} />
  Filtrar
</Button>

// Selector de idioma
<div className="flex items-center gap-2">
  <SpaFlag size={20} />
  <span>Español</span>
  <ChevronIcon size={12} rotation={90} />
</div>

// Estados de calificación
<div className="flex gap-1">
  <StarSolidIcon size={16} className="text-yellow-400" />
  <StarSolidIcon size={16} className="text-yellow-400" />
  <StarSolidIcon size={16} className="text-yellow-400" />
  <StarOutlinedIcon size={16} className="text-gray-300" />
  <StarOutlinedIcon size={16} className="text-gray-300" />
</div>
```

## Ventajas del Sistema

1. **Consistencia**: Todos los iconos mantienen las mismas propiedades y comportamiento
2. **Flexibilidad**: Fácil personalización de tamaño, rotación y estilos
3. **Type Safety**: Soporte completo de TypeScript
4. **Escalabilidad**: Agregar nuevos iconos es tan simple como añadir archivos SVG
5. **Performance**: Los SVGs se incluyen directamente en el bundle sin requests adicionales
6. **Mantenimiento**: Un solo sistema para manejar todos los iconos

## Agregando Nuevos Iconos

Para agregar nuevos iconos:

1. Agrega el archivo SVG a `src/assets/icons/icons_logos/`
2. Ejecuta el script generador (si está disponible)
3. El componente se creará automáticamente y estará disponible para usar

## Estructura de Archivos

```
src/components/icons/
├── IconBase.tsx          # Componente base con funcionalidad común
├── index.ts              # Exports de todos los componentes
├── README.md             # Esta documentación
├── ChevronIcon.tsx       # Componente generado
├── InfoIcon.tsx          # Componente generado
├── LogoUdr.tsx          # Componente generado
└── ...                   # Resto de componentes generados
``` 