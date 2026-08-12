export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20 lg:py-24">
        <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-a:text-blue-600">
        

    

          <h2>1. Who This Policy Covers, and Our Role</h2>
          <p>
            This Privacy Policy explains how TechZarInfo Software Solutions PVT LTD (&ldquo;TZI-CRM,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, stores, and shares information through the TZI-CRM
            customer relationship management platform (the &ldquo;Service&rdquo;), including its web application,
            APIs, and any connected mobile clients.
          </p>
          <p>
            TZI-CRM is a multi-tenant B2B SaaS product. Each customer organization that signs up
            (&ldquo;Tenant,&rdquo; &ldquo;Customer,&rdquo; &ldquo;you,&rdquo; if you are a Tenant Admin) creates an
            account and invites its own employees (&ldquo;Users&rdquo;) to use the Service. Because of this
            structure, we act in two different roles:
          </p>
          <ul>
            <li>
              <strong>Data controller</strong> — for account-level information about Tenants and Users: names, work
              emails, login credentials, device/session records, billing contacts, and support communications. We
              decide why and how this data is processed to operate and secure the Service.
            </li>
            <li>
              <strong>Data processor (service provider)</strong> — for the business data a Tenant&rsquo;s Users
              enter about the Tenant&rsquo;s own customers and contacts: leads, deals, invoices, proposals,
              messages, and similar records (&ldquo;Customer Data&rdquo;). Here, the Tenant is the controller and
              determines what data is collected and why.
            </li>
          </ul>
          <p>
            Tenant Admins are responsible for having a lawful basis to collect and process their end-customers&rsquo;
            personal data within the CRM, including obtaining any consents required under the DPDP Act or other
            applicable law.
          </p>
          <p>
            If you are an end-customer whose details were entered into TZI-CRM by one of our Tenants (for example, a
            lead or contact), your relationship is with that Tenant, not with us. Please direct data requests to
            them; we will assist our Tenant in fulfilling such requests as their processor.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Account and Tenant Data</h3>
          <p>
            When a Tenant signs up and invites Users, we collect names, work email addresses, phone numbers,
            role/designation, password hashes, and organization details (company name, industry, team size).
          </p>
          <h3>2.2 Customer Data</h3>
          <p>
            Leads, deals/pipeline records, contacts, tasks, targets, calendar events, proposals, and invoices that
            Users create within the Service. This is Customer Data as defined in our Terms &amp; Conditions and
            belongs to the Tenant, not to us.
          </p>
          <h3>2.3 Communications Data</h3>
          <p>
            Messages sent and received through the Service&rsquo;s messaging features, including WhatsApp,
            Instagram, Facebook, and connected Gmail accounts (see Sections 3 and 4 for specifics), and internal
            notes/comments Users attach to records.
          </p>
          <h3>2.4 Usage and Log Data</h3>
          <p>
            IP addresses, browser/device type, pages and features accessed, timestamps, and error/diagnostic logs,
            collected automatically to operate, secure, and improve the Service.
          </p>

          <h2>3. Meta Platform Data (WhatsApp, Instagram, Facebook)</h2>
          <p>
            If a Tenant connects a WhatsApp Business, Instagram, or Facebook Page account, the Service uses
            Meta&rsquo;s Graph API and WhatsApp Cloud API to access and store:
          </p>
          <ul>
            <li>Messages, comments, and media (images, documents, etc.) exchanged through the connected channel;</li>
            <li>Sender contact information (name, phone number, or social handle) attached to those messages;</li>
            <li>Page/business access tokens necessary to keep the connection authenticated; and</li>
            <li>Records automatically created from incoming messages, such as new Leads generated from a chat or comment.</li>
          </ul>
          <p>
            This data is used solely to provide messaging and CRM functionality within the connecting
            Tenant&rsquo;s account — for example, so a sales rep can see and reply to a WhatsApp conversation from
            inside the CRM. It is not sold, and is not shared with third parties beyond what is necessary to operate
            the integration (i.e., with Meta itself, as the platform the message passed through) and standard
            service sub-processors described in Section 9.
          </p>
          <p>
            You may request deletion of Meta Platform Data associated with your account as described in Section 12
            (Requesting Deletion of Your Data).
          </p>

          <h2>4. Gmail / Google Account Data</h2>
          <p>
            If a User connects a Gmail account, the Service requests the following Google API scopes to power the
            CRM&rsquo;s Email Chat feature: reading messages, composing and sending messages, and modifying message
            state (e.g., marking as read, labeling) on the connected mailbox. Access and refresh tokens are stored
            to keep the connection active.
          </p>
          <p>
            We access, use, store, and share information received from Google APIs in accordance with the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements:
          </p>
          <ul>
            <li>
              Gmail data is used only to display, send, and organize your email within the Service&rsquo;s Email
              Chat feature — never for advertising or ad-related purposes;
            </li>
            <li>
              Gmail data is not transferred to third parties except as necessary to provide or improve user-facing
              features of the Service, to comply with law, or as part of a merger/acquisition (with continued
              protection of the data);
            </li>
            <li>
              No human at TZI-CRM reads Gmail content except (a) with your affirmative consent for a specific
              support request, (b) for security purposes such as investigating abuse, or (c) to comply with
              applicable law.
            </li>
          </ul>
          <p>
            You can disconnect your Gmail account at any time from your account settings, which revokes the stored
            token; Google account permissions can also be revoked directly at{" "}
            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
              myaccount.google.com/permissions
            </a>
            .
          </p>

          <h2>5. Location Data</h2>
          <p>
            If a Tenant enables the Live Team Locations feature (available on eligible plans), the Service collects
            the GPS coordinates of a User&rsquo;s device approximately every 30 seconds while that User is logged in
            and the feature is active. This data is used solely to let the Tenant&rsquo;s Admin(s) view the
            real-time location of field/sales staff within that Tenant&rsquo;s account, and is displayed only to
            Admins within the same Tenant — it is never visible to other Tenants or shared outside your
            organization.
          </p>
          <p>
            Location data is retained on a rolling basis and purged automatically after 90 days, except where a
            longer period is required for legal or dispute purposes.
          </p>
          <p>
            If you are a Tenant Admin enabling this feature, you are responsible for notifying your employees that
            location tracking will occur and for obtaining any consent required under applicable labor and privacy
            law before turning it on. TZI-CRM will prompt Users for their device&rsquo;s native location permission,
            but does not independently verify that an employer has met its own notice/consent obligations.
          </p>

          <h2>6. Device and Session Data</h2>
          <p>
            To keep accounts secure, we record information about each login session: device type (web or mobile), a
            device identifier generated on that device, a human-readable device label, IP address, and session
            status. New devices go through an approval flow — an existing Admin must approve a &ldquo;Device Login
            Request&rdquo; before a new device can access the account — and we log who approved or rejected each
            request and when.
          </p>

          <h2>7. How We Use Information</h2>
          <ul>
            <li>To provide, operate, and maintain the Service (e.g., rendering your pipeline, sending messages, syncing email);</li>
            <li>To authenticate Users, secure accounts, and detect/prevent fraud or unauthorized access;</li>
            <li>To provide customer support and respond to inquiries;</li>
            <li>To send service-related communications (billing, trial/plan status, security alerts);</li>
            <li>To monitor, diagnose, and improve platform performance and reliability;</li>
            <li>To comply with legal obligations and enforce our Terms &amp; Conditions.</li>
          </ul>
          <p>
            We do not use Customer Data, Meta Platform Data, or Gmail data to train third-party AI/ML models, nor do
            we sell personal data.
          </p>

          <h2>8. Legal Basis and India&rsquo;s DPDP Act, 2023</h2>
          <p>
            TZI-CRM is governed by the laws of India. Where the Service processes personal data of individuals
            located in India (&ldquo;Data Principals&rdquo;), we process that data consistent with the Digital
            Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), including by:
          </p>
          <ul>
            <li>Processing account-level data (Section 2) on the basis of the contract necessary to provide the Service to our Tenants, and legitimate business purposes such as security and support;</li>
            <li>Relying on Tenants, as controllers of the Customer Data they enter, to establish their own lawful basis (typically consent or legitimate use) for processing their end-customers&rsquo; personal data;</li>
            <li>Providing Data Principals the rights described in Section 13 below and a channel to raise grievances (Section 17).</li>
          </ul>

          <h2>9. How We Share Information</h2>
          <p>We do not sell personal data. We share information only with the following categories of recipients:</p>
          <div className="overflow-x-auto not-prose my-4">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Recipient</th>
                  <th className="py-2 font-semibold text-gray-900">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Meta Platforms, Inc.</td>
                  <td className="py-2 align-top">Delivers WhatsApp/Instagram/Facebook messages via their Graph API and WhatsApp Cloud API (Section 3)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Google LLC</td>
                  <td className="py-2 align-top">Gmail API access for the Email Chat feature (Section 4)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Transactional email provider (SMTP)</td>
                  <td className="py-2 align-top">Delivers account, billing, and security notification emails</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Cloud hosting / database provider</td>
                  <td className="py-2 align-top">Hosts application infrastructure and per-tenant databases</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Professional advisors, auditors, or successors</td>
                  <td className="py-2 align-top">Only as necessary for legal compliance, or in connection with a merger, acquisition, or asset sale (with continued protection of the data)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Law enforcement / regulators</td>
                  <td className="py-2 align-top">Only where required by applicable law or valid legal process</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>10. Data Retention</h2>
          <div className="overflow-x-auto not-prose my-4">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Data type</th>
                  <th className="py-2 font-semibold text-gray-900">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Customer Data (leads, deals, contacts, invoices, etc.)</td>
                  <td className="py-2 align-top">For the life of the Tenant&rsquo;s subscription; exportable for 60 days after cancellation, then deleted within 90 days of cancellation unless a longer period is required by law</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Meta Platform Data (messages, comments, media)</td>
                  <td className="py-2 align-top">Same as Customer Data above, or until you request earlier deletion (Section 12)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Gmail data (via Email Chat)</td>
                  <td className="py-2 align-top">Retained only as long as the Gmail connection remains active; deleted upon disconnection</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Location data</td>
                  <td className="py-2 align-top">Rolling 90-day window, then purged automatically</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Device/session and security logs</td>
                  <td className="py-2 align-top">Up to 12 months after account closure, for security and fraud-investigation purposes</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top whitespace-nowrap">Account data (Tenant/User records)</td>
                  <td className="py-2 align-top">For the life of the account; deleted or anonymized within 90 days of account closure, subject to legal holds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            The periods above are TZI-CRM&rsquo;s recommended defaults; confirm against actual operational practice
            before publishing.
          </p>

          <h2>11. Data Security and Multi-Tenant Isolation</h2>
          <p>
            We use industry-standard technical and organizational measures to protect information, including
            encryption in transit, access controls, and device-approval requirements for login (Section 6). Each
            Tenant&rsquo;s data is stored in a separate, physically isolated database rather than in shared tables
            filtered by tenant ID — providing strong isolation between customers&rsquo; data at the infrastructure
            level.
          </p>
          <p>No method of transmission or storage is 100% secure; we cannot guarantee absolute security.</p>

          <h2>12. Requesting Deletion of Your Data</h2>
          <p>
            You may request deletion of your personal data, including data collected via WhatsApp, Instagram,
            Facebook, or Gmail integrations, by:
          </p>
          <ul>
            <li>
              Emailing <a href="mailto:support@techzarinfo.com">support@techzarinfo.com</a> with the subject line
              &ldquo;Data Deletion Request&rdquo;; or
            </li>
            <li>If you are a Tenant Admin, using the relevant deletion controls in your account settings (where available).</li>
          </ul>
          <p>
            We will verify the request and complete deletion within a commercially reasonable time, except where we
            are required to retain certain data for legal, tax, or security purposes. If you contacted us through a
            connected Meta account, we will also honor deletion requests submitted via Meta&rsquo;s own
            data-deletion request flow, where applicable.
          </p>

          <h2>13. Your Rights as a Data Principal</h2>
          <p>Subject to applicable law (including the DPDP Act), you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you;</li>
            <li>Correct inaccurate or incomplete data;</li>
            <li>Request erasure of your data, subject to Section 10;</li>
            <li>Withdraw consent, where processing is based on consent;</li>
            <li>Raise a grievance with our Grievance Officer (Section 17) and, if unresolved, with the Data Protection Board of India.</li>
          </ul>
          <p>
            To exercise these rights, contact us using the details in Section 17. If you are an end-customer of one
            of our Tenants, we recommend contacting that Tenant directly, as they control the data; we will support
            them in responding to your request.
          </p>

          <h2>14. Payment Information</h2>
          <p>
            TZI-CRM does not currently process online card payments. Subscriptions are billed manually via invoice,
            and we do not collect or store credit card, debit card, or other card numbers. If online payment
            processing is introduced in the future, this section will be updated to name the payment processor used
            and confirm that full card numbers are tokenized by that processor and never stored by TZI-CRM directly.
          </p>

          <h2>15. Children&rsquo;s Privacy</h2>
          <p>
            The Service is intended for business use by adults acting on behalf of their employer. It is not
            directed to, and we do not knowingly collect personal data from, individuals under the age of 18.
          </p>

          <h2>16. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be notified via email to
            Tenant Admins or an in-app notice at least 15 days before taking effect. The &ldquo;Last updated&rdquo;
            date at the top of this page reflects the most recent revision.
          </p>

          <h2>17. Contact Us and Grievance Officer</h2>
          <p>
            <strong>TechZarInfo Software Solutions PVT LTD</strong>
            <br />
            No.3D, M.S Tower, 4th Floor, Convent Rd, Cantonment, Tiruchirappalli – 620001, Tamil Nadu, India
            <br />

            Sales inquiries: <a href="mailto:sales@techzarinfo.com">sales@techzarinfo.com</a>
          </p>
        
        </div>
      </main>
    </div>
  );
}
