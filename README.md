# Team Feedback Platform

A full-stack application designed to run structured peer feedback cycles inside an organization.

This project simulates a real SaaS-style product and focuses on clean backend architecture, relational data modeling, and modern frontend integration.

---

## Why I built this

I wanted to design and implement a system that reflects real-world backend challenges:

- Authentication and authorization
- Organization-based access control
- Relational data integrity
- Business rule enforcement
- Clear separation of concerns

This is not a tutorial replica — it’s a deliberately structured portfolio project.

---

## Tech Stack

**Backend**
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT authentication

**Frontend (in progress)**
- React
- Zustand
- TanStack Query
- Material UI

---

## Core Domain

The platform is built around five main entities:

- User  
- Organization  
- Membership  
- Feedback Cycle  
- Feedback  

Each feedback belongs to a specific cycle, reviewer, reviewee, and organization.  
Validation rules ensure realistic SaaS constraints and secure data access.

---

## Current Status

🚧 In active development.

The backend is being implemented using a layered architecture:

Controller → Service → Repository → Database

---

## What This Project Demonstrates

- Structured REST API design  
- Secure JWT authentication  
- Role and organization-based authorization  
- Relational modeling with integrity constraints  
- Service-layer business logic  
- Full-stack architecture thinking  

---

## Planned Improvements

- Anonymous feedback mode  
- Role hierarchy (admin / member)  
- Basic analytics dashboard  
- Automated testing  
- CI/CD pipeline  

---

If you're reviewing this repository and would like to discuss architecture decisions or implementation details, feel free to reach out.
