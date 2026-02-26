# 🚀 CI/CD Setup para InnovaCode Solutions

## Configuración de Deploy Automático a Hostinger

Este proyecto está configurado con GitHub Actions para desplegar automáticamente a Hostinger cada vez que haces push a la rama `main`.

---

## 📋 Pasos para Activar el CI/CD

### 1️⃣ Obtener Credenciales FTP de Hostinger

1. Entra a tu panel de **Hostinger**
2. Ve a **Hosting** > Tu sitio > **FTP Accounts**
3. Anota estas 3 cosas:

   ```
   FTP_SERVER: ftp.innovacode.tech (o tu servidor FTP)
   FTP_USERNAME: u123456789 (tu usuario FTP)
   FTP_PASSWORD: tu_contraseña_ftp
   ```

   **Nota:** Si no tienes cuenta FTP, créala desde "Create FTP Account"

---

### 2️⃣ Configurar Secrets en GitHub

1. Ve a tu repositorio: `https://github.com/davidcaroo/innovacode-web`
2. Click en **Settings** (⚙️)
3. En el menú lateral: **Secrets and variables** > **Actions**
4. Click en **New repository secret**
5. Agrega estos 3 secrets uno por uno:

   | Name | Value |
   |------|-------|
   | `FTP_SERVER` | `ftp.innovacode.tech` |
   | `FTP_USERNAME` | `u123456789` |
   | `FTP_PASSWORD` | `tu_contraseña_ftp` |

   **⚠️ IMPORTANTE:** Los secrets son privados y nunca se mostrarán en los logs

---

### 3️⃣ ¡Listo! El CI/CD ya está configurado

Ahora cada vez que hagas:

```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

**GitHub Actions automáticamente:**
1. ✅ Instala las dependencias (`npm ci`)
2. ✅ Hace el build de producción (`npm run build`)
3. ✅ Sube el contenido de `dist/` a tu Hostinger por FTP
4. ✅ Tu web en `https://innovacode.tech` se actualiza automáticamente

---

## 📊 Ver el Progreso del Deploy

1. Ve a tu repo en GitHub
2. Click en la pestaña **Actions**
3. Verás cada deploy con su estado:
   - 🟡 Amarillo = En progreso
   - ✅ Verde = Exitoso
   - ❌ Rojo = Falló (revisa los logs)

---

## 🔧 Archivos del CI/CD

- `.github/workflows/deploy.yml` - Configuración de GitHub Actions
- `public/.htaccess` - Redirecciones para React Router en Apache

---

## ⏱️ Tiempo de Deploy

- **Build**: ~30-60 segundos
- **Upload FTP**: ~10-30 segundos
- **Total**: ~1-2 minutos desde el push hasta ver los cambios en producción

---

## 🐛 Solución de Problemas

### Error: "FTP credentials not found"
- Verifica que agregaste los 3 secrets correctamente en GitHub

### Error: "Build failed"
- Revisa que el código compile localmente: `npm run build`
- Verifica los logs en la pestaña Actions

### Error: "FTP connection failed"
- Verifica que el servidor FTP sea correcto
- Verifica que el usuario y contraseña sean correctos
- Contacta soporte de Hostinger si es necesario

### Los cambios no se ven en la web
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica en Actions que el deploy terminó con éxito

---

## 📝 Notas Importantes

1. **Solo la rama `main` hace deploy** - Las otras ramas no se despliegan
2. **El build toma tiempo** - Espera 1-2 minutos después del push
3. **Los secrets son seguros** - Nunca se muestran en logs públicos
4. **Elimina archivos manualmente** - El workflow no borra archivos viejos automáticamente

---

## 🎯 Próximos Pasos Opcionales

- [ ] Agregar notificaciones de Slack/Discord en cada deploy
- [ ] Crear workflow separado para staging/desarrollo
- [ ] Agregar tests automáticos antes del deploy
- [ ] Configurar rollback automático si falla

---

**¿Dudas?** Revisa la documentación de [GitHub Actions](https://docs.github.com/en/actions) o [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
