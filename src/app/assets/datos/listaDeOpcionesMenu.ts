import { ListaOpciones } from "../../core/models/listaOpciones.model";

export const ListaDeOpcionesMenu: ListaOpciones[] = [
    {
      id: 1,
      icono: "pi pi-home", // Icono de Inicio
      titulo: "Inicio",
      roles: ['Administrador', 'Usuario'],
      url: "/dashboard",
      opciones: []
    },
    {
      id: 2,
      icono: "pi pi-cog", // Icono de Parámetros
      titulo: "Parametros",
      roles: ['Administrador'],
      url: "",
      opciones: [
        {
          id: 21,
          icono: "pi pi-building", // Icono de Empresa
          titulo: "Empresa",
          url: "/dashboard/parametros/empresa",
        },
        {
          id: 22,
          icono: "pi pi-users", // Icono de Usuarios
          titulo: "Usuarios",
          url: "/dashboard/parametros/usuario",
        },
        {
          id: 23,
          icono: "pi pi-sliders-h", // Icono de Generales
          titulo: "Generales",
          url: "/dashboard/parametros/general",
        }
      ]
    },
    {
      id: 3,
      icono: "pi pi-folder-open", // Icono de Datos Básicos
      titulo: "Datos Basicos",
      roles: ['Administrador'],
      url: "",
      opciones: [
        {
          id: 31,
          icono: "pi pi-home", // Icono de Empresa (EAPB)
          titulo: "Empresa (EAPB)",
          url: "/dashboard/datos-generales/eapb",
        },
        {
          id: 32,
          icono: "pi pi-building", // Icono de Empresas (IPS)
          titulo: "Empresas (IPS)",
          url: "/dashboard/datos-generales/ips",
        },
        {
          id: 33,
          icono: "pi pi-heart", // Icono de Enfermedades Huérfanas
          titulo: "Enf. Huérfanas",
          url: "/dashboard/datos-generales/enfermedades/huerfana",
        },
        {
          id: 34,
          icono: "pi pi-heart", // Icono de Enfermedades Catastróficas
          titulo: "Enf. Catastroficas",
          url: "/dashboard/datos-generales/enfermedades/catastrofica",
        }
      ]
    },
    {
      id: 4,
      icono: "pi pi-list", // Icono de PQRD
      titulo: "PQRD",
      roles: ['Administrador', 'Usuario'],
      url: "",
      opciones: [
        {
          id: 41,
          icono: "pi pi-file", // Icono de Lista de PQRD
          titulo: "Lista de PQRD",
          url: "/dashboard/pqrd/listar-pqrd",
        },
        {
          id: 42,
          icono: "pi pi-plus", // Icono de Nuevo PQRD
          titulo: "Nuevo PQRD",
          url: "/dashboard/pqrd/nuevo-pqrd",
        }
      ]
    },
    {
      id: 5,
      icono: "pi pi-chart-bar", // Icono de Estadísticas
      titulo: "Estadísticas",
      roles: ['Administrador', 'Usuario'],
      url: "",
      opciones: [
        {
          id: 51,
          icono: "pi pi-users", // Icono de Grupos Etarios
          titulo: "Grupos Etarios",
          url: "/dashboard/estadisticas/grupos-etarios",
        },
        {
          id: 52,
          icono: "pi pi-chart-line", // Icono de PQRD Entidad
          titulo: "PQRD Entidad",
          url: "/dashboard/estadisticas/pqrd-entidad",
        },
        {
          id: 53,
          icono: "pi pi-chart-line", // Icono de PQRD por Estados
          titulo: "PQRD por Estados",
          url: "/dashboard/estadisticas/pqrd-por-estados",
        },
        {
          id: 54,
          icono: "pi pi-star", // Icono de EAPB con más PQRD
          titulo: "EAPB con más PQRD",
          url: "/dashboard/estadisticas/eapb-mayor-pqrd",
        }
      ]
    },
    {
      id: 6,
      icono: "pi pi-file", // Icono de Informes
      titulo: "Informes",
      roles: ['Administrador', 'Usuario'],
      url: "",
      opciones: [
        {
          id: 61,
          icono: "pi pi-calendar", // Icono de Informe Trimestral
          titulo: "Generar Informe",
          url: "/dashboard/informes/generar-informe",
        },
        /*{
          id: 62,
          icono: "pi pi-download", // Icono de Generar Informes
          titulo: "Generar Informes",
          url: "/dashboard/informes/generar-informe",
        }*/
      ]
    }
  ]