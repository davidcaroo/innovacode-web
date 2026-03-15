import { Shield, Lock, Eye, Database, UserCheck, Mail, FileText, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Shield className="w-10 h-10 text-accent" aria-label="Icono de escudo de privacidad" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        PolÃ­tica de <span className="text-accent">Privacidad</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-4">
                        Tu privacidad es nuestra prioridad
                    </p>
                    <p className="text-sm text-text-muted">
                        Ãšltima actualizaciÃ³n: 29 de octubre de 2025
                    </p>
                </div>
            </section>

            {/* IntroducciÃ³n */}
            <section className="py-8 px-4 border-t border-border-primary">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 text-accent" aria-label="Icono de informaciÃ³n" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-accent">IntroducciÃ³n</h2>
                                <p className="text-text-secondary leading-relaxed">
                                    En <strong>InnovaCode Solutions</strong>, nos comprometemos a proteger tu privacidad y tus datos personales.
                                    Esta PolÃ­tica de Privacidad describe cÃ³mo recopilamos, usamos, almacenamos y protegemos tu informaciÃ³n
                                    cuando visitas nuestro sitio web <a href="https://innovacode.click" className="text-accent hover:underline">innovacode.click</a>
                                    {' '}o utilizas nuestros servicios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido Principal */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* 1. InformaciÃ³n que Recopilamos */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Database className="w-6 h-6 text-accent" aria-label="Icono de base de datos" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">1. InformaciÃ³n que Recopilamos</h2>
                                <p className="text-text-secondary text-sm">Datos que obtenemos cuando usas nuestros servicios</p>
                            </div>
                        </div>

                        <div className="space-y-6 ml-16">
                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">1.1 InformaciÃ³n Personal</h3>
                                <p className="text-text-secondary mb-3">
                                    Cuando completas nuestro formulario de contacto o nos contactas directamente, podemos recopilar:
                                </p>
                                <ul className="space-y-2 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">â€¢</span>
                                        <span><strong>Nombre completo</strong> - Para identificarte y personalizar la comunicaciÃ³n</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">â€¢</span>
                                        <span><strong>Correo electrÃ³nico</strong> - Para responder a tus consultas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">â€¢</span>
                                        <span><strong>NÃºmero de telÃ©fono</strong> - Opcional, para contacto directo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">â€¢</span>
                                        <span><strong>Empresa/OrganizaciÃ³n</strong> - Para entender mejor tu contexto</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">â€¢</span>
                                        <span><strong>Mensaje o consulta</strong> - Detalles sobre tu proyecto o necesidad</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">1.2 InformaciÃ³n de NavegaciÃ³n</h3>
                                <p className="text-text-secondary mb-3">
                                    Recopilamos automÃ¡ticamente cierta informaciÃ³n tÃ©cnica cuando visitas nuestro sitio:
                                </p>
                                <ul className="space-y-2 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] mt-1">â€¢</span>
                                        <span><strong>DirecciÃ³n IP</strong> - Para seguridad y anÃ¡lisis de trÃ¡fico</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] mt-1">â€¢</span>
                                        <span><strong>Tipo de navegador y dispositivo</strong> - Para optimizar la experiencia</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] mt-1">â€¢</span>
                                        <span><strong>PÃ¡ginas visitadas</strong> - Para mejorar el contenido</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] mt-1">â€¢</span>
                                        <span><strong>Tiempo de permanencia</strong> - Para anÃ¡lisis de usabilidad</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] mt-1">â€¢</span>
                                        <span><strong>Fuente de referencia</strong> - De dÃ³nde llegaste a nuestro sitio</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. CÃ³mo Usamos tu InformaciÃ³n */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-accent" aria-label="Icono de documento" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">2. CÃ³mo Usamos tu InformaciÃ³n</h2>
                                <p className="text-text-secondary text-sm">Finalidades del tratamiento de datos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Utilizamos la informaciÃ³n recopilada para los siguientes propÃ³sitos:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Responder consultas</strong> - Atender tus solicitudes de informaciÃ³n o cotizaciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Prestar servicios</strong> - Desarrollar y entregar soluciones de software personalizadas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Mejorar nuestro sitio</strong> - Analizar el uso para optimizar la experiencia del usuario</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Comunicaciones relevantes</strong> - Enviarte informaciÃ³n sobre servicios que puedan interesarte (con tu consentimiento)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Seguridad</strong> - Detectar y prevenir fraudes o usos no autorizados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent font-bold mt-1">âœ“</span>
                                    <span><strong>Cumplimiento legal</strong> - Cumplir con obligaciones legales y regulatorias</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. ProtecciÃ³n de Datos */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-accent" aria-label="Icono de candado" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">3. ProtecciÃ³n de Datos</h2>
                                <p className="text-text-secondary text-sm">Medidas de seguridad implementadas</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Implementamos medidas tÃ©cnicas y organizativas apropiadas para proteger tus datos personales:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="w-5 h-5 text-accent" aria-label="Escudo de seguridad" />
                                        <span className="font-semibold text-accent">Cifrado SSL/TLS</span>
                                    </div>
                                    <p className="text-sm text-text-secondary">Todas las transmisiones estÃ¡n encriptadas</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lock className="w-5 h-5 text-accent" aria-label="Candado de acceso" />
                                        <span className="font-semibold text-accent">Acceso Restringido</span>
                                    </div>
                                    <p className="text-sm text-text-secondary">Solo personal autorizado accede a los datos</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Database className="w-5 h-5 text-accent" aria-label="Base de datos segura" />
                                        <span className="font-semibold text-accent">Almacenamiento Seguro</span>
                                    </div>
                                    <p className="text-sm text-text-secondary">Servidores protegidos con firewalls</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Eye className="w-5 h-5 text-accent" aria-label="Ojo de monitoreo" />
                                        <span className="font-semibold text-accent">Monitoreo Continuo</span>
                                    </div>
                                    <p className="text-sm text-text-secondary">AuditorÃ­as regulares de seguridad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Compartir InformaciÃ³n */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-accent" aria-label="Icono de usuario verificado" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">4. Compartir InformaciÃ³n</h2>
                                <p className="text-text-secondary text-sm">Con quiÃ©n compartimos tus datos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                <strong>No vendemos ni alquilamos tu informaciÃ³n personal a terceros.</strong> Podemos compartir datos solo en las siguientes circunstancias:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span><strong>Proveedores de servicios</strong> - Empresas que nos ayudan a operar el sitio (hosting, analytics) bajo acuerdos de confidencialidad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span><strong>Requisitos legales</strong> - Cuando sea requerido por ley o autoridades competentes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span><strong>ProtecciÃ³n de derechos</strong> - Para proteger nuestros derechos legales o la seguridad de otros</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span><strong>Con tu consentimiento</strong> - Cuando hayas dado tu autorizaciÃ³n explÃ­cita</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Tus Derechos */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-accent" aria-label="Icono de derechos" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">5. Tus Derechos</h2>
                                <p className="text-text-secondary text-sm">Derechos ARCO y control sobre tus datos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed mb-4">
                                Tienes derecho a ejercer los siguientes derechos sobre tus datos personales:
                            </p>
                            <div className="space-y-3">
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <h3 className="font-semibold text-accent mb-2">Acceso</h3>
                                    <p className="text-sm">Solicitar una copia de los datos personales que tenemos sobre ti</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <h3 className="font-semibold text-accent mb-2">RectificaciÃ³n</h3>
                                    <p className="text-sm">Corregir datos inexactos o incompletos</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <h3 className="font-semibold text-accent mb-2">CancelaciÃ³n</h3>
                                    <p className="text-sm">Solicitar la eliminaciÃ³n de tus datos personales</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <h3 className="font-semibold text-accent mb-2">OposiciÃ³n</h3>
                                    <p className="text-sm">Oponerte al tratamiento de tus datos para ciertos fines</p>
                                </div>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <h3 className="font-semibold text-accent mb-2">Portabilidad</h3>
                                    <p className="text-sm">Recibir tus datos en un formato estructurado y de uso comÃºn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Cookies */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-accent" aria-label="Icono de cookies" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">6. Cookies y TecnologÃ­as Similares</h2>
                                <p className="text-text-secondary text-sm">CÃ³mo usamos cookies en nuestro sitio</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Utilizamos cookies y tecnologÃ­as similares para mejorar tu experiencia. Puedes controlar las cookies a travÃ©s de la configuraciÃ³n de tu navegador.
                            </p>
                            <div className="bg-bg-primary border border-accent/20 rounded-lg p-4 mt-4">
                                <p className="text-sm">
                                    <strong className="text-accent">Nota:</strong> Actualmente, nuestro sitio utiliza cookies tÃ©cnicas bÃ¡sicas.
                                    Si implementamos cookies analÃ­ticas o de marketing, actualizaremos esta polÃ­tica y solicitaremos tu consentimiento.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 7. RetenciÃ³n de Datos */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Database className="w-6 h-6 text-accent" aria-label="Icono de retenciÃ³n" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">7. RetenciÃ³n de Datos</h2>
                                <p className="text-text-secondary text-sm">CuÃ¡nto tiempo conservamos tu informaciÃ³n</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>Consultas sin respuesta:</strong> Hasta 6 meses despuÃ©s del Ãºltimo contacto</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>Proyectos activos:</strong> Durante la duraciÃ³n del proyecto + 5 aÃ±os (obligaciones legales)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>Datos de navegaciÃ³n:</strong> Hasta 24 meses</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 8. Cambios a esta PolÃ­tica */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 text-accent" aria-label="Icono de alerta" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">8. Cambios a esta PolÃ­tica</h2>
                                <p className="text-text-secondary text-sm">Actualizaciones y notificaciones</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Podemos actualizar esta PolÃ­tica de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando
                                la nueva polÃ­tica en esta pÃ¡gina y actualizando la fecha de "Ãšltima actualizaciÃ³n" en la parte superior.
                            </p>
                            <p className="leading-relaxed">
                                Te recomendamos revisar esta polÃ­tica periÃ³dicamente para estar informado sobre cÃ³mo protegemos tu informaciÃ³n.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* SecciÃ³n de Contacto */}
            <section className="py-16 px-4 border-t border-border-primary bg-bg-secondary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Mail className="w-8 h-8 text-accent" aria-label="Icono de correo" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Â¿Preguntas sobre tu Privacidad?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Si tienes alguna pregunta sobre esta PolÃ­tica de Privacidad o deseas ejercer tus derechos,
                        no dudes en contactarnos:
                    </p>
                    <div className="space-y-3 text-text-secondary">
                        <p>
                            <strong className="text-accent">Email:</strong>{' '}
                            <a href="mailto:privacidad@innovacode.click" className="hover:text-accent transition-colors">
                                privacidad@innovacode.click
                            </a>
                        </p>
                        <p>
                            <strong className="text-accent">WhatsApp:</strong>{' '}
                            <a href="https://wa.me/573232231834" className="hover:text-accent transition-colors">
                                +57 323 223 1834
                            </a>
                        </p>
                        <p>
                            <strong className="text-accent">Responsable:</strong> InnovaCode Solutions
                        </p>
                    </div>

                {/*     <div className="mt-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FF7F] text-[#0C0C0C] font-semibold rounded-full hover:bg-[#00FF7F]/90 transition-all hover:scale-105"
                        >
                            Volver al Inicio
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
