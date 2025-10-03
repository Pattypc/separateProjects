import { AddressInterface } from "./address.interface"
import { StatusInterface } from "./status.interface"

export interface UserInterface {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: AddressInterface;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: StatusInterface;
}
