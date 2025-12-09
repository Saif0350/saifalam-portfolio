export const generateEnquiryEmailTemplate = ({
  name,
  email,
  subject = "New Enquiry",
  message,
  brandColor = "#111111",
  bgColor = "#f5f5f5",
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  brandColor?: string;
  bgColor?: string;
}) => {
  const esc = (str: string) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const infoRow = (label: string, value?: string) => {
    if (!value) return "";
    return `
      <tr>
        <td style="padding:8px 0;color:#6b7280;font-size:13px;width:120px;vertical-align:top;">${esc(
          label
        )}</td>
        <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;vertical-align:top;">${esc(
          value
        )}</td>
      </tr>
    `;
  };

  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${esc(subject)}</title>
    </head>
    <body style="margin:0;padding:0;background:${bgColor};font-family:Arial,Helvetica,sans-serif;color:#111827;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="padding:24px;">
        <tr>
          <td align="center">

            <!-- Card -->
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background:#fff;border-radius:14px;box-shadow:0 6px 25px rgba(0,0,0,0.06);overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:${brandColor};padding:22px;text-align:center;color:#fff;">
                  <h2 style="margin:0;font-size:20px;font-weight:600;">${esc(
                    subject
                  )}</h2>
                </td>
              </tr>

              <!-- Details -->
              <tr>
                <td style="padding:22px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${infoRow("Name", name)}
                    ${infoRow("Email", email)}
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding:0 22px 22px 22px;">
                  <div style="margin-top:6px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;padding:14px;">
                    <div style="color:#6b7280;font-size:13px;margin-bottom:6px;">Message</div>
                    <div style="color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(
                      message
                    )}</div>
                  </div>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding:16px 22px 22px 22px;text-align:center;">
                  <a href="mailto:${encodeURIComponent(email)}"
                     style="display:inline-block;background:${brandColor};color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:bold;">
                    Reply to Enquiry
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:18px;border-top:1px solid #e5e7eb;text-align:center;">
                  <p style="margin:0;color:#9ca3af;font-size:11px;">
                    This message was sent from your website contact form.
                  </p>
                </td>
              </tr>

            </table>
            <!-- /Card -->

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
