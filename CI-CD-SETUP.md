# ðŸš€ CI/CD Setup para InnovaCode Solutions

## ConfiguraciÃ³n de Deploy AutomÃ¡tico a Hostinger

Este proyecto estÃ¡ configurado con GitHub Actions para desplegar automÃ¡ticamente a Hostinger cada vez que haces push a la rama `main`.

---

## ðŸ“‹ Pasos para Activar el CI/CD

### 1ï¸âƒ£ Obtener Credenciales FTP de Hostinger

1. Entra a tu panel de **Hostinger**
2. Ve a **Hosting** > Tu sitio > **FTP Accounts**
3. Anota estas 3 cosas:

   ```
   FTP_SERVER: ftp.innovacode.click (o tu servidor FTP)
   FTP_USERNAME: u123456789 (tu usuario FTP)
   FTP_PASSWORD: tu_contraseÃ±a_ftp
   ```

   **Nota:** Si no tienes cuenta FTP, crÃ©ala desde "Create FTP Account"

---

### 2ï¸âƒ£ Configurar Secrets en GitHub

1. Ve a tu repositorio: `https://github.com/davidcaroo/innovacode-web`
2. Click en **Settings** (âš™ï¸)
3. En el menÃº lateral: **Secrets and variables** > **Actions**
4. Click en **New repository secret**
5. Agrega estos 3 secrets uno por uno:

   | Name | Value |
   |------|-------|
   | `FTP_SERVER` | `ftp.innovacode.click` |
   | `FTP_USERNAME` | `u123456789` |
   | `FTP_PASSWORD` | `tu_contraseÃ±a_ftp` |

   **âš ï¸ IMPORTANTE:** Los secrets son privados y nunca se mostrarÃ¡n en los logs

---

### 3ï¸âƒ£ Â¡Listo! El CI/CD ya estÃ¡ configurado

Ahora cada vez que hagas:

```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

**GitHub Actions automÃ¡ticamente:**
1. âœ… Instala las dependencias (`npm ci`)
2. âœ… Hace el build de producciÃ³n (`npm run build`)
3. âœ… Sube el contenido de `dist/` a tu Hostinger por FTP
4. âœ… Tu web en `https://innovacode.click` se actualiza automÃ¡ticamente

---

## ðŸ“Š Ver el Progreso del Deploy

1. Ve a tu repo en GitHub
2. Click en la pestaÃ±a **Actions**
3. VerÃ¡s cada deploy con su estado:
   - ðŸŸ¡ Amarillo = En progreso
   - âœ… Verde = Exitoso
   - âŒ Rojo = FallÃ³ (revisa los logs)

---

## ðŸ”§ Archivos del CI/CD

- `.github/workflows/deploy.yml` - ConfiguraciÃ³n de GitHub Actions
- `public/.htaccess` - Redirecciones para React Router en Apache

---

## â±ï¸ Tiempo de Deploy

- **Build**: ~30-60 segundos
- **Upload FTP**: ~10-30 segundos
- **Total**: ~1-2 minutos desde el push hasta ver los cambios en producciÃ³n

---

## ðŸ› SoluciÃ³n de Problemas

### Error: "FTP credentials not found"
- Verifica que agregaste los 3 secrets correctamente en GitHub

### Error: "Build failed"
- Revisa que el cÃ³digo compile localmente: `npm run build`
- Verifica los logs en la pestaÃ±a Actions

### Error: "FTP connection failed"
- Verifica que el servidor FTP sea correcto
- Verifica que el usuario y contraseÃ±a sean correctos
- Contacta soporte de Hostinger si es necesario

### Los cambios no se ven en la web
- Limpia cachÃ© del navegador (Ctrl + Shift + R)
- Verifica en Actions que el deploy terminÃ³ con Ã©xito

---

## ðŸ“ Notas Importantes

1. **Solo la rama `main` hace deploy** - Las otras ramas no se despliegan
2. **El build toma tiempo** - Espera 1-2 minutos despuÃ©s del push
3. **Los secrets son seguros** - Nunca se muestran en logs pÃºblicos
4. **Elimina archivos manualmente** - El workflow no borra archivos viejos automÃ¡ticamente

---

## ðŸŽ¯ PrÃ³ximos Pasos Opcionales

- [ ] Agregar notificaciones de Slack/Discord en cada deploy
- [ ] Crear workflow separado para staging/desarrollo
- [ ] Agregar tests automÃ¡ticos antes del deploy
- [ ] Configurar rollback automÃ¡tico si falla

---

**Â¿Dudas?** Revisa la documentaciÃ³n de [GitHub Actions](https://docs.github.com/en/actions) o [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
