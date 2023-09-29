import "./bodyContainer.css";

import { ReactComponent as HtmlLogo } from '../../SVG/html.svg';
import { ReactComponent as CssLogo } from '../../SVG/css.svg';
import { ReactComponent as JSLogo } from '../../SVG/javascript.svg';
import { ReactComponent as CSLogo } from '../../SVG/cs.svg';
import { ReactComponent as CLogo } from '../../SVG/c.svg';
import { ReactComponent as CPPLogo } from '../../SVG/cpp.svg';
import { ReactComponent as JavaLogo } from '../../SVG/java.svg';
import { ReactComponent as PHPLogo } from '../../SVG/php.svg';
import { ReactComponent as LaravelLogo } from '../../SVG/laravel.svg';
import { ReactComponent as PythonLogo } from '../../SVG/python.svg';
import { ReactComponent as KotlinLogo } from '../../SVG/kotlin.svg';
import { ReactComponent as ReactLogo } from '../../SVG/react.svg';
import { ReactComponent as MaterialUILogo } from '../../SVG/materialui.svg';
import { ReactComponent as NodeJsLogo } from '../../SVG/nodejs.svg';
import { ReactComponent as NextJsLogo } from '../../SVG/nexts.svg';
import { ReactComponent as ExpressLogo } from '../../SVG/express.svg';
import { ReactComponent as GitLogo } from '../../SVG/git.svg';
import { ReactComponent as DockerLogo } from '../../SVG/docker.svg';
import { ReactComponent as BootstrapLogo } from '../../SVG/bootstrap.svg';
import { ReactComponent as ThreejsLogo } from '../../SVG/threejs.svg';
import { ReactComponent as PhotoshopLogo } from '../../SVG/photoshop.svg';
import { ReactComponent as DsmaxLogo } from '../../SVG/3ds-max.svg';
import { ReactComponent as BashLogo } from '../../SVG/bash.svg';
import { ReactComponent as AndroidLogo } from '../../SVG/android.svg';

import BasicTabs from "../tabs/tabs";


