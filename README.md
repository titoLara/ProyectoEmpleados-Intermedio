# 🧩 SISTEMA DE GESTIÓN DE EMPLEADOS - VERSIÓN INTERMEDIA

Este proyecto es una evolución del [ProyectoEmpleados-Básico](https://github.com/titoLara/ProyectoEmpleados-Basico).  
En esta versión se implementa una **arquitectura más robusta**, con **múltiples tablas relacionadas** (Empleado, Departamento, Cargo, Proyecto), **mejoras visuales** en el frontend y **código más limpio** en el backend.

Permite **Crear, Listar, Editar y Eliminar empleados**, asignarles cargos, departamentos y proyectos, todo con un diseño moderno y validaciones completas.

---

## 🚀 Tecnologías Usadas

- 🟩 **Angular 19** (frontend)
- ☕ **Spring Boot** (backend)
- 🐬 **MySQL** (base de datos)
- 📦 **REST API** (comunicación)
- 🎨 **Bootstrap 5** (estilos y diseño)
- 💬 **SweetAlert2** (notificaciones y alertas modernas)

---

## ⚙️ Herramientas utilizadas en el desarrollo

- 🧠 **IntelliJ IDEA** → Backend (Spring Boot)  
- 💻 **Visual Studio Code** → Frontend (Angular)  
- 🔍 **Postman** → Pruebas de API  
- 🧾 **GitHub** → Control de versiones y documentación

---

## 📈 Mejoras respecto al proyecto anterior

| Aspecto | Proyecto Básico | Proyecto Intermedio |
|----------|------------------|---------------------|
| 🔗 **Modelo de Datos** | 1 tabla (Empleado) | 4 tablas relacionadas (Empleado, Cargo, Departamento, Proyecto) |
| 🎨 **Diseño UI** | Formulario simple | Diseño más limpio con Bootstrap 5 y mejores estilos |
| 💡 **Lógica Backend** | CRUD básico | Servicios más estructurados, validaciones y relaciones |
| 🧾 **Validaciones** | Limitadas | Validaciones en frontend (Reactive Forms) y backend (Bean Validation) |
| 💬 **Alertas / Feedback** | Básico | Integración con SweetAlert2 |
| 🧱 **Arquitectura** | Simples clases y controladores | Capas separadas: Controlador, Servicio, Repositorio |
| 🚀 **Escalabilidad** | Limitada | Pensada para expandirse (autenticación, roles, etc.) |

---

## ▶️ Ejecutarlo

### 🔹 Backend (Spring Boot)
1. Importa el proyecto en **IntelliJ IDEA** o tu IDE preferido.  
2. Asegúrate de tener **MySQL** corriendo.  
3. Crea la base de datos:
   ```sql
   CREATE DATABASE gestion_empleados_intermedio;
