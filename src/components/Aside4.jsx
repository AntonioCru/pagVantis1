import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';

export const Aside4 = () => {
  return (
      <div>
    <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
            <Accordion.Header>Analisis de Negocio</Accordion.Header>
            <Accordion.Body>
            Nuestros expertos trabajan en conjunto contigo para identificar y alcanzar tus objetivos empresariales. Te ayudamos a detectar las necesidades de tu negocio, recomendamos las soluciones que realmente aportan valor a tu esquema de trabajo, definimos a detalle los requerimientos de tu solución específica y te guiamos en cada uno de los pasos para su implementación.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
            <Accordion.Header>Diseño e implementacion de soluciones</Accordion.Header>
            <Accordion.Body>
            Nuestros expertos usan las mejores prácticas del sector y metodologías ágiles para comprender tu infraestructura actual y trabajan contigo diseñando la solución que mejor se adapte a tu entorno particular, a tus objetivos tecnológicos, empresariales y presupuestarios, pero que también sea lo suficientemente escalable como para adaptarse a futuras necesidades.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
            <Accordion.Header>UI/UX Design</Accordion.Header>
            <Accordion.Body>
            Diseñamos productos digitales que sean útiles, fáciles de usar y con los que resulte agradable interactuar. Estudiamos y mejoramos la experiencia de los usuarios al interactuar con tus productos y nos aseguramos que encuentren valor en lo que se les ofrece.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
            <Accordion.Header>Staffing</Accordion.Header>
            <Accordion.Body>
            Coordinamos el proceso de reclutamiento de los candidatos especializados en el sector TI, seleccionando equipos de alto rendimiento para su asignación en proyectos con nuestros clientes.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
            <Accordion.Header>Gestion de Proyectos</Accordion.Header>
            <Accordion.Body>
            Nuestros expertos en dirección y gestión de proyectos aplican métodos, habilidades, conocimientos y experiencia encausadas a lograr los objetivos de acuerdo con los criterios de aceptación de cada proyecto dentro de los parámetros acordados.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
            <Accordion.Header>Marketing Digital</Accordion.Header>
            <Accordion.Body>
            Implementamos estrategias de promoción de marca por medio de tendencias digitales que ayuden a comercializar los productos o servicios, con el fin de captar clientes potenciales.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
            <Accordion.Header>Telecomunicaciones</Accordion.Header>
            <Accordion.Body>
            Nos especializamos en la instalación de equipos de telecomunicaciones, y construcción de infraestructura para la telefonía celular y comunicaciones en general. Nuestra especialidad son las tecnologías:

            MW (Micro Ondas / Micro Waves)
            IPRAN (IP Accesos de Radio / Internet Protocol Radio Access Network)
            IBS (Redes Híbridas / In-building Solution)

            Somos partner de Sonda, Eccom e Itracsa, en la instalación de infraestructura de sitios.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
  )
}
