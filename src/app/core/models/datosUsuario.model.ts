export interface DatosUsuario {
    id: string,
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    institucion: string,
    rol: string,
    idEntidadTerritorial: string,
    tipoDeSecretaria: string,
    idHospital: string,
}

export interface DatosUsuarioRegistro {
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rol: string
}