export default function BodyContainer() {




    return <div id="body-bontainer">
        <div>
            <div className="body-module">
                <div className="body-module-title">CAREER OBJECTIVE</div>
                <p className="body-module-text">
                    Como ingeniero en sistemas egresado de la UPTLL, mi objetivo es aplicar mis habilidades y conocimientos en el campo de la tecnología de la información, enfocándome en contribuir al desarrollo y promoción del software libre. Con una sólida experiencia tanto en empresas locales como en proyectos como freelancer, deseo ahora embarcarme en desafiantes proyectos importantes, donde pueda emplear nuevas tecnologías y expandir mis habilidades como programador.
                </p>
                <p className="body-module-text">
                    Mis principales atributos incluyen una sólida formación en ingeniería de sistemas, que me ha proporcionado un sólido conocimiento en el diseño, desarrollo y mantenimiento de software. Además, mi enfoque en el software libre me ha permitido adquirir una comprensión profunda de la filosofía y las mejores prácticas asociadas a este movimiento.
                </p>
                <p className="body-module-text">
                    A lo largo de mi carrera, he trabajado en diversos entornos, lo que me ha brindado la capacidad de adaptarme rápidamente a diferentes contextos y equipos de trabajo. Mi experiencia como freelancer me ha permitido desarrollar habilidades de autodisciplina, gestión del tiempo y resolución de problemas de manera independiente.
                </p>
                <p className="body-module-text">
                    Mi pasión por la tecnología y el deseo de estar a la vanguardia de las nuevas tendencias me motiva a buscar proyectos desafiantes y de alto impacto. Busco una oportunidad donde pueda colaborar con un equipo talentoso y comprometido en proyectos que utilicen nuevas tecnologías, lo que me permitirá seguir aprendiendo y creciendo profesionalmente.
                </p>
            </div>

            <div className="body-module">
                <div className="body-module-title">WORK EXPERIENCE</div>
                <ul>
                    <li>
                        <span className="body-module-subtitle">U.E.C. Batalla de la Victoria</span>
                        <span>
                            Desarrollo de un sistema de gestión de calificaciones e inscripción de estudiantes, que incluía los siguientes componentes:
                        </span>
                        <ol>
                            <li>Frontend: una página web creada con React, desde la cual los profesores podían subir las calificaciones de los estudiantes.</li>
                            <li>Backend: una API en Node.js y Express para manejar las solicitudes del frontend, junto con una base de datos en PostgreSQL.</li>
                            <li>Aplicación para Android desarrollada con Kotlin.</li>
                        </ol>
                    </li>
                    <li>
                        <span className="body-module-subtitle">U.E. Abelardo Méndez</span>
                        <span>
                            Desarrollo de un sistema de registro de asistencias, implementado en Java y haciendo uso de un lector de huellas dactilares.
                        </span>
                    </li>
                    <li>
                        <span className="body-module-subtitle">Hidrocapital</span>
                        <span>
                            Desarrollo de un sistema de monitoreo de equipos hidráulicos, que involucraba la obtención de información proveniente de múltiples sensores en diversos equipos. El sistema emitía alarmas en caso de situaciones que lo requirieran y también generaba alertas para indicar la falta de mantenimiento.
                        </span>
                    </li>
                    <br />
                    <li >
                        Desarrollo de múltiples páginas web para diversos clientes locales.
                    </li>
                </ul>

            </div>

            
            <div className="body-module">
                <div className="body-module-title">EXAMPLES</div>
                <BasicTabs/>
            </div>
     
        </div>
        <div>
            <div className="body-module">
                <div className="body-module-title">EDUCATION</div>
                <ul className="body-module-text">
                    <li>Ingeniero en Sistemas, especialidad en desarrollo de software</li>
                    <li>Instituto Tecnologico de los Llanos</li>
                    <li>Septiembre 2016 - Junio 2020</li>
                    <li>Altagracia de Orituco, Edo Guarico, Venezuela</li>
                    <li>GPA: 3,81</li>
                </ul>
            </div>

            <div className="body-module">
                <div className="body-module-title">RELEVANT COURSES</div>
                <ul className="body-module-text">
                    <li>Curso de HTML y CSS, Platzi</li>
                    <li>Curso de Fundamentos de Ingeniería de Software, Platzi</li>
                    <li>Curso de diseño responsivo, Platzi</li>
                    <li>Curso de estructuras de datos y algoritmos, Udemy</li>
                    <li>Estructura de código de C#, Microsoft</li>
                    <li>Curso de Introducción al Desarrollo Web: HTML y CSS, Google</li>
                    <li>Curso intensivo de aprendizaje automático, Google</li>
                    <li>Certificado Profesional de Análisis de datos, Google</li>
                </ul>
            </div>

            <div className="body-module">
                <div className="body-module-title">SKILLS</div>

                <div className="logo-main-container">

                    <div className="logo-container">
                        <HtmlLogo className="logo" />
                        <span>HTML</span>
                    </div>
                    <div className="logo-container">
                        <CssLogo className="logo" />
                        <span>CSS</span>
                    </div>

                    <div className="logo-container">
                        <JSLogo className="logo" />
                        <span>JavaScript</span>
                    </div>

                    <div className="logo-container">
                        <CSLogo className="logo" />
                        <span>C#</span>
                    </div>
                    <div className="logo-container">
                        <CLogo className="logo" />
                        <span>C</span>
                    </div>
                    <div className="logo-container">
                        <CPPLogo className="logo" />
                        <span>C++</span>
                    </div>
                    <div className="logo-container">
                        <JavaLogo className="logo" />
                        <span>Java</span>
                    </div>
                    <div className="logo-container">
                        <KotlinLogo className="logo" />
                        <span>Kotlin</span>
                    </div>
                    <div className="logo-container">
                        <PHPLogo className="logo" />
                        <span>PHP</span>
                    </div>
                    <div className="logo-container">
                        <LaravelLogo className="logo" />
                        <span>Laravel</span>
                    </div>
                    <div className="logo-container">
                        <PythonLogo className="logo" />
                        <span>Python</span>
                    </div>
                    <div className="logo-container">
                        <ReactLogo className="logo" />
                        <span>React</span>
                    </div>
                    <div className="logo-container">
                        <NodeJsLogo className="logo" />
                        <span>Node JS</span>
                    </div>
                    <div className="logo-container">
                        <NextJsLogo className="logo" />
                        <span>Next JS</span>
                    </div>
                    <div className="logo-container">
                        <ExpressLogo className="logo" />
                        <span>Express</span>
                    </div>
                    <div className="logo-container">
                        <BootstrapLogo className="logo" />
                        <span>Bootstrap</span>
                    </div>
                    <div className="logo-container">
                        <MaterialUILogo className="logo" />
                        <span>Material UI</span>
                    </div>
                    <div className="logo-container">
                        <GitLogo className="logo" />
                        <span>Git</span>
                    </div>
                    <div className="logo-container">
                        <DockerLogo className="logo" />
                        <span>Docker</span>
                    </div>
                    <div className="logo-container">
                        <ThreejsLogo className="logo" />
                        <span>Three JS</span>
                    </div>
                    <div className="logo-container">
                        <DsmaxLogo className="logo" />
                        <span>3ds max</span>
                    </div>
                    <div className="logo-container">
                        <PhotoshopLogo className="logo" />
                        <span>Photoshop</span>
                    </div>
                    <div className="logo-container">
                        <BashLogo className="logo" />
                        <span>Bash</span>
                    </div>

                    <div className="logo-container">
                        <AndroidLogo className="logo" />
                        <span>Android Studio</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
}