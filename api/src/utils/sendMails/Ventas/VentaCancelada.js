const sendPaymentCanceledEmail = (name, plan, actualDate) => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Solicitud Informe Admin MiCole</title>
      <style type="text/css">
        a { text-decoration: none; outline: none; }
        @media (max-width: 649px) {
          .o_col-full { max-width: 100% !important; }
          .o_col-half { max-width: 50% !important; }
          .o_hide-lg { display: inline-block !important; font-size: inherit !important; max-height: none !important; line-height: inherit !important; overflow: visible !important; width: auto !important; visibility: visible !important; }
          .o_hide-xs, .o_hide-xs.o_col_i { display: none !important; font-size: 0 !important; max-height: 0 !important; width: 0 !important; line-height: 0 !important; overflow: hidden !important; visibility: hidden !important; height: 0 !important; }
          .o_xs-center { text-align: center !important; }
          .o_xs-left { text-align: left !important; }
          .o_xs-right { text-align: left !important; }
          table.o_xs-left { margin-left: 0 !important; margin-right: auto !important; float: none !important; }
          table.o_xs-right { margin-left: auto !important; margin-right: 0 !important; float: none !important; }
          table.o_xs-center { margin-left: auto !important; margin-right: auto !important; float: none !important; }
          h1.o_heading { font-size: 32px !important; line-height: 41px !important; }
          h2.o_heading { font-size: 26px !important; line-height: 37px !important; }
          h3.o_heading { font-size: 20px !important; line-height: 30px !important; }
          .o_xs-py-md { padding-top: 24px !important; padding-bottom: 24px !important; }
          .o_xs-pt-xs { padding-top: 8px !important; }
          .o_xs-pb-xs { padding-bottom: 8px !important; }
        }
        @media screen {
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          .o_sans, .o_heading { font-family: "Roboto", sans-serif !important; }
          .o_heading, strong, b { font-weight: 700 !important; }
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
        }
      </style>
      <!--[if mso]>
      <style>
        table { border-collapse: collapse; }
        .o_col { float: left; }
      </style>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body class="o_body o_bg-light" style="width: 100%;margin: 0px;padding: 0px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #dbe5ea;">
      <!-- preview-text -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_hide" align="center" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Email Summary (Hidden)</td>
          </tr>
        </tbody>
      </table>
      <!-- header -->
     <table
              class="o_block"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              role="presentation"
              style="max-width: 632px; margin: 0 auto"
            >
              <tbody>
                <tr>
                  <td
                    class="o_re o_bg-primary o_px o_pb-md"
                    align="center"
                    style="
                      font-size: 0;
                      vertical-align: top;
                      background-image: url('https://i.imgur.com/vqKaXyJ.png');
                      background-size: cover;
                      padding-left: 16px;
                      padding-right: 16px;
                      padding-bottom: 24px;
                    "
                  >
                    <!--[if mso]><table cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td width="200" align="left" valign="top" style="padding:0px 8px;"><![endif]-->
                    <div
                      class="o_col o_col-2"
                      style="
                        display: inline-block;
                        vertical-align: top;
                        width: 100%;
                        max-width: 200px;
                      "
                    >
                      <div
                        style="font-size: 24px; line-height: 24px; height: 24px"
                      >
                        &nbsp;
                      </div>
                      <div
                        class="o_px-xs o_sans o_text o_left o_xs-center"
                        style="
                          font-family: Helvetica, Arial, sans-serif;
                          margin-top: 0px;
                          margin-bottom: 0px;
                          font-size: 16px;
                          line-height: 24px;
                          text-align: left;
                          padding-left: 8px;
                          padding-right: 8px;
                        "
                      >
                        <p style="margin-top: 0px; margin-bottom: 0px">
                          <a
                            class="o_text-white"
                            href="https://www.micole.com.pe"
                            style="
                              text-decoration: none;
                              outline: none;
                              color: #ffffff;
                            "
                            ><img
                              src="https://i.imgur.com/bq5PLes.png"
                              width="136"
                              height="36"
                              alt="SimpleApp"
                              style="
                                max-width: 136px;
                                -ms-interpolation-mode: bicubic;
                                vertical-align: middle;
                                border: 0;
                                line-height: 100%;
                                height: auto;
                                outline: none;
                                text-decoration: none;
                              "
                          /></a>
                        </p>
                      </div>
                    </div>
                    <!--[if mso]></td><td width="400" align="right" valign="top" style="padding:0px 8px;"><![endif]-->
                    <div
                      class="o_col o_col-4"
                      style="
                        display: inline-block;
                        vertical-align: top;
                        width: 100%;
                        max-width: 400px;
                      "
                    >
                      <div
                        style="font-size: 24px; line-height: 24px; height: 24px"
                      >
                        &nbsp;
                      </div>
                      <div
                        class="o_px-xs"
                        style="padding-left: 8px; padding-right: 8px"
                      >
                        <table
                          class="o_right o_xs-center"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          role="presentation"
                          style="
                            text-align: right;
                            margin-left: auto;
                            margin-right: 0;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                class="o_btn-xs o_bg-white o_br o_heading o_text-xs"
                                align="center"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                  font-weight: bold;
                                  margin-top: 0px;
                                  margin-bottom: 0px;
                                  font-size: 14px;
                                  line-height: 21px;
                                  mso-padding-alt: 7px 16px;
                                  background-color: #ffffff;
                                  border-radius: 4px;
                                "
                              >
                                <a
                                  class="o_text-primary"
                                  target="_blank"
                                  href="https://www.micole.com.pe"
                                  style="
                                    text-decoration: none;
                                    outline: none;
                                    color: #126de5;
                                    display: block;
                                    padding: 7px 16px;
                                    mso-text-raise: 3px;
                                  "
                                  >Visita MiCole</a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!--[if mso]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
      <!-- hero-icon-lines -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <!--[if mso]><table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-ultra_light o_px-md o_py-xl o_xs-py-md o_sans o_text-md o_text-light" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 19px;line-height: 28px;background-color: #ebf5fa;color: #82899a;padding-left: 24px;padding-right: 24px;padding-top: 64px;padding-bottom: 40px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td class="o_bb-primary" height="40" width="32" style="border-bottom: 1px solid #126de5;">&nbsp; </td>
                            <td rowspan="2" class="o_sans o_text o_text-secondary o_px o_py" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;color: #424651;padding-left: 16px;padding-right: 16px;padding-top: 16px;padding-bottom: 16px;">
                              <img src="https://i.imgur.com/zqzkRdf.png" width="48" height="48" alt="" style="max-width: 48px;-ms-interpolation-mode: bicubic;vertical-align: middle;border: 0;line-height: 100%;height: auto;outline: none;text-decoration: none;">
                            </td>
                            <td class="o_bb-primary" height="40" width="32" style="border-bottom: 1px solid #126de5;">&nbsp; </td>
                          </tr>
                          <tr>
                            <td height="40">&nbsp; </td>
                            <td height="40">&nbsp; </td>
                          </tr>
                          <tr>
                            <td style="font-size: 8px; line-height: 8px; height: 8px;">&nbsp; </td>
                            <td style="font-size: 8px; line-height: 8px; height: 8px;">&nbsp; </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 class="o_heading o_text-dark o_mb-xxs" style="font-family: Helvetica, Arial, sans-serif;font-weight: bold;margin-top: 0px;margin-bottom: 4px;color: #242b3d;font-size: 30px;line-height: 39px;">MiCole</h2>
                      <p style="margin-top: 14px;margin-bottom: 0px; color:#126de5; font-size: 16px;">Su suscripción al plan ${plan}</p>
                      <p style="margin-top: -4px;margin-bottom: 0px; color:#126de5; font-size: 16px;">ha sido rechazada</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- spacer -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <!--[if mso]><table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white" style="font-size: 24px;line-height: 24px;height: 24px;background-color: #ffffff;">&nbsp; </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white o_px-md o_py o_sans o_text-xs o_text-light" align="center" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;background-color: #ffffff;color: #82899a;padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;">
                      <p class="o_mb" style="margin-top: 0px;margin-bottom: 16px; font-size: 16px"><b>Estimado colegio ${name}:</b></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    
      <!-- content -->
      <table
              class="o_block"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              role="presentation"
              style="max-width: 632px; margin: 0 auto"
            >
              <tbody>
                <tr>
                  <td
                    class="o_bg-white o_px-md"
                    align="center"
                    style="
                      background-color: #ffffff;
                      padding-left: 24px;
                      padding-right: 24px;
                    "
                  >
                    <table
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="o_bg-white o_px-md o_py"
                            align="center"
                            style="
                              background-color: #ffffff;
                              padding-left: 24px;
                              padding-right: 24px;
                              padding-top: 16px;
                              padding-bottom: 16px;
                            "
                          >
                            <!--[if mso]><table width="584" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td align="center"><![endif]-->
                            <div
                              class="o_col-6s o_sans o_text o_text-secondary o_center"
                              style="
                                font-family: Helvetica, Arial, sans-serif;
                                margin-top: 0px;
                                margin-bottom: 0px;
                                font-size: 16px;
                                line-height: 24px;
                                max-width: 584px;
                                color: #424651;
                                text-align: left;
                              "
                            >
                              <p style="margin-top: 0px; margin-bottom: 20px">
                                Le queremos informar que lamentablemente la 
                                suscripción al plan <b>${plan}</b> de MiCole 
                                ha sido rechazada por Mercado Pago. Lo invitamos 
                                a volver a realizar el proceso de suscripción en 
                                la plataforma de Mercado Pago. 
                              </p>
                              <p style="margin-top: 0px; margin-bottom: 20px">
                                En caso persista el problema no dude en ponerse en 
                                contacto nosotros a través del correo 
                                informes@micole.com.pe y veremos la forma de ayudarlo 
                                con otras modalidades de pago.
                              </p>
                              <p><b>Atentamente,</b></p>
                              <p>
                                <b style="color: #126de5">Equipo de MiCole</b>
                              </p>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>

      <!-- spacer-lg -->
      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
        <tbody>
          <tr>
            <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
              <!--[if mso]><table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
                <tbody>
                  <tr>
                    <td class="o_bg-white" style="font-size: 48px;line-height: 48px;height: 48px;background-color: #ffffff;">&nbsp; </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- footer-light -->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        role="presentation"
      >
        <tbody>
          <tr>
            <td
              class="o_bg-light o_px-xs o_pb-lg o_xs-pb-xs"
              align="center"
              style="
                background-color: #dbe5ea;
                padding-left: 8px;
                padding-right: 8px;
                padding-bottom: 8px;
              "
            >
              <!--[if mso]><table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
              <table
                class="o_block"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                role="presentation"
                style="max-width: 632px; margin: 0 auto"
              >
                <tbody>
                  <tr>
                    <td
                      class="o_bg-white o_br-b o_sans"
                      style="
                        font-size: 8px;
                        line-height: 8px;
                        height: 8px;
                        font-family: Helvetica, Arial, sans-serif;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        background-color: #ffffff;
                        border-radius: 0px 0px 4px 4px;
                      "
                    >
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="o_px-md o_py-lg o_br-b o_sans o_text-xs o_text-light"
                      align="center"
                      style="
                        font-family: Helvetica, Arial, sans-serif;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-size: 14px;
                        line-height: 21px;
                        color: #82899a;
                        border-radius: 0px 0px 4px 4px;
                        padding-left: 24px;
                        padding-right: 24px;
                        padding-top: 32px;
                        padding-bottom: 32px;
                      "
                    >
                      <p
                        class="o_mb"
                        style="margin-top: 0px; margin-bottom: 16px"
                      >
                        ©2023 MiCole. All rights reserved.
                      </p>
                      <p
                        class="o_mb"
                        style="margin-top: 0px; margin-bottom: 16px"
                      >
                        Av. Costanera 2438 - San Miguel,<br />
                        Lima, Perú
                      </p>
                      <p style="margin-top: 0px; margin-bottom: 0px">
                        <a
                          class="o_text-light o_underline"
                          href="https://www.micole.com.pe"
                          target="_blank"
                          style="
                            text-decoration: underline;
                            outline: none;
                            color: #82899a;
                          "
                          >Términos y Condiciones</a
                        >
                        <span class="o_hide-xs">&nbsp; • &nbsp;</span
                        ><br
                          class="o_hide-lg"
                          style="
                            display: none;
                            font-size: 0;
                            max-height: 0;
                            width: 0;
                            line-height: 0;
                            overflow: hidden;
                            mso-hide: all;
                            visibility: hidden;
                          "
                        />
                        <a
                          class="o_text-light o_underline"
                          href="https://www.micole.com.pe"
                          target="_blank"
                          style="
                            text-decoration: underline;
                            outline: none;
                            color: #82899a;
                          "
                          >Protección de Datos</a
                        >
                        <span class="o_hide-xs">&nbsp; • &nbsp;</span
                        ><br
                          class="o_hide-lg"
                          style="
                            display: none;
                            font-size: 0;
                            max-height: 0;
                            width: 0;
                            line-height: 0;
                            overflow: hidden;
                            mso-hide: all;
                            visibility: hidden;
                          "
                        />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
              <div
                class="o_hide-xs"
                style="font-size: 32px; line-height: 64px; height: 64px"
              >
                &nbsp;
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
`;
};

module.exports = sendPaymentCanceledEmail;
