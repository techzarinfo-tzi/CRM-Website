# Terms & Conditions Review — TZI CRM

**Reviewed:** `app/terms-and-conditions/page.tsx`
**Compared against actual product:** `SAAS_CRM_BACKEND`, `SAAS_CRM_FRONTEND`
**Verdict: Not suitable as-is.** The document is a copy-pasted template for a **hardware/IoT monitoring SaaS** (physical "master controllers," "Gateways," "activation kits"), not a CRM software agreement.

⚠️ **This is not legal advice.** Have a lawyer (ideally one familiar with India's DPDP Act 2023) review the final text before publishing, especially the payment, liability, and data-ownership sections.

---

## 1. Critical — describing the wrong product

| Line(s) | Problem |
|---|---|
| 10-17 | "master controllers, and other equipment, parts and supplies" — IoT hardware language, not CRM software |
| 24-30 | "Products to be purchased may include master controllers... Gateway... Devices" |
| 113-132 | Entire "Purchase of Products" section is about physical product shipping, installation, non-cancellable hardware purchase |
| 279-309 | "Payments, etc." section describes a **security interest / lien on Products**, repossession rights ("enter into the premises... take possession and remove the same") — equipment-financing language, inapplicable to a SaaS subscription |
| 330-336 | "RESTRICTED RIGHTS LEGEND"... DFARS 252.227-7013 / 48 CFR 52.227-19 — **U.S. federal government procurement clauses**, irrelevant to an Indian B2B SaaS company |
| 457-460 | "federal and state courts" — India does not have "federal courts" in the U.S. sense; also `[Tamil Nadu]` is a literal unfilled placeholder |

**Required action:** Rewrite from scratch as a **SaaS subscription agreement for CRM software** — don't adapt the existing text. Suggested structure in §4.

---

## 2. Critical — omits CRM data ownership

No clause states that **the tenant (Customer) owns their own leads, deals, contacts, invoices, and other business data** entered into the CRM. The current "Ownership; Subscriber and User Submissions" section only asserts TZI-CRM's ownership of the software/service and is silent on customer-entered data. For a CRM this is the single most important ownership clause a customer will look for — its absence is a real commercial risk (customers may assume ambiguity means TZI-CRM can claim their data).

**Required addition:**
> "As between the parties, Customer retains all right, title, and interest in and to the data Customer or its Users submit to the Service (leads, deals, contacts, documents, invoices, proposals, messages, and other business records) ('Customer Data'). TZI-CRM is granted only a limited license to host, process, and display Customer Data solely to provide the Service. Upon termination, Customer may export Customer Data for [30/60/90] days before deletion, per the Data Retention terms in the Privacy Policy."

---

## 3. Critical — payment/billing terms don't match how billing actually works

Backend evidence (`SAAS_CRM_BACKEND/models/master/SubscriptionPlan.model.js`, `Tenant.js`, `middlewares/checkTrialExpiry.js`, `cron/freeTrialCron.js`, `controllers/invoice.controller.js`):
- Plans are subscription-based (monthly/half-yearly/yearly/one-time) with a **free trial** (`trial_days`) and lifecycle states `trial → active → grace → expired → cancelled`.
- **There is no payment gateway integration** (no Stripe/Razorpay/PayPal in dependencies) — billing/invoicing is handled manually by TZI-CRM (an Admin marks invoices `paid`/`partially_paid`).

The current Terms describe none of this — instead they describe hardware financing (security interest, repossession) and vague "Order Form" fee schedules. Replace with real subscription terms:

**Required replacement content — "Subscription & Billing":**
- Free trial duration and what happens at expiry (read-only/grace period, per `checkTrialExpiry.js`)
- Billing cycle options and how Customer is invoiced (manual invoicing today — say so, or state intent to add automated billing later)
- Late payment / non-payment consequences (suspension of tenant, not repossession of anything)
- Upgrade/downgrade/proration rules
- Applicable taxes: replace the generic "federal, provincial, state and local taxes" language (US-style) with **GST (India)** and applicable local taxes
- Cancellation and what happens to Customer Data after cancellation (ties into Data Retention in the Privacy Policy)

---

## 4. Suggested new Terms & Conditions outline

1. Acceptance of Terms
2. Description of Service (CRM: leads, deals/pipeline, invoicing, proposals, task/target management, email & WhatsApp/Instagram/Facebook messaging, team calendar, live team location tracking, reporting)
3. Accounts, Tenants & Users (tenant admin responsibilities, seat limits, role-based permissions)
4. Subscription, Trial, Billing & Taxes (see §3)
5. Customer Data Ownership & License (see §2)
6. Acceptable Use — CRM-specific prohibitions:
   - No exceeding licensed user/seat count
   - No sharing login credentials across Users
   - No using the messaging features (mass email, WhatsApp, Instagram, Facebook) to send unsolicited bulk/spam messages in violation of WhatsApp Business Policy, India's IT Act, or applicable anti-spam law
   - No scraping or bulk-exporting other tenants' data
7. Third-Party Integrations (Meta Graph API for WhatsApp/Instagram/Facebook, Google OAuth for Gmail) — Customer authorizes TZI-CRM to connect to these on Customer's behalf; TZI-CRM is not responsible for third-party platform outages/policy changes
8. Confidentiality
9. Data Protection (cross-reference the Privacy Policy; reference India's DPDP Act 2023)
10. Service Availability / Support (can keep the existing uptime language, but drop the DFARS/US-government clauses)
11. Termination & Suspension; effect on data (retention window, export rights)
12. Warranties & Disclaimers
13. Limitation of Liability
14. Governing Law & Jurisdiction — **fix the placeholder**: "Tamil Nadu, India," courts of Tiruchirappalli (matches the registered address in `CRM-Website/src/components/Footer.tsx`); remove "federal courts" language
15. Changes to Terms
16. Contact Information

**Delete entirely:** hardware purchase/shipping clauses, security-interest/repossession clause, DFARS/48 CFR government-contracting clause, DMCA section (keep only if TZI-CRM actually wants to process copyright takedown claims — otherwise it's boilerplate irrelevant to a private B2B CRM), duplicate "Reporting Infringement" heading (appears twice, lines 395 & 428, with nothing under the second one).

---

## 5. Consistency / factual errors to fix regardless of the rewrite

| Issue | Location | Fix |
|---|---|---|
| Unfilled placeholder | Lines 457-459: `[Tamil Nadu]` | Fill in properly: "Tamil Nadu, India," courts of Tiruchirappalli |
| No registered legal entity name | "TZI-CRM" used throughout; no Pvt Ltd / LLP entity name found anywhere in the codebase | Confirm the actual registered entity name and use it in "Governing Law" and a new "Contact/Legal Entity" section |
| No physical address in the document | Only in `Footer.tsx`: "No.3D, M.S Tower, 4th Floor, Convent Rd, Cantonment, Tiruchirappalli - 620001" | Add company legal address (typically required for enforceability) |
| Grammar/typos | "Usere" (line 36), "has has" (line 182), "per permitted" (line 389), "each Use consent" (line 258) | Resolved naturally by the rewrite in §4 |
| Duplicate heading | "Reporting Infringement" appears twice (lines 395, 428) | Remove the duplicate |

---

## 6. Priority order

1. **Do not treat the current document as binding for CRM customers** — the hardware/repossession language could actually be read literally against TZI-CRM's interest (or confuse a customer) if ever disputed. Rewrite before relying on it commercially.
2. Fix the customer-data-ownership gap (§2) — this is what enterprise customers will actually read closely.
3. Fix the billing section to match manual/subscription reality (§3).
4. Fix the governing-law placeholder and drop the U.S.-specific clauses (§1, §5).
5. Everything else in §4/§5 — important for completeness but lower urgency than 1-4.
