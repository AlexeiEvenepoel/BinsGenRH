# BINs Generator RH - JavaScript Edition

Una versión moderna en JavaScript del generador de BINs y tarjetas de crédito, basado en el script original de Python.

## 🚀 Características

- **Generador de BINs**: Genera BINs básicos por tipo de tarjeta (Visa, Mastercard, Amex, Discover)
- **Generador Live de Tarjetas**: Genera tarjetas completas con CVV, fecha de expiración y estado simulado
- **Verificador de BINs**: Obtiene información detallada de un BIN específico
- **Extrapolador de Tarjetas**: Algoritmos de extrapolación básica, media y avanzada
- **Interfaz Web Moderna**: Frontend responsive con tema hacker
- **API RESTful**: Backend robusto con validaciones y manejo de errores

## 📁 Estructura del Proyecto

```
BinsGenRH/
├── backend/                 # Servidor Node.js
│   ├── server.js           # Servidor principal
│   ├── utils/              # Utilidades
│   │   └── CardUtils.js    # Funciones de tarjetas y validación Luhn
│   ├── generators/         # Generadores
│   │   ├── BinGenerator.js # Generador de BINs
│   │   └── CardGenerator.js# Generador de tarjetas
│   ├── services/           # Servicios
│   │   └── BinChecker.js   # Verificador de BINs
│   └── package.json        # Dependencias del backend
├── frontend/               # Cliente web
│   ├── dist/               # Archivos de distribución
│   │   ├── index.html      # Página principal
│   │   ├── styles.css      # Estilos CSS
│   │   └── script.js       # JavaScript del cliente
│   └── package.json        # Dependencias del frontend
├── legacy/                 # Archivos originales de Python
└── README.md              # Este archivo
```

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js 16+ instalado
- npm o yarn

### Instalación del Backend

```bash
cd backend
npm install
```

### Instalación del Frontend

```bash
cd frontend
npm install
```

### Ejecutar la Aplicación

1. **Iniciar el servidor backend:**

```bash
cd backend
npm start
# o para desarrollo:
npm run dev
```

2. **Servir el frontend:**

```bash
cd frontend
npm start
```

3. **Abrir en el navegador:**

```
http://localhost:8080
```

## 🔧 API Endpoints

### Generar BINs

```http
POST /api/generate-bins
Content-Type: application/json

{
  "type": "visa",
  "count": 10
}
```

### Generar Tarjetas

```http
POST /api/generate-cards
Content-Type: application/json

{
  "binFormat": "416869xxxxxxxxxx",
  "count": 25,
  "customDate": {
    "month": "12",
    "year": 2025
  }
}
```

### Verificar BIN

```http
POST /api/check-bin
Content-Type: application/json

{
  "bin": "416869"
}
```

### Extrapolar Tarjetas

```http
POST /api/extrapolate-cards
Content-Type: application/json

{
  "card1": "4168691234567890",
  "card2": "4168699876543210"
}
```

## 🎯 Funcionalidades Principales

### 1. Generador de BINs

- Genera BINs básicos por tipo de tarjeta
- Soporte para Visa, Mastercard, American Express y Discover
- Hasta 100 BINs por solicitud

### 2. Generador Live de Tarjetas (Opción 7 del script original)

- Genera tarjetas completas basadas en formato BIN
- Usa algoritmo de Luhn para validación
- Simula estados: Live Card, Died Card, Unknown Card
- Fechas de expiración personalizables
- Hasta 50 tarjetas por solicitud

### 3. Verificador de BINs (Opción 6 del script original)

- Información detallada del BIN
- Tipo de tarjeta, país, banco, etc.
- Simulación de consulta a base de datos

### 4. Extrapolador de Tarjetas (Opción 8 del script original)

- **Extrapolación Básica**: Usa los primeros 10 dígitos
- **Extrapolación Media**: Combina segmentos específicos
- **Extrapolación Avanzada**: Algoritmo matemático complejo

## 🎨 Interfaz de Usuario

- **Tema Hacker**: Colores verde, amarillo y negro como el script original
- **Responsive**: Funciona en desktop y móvil
- **Animaciones**: Efectos visuales y simulación de búsqueda
- **Navegación por Pestañas**: Fácil acceso a todas las funciones

## 🔒 Seguridad y Validaciones

- Validación de entrada en frontend y backend
- Límites de solicitudes para prevenir abuso
- Sanitización de datos
- Headers de seguridad con Helmet.js
- CORS configurado

## 📊 Características Técnicas

### Backend

- **Node.js + Express**: Servidor web robusto
- **Algoritmo de Luhn**: Validación de tarjetas de crédito
- **Generación Ponderada**: Estados realistas de tarjetas
- **Manejo de Errores**: Respuestas consistentes
- **Logging**: Registro de actividad

### Frontend

- **Vanilla JavaScript**: Sin frameworks pesados
- **CSS Grid/Flexbox**: Layout moderno
- **Fetch API**: Comunicación con backend
- **LocalStorage**: Persistencia de configuración
- **Responsive Design**: Adaptable a cualquier pantalla

## 🚨 Advertencias Legales

- ⚠️ **Solo para fines educativos y de testing**
- 🚫 **Prohibido el uso para actividades ilegales**
- 📚 **Herramienta de aprendizaje sobre algoritmos de tarjetas**
- 🔒 **No usar con datos reales de tarjetas**

## 👨‍💻 Créditos

- **Desarrollado por**: @RealHackRH_593
- **Telegram**: @MundoNetRH
- **Versión**: 3.0 JavaScript Edition
- **Basado en**: Script original de Python

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🎯 Roadmap

- [ ] Integración con APIs reales de BIN lookup
- [ ] Base de datos para almacenar resultados
- [ ] Autenticación de usuarios
- [ ] Exportación a múltiples formatos
- [ ] Modo batch para procesamiento masivo
- [ ] Dashboard con estadísticas
- [ ] API rate limiting avanzado
- [ ] Dockerización del proyecto

---

**Recuerda**: El conocimiento es gratis, compártelo. Siempre agradece por lo que hacemos.

💰 **Donaciones**: PayPal: paypal.me/edwinyd
