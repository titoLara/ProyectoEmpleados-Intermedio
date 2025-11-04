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


---

## 🖼️ CAPTURAS DE PANTALLA

### 🏠 Inicio del Sistema
Vista principal de la aplicación donde se muestra el panel inicial o la lista de empleados existentes.
<img width="1365" height="579" alt="image" src="https://github.com/user-attachments/assets/c34ae84a-3592-46df-86bb-1e2b8f60f5e2" />


---

### 🧾 Formulario de Creación de Empleado
Formulario con validaciones reactivas y selects dinámicos para asignar **Departamento**, **Cargo** y **Proyecto**.
<img width="901" height="623" alt="image" src="https://github.com/user-attachments/assets/b430aee8-807d-4552-a360-cb527b9eea7e" />


---

### 💬 Notificación con SweetAlert2
Ejemplo de alerta al crear un nuevo empleado exitosamente, utilizando la librería **SweetAlert2** para una mejor experiencia visual.
<img width="1272" height="642" alt="image" src="https://github.com/user-attachments/assets/9f4819eb-8d22-42d9-914d-1d6308f9e07d" />


---

