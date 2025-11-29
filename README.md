# Backend Project - FOC

## 👥 Participantes

Este proyecto ha sido desarrollado por el siguiente equipo:

* **Yonathan Nieles**
* **Juan Perdomo**
* **Susej Viscaya**
* **Hendelberth Espinoza**

---

## ✅ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

1.  **Node.js**:
2.  **PostgreSQL**

---

### 🚀 Guía de Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto:


## Instalar Dependencias

```bash 
npm install
```


## Configuracion del .env
## Reemplaza:
### - password: Tu contraseña de PostgreSQL
### - 5432: El puerto por defecto de PostgreSQL
### - nombre_db: El nombre de la base de datos que quieres usar para este proyecto.

DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"

## Configuracion del prisma

```bash
1. npx prisma migrate dev --name init

2. npx prisma generate
```

## Ejecucion

```bash
npm run start:dev
```
### Diagrama de Arquitectura
![Diagrama de arquitectura](/Backend/Arquitectura.png)
