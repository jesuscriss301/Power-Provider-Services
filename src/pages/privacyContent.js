// Full bilingual Privacy Policy & Cookies content.
// Kept separate from the short-string i18n dictionary because this is
// long-form prose (headings, paragraphs, lists, a table) rather than
// single UI strings — see PrivacyPolicy.jsx for how it's rendered.
//
// Scope note: this text describes the site as actually built today
// (no analytics/advertising scripts running yet) and proactively
// discloses that Google Analytics and Meta Ads are planned for the
// future, gated behind the cookie banner's consent choice. This page
// is informational, not legal advice — see the note rendered at the
// top of the page in both languages.

export const privacyContent = {
  en: [
    {
      h2: "1. Who we are",
      blocks: [
        {
          p: "This Privacy Policy explains how Power Provider Services LLC (“Power Provider Services,” “we,” “us”) handles information in connection with this website. Power Provider Services LLC is a licensed electrical contractor (Florida License EC13010990) serving Apopka, Orlando and the greater Central Florida area. You can reach us at powerproviderservices@gmail.com or (407) 592-2900.",
        },
      ],
    },
    {
      h2: "2. Information we collect",
      blocks: [
        { h3: "Information you choose to give us" },
        {
          p: "If you use the contact form on this site or email us directly, the form currently opens your own email application (a “mailto” link) with your name, phone number and message pre-filled — it is sent from your email account to ours, the same as writing us an email directly. This site's server does not receive, store, or process that information itself.",
        },
        { h3: "Information collected automatically" },
        {
          p: "This site does not use cookies to track you by default. It uses your browser's local storage (not a cookie) to remember two preferences you set yourself: dark/light theme and English/Spanish language. That information never leaves your device.",
        },
        {
          p: "This site loads two font families (Barlow Condensed and Inter) from Google Fonts' servers. Loading a font this way sends your device's IP address to Google as part of that request — the same way it would for any resource loaded from a third-party server. We do not control what Google does with that request beyond serving the font file.",
        },
      ],
    },
    {
      h2: "3. Cookies and similar technologies",
      blocks: [
        {
          p: "We use a cookie banner so you can choose which categories of cookies/local storage we're allowed to use. Your choice is saved on your device and you can change it at any time via “Cookie Preferences” in the footer.",
        },
        {
          table: {
            head: ["Category", "Purpose", "Status today"],
            rows: [
              [
                "Strictly Necessary",
                "Remembers your dark/light theme and language choice, and remembers your cookie preference itself. Uses browser local storage, not a tracking cookie.",
                "Always active — required for the site to work as you'd expect.",
              ],
              [
                "Analytics",
                "Reserved for Google Analytics, to help us understand how visitors use the site so we can improve it.",
                "Not active yet. Will only load if you switch this on in Cookie Preferences once enabled.",
              ],
              [
                "Advertising",
                "Reserved for Meta (Facebook/Instagram) Ads, to measure and improve ad campaigns.",
                "Not active yet. Will only load if you switch this on in Cookie Preferences once enabled.",
              ],
            ],
          },
        },
        {
          p: "You can also control cookies through your browser's own settings, which lets you delete existing cookies and block new ones — see your browser's help documentation for how.",
        },
      ],
    },
    {
      h2: "4. Analytics & advertising (planned)",
      blocks: [
        {
          p: "We plan to add Google Analytics and Meta Ads to this site in the future, to understand site traffic and measure advertising performance. Consistent with the cookie categories above, neither will load unless you explicitly opt in through the Analytics or Advertising toggle in Cookie Preferences — rejecting or ignoring the banner keeps both switched off. When enabled, Google and Meta will process data (such as your IP address and on-site behavior) under their own respective privacy policies, which we encourage you to review once those tools are live.",
        },
      ],
    },
    {
      h2: "5. Third-party links",
      blocks: [
        {
          p: "This site links out to our profiles on the Better Business Bureau, Yelp, and Procore Network so you can independently verify our standing. Those are separate websites with their own privacy practices and cookies, which this policy does not cover.",
        },
      ],
    },
    {
      h2: "6. We do not sell your information",
      blocks: [
        { p: "We do not sell, rent, or trade personal information to third parties." },
      ],
    },
    {
      h2: "7. Your choices",
      blocks: [
        {
          ul: [
            "Change your cookie preferences anytime via “Cookie Preferences” in the footer.",
            "Clear your browser's local storage to remove your saved theme/language preference.",
            "Contact us at powerproviderservices@gmail.com with any question about how your information is handled.",
          ],
        },
      ],
    },
    {
      h2: "8. Children's privacy",
      blocks: [
        {
          p: "This site is intended for a general business audience and is not directed at children under 13. We do not knowingly collect information from children.",
        },
      ],
    },
    {
      h2: "9. Changes to this policy",
      blocks: [
        {
          p: "We may update this page as the site evolves — for example, when Google Analytics or Meta Ads are actually enabled. The “Last updated” date at the top of this page reflects the most recent revision.",
        },
      ],
    },
    {
      h2: "10. Contact us",
      blocks: [
        {
          p: "Power Provider Services LLC — powerproviderservices@gmail.com — (407) 592-2900. Serving Apopka, Orlando & Central Florida.",
        },
      ],
    },
  ],

  es: [
    {
      h2: "1. Quiénes somos",
      blocks: [
        {
          p: "Esta Política de Privacidad explica cómo Power Provider Services LLC (“Power Provider Services”, “nosotros”) maneja la información relacionada con este sitio web. Power Provider Services LLC es un contratista eléctrico con licencia (Licencia de Florida EC13010990) que atiende Apopka, Orlando y el área metropolitana del Centro de la Florida. Puedes contactarnos en powerproviderservices@gmail.com o al (407) 592-2900.",
        },
      ],
    },
    {
      h2: "2. Información que recopilamos",
      blocks: [
        { h3: "Información que tú decides darnos" },
        {
          p: "Si usas el formulario de contacto de este sitio o nos escribes directamente, el formulario actualmente abre tu propia aplicación de correo (un enlace “mailto”) con tu nombre, teléfono y mensaje ya escritos — se envía desde tu cuenta de correo a la nuestra, igual que si nos escribieras un correo directamente. El servidor de este sitio no recibe, almacena ni procesa esa información.",
        },
        { h3: "Información recopilada automáticamente" },
        {
          p: "Este sitio no usa cookies para rastrearte por defecto. Usa el almacenamiento local de tu navegador (no una cookie) para recordar dos preferencias que tú mismo eliges: el tema claro/oscuro y el idioma (inglés/español). Esa información nunca sale de tu dispositivo.",
        },
        {
          p: "Este sitio carga dos familias tipográficas (Barlow Condensed e Inter) desde los servidores de Google Fonts. Cargar una fuente de esta manera envía la dirección IP de tu dispositivo a Google como parte de esa solicitud — igual que ocurriría con cualquier recurso cargado desde un servidor de terceros. No controlamos qué hace Google con esa solicitud más allá de entregar el archivo de la fuente.",
        },
      ],
    },
    {
      h2: "3. Cookies y tecnologías similares",
      blocks: [
        {
          p: "Usamos un banner de cookies para que puedas elegir qué categorías de cookies/almacenamiento local nos permites usar. Tu elección se guarda en tu dispositivo y puedes cambiarla cuando quieras desde “Preferencias de Cookies” en el pie de página.",
        },
        {
          table: {
            head: ["Categoría", "Propósito", "Estado actual"],
            rows: [
              [
                "Estrictamente Necesarias",
                "Recuerda tu elección de tema claro/oscuro e idioma, y recuerda tu propia preferencia de cookies. Usa almacenamiento local del navegador, no una cookie de rastreo.",
                "Siempre activa — necesaria para que el sitio funcione como esperas.",
              ],
              [
                "Analítica",
                "Reservada para Google Analytics, para ayudarnos a entender cómo los visitantes usan el sitio y así poder mejorarlo.",
                "Aún no está activa. Solo se cargará si activas esta opción en Preferencias de Cookies una vez habilitada.",
              ],
              [
                "Publicidad",
                "Reservada para Meta (Facebook/Instagram) Ads, para medir y mejorar campañas publicitarias.",
                "Aún no está activa. Solo se cargará si activas esta opción en Preferencias de Cookies una vez habilitada.",
              ],
            ],
          },
        },
        {
          p: "También puedes controlar las cookies desde la configuración de tu propio navegador, lo que te permite borrar las cookies existentes y bloquear nuevas — consulta la documentación de ayuda de tu navegador para saber cómo.",
        },
      ],
    },
    {
      h2: "4. Analítica y publicidad (planeado)",
      blocks: [
        {
          p: "Planeamos agregar Google Analytics y Meta Ads a este sitio en el futuro, para entender el tráfico del sitio y medir el rendimiento publicitario. De acuerdo con las categorías de cookies anteriores, ninguno se cargará a menos que actives explícitamente la opción de Analítica o Publicidad en Preferencias de Cookies — rechazar o ignorar el banner mantiene ambas desactivadas. Una vez habilitados, Google y Meta procesarán datos (como tu dirección IP y tu comportamiento en el sitio) bajo sus propias políticas de privacidad, que te recomendamos revisar cuando esas herramientas estén activas.",
        },
      ],
    },
    {
      h2: "5. Enlaces a terceros",
      blocks: [
        {
          p: "Este sitio enlaza a nuestros perfiles en Better Business Bureau, Yelp y Procore Network para que puedas verificar nuestra reputación de forma independiente. Esos son sitios web separados con sus propias prácticas de privacidad y cookies, que esta política no cubre.",
        },
      ],
    },
    {
      h2: "6. No vendemos tu información",
      blocks: [
        { p: "No vendemos, alquilamos ni intercambiamos información personal con terceros." },
      ],
    },
    {
      h2: "7. Tus opciones",
      blocks: [
        {
          ul: [
            "Cambia tus preferencias de cookies cuando quieras desde “Preferencias de Cookies” en el pie de página.",
            "Borra el almacenamiento local de tu navegador para eliminar tu preferencia guardada de tema/idioma.",
            "Contáctanos en powerproviderservices@gmail.com con cualquier pregunta sobre cómo manejamos tu información.",
          ],
        },
      ],
    },
    {
      h2: "8. Privacidad de menores",
      blocks: [
        {
          p: "Este sitio está dirigido a un público empresarial general y no está dirigido a menores de 13 años. No recopilamos a sabiendas información de menores.",
        },
      ],
    },
    {
      h2: "9. Cambios a esta política",
      blocks: [
        {
          p: "Podemos actualizar esta página a medida que el sitio evolucione — por ejemplo, cuando Google Analytics o Meta Ads se activen realmente. La fecha de “Última actualización” en la parte superior de esta página refleja la revisión más reciente.",
        },
      ],
    },
    {
      h2: "10. Contáctanos",
      blocks: [
        {
          p: "Power Provider Services LLC — powerproviderservices@gmail.com — (407) 592-2900. Sirviendo a Apopka, Orlando y el Centro de la Florida.",
        },
      ],
    },
  ],
};
