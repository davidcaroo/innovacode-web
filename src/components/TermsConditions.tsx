import { FileText, Scale, CheckCircle, XCircle, AlertTriangle, Shield, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-[#0C0C0C] text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 mb-6">
                        <Scale className="w-10 h-10 text-[#00FF7F]" aria-label="Icono de balanza de justicia" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Términos y <span className="text-[#00FF7F]">Condiciones</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-4">
                        Acuerdo legal para el uso de nuestros servicios
                    </p>
                    <p className="text-sm text-gray-500">
                        Última actualización: 29 de octubre de 2025
                    </p>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-8 px-4 border-t border-[#2A2A2A]">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de advertencia" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-3 text-[#00FF7F]">Bienvenido</h2>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    Al acceder y utilizar el sitio web <a href="https://innovacode.tech" className="text-[#00FF7F] hover:underline">innovacode.tech</a> y los servicios de <strong>InnovaCode Solutions</strong>, aceptas cumplir y estar sujeto a los siguientes Términos y Condiciones de uso.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Si no estás de acuerdo con estos términos, por favor no utilices nuestros servicios. Te recomendamos leer detenidamente este documento antes de continuar.
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
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de documento" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">1. Definiciones</h2>
                                <p className="text-gray-400 text-sm">Términos clave utilizados en este documento</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed mb-4">
                                Para efectos de estos Términos y Condiciones, se entenderá por:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span><strong>"Nosotros", "Nuestro/a":</strong> InnovaCode Solutions S.A.S., empresa prestadora de servicios de desarrollo de software</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span><strong>"Usuario", "Tú", "Cliente":</strong> Persona física o jurídica que accede a nuestro sitio web o contrata nuestros servicios</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span><strong>"Sitio Web":</strong> El dominio innovacode.tech y todas sus páginas relacionadas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span><strong>"Servicios":</strong> Desarrollo de software, IA, automatizaciones y cualquier otro servicio ofrecido por InnovaCode Solutions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span><strong>"Contenido":</strong> Textos, imágenes, videos, código fuente, logos y cualquier material disponible en el sitio</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Aceptación de Términos */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de check" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">2. Aceptación de Términos</h2>
                                <p className="text-gray-400 text-sm">Condiciones para usar nuestros servicios</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                Al utilizar nuestro sitio web o servicios, declaras que:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Tienes al menos 18 años de edad o cuentas con autorización de un tutor legal</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Tienes capacidad legal para celebrar contratos vinculantes</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Has leído, entendido y aceptado estos Términos y Condiciones</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" aria-label="Check verde" />
                                    <span>Toda la información que proporciones será verdadera, precisa y actualizada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Uso del Sitio Web */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de globo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">3. Uso del Sitio Web</h2>
                                <p className="text-gray-400 text-sm">Normas de uso aceptable</p>
                            </div>
                        </div>

                        <div className="space-y-6 ml-16 text-gray-300">
                            <div>
                                <h3 className="text-lg font-semibold text-[#00FF7F] mb-3">3.1 Usos Permitidos</h3>
                                <p className="mb-3">Puedes utilizar nuestro sitio web para:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] font-bold mt-1">✓</span>
                                        <span>Informarte sobre nuestros servicios de desarrollo de software</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] font-bold mt-1">✓</span>
                                        <span>Contactarnos para solicitar cotizaciones o información</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] font-bold mt-1">✓</span>
                                        <span>Leer nuestros contenidos y recursos informativos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00FF7F] font-bold mt-1">✓</span>
                                        <span>Compartir nuestro contenido en redes sociales (con atribución)</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#00FF7F] mb-3">3.2 Usos Prohibidos</h3>
                                <p className="mb-3">Está estrictamente prohibido:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Utilizar el sitio para fines ilegales o no autorizados</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Intentar acceder sin autorización a sistemas, servidores o redes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Copiar, reproducir o distribuir el contenido sin permiso escrito</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Realizar ingeniería inversa, descompilar o modificar el sitio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Transmitir virus, malware o cualquier código malicioso</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-label="X rojo" />
                                        <span>Usar bots, scrapers o herramientas automatizadas sin autorización</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 4. Servicios Profesionales */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de usuarios" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">4. Servicios Profesionales</h2>
                                <p className="text-gray-400 text-sm">Condiciones de nuestros servicios de desarrollo</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <div className="space-y-3">
                                <p className="leading-relaxed">
                                    <strong className="text-[#00FF7F]">Contratación:</strong> Los servicios de desarrollo de software, IA y automatizaciones se formalizan mediante contratos específicos que detallan alcance, plazos, costos y entregables.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-[#00FF7F]">Cotizaciones:</strong> Las cotizaciones tienen validez de 30 días calendario desde su emisión. Los precios pueden variar según las condiciones del mercado.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-[#00FF7F]">Pagos:</strong> Los términos de pago se establecen en cada contrato individual. Generalmente incluyen un anticipo inicial y pagos por hitos cumplidos.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-[#00FF7F]">Garantías:</strong> Ofrecemos garantías sobre nuestro trabajo según lo especificado en cada contrato. Esto incluye corrección de errores y soporte post-entrega.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Propiedad Intelectual */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de escudo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">5. Propiedad Intelectual</h2>
                                <p className="text-gray-400 text-sm">Derechos de autor y marcas registradas</p>
                            </div>
                        </div>

                        <div className="space-y-6 ml-16 text-gray-300">
                            <div>
                                <h3 className="text-lg font-semibold text-[#00FF7F] mb-3">5.1 Nuestros Derechos</h3>
                                <p className="leading-relaxed mb-3">
                                    Todo el contenido del sitio web, incluyendo diseño, código fuente, textos, gráficos, logos, iconos, imágenes y software,
                                    es propiedad de InnovaCode Solutions o sus licenciantes y está protegido por leyes de propiedad intelectual colombianas e internacionales.
                                </p>
                                <div className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-lg p-4">
                                    <p className="text-sm">
                                        <strong className="text-[#00FF7F]">© 2025 InnovaCode Solutions S.A.S.</strong> Todos los derechos reservados.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#00FF7F] mb-3">5.2 Derechos del Cliente</h3>
                                <p className="leading-relaxed">
                                    Para proyectos de desarrollo de software, la propiedad intelectual del código desarrollado se transfiere al cliente
                                    una vez completado el pago total, salvo que se especifique lo contrario en el contrato. Los componentes reutilizables
                                    y frameworks propios de InnovaCode permanecen como nuestra propiedad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. Limitación de Responsabilidad */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de alerta" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">6. Limitación de Responsabilidad</h2>
                                <p className="text-gray-400 text-sm">Límites de nuestra responsabilidad legal</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                En la medida máxima permitida por la ley aplicable:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">→</span>
                                    <span>El sitio web se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">→</span>
                                    <span>No garantizamos que el sitio esté libre de errores, virus o interrupciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">→</span>
                                    <span>No seremos responsables de daños indirectos, incidentales, especiales o consecuentes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">→</span>
                                    <span>Nuestra responsabilidad total no excederá el monto pagado por el cliente en los últimos 12 meses</span>
                                </li>
                            </ul>
                            <div className="bg-[#0C0C0C] border border-[#00FF7F]/20 rounded-lg p-4 mt-4">
                                <p className="text-sm">
                                    <strong className="text-[#00FF7F]">Importante:</strong> Las limitaciones anteriores no aplican en casos de negligencia grave, dolo o incumplimientos intencionales por nuestra parte.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 7. Indemnización */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de balanza" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">7. Indemnización</h2>
                                <p className="text-gray-400 text-sm">Tu compromiso de protegernos legalmente</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                Aceptas indemnizar, defender y mantener indemne a InnovaCode Solutions, sus directores, empleados y socios de cualquier reclamo,
                                pérdida, responsabilidad, daño o gasto (incluyendo honorarios legales) que surja de:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span>Tu uso del sitio web o servicios</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span>Tu violación de estos Términos y Condiciones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00FF7F] mt-1">•</span>
                                    <span>Tu violación de derechos de terceros, incluidos derechos de propiedad intelectual</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 8. Modificaciones */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de documento" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">8. Modificaciones y Terminación</h2>
                                <p className="text-gray-400 text-sm">Cambios a estos términos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Modificaciones:</strong> Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
                                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Tu uso continuado del sitio constituye
                                la aceptación de los términos modificados.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Terminación:</strong> Podemos suspender o terminar tu acceso al sitio web en cualquier momento, sin previo aviso,
                                si consideramos que has violado estos términos o por cualquier otra razón a nuestra discreción.
                            </p>
                        </div>
                    </div>

                    {/* 9. Ley Aplicable y Jurisdicción */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de globo" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">9. Ley Aplicable y Jurisdicción</h2>
                                <p className="text-gray-400 text-sm">Marco legal de estos términos</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República de Colombia,
                                sin dar efecto a ningún principio de conflictos de ley.
                            </p>
                            <p className="leading-relaxed">
                                Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales
                                de Cartagena de Indias, Colombia, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
                            </p>
                            <div className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-lg p-4">
                                <p className="text-sm">
                                    <strong className="text-[#00FF7F]">Idioma:</strong> Estos términos se redactan originalmente en español.
                                    Cualquier traducción es solo para conveniencia. En caso de conflicto, prevalecerá la versión en español.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 10. Disposiciones Generales */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F]/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-[#00FF7F]" aria-label="Icono de check" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">10. Disposiciones Generales</h2>
                                <p className="text-gray-400 text-sm">Cláusulas adicionales importantes</p>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16 text-gray-300">
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Acuerdo Completo:</strong> Estos Términos y Condiciones constituyen el acuerdo completo entre tú e InnovaCode Solutions
                                con respecto al uso del sitio web.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Separabilidad:</strong> Si alguna disposición de estos términos se considera inválida o inaplicable,
                                las disposiciones restantes continuarán en pleno vigor y efecto.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Renuncia:</strong> Ninguna renuncia a cualquier término será considerada como una renuncia adicional o continua
                                de dicho término o de cualquier otro término.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-[#00FF7F]">Cesión:</strong> No puedes ceder o transferir estos términos sin nuestro consentimiento previo por escrito.
                                Podemos ceder estos términos sin restricciones.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sección de Contacto */}
            <section className="py-16 px-4 border-t border-[#2A2A2A] bg-[#1A1A1A]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 mb-6">
                        <FileText className="w-8 h-8 text-[#00FF7F]" aria-label="Icono de documento" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">¿Preguntas sobre estos Términos?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Si tienes alguna pregunta sobre estos Términos y Condiciones, no dudes en contactarnos:
                    </p>
                    <div className="space-y-3 text-gray-300">
                        <p>
                            <strong className="text-[#00FF7F]">Email:</strong>{' '}
                            <a href="mailto:legal@innovacode.tech" className="hover:text-[#00FF7F] transition-colors">
                                legal@innovacode.tech
                            </a>
                        </p>
                        <p>
                            <strong className="text-[#00FF7F]">WhatsApp:</strong>{' '}
                            <a href="https://wa.me/573232231834" className="hover:text-[#00FF7F] transition-colors">
                                +57 323 223 1834
                            </a>
                        </p>
                        <p>
                            <strong className="text-[#00FF7F]">Razón Social:</strong> InnovaCode Solutions S.A.S.
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
                            Ver Política de Privacidad
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
