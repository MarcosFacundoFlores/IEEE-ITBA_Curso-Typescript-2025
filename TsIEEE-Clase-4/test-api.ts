
import fetch from "node-fetch";

const BASE_URL = "http://localhost:4567";

export default async function testAPI() {
    console.log("Testing Particle API...\n");

    try {
        // Test 1: Create a new particle
        console.log("1. Creating a new particle...");
        const createResponse = await fetch(`${BASE_URL}/particula`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                posicionInicial: { x: 10, y: 20, z: 30 },
                velocidadFinal: { x: 1, y: 2, z: 3 },
                masa: 5,
            }),
        });
        const createData = await createResponse.json();
        console.log(`Create particle status: ${createResponse.status}`);
        console.log(`Created particle ID: ${JSON.stringify(createData)}\n`);

        // Test 2: Get particle inertia (particle with ID 0)
        console.log("2. Getting particle inertia (ID: 0)...");
        const inertiaResponse = await fetch(`${BASE_URL}/particula/0/inercia`);
        const inertiaData = await inertiaResponse.json();
        console.log(`Get inertia status: ${inertiaResponse.status}`);
        console.log(`Inertia value: ${JSON.stringify(inertiaData)}\n`);

        // Test 3: Get particle momentum (particle with ID 0)
        console.log("3. Getting particle momentum (ID: 0)...");
        const momentumResponse = await fetch(`${BASE_URL}/particula/0/momento`);
        const momentumData = await momentumResponse.json();
        console.log(`Get momentum status: ${momentumResponse.status}`);
        console.log(`Momentum value: ${JSON.stringify(momentumData)}\n`);

        // Test 4: Get particle kinetic energy (particle with ID 0)
        console.log("4. Getting particle kinetic energy (ID: 0)...");
        const energyResponse = await fetch(`${BASE_URL}/particula/0/energia`);
        const energyData = await energyResponse.json();
        console.log(`Get energy status: ${energyResponse.status}`);
        console.log(`Energy value: ${JSON.stringify(energyData)}\n`);

        // Test 5: Update particle velocity
        console.log("5. Updating particle velocity (ID: 0)...");
        const velocityResponse = await fetch(
            `${BASE_URL}/particula/0/velocidad`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nuevaVelocidad: { x: 5, y: 6, z: 7 },
                    tiempoDeAceleracion: 2,
                }),
            },
        );
        const velocityData = await velocityResponse.json();
        console.log(`Update velocity status: ${velocityResponse.status}`);
        console.log(`Acceleration value: ${JSON.stringify(velocityData)}\n`);

        // Test 6: Update particle position
        console.log("6. Updating particle position (ID: 0)...");
        const positionResponse = await fetch(
            `${BASE_URL}/particula/0/posicion`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    x: 50,
                    y: 60,
                    z: 70,
                }),
            },
        );
        const positionData = await positionResponse.json();
        console.log(`Update position status: ${positionResponse.status}`);
        console.log(`Time value: ${JSON.stringify(positionData)}\n`);

        // Test 7: Try to access non-existent particle
        console.log("7. Testing non-existent particle (ID: 999)...");
        const notFoundResponse = await fetch(
            `${BASE_URL}/particula/999/inercia`,
        );
        console.log(
            `Non-existent particle status: ${notFoundResponse.status}\n`,
        );

        console.log("All tests completed!");
    } catch (error) {
        console.error("Error testing API:", error);
    }
}
