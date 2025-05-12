import { IServiceItem } from "../../types";
import { enderecoFiscal } from "./endereco-fiscal";
import { estacoesTrabalho } from "./estacoes-trabalho";
import { salasAtendimento } from "./salas-atendimento";
import { salasPrivativas } from "./salas-privativas";
import { salasReuniao } from "./salas-reuniao";

export const services: IServiceItem[] = [
  enderecoFiscal,
  salasPrivativas,
  salasReuniao,
  estacoesTrabalho,
  salasAtendimento,
];
