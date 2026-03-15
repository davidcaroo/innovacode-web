import { FileText, Scale, CheckCircle, XCircle, AlertTriangle, Shield, Users, Globe } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Scale className="w-10 h-10 text-accent" aria-label="Icono de balanza de justicia" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        TÃ©rminos y <span className="text-accent">Condiciones</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-4">
                        Acuerdo legal para el uso de nuestros servicios
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
                                    <AlertTriangle className="w-6 h-6 text-accent" aria-label="Icono de advertencia" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-accent">Bienvenido</h2>
                                <p className="text-text-secondary leading-relaxed mb-3">
                                    Al acceder y utilizar el sitio web <a href="https://innovacode.click" className="text-accent hover:underline">innovacode.click</a> y los servicios de <strong>InnovaCode Solutions</strong>, aceptas cumplir y estar sujeto a los siguientes TÃ©rminos y Condiciones de uso.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Si no estÃ¡s de acuerdo con estos tÃ©rminos, por favor no utilices nuestros servicios. Te recomendamos leer detenidamente este documento antes de continuar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido Principal */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* 1. Definiciones */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-accent" aria-label="Icono de documento" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">1. Definiciones</h2>
                                <p className="text-text-secondary text-sm">TÃ©rminos clave utilizados en este documento</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed mb-4">
                                Para efectos de estos TÃ©rminos y Condiciones, se entenderÃ¡ por:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>"Nosotros", "Nuestro/a":</strong> InnovaCode Solutions S.A.S., empresa prestadora de servicios de desarrollo de software</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>"Usuario", "TÃº", "Cliente":</strong> Persona fÃ­sica o jurÃ­dica que accede a nuestro sitio web o contrata nuestros servicios</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>"Sitio Web":</strong> El dominio innovacode.click y todas sus pÃ¡ginas relacionadas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>"Servicios":</strong> Desarrollo de software, IA, automatizaciones y cualquier otro servicio ofrecido por InnovaCode Solutions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span><strong>"Contenido":</strong> Textos, imÃ¡genes, videos, cÃ³digo fuente, logos y cualquier material disponible en el sitio</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. AceptaciÃ³n de TÃ©rminos */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-accent" aria-label="Icono de check" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">2. AceptaciÃ³n de TÃ©rminos</h2>
                                <p className="text-text-secondary text-sm">Condiciones para usar nuestros servicios</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Al utilizar nuestro sitio web o servicios, declaras que:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Tienes al menos 18 aÃ±os de edad o cuentas con autorizaciÃ³n de un tutor legal</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Tienes capacidad legal para celebrar contratos vinculantes</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Has leÃ­do, entendido y aceptado estos TÃ©rminos y Condiciones</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Toda la informaciÃ³n que proporciones serÃ¡ verdadera, precisa y actualizada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Uso del Sitio Web */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-accent" aria-label="Icono de globo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">3. Uso del Sitio Web</h2>
                                <p className="text-text-secondary text-sm">Normas de uso aceptable</p>
                            </div>
                        </div>

                        <div className="space-y-6 ml-16 text-text-secondary">
                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">3.1 Usos Permitidos</h3>
                                <p className="mb-3">Puedes utilizar nuestro sitio web para:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent font-bold mt-1">âœ“</span>
                                        <span>Informarte sobre nuestros servicios de desarrollo de software</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent font-bold mt-1">âœ“</span>
                                        <span>Contactarnos para solicitar cotizaciones o informaciÃ³n</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent font-bold mt-1">âœ“</span>
                                        <span>Leer nuestros contenidos y recursos informativos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent font-bold mt-1">âœ“</span>
                                        <span>Compartir nuestro contenido en redes sociales (con atribuciÃ³n)</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">3.2 Usos Prohibidos</h3>
                                <p className="mb-3">EstÃ¡ estrictamente prohibido:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Utilizar el sitio para fines ilegales o no autorizados</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Intentar acceder sin autorizaciÃ³n a sistemas, servidores o redes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Copiar, reproducir o distribuir el contenido sin permiso escrito</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Realizar ingenierÃ­a inversa, descompilar o modificar el sitio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Transmitir virus, malware o cualquier cÃ³digo malicioso</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Usar bots, scrapers o herramientas automatizadas sin autorizaciÃ³n</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 4. Servicios Profesionales */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-accent" aria-label="Icono de usuarios" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">4. Servicios Profesionales</h2>
                                <p className="text-text-secondary text-sm">Condiciones de nuestros servicios de desarrollo</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <div className="space-y-3">
                                <p className="leading-relaxed">
                                    <strong className="text-accent">ContrataciÃ³n:</strong> Los servicios de desarrollo de software, IA y automatizaciones se formalizan mediante contratos especÃ­ficos que detallan alcance, plazos, costos y entregables.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-accent">Cotizaciones:</strong> Las cotizaciones tienen validez de 30 dÃ­as calendario desde su emisiÃ³n. Los precios pueden variar segÃºn las condiciones del mercado.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-accent">Pagos:</strong> Los tÃ©rminos de pago se establecen en cada contrato individual. Generalmente incluyen un anticipo inicial y pagos por hitos cumplidos.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-accent">GarantÃ­as:</strong> Ofrecemos garantÃ­as sobre nuestro trabajo segÃºn lo especificado en cada contrato. Esto incluye correcciÃ³n de errores y soporte post-entrega.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Propiedad Intelectual */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-accent" aria-label="Icono de escudo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">5. Propiedad Intelectual</h2>
                                <p className="text-text-secondary text-sm">Derechos de autor y marcas registradas</p>
                            </div>
                        </div>

                        <div className="space-y-6 ml-16 text-text-secondary">
                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">5.1 Nuestros Derechos</h3>
                                <p className="leading-relaxed mb-3">
                                    Todo el contenido del sitio web, incluyendo diseÃ±o, cÃ³digo fuente, textos, grÃ¡ficos, logos, iconos, imÃ¡genes y software,
                                    es propiedad de InnovaCode Solutions o sus licenciantes y estÃ¡ protegido por leyes de propiedad intelectual colombianas e internacionales.
                                </p>
                                <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                    <p className="text-sm">
                                        <strong className="text-accent">Â© 2025 InnovaCode Solutions S.A.S.</strong> Todos los derechos reservados.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-3">5.2 Derechos del Cliente</h3>
                                <p className="leading-relaxed">
                                    Para proyectos de desarrollo de software, la propiedad intelectual del cÃ³digo desarrollado se transfiere al cliente
                                    una vez completado el pago total, salvo que se especifique lo contrario en el contrato. Los componentes reutilizables
                                    y frameworks propios de InnovaCode permanecen como nuestra propiedad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. LimitaciÃ³n de Responsabilidad */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-accent" aria-label="Icono de alerta" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">6. LimitaciÃ³n de Responsabilidad</h2>
                                <p className="text-text-secondary text-sm">LÃ­mites de nuestra responsabilidad legal</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                En la medida mÃ¡xima permitida por la ley aplicable:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span>El sitio web se proporciona "tal cual" y "segÃºn disponibilidad" sin garantÃ­as de ningÃºn tipo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span>No garantizamos que el sitio estÃ© libre de errores, virus o interrupciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span>No seremos responsables de daÃ±os indirectos, incidentales, especiales o consecuentes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â†’</span>
                                    <span>Nuestra responsabilidad total no excederÃ¡ el monto pagado por el cliente en los Ãºltimos 12 meses</span>
                                </li>
                            </ul>
                            <div className="bg-bg-primary border border-accent/20 rounded-lg p-4 mt-4">
                                <p className="text-sm">
                                    <strong className="text-accent">Importante:</strong> Las limitaciones anteriores no aplican en casos de negligencia grave, dolo o incumplimientos intencionales por nuestra parte.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 7. IndemnizaciÃ³n */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-accent" aria-label="Icono de balanza" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">7. IndemnizaciÃ³n</h2>
                                <p className="text-text-secondary text-sm">Tu compromiso de protegernos legalmente</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Aceptas indemnizar, defender y mantener indemne a InnovaCode Solutions, sus directores, empleados y socios de cualquier reclamo,
                                pÃ©rdida, responsabilidad, daÃ±o o gasto (incluyendo honorarios legales) que surja de:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span>Tu uso del sitio web o servicios</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span>Tu violaciÃ³n de estos TÃ©rminos y Condiciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">â€¢</span>
                                    <span>Tu violaciÃ³n de derechos de terceros, incluidos derechos de propiedad intelectual</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 8. Modificaciones */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-accent" aria-label="Icono de documento" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">8. Modificaciones y TerminaciÃ³n</h2>
                                <p className="text-text-secondary text-sm">Cambios a estos tÃ©rminos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                <strong className="text-accent">Modificaciones:</strong> Nos reservamos el derecho de modificar estos TÃ©rminos y Condiciones en cualquier momento.
                                Los cambios entrarÃ¡n en vigor inmediatamente despuÃ©s de su publicaciÃ³n en el sitio web. Tu uso continuado del sitio constituye
                                la aceptaciÃ³n de los tÃ©rminos modificados.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-accent">TerminaciÃ³n:</strong> Podemos suspender o terminar tu acceso al sitio web en cualquier momento, sin previo aviso,
                                si consideramos que has violado estos tÃ©rminos o por cualquier otra razÃ³n a nuestra discreciÃ³n.
                            </p>
                        </div>
                    </div>

                    {/* 9. Ley Aplicable y JurisdicciÃ³n */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-accent" aria-label="Icono de globo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">9. Ley Aplicable y JurisdicciÃ³n</h2>
                                <p className="text-text-secondary text-sm">Marco legal de estos tÃ©rminos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                Estos TÃ©rminos y Condiciones se regirÃ¡n e interpretarÃ¡n de acuerdo con las leyes de la RepÃºblica de Colombia,
                                sin dar efecto a ningÃºn principio de conflictos de ley.
                            </p>
                            <p className="leading-relaxed">
                                Cualquier disputa que surja en relaciÃ³n con estos tÃ©rminos estarÃ¡ sujeta a la jurisdicciÃ³n exclusiva de los tribunales
                                de Cartagena de Indias, Colombia, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
                            </p>
                            <div className="bg-bg-primary border border-border-primary rounded-lg p-4">
                                <p className="text-sm">
                                    <strong className="text-accent">Idioma:</strong> Estos tÃ©rminos se redactan originalmente en espaÃ±ol.
                                    Cualquier traducciÃ³n es solo para conveniencia. En caso de conflicto, prevalecerÃ¡ la versiÃ³n en espaÃ±ol.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 10. Disposiciones Generales */}
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-accent" aria-label="Icono de check" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">10. Disposiciones Generales</h2>
                                <p className="text-text-secondary text-sm">ClÃ¡usulas adicionales importantes</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-text-secondary">
                            <p className="leading-relaxed">
                                <strong className="text-accent">Acuerdo Completo:</strong> Estos TÃ©rminos y Condiciones constituyen el acuerdo completo entre tÃº e InnovaCode Solutions
                                con respecto al uso del sitio web.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-accent">Separabilidad:</strong> Si alguna disposiciÃ³n de estos tÃ©rminos se considera invÃ¡lida o inaplicable,
                                las disposiciones restantes continuarÃ¡n en pleno vigor y efecto.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-accent">Renuncia:</strong> Ninguna renuncia a cualquier tÃ©rmino serÃ¡ considerada como una renuncia adicional o continua
                                de dicho tÃ©rmino o de cualquier otro tÃ©rmino.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-accent">CesiÃ³n:</strong> No puedes ceder o transferir estos tÃ©rminos sin nuestro consentimiento previo por escrito.
                                Podemos ceder estos tÃ©rminos sin restricciones.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* SecciÃ³n de Contacto */}
            <section className="py-16 px-4 border-t border-border-primary bg-bg-secondary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <FileText className="w-8 h-8 text-accent" aria-label="Icono de documento" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Â¿Preguntas sobre estos TÃ©rminos?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Si tienes alguna pregunta sobre estos TÃ©rminos y Condiciones, no dudes en contactarnos:
                    </p>
                    <div className="space-y-3 text-text-secondary">
                        <p>
                            <strong className="text-accent">Email:</strong>{' '}
                            <a href="mailto:legal@innovacode.click" className="hover:text-accent transition-colors">
                                legal@innovacode.click
                            </a>
                        </p>
                        <p>
                            <strong className="text-accent">WhatsApp:</strong>{' '}
                            <a href="https://wa.me/573232231834" className="hover:text-accent transition-colors">
                                +57 323 223 1834
                            </a>
                        </p>
                        <p>
                            <strong className="text-accent">RazÃ³n Social:</strong> InnovaCode Solutions S.A.S.
                        </p>
                    </div>

                    {/* <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF7F] text-[#0C0C0C] font-semibold rounded-full hover:bg-[#00FF7F]/90 transition-all hover:scale-105"
                        >s
                            Volver al Inicio
                        </Link>
                        <Link
                            to="/politica-privacidad"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#00FF7F] text-[#00FF7F] font-semibold rounded-full hover:bg-[#00FF7F]/10 transition-all"
                        >
                            Ver PolÃ­tica de Privacidad
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
