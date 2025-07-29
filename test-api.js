/**
 * Script de prueba para verificar las APIs
 */

const axios = require("axios");

async function testDnsCheckerAPI() {
  console.log("🧪 Probando API de dnschecker.org...");

  const testCard = "4244854340554425";
  const url = `https://dnschecker.org/ajax_files/credit_card_validator.php?ccn=${testCard}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json, text/javascript, */*; q=0.01",
        Referer: "https://dnschecker.org/credit-card-validator.php",
        "X-Requested-With": "XMLHttpRequest",
      },
      timeout: 10000,
    });

    console.log("✅ Respuesta exitosa:");
    console.log("Status:", response.status);
    console.log("Data:", JSON.stringify(response.data, null, 2));

    if (response.data && response.data.results) {
      const result = response.data.results;
      console.log("\n📊 Información extraída:");
      console.log("- BIN:", result.iin);
      console.log("- Marca:", result.network);
      console.log("- Tipo:", result.card_type);
      console.log("- País:", result.country);
      console.log("- Banco:", result.bank);
      console.log("- Luhn válido:", result.luhn === 1 ? "SÍ" : "NO");
    }
  } catch (error) {
    console.log("❌ Error:", error.message);
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }
  }
}

async function testLocalAPI() {
  console.log("\n🧪 Probando API local...");

  const testBin = "424485";
  const url = `http://localhost:3000/api/check-bin`;

  try {
    const response = await axios.post(
      url,
      {
        bin: testBin,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ Respuesta exitosa:");
    console.log("Status:", response.status);
    console.log("Data:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.log("❌ Error:", error.message);
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }
  }
}

async function runTests() {
  console.log("🚀 Iniciando pruebas de APIs...\n");

  await testDnsCheckerAPI();
  await testLocalAPI();

  console.log("\n✅ Pruebas completadas!");
}

// Ejecutar pruebas
runTests().catch(console.error);
