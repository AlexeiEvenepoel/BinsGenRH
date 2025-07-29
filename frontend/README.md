# BINs Generator RH - Frontend

Frontend modular para el Generador de BINs y Tarjetas desarrollado por @RealHackRH_593.

## Estructura del Proyecto

```
frontend/
├── src/                          # Código fuente modular
│   ├── app.js                   # Clase principal de la aplicación
│   ├── main.js                  # Punto de entrada principal
│   ├── core/                    # Módulos centrales
│   │   └── ui-manager.js        # Manejo de interfaz de usuario
│   ├── features/                # Módulos de características
│   │   ├── bin-generator.js     # Generador de BINs
│   │   ├── card-generator.js    # Generador de tarjetas
│   │   ├── bin-checker.js       # Verificador de BINs
│   │   ├── extrapolator.js      # Extrapolador de tarjetas
│   │   ├── version-checker.js   # Verificador de versiones
│   │   ├── auto-generator.js    # Generador automático avanzado
│   │   └── simple-auto-generator.js # Generador automático simple
│   └── utils/                   # Utilidades
│       └── utils.js             # Funciones de utilidad
├── dist/                        # Archivos compilados y estáticos
│   ├── script.js               # JavaScript compilado
│   ├── index.html              # Página principal
│   └── styles.css              # Estilos CSS
├── webpack.config.js           # Configuración de Webpack
├── package.json               # Dependencias y scripts
└── serve.js                   # Servidor de desarrollo
```

## Características Principales

### Módulos de Funcionalidad

1. **BIN Generator** (`bin-generator.js`)

   - Generación de BINs por tipo de tarjeta
   - Validación de entrada
   - Copia masiva de resultados

2. **Card Generator** (`card-generator.js`)

   - Generación de tarjetas completas
   - Formatos personalizados
   - Fechas personalizadas
   - Exportación a TXT

3. **BIN Checker** (`bin-checker.js`)

   - Verificación de información de BINs
   - Datos bancarios y geográficos
   - Información de tipo de tarjeta

4. **Extrapolator** (`extrapolator.js`)

   - Extrapolación de tarjetas
   - Múltiples algoritmos
   - Exportación de resultados

5. **Version Checker** (`version-checker.js`)

   - Verificación de actualizaciones
   - Información del desarrollador
   - Enlaces de soporte

6. **Auto Generator** (`auto-generator.js`)

   - Generación automática avanzada
   - Control de sesiones
   - Filtros y estadísticas

7. **Simple Auto Generator** (`simple-auto-generator.js`)
   - Generación automática simple
   - Loop continuo
   - Estadísticas básicas

### Módulos Centrales

- **UI Manager** (`ui-manager.js`)

  - Manejo de notificaciones
  - Control de loading
  - Navegación entre pestañas

- **Utils** (`utils.js`)
  - Funciones de utilidad
  - Validaciones
  - Formateo de datos

## Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Compilar para desarrollo (con source maps)
npm run build:dev

# Compilar para producción (minificado)
npm run build

# Modo watch (recompila automáticamente)
npm run watch

# Servidor de desarrollo
npm run dev

# Servidor estático
npm start
```

## Desarrollo

### Compilación

El proyecto usa Webpack para compilar los módulos ES6 en un solo archivo `script.js` compatible con navegadores.

```bash
# Compilar una vez
npm run build:dev

# Compilar y observar cambios
npm run watch
```

### Estructura Modular

Cada característica está separada en su propio módulo:

- **Separación de responsabilidades**: Cada módulo maneja una funcionalidad específica
- **Reutilización**: Los módulos pueden ser reutilizados fácilmente
- **Mantenimiento**: Código más fácil de mantener y debuggear
- **Testing**: Cada módulo puede ser probado independientemente

### Agregar Nueva Funcionalidad

1. Crear nuevo archivo en `src/features/`
2. Implementar la clase con métodos necesarios
3. Importar en `src/app.js`
4. Inicializar en el constructor
5. Configurar event listeners en `setupEventListeners()`

## API Integration

Todos los módulos están configurados para trabajar con la API backend:

- Base URL: `http://localhost:3000/api`
- Endpoints RESTful
- Manejo de errores consistente
- Respuestas JSON estandarizadas

## Compatibilidad

- **Navegadores**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **ES6 Modules**: Transpilado a ES5 para compatibilidad
- **Responsive**: Diseño adaptable a diferentes pantallas

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## Contacto

- **Desarrollador**: @RealHackRH_593
- **Telegram**: @MundoNetRH
- **PayPal**: paypal.me/edwinyd

## Licencia

MIT License - Ver archivo LICENSE para más detalles.
