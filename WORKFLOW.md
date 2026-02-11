# 🌿 Git Workflow - LEAD UTEC Website

## 📋 Branch Strategy

Este proyecto utiliza un workflow de Git con dos branches principales:

### **Branches Principales**

#### 🚀 `main` - Producción
- **Propósito**: Código en producción (live)
- **Protección**: ✅ Branch protegida
- **Deploy**: Automático a Vercel Production
- **URL**: https://lead-utec-website.vercel.app
- **Acceso**: Solo via Pull Requests aprobados desde `dev`

#### 🛠️ `dev` - Desarrollo
- **Propósito**: Desarrollo activo y testing
- **Protección**: ⚠️ Semi-protegida (requiere PR para merge a main)
- **Deploy**: Preview automático en Vercel
- **Trabajo**: Todos los desarrollos se hacen aquí
- **Testing**: Build y type-check automáticos con GitHub Actions

---

## 🔄 Workflow de Desarrollo

### **1. Trabajar en `dev`**

```bash
# Asegúrate de estar en dev
git checkout dev

# Actualiza con los últimos cambios
git pull origin dev

# Haz tus cambios
# ... edita archivos ...

# Commit
git add .
git commit -m "feat: descripción del cambio"

# Push a dev
git push origin dev
```

### **2. Testear Cambios**

Después de push a `dev`:
- ✅ GitHub Actions ejecutará CI automáticamente
- ✅ Vercel creará un preview deployment
- ✅ Revisa el preview antes de mergear a main

### **3. Mergear a `main` (Producción)**

Cuando `dev` esté listo para producción:

```bash
# Opción 1: Via GitHub (Recomendado)
# 1. Ve a: https://github.com/LEAD-UTEC/lead-utec-website/compare/main...dev
# 2. Click "Create Pull Request"
# 3. Revisa los cambios
# 4. Merge el PR

# Opción 2: Via CLI
git checkout main
git pull origin main
git merge dev
git push origin main
```

---

## 🏷️ Convenciones de Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Features
git commit -m "feat: add new Select component"

# Bug fixes
git commit -m "fix: correct gradient color in Button"

# Documentation
git commit -m "docs: update README with new examples"

# Refactoring
git commit -m "refactor: simplify DecorativeAsterisk SVG"

# Styling
git commit -m "style: adjust spacing in Card component"

# Performance
git commit -m "perf: optimize image loading"

# Build/Config
git commit -m "chore: update dependencies"
```

---

## 🚀 Deploy Automático

### **Branch `dev`** → Preview
- Cada push a `dev` crea un preview deployment en Vercel
- URL: `https://lead-utec-website-git-dev-[project].vercel.app`

### **Branch `main`** → Production
- Cada push a `main` deploya a producción
- URL: https://lead-utec-website.vercel.app

---

## 🔒 Branch Protection Rules (Recomendado)

Para configurar en GitHub:

### **`main` Branch**
1. Ve a: Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Habilita:
   - ✅ Require pull request before merging
   - ✅ Require status checks to pass (CI)
   - ✅ Require branches to be up to date
   - ✅ Do not allow bypassing (incluye admins)

### **`dev` Branch**
1. Branch name pattern: `dev`
2. Habilita:
   - ✅ Require status checks to pass (CI)

---

## 📊 CI/CD con GitHub Actions

El archivo `.github/workflows/ci.yml` ejecuta automáticamente:

- ✅ TypeScript type checking
- ✅ Build del proyecto
- ✅ Tests en Node 18, 20, y 22

**Status**: Verifica en la pestaña "Actions" del repo

---

## 🎯 Ejemplos de Workflow

### **Agregar un nuevo componente**

```bash
# 1. Trabaja en dev
git checkout dev
git pull origin dev

# 2. Crea el componente
# ... crea Select.tsx ...

# 3. Testea localmente
npm run dev

# 4. Commit y push
git add components/Select.tsx
git commit -m "feat: add Select component with multiple variants"
git push origin dev

# 5. Verifica CI pasa y preview deployment
# 6. Cuando esté listo, crea PR a main
```

### **Fix de bug urgente**

```bash
# Para bugs urgentes en producción
git checkout main
git pull origin main

# Opción A: Hotfix directo (solo emergencias)
git checkout -b hotfix/critical-bug
# ... fix bug ...
git commit -m "fix: critical bug in Button component"
git push origin hotfix/critical-bug
# Crear PR a main

# Opción B: Fix en dev y fast-track a main
git checkout dev
# ... fix bug ...
git commit -m "fix: critical bug in Button component"
git push origin dev
# PR a main inmediatamente
```

---

## 🔄 Sincronizar Branches

### **Actualizar `dev` desde `main`**

```bash
git checkout dev
git pull origin main
git push origin dev
```

### **Revisar diferencias entre branches**

```bash
# Ver qué hay en dev que no está en main
git diff main..dev

# Ver commits en dev que no están en main
git log main..dev --oneline
```

---

## 📝 Checklist antes de Merge a Main

- [ ] CI passing (GitHub Actions verde)
- [ ] Preview deployment verificado
- [ ] Build exitoso sin errores
- [ ] TypeScript sin errores
- [ ] Código revisado (self-review o peer review)
- [ ] Documentación actualizada si es necesario
- [ ] README actualizado si hay cambios de API

---

## 🆘 Comandos Útiles

```bash
# Ver branch actual
git branch

# Listar todas las branches (local + remote)
git branch -a

# Cambiar de branch
git checkout <branch-name>

# Ver status
git status

# Ver log
git log --oneline --graph --all

# Descartar cambios locales
git restore <file>

# Ver diff antes de commit
git diff
```

---

## 🎨 Branch Naming (Para features futuras)

Si necesitas branches de feature:

```bash
# Features
git checkout -b feature/select-component

# Bug fixes
git checkout -b fix/button-gradient

# Documentation
git checkout -b docs/api-reference

# Refactoring
git checkout -b refactor/card-variants
```

Siempre mergea primero a `dev`, nunca directo a `main`.

---

## 📞 Contacto

Para dudas sobre el workflow:
- Revisa GitHub Actions: https://github.com/LEAD-UTEC/lead-utec-website/actions
- Revisa PRs: https://github.com/LEAD-UTEC/lead-utec-website/pulls

---

**Fecha de creación**: Febrero 2026  
**Última actualización**: Febrero 2026
