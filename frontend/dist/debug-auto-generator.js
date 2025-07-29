/**
 * Script de debug para el Auto Generator
 */

// Función para probar la API directamente
async function testAutoGeneratorAPI() {
  console.log("🧪 Probando API del Auto Generator...");

  const config = {
    cardTypes: ["visa", "mastercard"],
    binsPerType: 2,
    cardsPerBin: 5,
    intervalMs: 1000,
    maxCards: 50,
    filterCountries: [],
  };

  try {
    const response = await fetch(
      "http://localhost:3000/api/auto-generator/start",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ config }),
      }
    );

    console.log("✅ Respuesta del servidor:");
    console.log("Status:", response.status);

    const data = await response.json();
    console.log("Data:", JSON.stringify(data, null, 2));

    if (data.success) {
      console.log("🎉 Auto Generator iniciado exitosamente!");
      console.log("Session ID:", data.data.sessionId);

      // Probar obtener el estado
      setTimeout(async () => {
        try {
          const statusResponse = await fetch(
            `http://localhost:3000/api/auto-generator/status/${data.data.sessionId}`
          );
          const statusData = await statusResponse.json();
          console.log("📊 Estado de la sesión:", statusData);
        } catch (error) {
          console.error("❌ Error obteniendo estado:", error);
        }
      }, 3000);
    } else {
      console.error("❌ Error en la respuesta:", data.error);
    }
  } catch (error) {
    console.error("❌ Error en la petición:", error);
  }
}

// Función para probar elementos del DOM
function testDOMElements() {
  console.log("🧪 Probando elementos del DOM...");

  const elements = [
    "auto-start-btn",
    "auto-visa",
    "auto-mastercard",
    "auto-bins-per-type",
    "auto-cards-per-bin",
    "auto-interval",
    "auto-max-cards",
    "auto-filter-countries",
  ];

  elements.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(`✅ ${id}: encontrado`);
      if (element.type === "checkbox") {
        console.log(`   - Checked: ${element.checked}`);
      } else if (element.type === "number" || element.type === "text") {
        console.log(`   - Value: ${element.value}`);
      }
    } else {
      console.error(`❌ ${id}: NO encontrado`);
    }
  });
}

// Función para probar el event listener
function testEventListener() {
  console.log("🧪 Probando event listener...");

  const button = document.getElementById("auto-start-btn");
  if (button) {
    console.log("✅ Botón encontrado");

    // Agregar un event listener de prueba
    button.addEventListener("click", function testListener() {
      console.log("🎯 Event listener de prueba funcionando!");
      alert("Event listener funciona!");
    });

    // Simular click programáticamente
    console.log("🖱️ Simulando click...");
    button.click();
  } else {
    console.error("❌ Botón no encontrado");
  }
}

// Función principal de debug
function debugAutoGenerator() {
  console.log("🚀 Iniciando debug del Auto Generator...");

  // Esperar a que el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        testDOMElements();
        testEventListener();
      }, 1000);
    });
  } else {
    testDOMElements();
    testEventListener();
  }

  // Probar API
  testAutoGeneratorAPI();
}

// Ejecutar debug
debugAutoGenerator();

// Hacer funciones disponibles globalmente para testing manual
window.testAutoGeneratorAPI = testAutoGeneratorAPI;
window.testDOMElements = testDOMElements;
window.testEventListener = testEventListener;
