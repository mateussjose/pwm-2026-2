import axios from "axios";

const headerJson = { "Content-Type": "application/json" };

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 5000,
  headers: {
    "X-Parse-Application-Id": "OKGP7nrjw4S9WeHEMwSNxQgamfPLx7H5NCbqOy9M",
    "X-Parse-REST-API-Key": "1mmfVsttJtqU7X9MeWX8ezzyDZB6sGBG3n1AyENU",
  },
});

export async function getTarefas() {
  const response = await instance.get("/classes/Tarefa");
  return response.data;
}

export async function addTarefas(descricao) {
  return await instance.post(
    "/classes/Tarefa",
    {
      descricao: descricao,
    },
    {
      headers: headerJson,
    },
  );
}

export async function updateTarefas({ objectId, concluida }) {
  return await instance.put(
    `/classes/Tarefa/${objectId}`,
    {
      concluida: concluida,
    },
    {
      headers: headerJson,
    },
  );
}

export async function deleteTarefas({ objectId }) {
  return await instance.delete(`/classes/Tarefa/${objectId}`);
}
