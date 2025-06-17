import Particula from "./Clases/Particula";
import express from "express";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Coordenada, ParticulaCompleja } from "./Clases/ParticulaCompleja";
import testAPI from "./test-api";

const arregloParticulas: readonly Particula[] = [
  new Particula(0, 0, 0, 200),
  new Particula(100, 100, 100, 0),
  new Particula(10, 10, 10, 200),
];

function momentoInerciaCuerpo(arregloParticulas: readonly Particula[]): number {
  let calculoInerciaIndividual: number[] = arregloParticulas.map((value) =>
    value.calcularInercia(),
  );

  let inerciaCalculada: number = calculoInerciaIndividual.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
  );

  return inerciaCalculada;
}

console.log(momentoInerciaCuerpo(arregloParticulas));

//##########################Ejercicio 3#####################################################

async function main() {
  const app = express();
  const PORT = 4567;
  const storageInMemory: ParticulaCompleja[] = [];

  // Add JSON middleware
  app.use(express.json());

  app.listen(PORT, () =>
    console.log("El servidor está corriendo en el puerto " + PORT),
  );

  app.post("/particula", async (req: Request, res: Response) => {
    try {
      const { posicionInicial, velocidadFinal, masa } = req.body;
      const posicion = new Coordenada(
        posicionInicial.x,
        posicionInicial.y,
        posicionInicial.z,
      );
      const velocidad = new Coordenada(
        velocidadFinal.x,
        velocidadFinal.y,
        velocidadFinal.z,
      );
      const particulaCompleja = new ParticulaCompleja(
        posicion,
        velocidad,
        masa,
      );
      storageInMemory.push(particulaCompleja);
      res.status(StatusCodes.CREATED).json({ id: storageInMemory.length - 1 });
    } catch (error) {
      console.error("Error creating particle:", error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  app.get("/particula/:id/inercia", async (req: Request, res: Response) => {
    try {
      const particula = getParticulaById(req, res);
      if (particula) {
        const inercia = particula.calcularInercia();
        res.status(StatusCodes.OK).json({ inercia });
      }
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  app.get("/particula/:id/momento", async (req: Request, res: Response) => {
    try {
      const particula = getParticulaById(req, res);
      if (particula) {
        const momento = particula.calcularMomento();
        res.status(StatusCodes.OK).json({ momento });
      }
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  app.get("/particula/:id/energia", async (req: Request, res: Response) => {
    try {
      const particula = getParticulaById(req, res);
      if (particula) {
        const energia = particula.energiaCinetica();
        res.status(StatusCodes.OK).json({ energia });
      }
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  app.put("/particula/:id/velocidad", async (req: Request, res: Response) => {
    try {
      const particula = getParticulaById(req, res);
      if (particula) {
        const { nuevaVelocidad, tiempoDeAceleracion } = req.body;
        const velocidad = new Coordenada(
          nuevaVelocidad.x,
          nuevaVelocidad.y,
          nuevaVelocidad.z,
        );
        const aceleracion = particula.modificarVelocidad(
          velocidad,
          tiempoDeAceleracion,
        );
        res.status(StatusCodes.OK).json({ aceleracion });
      }
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  app.put("/particula/:id/posicion", async (req: Request, res: Response) => {
    try {
      const particula = getParticulaById(req, res);
      if (particula) {
        const { x, y, z } = req.body;
        const nuevaPosicion = new Coordenada(x, y, z);
        const tiempo = particula.moverHacia(nuevaPosicion);
        res.status(StatusCodes.OK).json({ tiempo });
      }
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  });

  function getParticulaById(
    req: Request,
    res: Response,
  ): ParticulaCompleja | null {
    const _id = parseInt(req.params.id);
    if (isNaN(_id) || _id < 0 || _id >= storageInMemory.length) {
      res.status(StatusCodes.NOT_FOUND).send();
      return null;
    } else {
      const particula: ParticulaCompleja = storageInMemory[_id];
      return particula;
    }
  }
}

main();
testAPI();
